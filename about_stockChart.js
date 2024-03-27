// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Generate random stock data for chart
function generateRandomData() {
    const data = [];
    let value = 1000;

    for (let i = 0; i < 20; i++) {
        value += Math.random() * 200 - 100;
        data.push({ x: i, y: Math.max(value, 0) });
    }

    return data;
}

// Create stock chart
const ctx = document.getElementById('stockChart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            label: 'Stock Price',
            data: generateRandomData(),
            borderColor: '#007bff',
            backgroundColor: 'rgba(0, 123, 255, 0.1)',
            borderWidth: 2,
            pointRadius: 0,
            fill: true
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom',
                ticks: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false
        }
    }
});
