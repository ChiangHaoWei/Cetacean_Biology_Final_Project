const labels = [
  'Tursiops truncatus',
  'Pseudorca crassidens',
  'Delphinus sp.',
  'Feresa attenuate',
  'Globicephala macrorhynchus',
  'Physeter macrocephalus',
  'Grampus griseus',
  'Kogia sima',
  'Delphinus delphis',
  'Stenella attenuate',
  'Megaptera novaeangliae',
]

const numbers = [1, 1, 1, 2, 2, 2, 2, 3, 4, 7, 18]
const data = {
  labels: labels,
  datasets: [
    {
      label: 'number of stranded cetacean',
      data: numbers,
      borderColor: 'rgb(54, 162, 235)',
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
    },
  ],
}

const config = {
  type: 'bar',
  data: data,
  options: {
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: false,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
  },
}

var myChart = new Chart(document.getElementById('myChart'), config)
