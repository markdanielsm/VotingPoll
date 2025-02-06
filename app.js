let hasVoted = localStorage.getItem('hasVoted') || false;

function vote(candidateId) {
    if (hasVoted) {
        document.getElementById('message').style.display = 'block';
        return;
    }

    let button = document.getElementById(candidateId);
    let currentVotes = parseInt(button.innerText.match(/\d+/)[0]);
    button.innerText = `Vote (${currentVotes + 1} votes)`;
    hasVoted = true;
    localStorage.setItem('hasVoted', true);
}

window.onload = function() {
    if (hasVoted) {
        document.getElementById('message').style.display = 'block';
    }
}
