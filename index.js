import { JamBuddy } from './src/jam_buddy.js'
const jamBuddy = new JamBuddy();
//get refference to all the html elements

const randomizeButton = document.querySelector(".randomizeButton");
const answerInputElement = document.getElementById("answer");
const messageElement = document.getElementById("message");
const noteOneElement = document.querySelector(".noteOne");
const noteTwoElement = document.querySelector(".noteTwo");

function displayRandomNotes() {
    //clear out any old messages
    jamBuddy.randomizeCurrentNotes();
    
    const notes = jamBuddy.getCurrentNotes();
    noteOneElement.textContent = notes[0];
    noteTwoElement.textContent = notes[1];
    console.log(noteOneElement, notes);

}

randomizeButton.addEventListener('click', displayRandomNotes);