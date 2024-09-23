function updateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    document.getElementById('datetime').innerText = now.toLocaleString('en-US', options);
}

setInterval(updateTime, 1000);
updateTime(); // Call once to set initial time
