
// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
  if(!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if(sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}



// ---------- CHARTS ----------

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var amounts = [900, 10000, 20000, 30000, 40000, 40000,4000,44400,7000,30000,9000,34000];

// Create a chart
var ctx = document.getElementById('myChart').getContext("2d");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: months,
        datasets: [{
            label: 'Monthly Amounts',
            data: amounts,
            backgroundColor: 'rgb(36, 109, 236)',
            borderColor: 'rgb(36, 109, 236)',
            // borderRadius:"px",
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// // BAR CHART
// var barChartOptions = {
//   series: [{
//     data: [10, 8, 6, 4, 2]
//   }],
//   chart: {
//     type: 'bar',
//     height: 350,
//     toolbar: {
//       show: false
//     },
//   },
//   colors: [
//     "#246dec",
//     "#cc3c43",
//     "#367952",
//     "#f5b74f",
//     "#4f35a1"
//   ],
//   plotOptions: {
//     bar: {
//       distributed: true,
//       borderRadius: 4,
//       horizontal: false,
//       columnWidth: '40%',
//     }
//   },
//   dataLabels: {
//     enabled: false
//   },
//   legend: {
//     show: false
//   },
//   xaxis: {
//     categories: ["Laptop", "Phone", "Monitor", "Headphones", "Camera"],
//   },
//   yaxis: {
//     title: {
//       text: "Count"
//     }
//   }
// };

// var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
// barChart.render();


// AREA CHART
 // Data
 var data = {
  labels: ['Netbanking', 'UPI'],
  datasets: [{
      data: [5463, 233],
      backgroundColor: ['#007bff', '#FF8800'],
      borderWidth: 1
      
  }]
};

// Create a chart
var ctx = document.getElementById('pieChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: data,
  options: {
      responsive: true
  }
});