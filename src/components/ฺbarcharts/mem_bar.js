<Bar
    data={{
        labels : add_date_label(),
        datasets: [
            {
                label: 'Ladkrabang',
                backgroundColor: 'rgba(43, 96, 222,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1,
                barPercentage: 0.65,
                data  : [10,20,30,40]
            },
            {
                label: 'Bangkapi',
                backgroundColor: 'rgba(222, 42, 96,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1,
                barPercentage: 0.65,
                data  : [],
            },
            {
                label: 'Bangkapi',
                backgroundColor: 'rgba(42, 222, 168, 1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1,
                barPercentage: 0.65,
                data  : [10, 20, 30, 40],
            },
        
        ]
    }}
    options={{
        maintainAspectRatio: true,
        legend:{
            display:false,
        },
        tooltips:{

        },
        scales:{
            xAxes: [{
                display: true,
                ticks: {
                    min: 0
                },
                gridLines: {
                    offsetGridLines: true
                }
            }],
            yAxes: [{
                display: true,
                ticks:{
                    min: 0
                },
                gridLines: {
                    offsetGridLines: true
                }
            }],
        }
    }}
/>