'use strict';

// each item in operatinghours array is a string
var operatingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// each item in the locations array is an object
var locations = [seattle, tokyo, dubai, paris, lima];

var seattle = {
  name: 'Seattle',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiesPerSale: 6.3,
  randomHourlyCustomers: function (min, max) {
    min = this.minHourlyCustomers;
    max = this.maxHourlyCustomers;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  totalCookiesPerHourArray: [],
  totalDailyCookies: 0
}

var tokyo = {
  name: 'tokyo',
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  avgCookiesPerSale: 1.2,
  randomHourlyCustomers: function (min, max) {
    min = this.minHourlyCustomers;
    max = this.maxHourlyCustomers;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  totalCookiesPerHourArray: [],
}

var dubai = {
  name: 'dubai',
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  avgCookiesPerSale: 3.7,
  randomHourlyCustomers: function (min, max) {
    min = this.minHourlyCustomers;
    max = this.maxHourlyCustomers;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  totalCookiesPerHourArray: [],
}

var paris = {
  name: 'paris',
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  avgCookiesPerSale: 2.3,
  randomHourlyCustomers: function (min, max) {
    min = this.minHourlyCustomers;
    max = this.maxHourlyCustomers;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  totalCookiesPerHourArray: [],
}

var lima = {
  name: 'lima',
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  avgCookiesPerSale: 4.6,
  randomHourlyCustomers: function (min, max) {
    min = this.minHourlyCustomers;
    max = this.maxHourlyCustomers;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  totalCookiesPerHourArray: [],
}

/*
for each location: (ie, loop through the locations array?)
  loop through operatinghours array,
  call the randomhourlycustomers method,
  that random number times avgcookiespersale = total cookies per hour
  store all those hourlytotals in another array
  display the hourlytotals array, each index in a <li>
*/

for (var hour = 0; hour < operatingHours.length; hour++) {

  var hourlyTotalCookies = seattle.avgCookiesPerSale * seattle.randomHourlyCustomers();
  hourlyTotalCookies = Math.ceil(hourlyTotalCookies);
  seattle.totalCookiesPerHourArray.push(`${operatingHours[hour]}: ${hourlyTotalCookies}`);
  seattle.totalDailyCookies += hourlyTotalCookies;
}

/* to put the text in <li>s
1 get a reference in the dom
2 create elements we need to append to the dom
3 set their contents
4 add your elements to the dom
*/

var totalCookiesPerHourArray = [];
var seattleDiv = document.getElementById('seattle');
for (var i = 0; i < seattle.totalCookiesPerHourArray.length; i++) {
  var li = document.createElement('li');
  li.textContent = seattle.totalCookiesPerHourArray[i];
  seattleDiv.append(li);
}
var totalSeattleCookies = document.createElement('li');
totalSeattleCookies.textContent = `Total: ${seattle.totalDailyCookies}`;
seattleDiv.append(totalSeattleCookies);
// var operatingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
