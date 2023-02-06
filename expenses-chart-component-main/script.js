let max = 0;
let height;
const chartBars = [...document.querySelectorAll(".chartBar")];
fetch('data.json')
    .then((response) => response.json())
    .then((json) => {
        for(let i = 0; i < 7; i++){
            if (json[i].amount > max)
                max = json[i].amount;
        }
        console.log(max);
        chartBars.forEach((chartBar, i) => {
            chartBar.setAttribute('data-spent', json[i].amount);
            height = ((json[i].amount / (max + 15)) * 100);
            chartBar.style.height = height + '%';
            chartBar.style.setProperty("--popup-bottom", height + 5 + '%');
        });
    });