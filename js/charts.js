document.addEventListener('DOMContentLoaded', () => {
    const barCtx = document.getElementById('barChart').getContext('2d');
    const lineCtx = document.getElementById('lineChart').getContext('2d');

    new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: ['2015', '2017', '2019', '2021', '2023'],
            datasets: [{
                label: 'Capacidad instalada (GW)',
                data: [435, 539, 651, 707, 744],
                backgroundColor: '#1e3a5f'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            animation: {
                duration: 2000
            }
        }
    });

    new Chart(lineCtx, {
        type: 'line',
        data: {
            labels: ['2010', '2014', '2018', '2022'],
            datasets: [{
                label: 'Porcentaje de Energía Global',
                data: [1.8, 3.5, 5.9, 7.0],
                borderColor: '#ff8c00',
                backgroundColor: '#ffddaa',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 2000
            }
        }
    });
});

