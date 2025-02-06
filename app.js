function vote(candidateId) {
    const button = document.getElementById(candidateId);
    const message = document.getElementById('message');
    
    if (localStorage.getItem('voted') === 'true') {
        message.classList.remove('hidden');
    } else {
        let votes = parseInt(button.textContent.match(/\d+/)) + 1;
        button.textContent = `Vote (${votes} votes)`;
        localStorage.setItem('voted', 'true');
    }
}
