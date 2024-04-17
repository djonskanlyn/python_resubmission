// var wins = [[[2006,13],[2007,11],[2008,15],[2009,15],[2010,18],[2011,21],[2012,28]]]

// window.onload = function() {
//     Flotr.draw(
//         document.getElementById("chart"),
//         wins,
//         {
//             bars: {show: true},
//         }
//     );
// }

// window.onload = function() {
//     Flotr.draw(
//         document.getElementById("chart"),
//         wins,
//         {
//             bars: {show: true},
//             yaxis: {min: 0, tickDecimals: 0}
//         }
//     );
// }

// var wins = [[[0,13],[1,11],[2,15],[3,15],[4,18],[5,21],[6,28]]];
// var years = [
//     [0, "2006"],
//     [1, "2007"],
//     [2, "2008"],
//     [3, "2009"],
//     [4, "2010"],
//     [5, "2011"],
//     [6, "2012"],
// ];


// window.onload = function() {
//     Flotr.draw(
//         document.getElementById("chart"),
//         wins, 
//         {    
//             bars: {show: true, barWidth: 0.5},
//             yaxis: {min: 0, tickDecimals: 0},
//             xaxis: {ticks: years}
//         }
//     );
// }

// window.onload = function() {
//     Flotr.draw(
//         document.getElementById("chart"),
//         wins, 
//         {
//             title: "Manchester City Wins",
//             colours: ["#89AFD2"],    
//             bars: {show: true, barWidth: 0.5, fillOpacity:1, lineWidth:0},
//             yaxis: {min: 0, tickDecimals: 0},
//             xaxis: {ticks: years},
//             grid: {horizontalLines: false, verticalLines: false}
//         }
//     );
// }

// var wins2 = [[[0,28]],[[1,28]],[[2,21]],[[3,20]],[[4,19]]];
// var teams = [
//     [0,"MCI"],
//     [1,"MUN"],
//     [2,"ARS"],
//     [3,"TOT"],
//     [4,"NEW"]
// ];

// window.onload = function() {
//     Flotr.draw(
//         document.getElementById("chart"),
//         wins2, 
//         {
//             title: "Premier League wins (2011-2012)",
//             colours: ["#89AFD2","#1D1D1D","DF021D","#0E204B","#E67840"],    
//             bars: {show: true, barWidth: 0.5, fillOpacity:1, lineWidth:0},
//             yaxis: {min: 0, tickDecimals: 0},
//             xaxis: {ticks: teams},
//             grid: {horizontalLines: false, verticalLines: false}
//         }
//     );
// }

// var co2 = [
//     [ 1959, 315.97 ],
//     [ 1960, 316.91 ],
//     [ 1961, 317.64 ],
//     [ 1962, 318.45 ],
//     [ 1963, 318.99 ],
//     [ 1964, 319.62 ],
//     [ 1965, 320.04 ],
//     [ 1966, 321.38 ],
//     [ 1967, 322.16 ],
//     [ 1968, 323.04 ],
//     [ 1969, 324.62 ],
//     [ 1970, 325.68 ],
//     [ 1971, 326.32 ],
//     [ 1972, 327.45 ],
//     [ 1973, 329.68 ],
//     [ 1974, 330.18 ],
//     [ 1975, 331.08 ],
//     [ 1976, 332.05 ],
//     [ 1977, 333.78 ],
//     [ 1978, 335.41 ],
//     [ 1979, 336.78 ],
//     [ 1980, 338.68 ],
//     [ 1981, 340.10 ],
//     [ 1982, 341.44 ],
//     [ 1983, 343.03 ],
//     [ 1984, 344.58 ],
//     [ 1985, 346.04 ],
//     [ 1986, 347.39 ],
//     [ 1987, 349.16 ],
//     [ 1988, 351.56 ],
//     [ 1989, 353.07 ],
//     [ 1990, 354.35 ],
//     [ 1991, 355.57 ],
//     [ 1992, 356.38 ],
//     [ 1993, 357.07 ],
//     [ 1994, 358.82 ],
//     [ 1995, 360.80 ],
//     [ 1996, 362.59 ],
//     [ 1997, 363.71 ],
//     [ 1998, 366.65 ],
//     [ 1999, 368.33 ],
//     [ 2000, 369.52 ],
//     [ 2001, 371.13 ],
//     [ 2002, 373.22 ],
//     [ 2003, 375.77 ],
//     [ 2004, 377.49 ],
//     [ 2005, 379.80 ],
//     [ 2006, 381.90 ],
//     [ 2007, 383.77 ],
//     [ 2008, 385.59 ],
//     [ 2009, 387.37 ],
//     [ 2010, 389.85 ],
//     [ 2011, 391.62 ],
// ];

