import { noteList } from "./helper_object.js";
import { calculateDistance, generateRandomNotes, validateNotesSet, checkRange } from "./helper_function.js";
export class JamBuddy {
  constructor() {
    this.currentNotes = [];
  }
  setCurrentNotes(twoNotesList) {
    validateNotesSet(twoNotesList, noteList);
    this.currentNotes = twoNotesList;
  }
  getCurrentNotes() {
    return this.currentNotes;
  }
  randomizeCurrentNotes() {
    return (this.currentNotes = generateRandomNotes(noteList));
  }
  checkAnswer(noteNumber) {
    checkRange(noteNumber);
    const [distanceForward, distanceBackwards] = calculateDistance(noteList, this.currentNotes);
    return distanceForward === noteNumber || distanceBackwards === noteNumber;
  }
}
