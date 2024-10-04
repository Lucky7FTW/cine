const participantInput = document.getElementById('participantInput');
const addParticipantButton = document.getElementById('addParticipantButton');
const participantList = document.getElementById('participantList');
const selectWinnerButton = document.getElementById('selectWinnerButton');
const winnerDisplay = document.getElementById('winnerDisplay');
const caseElement = document.getElementById('case');

const chooseAnotherWinnerButton = document.createElement('button');
chooseAnotherWinnerButton.textContent = 'Alege alt câștigător';
chooseAnotherWinnerButton.style.display = 'none'; 
document.querySelector('.container').appendChild(chooseAnotherWinnerButton);

let participants = [];
let isAnimating = false; 

addParticipantButton.addEventListener('click', () => {
    const participantName = participantInput.value.trim();
    if (participantName) {
        participants.push(participantName);
        updateParticipantList();
        participantInput.value = ''; 
    }
});

function selectWinner() {
    if (participants.length < 2) {
        winnerDisplay.textContent = 'Trebuie să fie cel puțin 2 participanți.';
        return;
    }

    const winner = participants[Math.floor(Math.random() * participants.length)];
    winnerDisplay.textContent = winner;

    isAnimating = true;
    caseElement.classList.add('open');

    selectWinnerButton.style.display = 'none';

    setTimeout(() => {
        chooseAnotherWinnerButton.style.display = 'block';
        isAnimating = false; 
    }, 3000);

    setTimeout(() => {
        caseElement.classList.remove('open');
    }, 3000); 
}

selectWinnerButton.addEventListener('click', selectWinner);

chooseAnotherWinnerButton.addEventListener('click', () => {
    if (!isAnimating) { 
        selectWinner(); 
    }
});

function updateParticipantList() {
    participantList.innerHTML = '';
    participants.forEach(participant => {
        const li = document.createElement('li');
        li.textContent = participant;
        participantList.appendChild(li);
    });
}
