import { errorMessages } from "../src/helper_object.js";
import { JamBuddy }from "../src/jam_buddy.js";

describe("JamBuddy class", () => {
  let buddy;
  beforeEach(() => {
    buddy = new JamBuddy();
  });

  describe("setCurrentNotes function", () => {
    it("should set current notes correctly", () => {
      buddy.setCurrentNotes(["A", "B"]);
      expect(buddy.getCurrentNotes()).toEqual(["A", "B"]);
    });

    it("should throw an error when trying to set two of the same notes", () => {
      expect(() => buddy.setCurrentNotes(["A", "A"])).toThrowError(
        errorMessages.duplicate
      );
    });

    it("should throw an error when trying to set invalid notes", () => {
      expect(() => buddy.setCurrentNotes(["B#", "C"])).toThrowError(
        errorMessages.incorrectNote
      );
    });

    it("should throw an error when incorrect number of notes entered", () => {
      expect(() => buddy.setCurrentNotes(["A"])).toThrowError(
        errorMessages.incorrectLength
      );
    });
  });

  describe("getCurrentNotes function", () => {
    it("should return the current notes", () => {
      buddy.setCurrentNotes(["C", "D#"]);
      expect(buddy.getCurrentNotes()).toEqual(["C", "D#"]);
    });
  });

  describe("randomizeCurrentNotes function", () => {
    it("should randomly set current notes with values", () => {
      const firstNotes = [];
      const secondNotes = [];

      buddy.randomizeCurrentNotes();
      firstNotes.push(buddy.getCurrentNotes());
      buddy.randomizeCurrentNotes();
      secondNotes.push(buddy.getCurrentNotes());

      expect(firstNotes).not.toEqual(secondNotes);
    });
  });

  describe("checkAnswer function", () => {
    it("should return true for correct answer", () => {
      buddy.setCurrentNotes(["A", "C"]);
      expect(buddy.checkAnswer(3)).toBe(true);
      expect(buddy.checkAnswer(9)).toBe(true);
    });

    it("should return true for correct answer of two flat notes", () => {
      buddy.setCurrentNotes(["Bb", "Gb"]);
      expect(buddy.checkAnswer(4)).toBe(true);
      expect(buddy.checkAnswer(8)).toBe(true);
    });

    it("should throw an error for numbers not within range note number", () => {
      buddy.setCurrentNotes(["A", "C"]);
      expect(() => buddy.checkAnswer(18)).toThrowError(
        errorMessages.invalidNoteNumber
      );
    });

    it("should return true that enharmonic equivalents have 0 distance between them.", () => {
      buddy.setCurrentNotes(["C#", "Db"]);
      expect(buddy.checkAnswer(0)).toBe(true);
      expect(buddy.checkAnswer(12)).toBe(true);
    });
  });
});


