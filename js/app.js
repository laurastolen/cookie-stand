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
  // method to render sales by hour in <td>s
  this.renderHourlyTotals = function (domReference) {
    // for loop to render each hour's totals in a row of tds
  }
  this.renderDailyTotal = function (domReference) {
    // 
  }
}


// for reference:
var seattleDiv = document.getElementById('seattle');
for (var seattleLi = 0; seattleLi < OPERATINGHOURS.length; seattleLi++) {
  var seattleHourlyLi = document.createElement('li');
  seattleHourlyLi.textContent = `${OPERATINGHOURS[seattleLi]}: ${seattleLoc.purchasesByHour[seattleLi]} cookies`;
  seattleDiv.append(seattleHourlyLi);
}

var SeattleTotalLi = document.createElement('li');
SeattleTotalLi.textContent = `Total: ${seattleLoc.dailyTotalCookies} cookies`;
seattleDiv.append(SeattleTotalLi);
// end reference





// creating new instances for each location:
var seattle = new CookieStore('Seattle', 23, 65, 6.3);
var tokyo = new CookieStore('Tokyo', 3, 24, 1.2);
var dubai = new CookieStore('Dubai', 11, 38, 3.7);
var paris = new CookieStore('Paris', 20, 38, 2.3);
var lima = new CookieStore('Lima', 2, 16, 4.6);


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