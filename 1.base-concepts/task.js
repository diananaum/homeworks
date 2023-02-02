"use strict";

function solveEquation(a, b, c) {
    let arr = [];
    let d = Math.pow(b,2) - 4 * a * c;

    if (d === 0) {
        const x = -b / (2*a);
        arr.push(x);
        // return arr = new Array(1)
    } else if (d > 0) {
        const x1 = -b + Math.sqrt(d) / (2 * a);
        const x2 = -b - Math.sqrt(d) / (2 * a);
        arr.push(x1, x2);
    }

    return arr;
  }  