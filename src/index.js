module.exports = function solveEquation(equation) {
	var arr = equation.split('*');
    var	findB = arr[1].split('x^2');
    var findC = arr[2].split('x');
    var a = parseInt(arr[0]); // We found a and wrote a
    var b = foundB(findB); // We found b and wrote b
    var c = foundC(findC); // We found c and wrote c 
    function foundB (findB) {
        var b2 = findB[1].split(' ');
        var b3 = parseInt(b2[2]);
        if (b2[1] == '+') {
           var B = 0 + b3;
        }
        else if (b2[1] == '-') {
          var B = 0 - b3;
        }
        return B;
    };
    function foundC (findC) {
        var c2 = findC[1].split(' ');
        var c3 = parseInt(c2[2]);
        if (c2[1] == '+') {
          var C = 0 + c3;
        }
        else if (c2[1] == '-') {
          var C = 0 - c3;
        }
        return C;
    };
    var answer = [];
      answer[0] = Math.round((-b+Math.sqrt(b*b-4*a*c))/(2*a));
      answer[1] = Math.round((-b-Math.sqrt(b*b-4*a*c))/(2*a));
    return answer.sort(function(x,y) {return x-y});
  }
