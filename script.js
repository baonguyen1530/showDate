let btnShow = document.querySelector('button');
let date_output = document.querySelector('h1');
let time_output = document.querySelector('h2');

btnShow.addEventListener('click', () => {
    let today = new Date();

    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = today.getDate();

    let current_date = `${month}/${date}/${year}`;
    date_output.innerText = current_date;

    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    let current_time = `${hours}:${minutes}:${seconds}`;
    time_output.innerText = current_time;
})