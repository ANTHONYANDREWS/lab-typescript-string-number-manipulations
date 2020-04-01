"use strict";
exports.__esModule = true;
// var word: string ='Hello';
var words = 'Morning';
// var sentence:string = 'Great';
// var str: string = 'Afternoon';
// var num:number =9;
var StringManipulations = /** @class */ (function () {
    function StringManipulations() {
    }
    StringManipulations.prototype.print = function (word) {
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word.charAt(4));
        console.log(word.concat(words));
        console.log(word.slice(0, 2));
        console.log(word.length);
    };
    StringManipulations.prototype.printWithSpace = function (sentence) {
        for (var i = 0; i < sentence.length; i++) {
            console.log(sentence[i + ""]);
        }
    };
    StringManipulations.prototype.findVowel = function (str) {
        var vowels = ["a", "e", "i", "o", "u"];
        var count = 0;
        for (var _i = 0, _a = str.toLowerCase(); _i < _a.length; _i++) {
            var letter = _a[_i];
            if (vowels.includes(letter)) {
                count++;
            }
        }
        console.log("Number of vowels: " + count);
    };
    return StringManipulations;
}());
var NumbersManipulations = /** @class */ (function () {
    function NumbersManipulations() {
    }
    NumbersManipulations.prototype.findPrime = function (num) {
        if (num == 2) {
            console.log(num + " is a Prime number");
        }
        else {
            for (var i = 2; i < num; i++) {
                if (num % i == 0) {
                    console.log(num + " is not a Prime number");
                }
                else {
                    console.log(num + " is a Prime number");
                }
            }
        }
    };
    NumbersManipulations.prototype.findMagic = function (num) {
        if (num % 9 == 1) {
            console.log(num + " is a Magic number");
        }
        else {
            console.log(num + " is not a Magic number");
        }
    };
    return NumbersManipulations;
}());
var a = new StringManipulations();
a.print("Anthony");
a.findVowel("Afternoon");
a.printWithSpace("Morning");
var b = new NumbersManipulations();
b.findPrime(17);
b.findMagic(199);