// window.onload = function() {
//     Flotr.draw(
//         document.getElementById("chart"), 
//         [ 
//             { data: co2, lines: {show: true} },
//         ]   
//     );
// }

// var temp = [
//     [ 1959,  0.0776 ],
//     [ 1960,  0.0280 ],
//     [ 1961,  0.1028 ],
//     [ 1962,  0.1289 ],
//     [ 1963,  0.1469 ],
//     [ 1964, -0.1171 ],
//     [ 1965, -0.0523 ],
//     [ 1966,  0.0063 ],
//     [ 1967,  0.0219 ],
//     [ 1968,  0.0093 ],
//     [ 1969,  0.1139 ],
//     [ 1970,  0.0684 ],
//     [ 1971, -0.0315 ],
//     [ 1972,  0.0558 ],
//     [ 1973,  0.1909 ],
//     [ 1974, -0.0527 ],
//     [ 1975,  0.0172 ],
//     [ 1976, -0.0753 ],
//     [ 1977,  0.1779 ],
//     [ 1978,  0.0990 ],
//     [ 1979,  0.1856 ],
//     [ 1980,  0.2301 ],
//     [ 1981,  0.2701 ],
//     [ 1982,  0.1521 ],
//     [ 1983,  0.3170 ],
//     [ 1984,  0.1259 ],
//     [ 1985,  0.1065 ],
//     [ 1986,  0.1956 ],
//     [ 1987,  0.3293 ],
//     [ 1988,  0.3407 ],
//     [ 1989,  0.2659 ],
//     [ 1990,  0.3988 ],
//     [ 1991,  0.3757 ],
//     [ 1992,  0.2323 ],
//     [ 1993,  0.2621 ],
//     [ 1994,  0.3245 ],
//     [ 1995,  0.4473 ],
//     [ 1996,  0.3170 ],
//     [ 1997,  0.5117 ],
//     [ 1998,  0.6286 ],
//     [ 1999,  0.4525 ],
//     [ 2000,  0.4264 ],
//     [ 2001,  0.5496 ],
//     [ 2002,  0.6121 ],
//     [ 2003,  0.6211 ],
//     [ 2004,  0.5779 ],
//     [ 2005,  0.6510 ],
//     [ 2006,  0.5977 ],
//     [ 2007,  0.5923 ],
//     [ 2008,  0.5134 ],
//     [ 2009,  0.5985 ],
//     [ 2010,  0.6621 ],
//     [ 2011,  0.5362 ],
// ];

// window.onload = function() {
//     Flotr.draw(
//         document.getElementById("chart"), 
//         [ 
//             { data: co2, lines: {show: true} },
//             { data: temp, lines: {show: true}, yaxis: 2 },
//         ],
//         {
//             grid: { HorizontalLines: false, verticalLines: false },
//             yaxis: { min: 300, max: 400 },
//             y2axis: { min: -0.15, max: 0.69 } 
//         }
//     );
// }



