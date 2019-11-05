'use strict';

// var operatingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// below is my revised code for the first day using object literals (only completed for seattle and tokyo):
const OPERATINGHOURS = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// SEATTLE
var seattleLoc = {
  locName: 'Seattle',
  minHourlyCust: 23,
  maxHourlyCust: 65,
  avgSale: 6.3,
  randHourlyCust: function (min, max) {
    min = this.minHourlyCust;
    max = this.maxHourlyCust;
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  },
  purchasesByHour: [],
  dailyTotalCookies: 0,
};

for (var hourIndex = 0; hourIndex < OPERATINGHOURS.length; hourIndex++) {
  seattleLoc.purchasesByHour.push(Math.ceil(seattleLoc.avgSale * seattleLoc.randHourlyCust()));
  // console.log(seattleLoc.purchasesByHour);
  seattleLoc.dailyTotalCookies += seattleLoc.purchasesByHour[hourIndex];
  // console.log(`running daily total: ${seattleLoc.dailyTotalCookies}`);
}

var seattleDiv = document.getElementById('seattle');
for (var seattleLi = 0; seattleLi < OPERATINGHOURS.length; seattleLi++) {
  var seattleHourlyLi = document.createElement('li');
  seattleHourlyLi.textContent = `${OPERATINGHOURS[seattleLi]}: ${seattleLoc.purchasesByHour[seattleLi]} cookies`;
  seattleDiv.append(seattleHourlyLi);
}

var SeattleTotalLi = document.createElement('li');
SeattleTotalLi.textContent = `Total: ${seattleLoc.dailyTotalCookies} cookies`;
seattleDiv.append(SeattleTotalLi);

// TOKYO
var tokyoLoc = {
  locName: 'Tokyo',
  minHourlyCust: 3,
  maxHourlyCust: 24,
  avgSale: 1.2,
  randHourlyCust: function (min, max) {
    min = this.minHourlyCust;
    max = this.maxHourlyCust;
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  },
  purchasesByHour: [],
  dailyTotalCookies: 0,
};

for (var hourIndex = 0; hourIndex < OPERATINGHOURS.length; hourIndex++) {
  tokyoLoc.purchasesByHour.push(Math.ceil(tokyoLoc.avgSale * tokyoLoc.randHourlyCust()));
  tokyoLoc.dailyTotalCookies += tokyoLoc.purchasesByHour[hourIndex];
}

var tokyoDiv = document.getElementById('tokyo');
for (var tokyoLi = 0; tokyoLi < OPERATINGHOURS.length; tokyoLi++) {
  var tokyoHourlyLi = document.createElement('li');
  tokyoHourlyLi.textContent = `${OPERATINGHOURS[tokyoLi]}: ${tokyoLoc.purchasesByHour[tokyoLi]} cookies`;
  tokyoDiv.append(tokyoHourlyLi);
}

var tokyoTotalLi = document.createElement('li');
tokyoTotalLi.textContent = `Total: ${tokyoLoc.dailyTotalCookies} cookies`;
tokyoDiv.append(tokyoTotalLi);

// DUBAI
var dubaiLoc = {
  locName: 'Dubai',
  minHourlyCust: 11,
  maxHourlyCust: 38,
  avgSale: 3.7,
  randHourlyCust: function (min, max) {
    min = this.minHourlyCust;
    max = this.maxHourlyCust;
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  },
  purchasesByHour: [],
  dailyTotalCookies: 0,
};

for (var hourIndex = 0; hourIndex < OPERATINGHOURS.length; hourIndex++) {
  dubaiLoc.purchasesByHour.push(Math.ceil(dubaiLoc.avgSale * dubaiLoc.randHourlyCust()));
  dubaiLoc.dailyTotalCookies += dubaiLoc.purchasesByHour[hourIndex];
}

var dubaiDiv = document.getElementById('dubai');
for (var dubaiLi = 0; dubaiLi < OPERATINGHOURS.length; dubaiLi++) {
  var dubaiHourlyLi = document.createElement('li');
  dubaiHourlyLi.textContent = `${OPERATINGHOURS[dubaiLi]}: ${dubaiLoc.purchasesByHour[dubaiLi]} cookies`;
  dubaiDiv.append(dubaiHourlyLi);
}

var dubaiTotalLi = document.createElement('li');
dubaiTotalLi.textContent = `Total: ${dubaiLoc.dailyTotalCookies} cookies`;
dubaiDiv.append(dubaiTotalLi);

// PARIS
var parisLoc = {
  locName: 'Paris',
  minHourlyCust: 20,
  maxHourlyCust: 38,
  avgSale: 2.3,
  randHourlyCust: function (min, max) {
    min = this.minHourlyCust;
    max = this.maxHourlyCust;
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  },
  purchasesByHour: [],
  dailyTotalCookies: 0,
};

for (var hourIndex = 0; hourIndex < OPERATINGHOURS.length; hourIndex++) {
  parisLoc.purchasesByHour.push(Math.ceil(parisLoc.avgSale * parisLoc.randHourlyCust()));
  parisLoc.dailyTotalCookies += parisLoc.purchasesByHour[hourIndex];
}

var parisDiv = document.getElementById('paris');
for (var parisLi = 0; parisLi < OPERATINGHOURS.length; parisLi++) {
  var parisHourlyLi = document.createElement('li');
  parisHourlyLi.textContent = `${OPERATINGHOURS[parisLi]}: ${parisLoc.purchasesByHour[parisLi]} cookies`;
  parisDiv.append(parisHourlyLi);
}

var parisTotalLi = document.createElement('li');
parisTotalLi.textContent = `Total: ${parisLoc.dailyTotalCookies} cookies`;
parisDiv.append(parisTotalLi);

// LIMA NOT DONE YET!
var limaLoc = {
  locName: 'Lima',
  minHourlyCust: 16,
  maxHourlyCust: 4.6,
  avgSale: 3.7,
  randHourlyCust: function (min, max) {
    min = this.minHourlyCust;
    max = this.maxHourlyCust;
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  },
  purchasesByHour: [],
  dailyTotalCookies: 0,
};

for (var hourIndex = 0; hourIndex < OPERATINGHOURS.length; hourIndex++) {
  limaLoc.purchasesByHour.push(Math.ceil(limaLoc.avgSale * limaLoc.randHourlyCust()));
  limaLoc.dailyTotalCookies += limaLoc.purchasesByHour[hourIndex];
}

var limaDiv = document.getElementById('lima');

for (var limaLi = 0; limaLi < OPERATINGHOURS.length; limaLi++) {
  var limaHourlyLi = document.createElement('li');
  limaHourlyLi.textContent = `${OPERATINGHOURS[limaLi]}: ${limaLoc.purchasesByHour[limaLi]} cookies`;
  limaDiv.append(limaHourlyLi);
}

var limaTotalLi = document.createElement('li');
limaTotalLi.textContent = `Total: ${limaLoc.dailyTotalCookies} cookies`;
limaDiv.append(limaTotalLi);



// for each location: (ie, loop through the locations array?)
//   loop through operatinghours array,
//   call the randomhourlycustomers method,
//   that random number times avgcookiespersale = total cookies per hour
//   store all those hourlytotals in another array
//   display the hourlytotals array, each index in a <li>


// to put the text in <li>s
// 1 get a reference in the dom
// 2 create elements we need to append to the dom
// 3 set their contents
// 4 add your elements to the dom
