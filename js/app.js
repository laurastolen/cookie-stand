'use strict';

var operatingHours = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7];

var seattle = {
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiesPerSale: 6.3,
  randomHourlyCustomers: function (min, max) {
    min = this.minHourlyCustomers;
    max = this.maxHourlyCustomers;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  totalCookiesPerHourArray: [],
}

// console.log(seattle.avgCookiesPerSale);
// console.log(seattle.randomHourlyCustomers());

/* loop through operatinghours array, 
call the randomhourlycustomers method,
that random number times avgcookiespersale = total cookies per hour
store all those hourlytotals in another array
display the hourlytotals array, each index in a <li>
*/

for (var hour = 0; hour < operatingHours.length; hour++) {
  var hourlyTotalCookies = seattle.avgCookiesPerSale * seattle.randomHourlyCustomers();
  hourlyTotalCookies = Math.ceil(hourlyTotalCookies);
  seattle.totalCookiesPerHourArray.push(hourlyTotalCookies);
  console.log(`At ${operatingHours[hour]}: ${hourlyTotalCookies}`);
}
console.log(seattle.totalCookiesPerHourArray);



var tokyo = {
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  avgCookiesPerSale: 1.2,
  randomHourlyCustomers: function () {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    };
  },

}

var dubai = {
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  avgCookiesPerSale: 3.7,
  randomHourlyCustomers: function () {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    };
  },

}

var paris = {
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  avgCookiesPerSale: 2.3,
  randomHourlyCustomers: function () {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    };
  },

}

var lima = {
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  avgCookiesPerSale: 4.6,
  randomHourlyCustomers: function () {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    };
  },

}