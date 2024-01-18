import React from 'react';
import LatexResultWindow from "./LatexResultWindow.jsx";
import { TierButtonList } from "./TierButtonList.jsx";
import { TranslatableText } from "~./jsx/App/locale/TranslatableText.jsx";
import { 
  latexSelectTiersPromptText,
  latexSentenceTierName, 
  latexMorphemesTierName, 
  latexMorphemeTranslationsTierName, 
  latexSentenceTranslationsTierName,
  tierSelectionConfirmButtonText,
  latexCloseButtonText
} from "~./jsx/App/locale/LocaleConstants.jsx";

// Each ID is a stable identifier that doesn't depend on the current language.
// The names are textTranslations to show to the user. 
export const latexSectionIdsToNames = {
  sentence: latexSentenceTierName, 
  morphemes: latexMorphemesTierName, 
  morphemeTranslations: latexMorphemeTranslationsTierName, 
  sentenceTranslations: latexSentenceTranslationsTierName,
};

/*
  This class models a window where the user tells LingView which tier should 
  be matched to which LaTeX section during the conversion. 
  The user does this by selecting the tier out of a list of radio buttons.
  When the Confirm button is clicked, the text is processed to be formatted,
  and the result is shown in a LatexResultWindow that gets rendered after 
  the confirm button is clicked. 
*/ 
export default class TierSelectionWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latexButtonClicked : false,
      tierMap : {}
    }
    // Create and ID for this sentence's LaTeX window. 
    this.latexResultWindowId = `latex-result-window-${this.props.sentenceId}`; 
    this.handleConfirmButtonClick = this.handleConfirmButtonClick.bind(this);
    this.closeFormatter = this.closeFormatter.bind(this);
  }

  /* Retrieves all the tier names for this story. */
  getTierNames() {
    let tierNames = [];
    for (var tierEntry of this.props.sentence["dependents"]) {
      tierNames.push(tierEntry["tier"]);
    }
    return tierNames;
  }

  /* Create the header containing all the tier names in one row. */
  createTiersHeader() {
    let tiers = this.getTierNames().map((tierName) => (
      <div className="tierHeaderName">{tierName}</div>
    ));
    // Add an empty element in the beginning so that each header is aligned with
    // the column of radio buttons appearing underneath it. 
    // The left-most column in the entire selection grid should be the tier name column.
    return <div className="tiersHeaderSection">
            <div className="fillerSlot"></div>
            <div className="tiersHeader">{tiers}</div>
           </div>;
  }

  /* 
    Displays the tier selection window where the user tells LingView 
    which tier corresponds to which section in the LaTeX example through
    selecting from a radio button list form.
  */
  getTierSelectionFormChildren() {
    const children = [];
    // For each LaTeX section that needs to be formatted, create a list of radio buttons
    // so that the user can select which tier is matched to this section.
    for (let [latexSectionId, latexSectionName] of Object.entries(latexSectionIdsToNames)) { 
      children.push(<TierButtonList sentenceId={this.props.sentenceId} tierNames={this.getTierNames()} latexSectionId={latexSectionId} latexSectionName={latexSectionName} />);
    }
    
    return children;
  }

  /* 
   When the confirm button is clicked, 
   saves a map between latex section names and their selected tier names in state. 
  */
  handleConfirmButtonClick(e) {
    e.preventDefault();

    let tierMap = {};
    // Go through the selected radio buttons for this sentence and retrieve their value.
    for (let [latexSectionId, latexSectionName] of Object.entries(latexSectionIdsToNames)) {
      const buttons = document.querySelectorAll(
            `input[name="button-${this.props.sentenceId}-for-${latexSectionId}"]`);
      let selectedValue;
      for (const button of buttons) {
          if (button.checked) {
              selectedValue = button.value;
              break;
          }
      }
      tierMap[latexSectionId] = selectedValue;
    }

    // Add the tierMap to the state so that this object can be passed
    // on to the result window.
    this.setState({
      latexButtonClicked : true,
      tierMap : tierMap
    }); 

  }

  /* Reload the page when the close button is clicked. */
  closeFormatter(e) {
    e.preventDefault();
    window.location.reload();
  }

  render() {
    return (
      <div className="tierSelectionSection">
          <div className="tierSelectionWrapper">
            <form className="tierSelectionForm" id={this.props.sentenceId}>
              <p><TranslatableText dictionary={latexSelectTiersPromptText} /></p>
              <div className="tierSelectionGrid">
                {this.createTiersHeader()}
                {this.getTierSelectionFormChildren()}
              </div>
            </form>
            <button id="latexFormatterConfirmButton" 
                    onClick={this.handleConfirmButtonClick}>
              <TranslatableText dictionary={tierSelectionConfirmButtonText} />
            </button>
          </div>
          {this.state.latexButtonClicked ? 
            <LatexResultWindow 
              id={this.latexResultWindowId}
              sentenceId={this.props.sentenceId} 
              tierMap={this.state.tierMap} 
              sentence={this.props.sentence}
              metadata={this.props.metadata}/> : null}
          <button id="latexFormatterCloseButton"
                  onClick={this.closeFormatter}>
            <TranslatableText dictionary={latexCloseButtonText} />
          </button>
      </div>
    );
  }; 
  
}