// var zero = []
// for (yr=1959; yr<2012; yr++) { zero.push([yr, 0]); };
// Flotr.draw(
//     document.getElementById("chart")
//     ,[
//         { data: zero, label: "20<sup>th</sup> Century Baseline Temperature", lines: {show:true, lineWidth: 1}, shadowSize: 0, color: "#545454" },
//         { data: temp, label: "Yearly Temperature Difference (°C)", lines: {show:true}},
//         { data: co2, label: "CO<sub>2</sub> Concentration (ppm)", lines: {show:true}, yaxis: 2 },
//      ]
//     ,{
//         title: "Global Temperature and CO<sub>2</sub> Concentration (NOAA Data)",
//         grid: {horizontalLines: false, verticalLines: false},
//         y2axis: {min: 300, max: 400},
//         yaxis: {min: -0.15, max: 0.69,
//                 tickFormatter: function(val) {return val+" °C";}},
//      }
// );

var health_data = [
    {  country: "Australia",       spending:  9.1,  life: 81.8  },
    {  country: "New Zealand",     spending: 10.1,  life: 81.0  },
    {  country: "Austria",         spending: 11.0,  life: 80.7  },
    {  country: "Belgium",         spending: 10.5,  life: 80.3  },
    {  country: "Czech Republic",  spending:  7.5,  life: 77.7  },
    {  country: "Denmark",         spending: 11.1,  life: 79.3  },
    {  country: "Estonia",         spending:  6.3,  life: 75.6  },
    {  country: "Finland",         spending:  8.9,  life: 80.2  },
    {  country: "France",          spending: 11.6,  life: 81.3  },
    {  country: "Germany",         spending: 11.6,  life: 80.5  },
    {  country: "Greece",          spending: 10.2,  life: 80.6  },
    {  country: "Hungary",         spending:  7.8,  life: 74.3  },
    {  country: "Iceland",         spending:  9.3,  life: 81.5  },
    {  country: "Ireland",         spending:  9.2,  life: 81.0  },
    {  country: "Italy",           spending:  9.3,  life: 82.0  },
    {  country: "Luxembourg",      spending:  7.9,  life: 80.7  },
    {  country: "Netherlands",     spending: 12.0,  life: 80.8  },
    {  country: "Norway",          spending:  9.4,  life: 81.2  },
    {  country: "Poland",          spending:  7.0,  life: 76.3  },
    {  country: "Portugal",        spending: 10.7,  life: 79.8  },
    {  country: "Slovak Republic", spending:  9.0,  life: 75.2  },
    {  country: "Slovenia",        spending:  9.0,  life: 79.5  },
    {  country: "Spain",           spending:  9.6,  life: 82.2  },
    {  country: "Sweden",          spending:  9.6,  life: 81.5  },
    {  country: "Switzerland",     spending: 11.4,  life: 82.6  },
    {  country: "Turkey",          spending:  6.1,  life: 74.3  },
    {  country: "United Kingdom",  spending:  9.6,  life: 80.6  },
    {  country: "Canada",          spending: 11.4,  life: 80.8  },
    {  country: "Chile",           spending:  8.0,  life: 79.0  },
    {  country: "Mexico",          spending:  6.2,  life: 75.5  },
    {  country: "United States",   spending: 17.6,  life: 78.7  },
    {  country: "Israel",          spending:  7.5,  life: 81.7  },
    {  country: "Japan",           spending:  9.5,  life: 83.0  },
    {  country: "Korea",           spending:  7.1,  life: 80.7  },
    {  country: "United States",   spending: 17.6,  life: 78.7  },
];

var data = [];
for (var i = 0; i < health_data.length; i++) {
    data.push([
        health_data[i].spending,
        health_data[i].life
    ]);    
};

Flotr.draw(
    document.getElementById("chart"),
    [{ data: data, points: {show:true} }],
    {
        title: "Life Expectancy vs. Health-Care Spending",
        subtitle: "by country, 2010 OECD data)",
        xaxis: {min: 5, max: 20, tickDecimals: 0, title: "Spending as a Percentage of GDP", tickFormatter: function(val) {return val+"%"}},
        yaxis: {min: 70, max: 85, tickDecimals: 0, title: "Year"}
    }
);