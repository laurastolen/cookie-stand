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

// this creates the dom reference to the table:
var table = document.getElementById('sales-table');

// creating new instances for each location:
var seattle = new CookieStore('Seattle', 23, 65, 6.3);
var tokyo = new CookieStore('Tokyo', 3, 24, 1.2);
var dubai = new CookieStore('Dubai', 11, 38, 3.7);
var paris = new CookieStore('Paris', 20, 38, 2.3);
var lima = new CookieStore('Lima', 2, 16, 4.6);

// this is the main data structure of our application:
var currentLocations = [seattle, tokyo, dubai, paris, lima];

// render header:
function renderHeader(domReference) {
  var tableHeader = document.createElement('tr');
  for (var hourIndex = 0; hourIndex < OPERATINGHOURS.length; hourIndex++) {
    var headers = document.createElement('th');
    headers.textContent = OPERATINGHOURS[hourIndex];
    tableHeader.append(headers);
  }
  var finalHeaderCell = document.createElement('th');
  finalHeaderCell.textContent = 'Location Total';
  tableHeader.append(finalHeaderCell);
  table.append(tableHeader);
}

// render footer with totals for each hour among all locations:
// add a td for first 'totals' box
// iterate over the operatinghours array
// for each index of hour array, sum all first indices of hourly sales arrays
// add a td for sum of all totals, outside loop
function renderFooter(domReference) {
  var tableFooter = document.createElement('tr');
  var firstfooterTd = document.createElement('td');
  firstfooterTd.textContent = 'Totals';
  tableFooter.append(firstfooterTd);
  var totalCookiesAllStores = 0;

  for (var i = 0; i < OPERATINGHOURS.length - 1; i++) {
    var currentHourTotal = document.createElement('td');
    var hourlyCounter = 0;
    for (var j = 0; j < currentLocations.length; j++) {
      console.log(`i is ${i}`);
      var jlocation = currentLocations[j];
      var sales = jlocation.hourlySales[i];
      hourlyCounter += sales;
      console.log(`hourlycounter is ${hourlyCounter}`)
      console.log(`sales is ${sales}`);
      totalCookiesAllStores += sales;
    }
    currentHourTotal.textContent = hourlyCounter;
    tableFooter.append(currentHourTotal);
    console.log(totalCookiesAllStores);
  }

  var finalFooterTd = document.createElement('td');
  finalFooterTd.textContent = `Daily Total All Locations: ${totalCookiesAllStores}`;
  tableFooter.append(finalFooterTd);
  table.append(tableFooter);
}

// renders table of all locations which includes header, body, footer:
function renderTable() {
  renderHeader(table);
  for (var locationIndex = 0; locationIndex < currentLocations.length; locationIndex++) {
    var currentCity = currentLocations[locationIndex];
    currentCity.randHourlyCust();
    currentCity.calculateHourlySales();
    currentCity.render(table);
  }
  renderFooter(table);
}

renderTable();



// ****EVENTS****
// get the element which is the form
var form = document.getElementById('new-store-form');

// add event listener which harvests info from the form and creates a new instance
form.addEventListener('submit', function (event) {
  event.preventDefault();
  // console.log(event.target.storename.value);
  // console.log(event.target.mincust.value);
  // console.log(event.target.maxcust.value);
  // console.log(event.target.avgsale.value);
  var newStoreLocation = new CookieStore(event.target.storename.value, event.target.mincust.value, event.target.maxcust.value, event.target.avgsale.value)

  currentLocations.push(newStoreLocation);

  var table = document.getElementById('sales-table');
  table.innerHTML = '';

  renderTable();
});