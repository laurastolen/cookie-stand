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
  totalDailyCookies: 0

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
  totalDailyCookies: 0
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
  totalDailyCookies: 0
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
  totalDailyCookies: 0
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
var seattleDiv = document.getElementById('seattle');
for (var i = 0; i < seattle.totalCookiesPerHourArray.length; i++) {
  var hourlyLi = document.createElement('li');
  hourlyLi.textContent = seattle.totalCookiesPerHourArray[i];
  seattleDiv.append(hourlyLi);
}
var totalSeattleCookies = document.createElement('li');
totalSeattleCookies.textContent = `Total: ${seattle.totalDailyCookies}`;
seattleDiv.append(totalSeattleCookies);




// tokyo below:
// create array
for (var hour = 0; hour < operatingHours.length; hour++) {
  var hourlyTotalCookies = tokyo.avgCookiesPerSale * tokyo.randomHourlyCustomers();
  hourlyTotalCookies = Math.ceil(hourlyTotalCookies);
  tokyo.totalCookiesPerHourArray.push(`${operatingHours[hour]}: ${hourlyTotalCookies}`);
  tokyo.totalDailyCookies += hourlyTotalCookies;
}
// create <li>s via dom
var tokyoDiv = document.getElementById('tokyo');
for (var i = 0; i < tokyo.totalCookiesPerHourArray.length; i++) {
  var hourlyLi = document.createElement('li');
  hourlyLi.textContent = tokyo.totalCookiesPerHourArray[i];
  tokyoDiv.append(hourlyLi);
}
// create 'total' <li>
var totalTokyoCookies = document.createElement('li');
totalTokyoCookies.textContent = `Total: ${tokyo.totalDailyCookies}`;
tokyoDiv.append(totalTokyoCookies);




// dubai below:
// create array
for (var hour = 0; hour < operatingHours.length; hour++) {
  var hourlyTotalCookies = dubai.avgCookiesPerSale * dubai.randomHourlyCustomers();
  hourlyTotalCookies = Math.ceil(hourlyTotalCookies);
  dubai.totalCookiesPerHourArray.push(`${operatingHours[hour]}: ${hourlyTotalCookies}`);
  dubai.totalDailyCookies += hourlyTotalCookies;
}
// create <li>s via dom
var dubaiDiv = document.getElementById('dubai');
for (var i = 0; i < dubai.totalCookiesPerHourArray.length; i++) {
  var hourlyLi = document.createElement('li');
  hourlyLi.textContent = dubai.totalCookiesPerHourArray[i];
  dubaiDiv.append(hourlyLi);
}
// create 'total' <li>
var totalDubaiCookies = document.createElement('li');
totalDubaiCookies.textContent = `Total: ${dubai.totalDailyCookies}`;
dubaiDiv.append(totalDubaiCookies);



// paris below:
// create array
for (var hour = 0; hour < operatingHours.length; hour++) {
  var hourlyTotalCookies = paris.avgCookiesPerSale * paris.randomHourlyCustomers();
  hourlyTotalCookies = Math.ceil(hourlyTotalCookies);
  paris.totalCookiesPerHourArray.push(`${operatingHours[hour]}: ${hourlyTotalCookies}`);
  paris.totalDailyCookies += hourlyTotalCookies;
}
// create <li>s via dom
var parisDiv = document.getElementById('paris');
for (var i = 0; i < paris.totalCookiesPerHourArray.length; i++) {
  var hourlyLi = document.createElement('li');
  hourlyLi.textContent = paris.totalCookiesPerHourArray[i];
  parisDiv.append(hourlyLi);
}
// create 'total' <li>
var totalParisCookies = document.createElement('li');
totalParisCookies.textContent = `Total: ${paris.totalDailyCookies}`;
parisDiv.append(totalParisCookies);



// lima below:
// create array
for (var hour = 0; hour < operatingHours.length; hour++) {
  var hourlyTotalCookies = lima.avgCookiesPerSale * lima.randomHourlyCustomers();
  hourlyTotalCookies = Math.ceil(hourlyTotalCookies);
  lima.totalCookiesPerHourArray.push(`${operatingHours[hour]}: ${hourlyTotalCookies}`);
  lima.totalDailyCookies += hourlyTotalCookies;
}
// create <li>s via dom
var limaDiv = document.getElementById('lima');
for (var i = 0; i < lima.totalCookiesPerHourArray.length; i++) {
  var hourlyLi = document.createElement('li');
  hourlyLi.textContent = lima.totalCookiesPerHourArray[i];
  limaDiv.append(hourlyLi);
}
// create 'total' <li>
var totalLimaCookies = document.createElement('li');
totalLimaCookies.textContent = `Total: ${lima.totalDailyCookies}`;
limaDiv.append(totalLimaCookies);