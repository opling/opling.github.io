/* Used only for FLEx. Speakers for ELAN are handled via eaf_utils.js. */

class speakerRegistry {
  
  constructor() {
    this.speakersList = []; // a list of the speaker names
  }
  
  getSpeakerID(name) {
    const index = this.speakersList.indexOf(name);
    if (index == -1) {
      return null;
    } else {
      return "S" + (index + 1).toString();
    }
  }
  
  getSpeakersJson() {
    let speakersJson = {};
    for (const name of this.speakersList) {
      speakersJson[this.getSpeakerID(name)] = {
        "name": name
      }
    }
    return speakersJson;
  }
  
  getSpeakersList() {
    return this.speakersList;
  }
  
  maybeRegisterSpeaker(name) {
    if (!this.speakersList.includes(name)) {
      this.speakersList.push(name);
    }
  }
}

module.exports = {
  speakerRegistry: speakerRegistry
};