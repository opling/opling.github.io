import { TranslatableText } from "~./jsx/App/locale/TranslatableText.jsx";

const htmlEscape = require("html-es6cape");

/* 
 A list of radio buttons for all the tier names. 
 The tierNames passed in here have not been escaped. They may contain special characters.
*/
export const TierButtonList = ({ sentenceId, tierNames, latexSectionId, latexSectionName }) => {
  return (
    <div className="tierSelectionRow">
      <b><TranslatableText dictionary={latexSectionName} /></b>
      <div className="tierSelectionRowButtonSection">
        {tierNames.map((tierName, i) => {
          return (<TierRadioButton 
                    sentenceId={sentenceId}
                    escapedTierName={htmlEscape(tierName)} 
                    latexSectionId={latexSectionId} 
                    buttonId={`button-${sentenceId}-${htmlEscape(tierName)}-for-${latexSectionId}`} 
                    isChecked={i == 0} 
                  />);
        })}
      </div>
      
    </div>
  );
};

const TierRadioButton = ({ sentenceId, 
                           escapedTierName, 
                           latexSectionId, 
                           buttonId, 
                           isChecked }) => {
  const groupName = `button-${sentenceId}-for-${latexSectionId}`;
  
  return (
    <input 
      type="radio" 
      id={buttonId} 
      value={escapedTierName} 
      name={groupName} 
      defaultChecked={isChecked}
    />
  );
};
