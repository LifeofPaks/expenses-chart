

generateChart()
async function generateChart(){
    const resp = await fetch('./data.json')
    const data = await resp.json()

    const info = {
        labels : data.map(chart =>chart.day),
        datasets: [{
            data: data.map(chart=> chart.amount),
            backgroundColor:['hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(186, 34%, 60%)','hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)', 'hsl(10, 79%, 65%)' ],
            borderRadius: 5,
            borderWidth: 1,
            hoverBackgroundColor: ['#f0ab8d', '#f0ab8d','#bbe4e9', '#f0ab8d', '#f0ab8d', '#f0ab8d', '#f0ab8d',]
        }]
    }

    const titleTooltip = (e)=> `$${e[0].formattedValue}`
    const labelTooltip = (e)=> ''

    const options = {
        scales : {
            y: {
                ticks:{display: false},
                grid: {
                    display : false,
                    drawTick: false,
                    drawBorder: false
                }
            },
            x:{
                grid:{
                    display: false,
                    drawBorder: false,
                }
            }
        },

        plugins:{
            legend: { display: false},
            tooltip: {
                yAlign : 'bottom',
                displayColors: false,
                callbacks: {
                    title : titleTooltip,
                    label : labelTooltip
                }
                
            }
        }
    }

    const config = {
        type: 'bar',
        data: info,
        options
    }

    const myChart = new Chart(document.getElementById('myChart'), config)
}