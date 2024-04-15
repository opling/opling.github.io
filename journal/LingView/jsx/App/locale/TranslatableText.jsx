import { useContext } from 'react';
import { DEFAULT_LOCALE } from './LocaleConstants.jsx';
import { LocaleContext } from "./LocaleContext.jsx"

/**
 * Component for rendering JSX in the currently selected language.
 * The currently selected language is set using the `LocaleSelect` component.
 *
 * This component takes a generous approach, opting to display text in ANY
 * language if no JSX was provided for the target or default languages.
 */
export const TranslatableText = ({ dictionary }) => {
  const { locale } = useContext(LocaleContext);

  if (!dictionary) {
    // If dictionary is undefined due to a bug,
    // don't break the entire site, just log an error and move on.
    // Without this, we would throw "Uncaught TypeError: dictionary is undefined"
    // and the entire LingView site would be replaced with a blank white screen.
    console.error(
      `[TranslatableText] Error: dictionary is undefined.`
    );

    // To debug, you can return a string, then look for that string on your LingView site:
    // return "This TranslatableText is undefined.";

    return null;
  }

  // Display text in the currently selected language, if it exists
  if (dictionary[locale]) {
    return dictionary[locale];
  }

  // Display text in the default language, if it exists
  if (dictionary[DEFAULT_LOCALE]) {
    return dictionary[DEFAULT_LOCALE];
  }

  // If only one text was provided, display that
  const providedLanguages = Object.keys(dictionary);
  if (providedLanguages.length === 1) {
    return dictionary[providedLanguages[0]];
  }

  // Fallback: log an error, and render text in random language or null
  console.error(
    `[TranslatableText] Error: unable to determine translation language, incomplete dictionary provided. Rendering '${providedLanguages[0]}'.`
  );
  return dictionary[providedLanguages[0]] || null;
};
