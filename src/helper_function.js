import { errorMessages } from "./helper_object.js";

function isNoteValid(noteList, note) {
  return noteList.includes(note);
}

function checkRange(noteNumber) {
  if (typeof noteNumber !== "number" || noteNumber < 0 || noteNumber > 12) {
    throw new Error(errorMessages.invalidNoteNumber);
  }
}

function calculateDistance(noteList, currentNotes) {
  let note1 = currentNotes[0];
  let note2 = currentNotes[1];

  if (note1.endsWith("b")) {
    note1 = getEnharmonicEquivalent(note1);
  }
  if (note2.endsWith("b")) {
    note2 = getEnharmonicEquivalent(note2);
  }

  let distanceForward = Math.abs(
    noteList.indexOf(note2) - noteList.indexOf(note1)
  );
  let distanceBackwards = Math.abs(12 - distanceForward);

  return [distanceForward, distanceBackwards];
}

function getEnharmonicEquivalent(note) {
  switch (note) {
    case "Ab":
      return "G#";
    case "Bb":
      return "A#";
    case "Db":
      return "C#";
    case "Eb":
      return "D#";
    case "Gb":
      return "F#";
    default:
      return false;
  }
}

function getRandomNote(noteList) {
  if (noteList) {
    return noteList[Math.floor(Math.random() * noteList.length)];
  }
}

function generateRandomNotes(noteList) {
  let note1 = getRandomNote(noteList);
  let note2 = getRandomNote(noteList);
  while (note1 === note2) {
    note2 = getRandomNote(noteList);
  }

  return [note1, note2];
}

function validateNotesSet(notes, noteList) {
  if (notes.length !== 2) {
    throw new Error(errorMessages.incorrectLength);
  }

  if (
    !isNoteValid(noteList, notes[0]) ||
    !isNoteValid(noteList, notes[1])
  ) {
    throw new Error(errorMessages.incorrectNote);
  }

  if (notes[0] === notes[1]) {
    throw new Error(errorMessages.duplicate);
  }
}

export {
  isNoteValid,
  calculateDistance,
  generateRandomNotes,
  validateNotesSet,
  checkRange,
};
