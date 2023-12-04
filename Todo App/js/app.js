const endDate = new Date("30 December 2023 12:00:00 AM").getTime();
const inputs = document.querySelectorAll("input");

function clock() {
    const now = new Date().getTime();
    const diff = endDate - now;

    if (diff < 0) {
        clearInterval(timerInterval);
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    inputs[0].value = days;
    inputs[1].value = hours;
    inputs[2].value = minutes;
    inputs[3].value = seconds;
}

clock(); // Call the function once to display the initial values

const timerInterval = setInterval(clock, 1000);