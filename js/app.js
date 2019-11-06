'use strict';

const OPERATINGHOURS = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// cookiestore constructor:
function CookieStore(storeLocation, minHourlyCust, maxHourlyCust, avgSale) {
  this.storeLocation = storeLocation,
    this.minHourlyCust = minHourlyCust,
    this.maxHourlyCust = maxHourlyCust,
    this.avgSale = avgSale,
    this.hourlySales = [],
    this.dailyTotalCookies = 0,
    // method to calculate a random number of customers per hour:
    this.randHourlyCust = function (min, max) {
      min = this.minHourlyCust;
      max = this.maxHourlyCust;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  // method to calculate cookie sales per hour, stored in an array:
  this.calculateHourlySales = function () {
    for (var hourIndex = 0; hourIndex < OPERATINGHOURS.length - 1; hourIndex++) {
      var customers = this.randHourlyCust();
      this.hourlySales.push(Math.ceil(this.avgSale * customers));
      this.dailyTotalCookies += this.hourlySales[hourIndex];
    }
  }
  // render method:
  this.render = function (domReference) {
    var tr = document.createElement('tr');
    var nameTd = document.createElement('td');
    nameTd.textContent = this.storeLocation;
    tr.append(nameTd);
    for (var i = 0; i < this.hourlySales.length; i++) {
      var td = document.createElement('td');
      td.textContent = this.hourlySales[i];
      tr.append(td);
    }
    var dailyTotalCookies = document.createElement('td');
    dailyTotalCookies.textContent = `Total: ${this.dailyTotalCookies}`;
    tr.append(dailyTotalCookies);
    table.append(tr);
  }
}

// this creates the dom reference:
var table = document.getElementById('sales-table');

// creating new instances for each location:
var seattle = new CookieStore('Seattle', 23, 65, 6.3);
var tokyo = new CookieStore('Tokyo', 3, 24, 1.2);
var dubai = new CookieStore('Dubai', 11, 38, 3.7);
var paris = new CookieStore('Paris', 20, 38, 2.3);
var lima = new CookieStore('Lima', 2, 16, 4.6);

var currentLocations = [seattle, tokyo, dubai, paris, lima];


// render footer with totals for each hour among all locations:
// add a td for 'totals' box
// iterate over the operatinghours array
// for each index of hour array, sum all first indices of hourly sales arrays
// add a td for sum of all totals, outside loop
// function renderFooter(domReference) {
//   var tableFooter = document.createElement('tr');
//   var totalsTd = document.createElement('td');
//   totalsTd.textContent = 'Totals';
//   // tableFooter.append(totalsTd);
//   for (var hourlyTotalIndex = 0; hourlyTotalIndex < OPERATINGHOURS.length; hourlyTotalIndex++) {
//     var hourlyTotal = 0;
//     var currentHourTotal = document.createElement('td');
//     for (var storeLocation = 0; storeLocation < currentLocations.length; storeLocation++){
//       hourlyTotal += currentLocations[storeLocation];
//     }
//     hourlyTotal
//   }
//   var totalOfLocationTotals = document.createElement('td');
//   totalOfLocationTotals.textContent = ;
// }


// render header:
function renderHeader(domReference) {
  var tableHeader = document.createElement('tr');
  var hourlyHeaders = document.createElement('th');
  for (var hourIndex = 0; hourIndex < OPERATINGHOURS.length; hourIndex++) {
    var headers = document.createElement('th');
    headers.textContent = OPERATINGHOURS[hourIndex];
    tableHeader.append(headers);
  }
  table.append(tableHeader);
}
renderHeader(table);


// renders table of all locations:
for (var locationIndex = 0; locationIndex < currentLocations.length; locationIndex++) {
  var currentCity = currentLocations[locationIndex];
  currentCity.randHourlyCust();
  currentCity.calculateHourlySales();
  currentCity.render(table);
}
