const participantInput = document.getElementById('participantInput');
const addParticipantButton = document.getElementById('addParticipantButton');
const participantList = document.getElementById('participantList');
const selectWinnerButton = document.getElementById('selectWinnerButton');
const winnerDisplay = document.getElementById('winnerDisplay');
const caseElement = document.getElementById('case');
const rollAgainButton = document.getElementById('rollAgainButton');

// Create a new button for selecting another winner
const chooseAnotherWinnerButton = document.createElement('button');
chooseAnotherWinnerButton.textContent = 'Alege alt câștigător';
chooseAnotherWinnerButton.style.display = 'none'; // Hide it initially
document.querySelector('.container').appendChild(chooseAnotherWinnerButton);

let participants = [];

addParticipantButton.addEventListener('click', () => {
    const participantName = participantInput.value.trim();
    if (participantName) {
        participants.push(participantName);
        updateParticipantList();
        participantInput.value = ''; // Clear input field
    }
});

function selectWinner() {
    if (participants.length < 2) {
        winnerDisplay.textContent = 'Trebuie să fie cel puțin 2 participanți.';
        return;
    }

    const winner = participants[Math.floor(Math.random() * participants.length)];
    winnerDisplay.textContent = winner;

    // Add animation classes
    caseElement.classList.add('open');

    // Hide the select winner button and show the new button after the animation
    selectWinnerButton.style.display = 'none';

    // Show the new button after animation duration
    setTimeout(() => {
        chooseAnotherWinnerButton.style.display = 'block';
    }, 3000); // Match the duration of the open animation

    // Reset the case after the animation
    setTimeout(() => {
        caseElement.classList.remove('open');
    }, 3000); // Duration of the open animation
}

selectWinnerButton.addEventListener('click', selectWinner);

// New button functionality for choosing another winner
chooseAnotherWinnerButton.addEventListener('click', selectWinner);

function updateParticipantList() {
    participantList.innerHTML = '';
    participants.forEach(participant => {
        const li = document.createElement('li');
        li.textContent = participant;
        participantList.appendChild(li);
    });
}
