// -_- コードの戦争 -_- bnoden

function positiveSum(arr) {
 	var count = 0
 	for (var i in arr) {
 		if (arr[i] > 0)
 			count+=arr[i]
 	} return count
}

// -_- コードの戦争 -_-

var peopleWithAgeDrink = function(old, drink) {
	if (old >= 21) {drink = 'whisky'}
	if (old < 21) {drink = 'beer'}
	if (old < 18) {drink = 'coke'}
	if (old < 14) {drink = 'toddy'}
  return 'drink '+drink
}

// -_- コードの戦争 -_-

function Dog (breed) { this.breed = breed }

Dog.prototype.bark = function() { return 'Woof' }

var snoopy = new Dog("Beagle"), scoobydoo = new Dog("Great Dane")

// -_- コードの戦争 -_-

function countSheeps(arrayOfSheep) {
	var present = 0
  for (var i in arrayOfSheep) {
  	if (arrayOfSheep[i] === true)
  		present++
  } return present
}

// -_- コードの戦争 -_-

function listToArray(list) {
  var listArr = []
  for(var i = list; i; i = i.next)listArr.push(i.value)
  return listArr
}

// -_- コードの戦争 -_-

function order(words, ordered, temp, wordsOrdered) {
  ordered = [], temp = words.split(' '), wordsOrdered = ""
  for (var i in temp)
    for (var j in temp[i])
      if (!isNaN(temp[i].charAt(j)))
        ordered[parseInt(temp[i].charAt(j), 10) - 1] = temp[i]
  wordsOrdered = ordered.join(' ')
  return wordsOrdered
}

// -_- コードの戦争 -_-

function opposite(number) {
  return number-number-number;
}

function opposite(n){return -n}

// -_- コードの戦争 -_-

function removeSmallest(numbers, lowest) {
  lowest = numbers[0]
  for (var i in numbers)
    if (numbers[i] <= lowest)
      lowest = numbers[i]
  numbers.splice(numbers.indexOf(lowest), 1)
  return numbers
}

// -_- コードの戦争 -_-

var Harshad = ( function() {
  'use strict';
  return {
    isValid: function( number, digit, total ) {
      total = 0, digit = number.toString().split('')
      for (var i in digit)
        total+=parseInt(digit[i])
      if (number % total === 0)
        return true
      else return false
    },
    getNext: function( number ) {

      do {number++} while(!this.isValid(number))
      return number;
    },
    getSerie: function( count, start, num ) {
      var numArr = [];

      if (isNaN(start)) {
        num = 0;
      } else {num = start}

      while (count) {
        numArr.push(Harshad.getNext(num));
        num = Harshad.getNext(num);
        count--;
      }
      return numArr;
    }
  };

} () );

// -_- コードの戦争 -_- bnoden