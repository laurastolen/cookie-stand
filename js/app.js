'use strict';

const OPERATINGHOURS = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

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
    for (var hourIndex = 0; hourIndex < OPERATINGHOURS.length; hourIndex++) {
      var customers = this.randHourlyCust();
      this.hourlySales.push(Math.ceil(this.avgSale * customers));
      this.dailyTotalCookies += this.hourlySales[hourIndex];
    }
  }

  // render method
  this.render = function (domReference) {
    var tr = document.createElement('tr');

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


  // method to render operating hours array as <th>s:


}

var table = document.getElementById('sales-table');




// creating new instances for each location:
var seattle = new CookieStore('Seattle', 23, 65, 6.3);
var tokyo = new CookieStore('Tokyo', 3, 24, 1.2);
var dubai = new CookieStore('Dubai', 11, 38, 3.7);
var paris = new CookieStore('Paris', 20, 38, 2.3);
var lima = new CookieStore('Lima', 2, 16, 4.6);

var currentLocations = [seattle, tokyo, dubai, paris, lima];

for (var locationIndex = 0; locationIndex < currentLocations.length; locationIndex++) {
  var currentCity = currentLocations[locationIndex];
  currentCity.randHourlyCust();
  currentCity.calculateHourlySales();
  currentCity.render(table);
}

