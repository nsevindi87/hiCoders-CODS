/************************************************
 * FONSIYON ICINDE FONKSIYON CAGIRMA
 * ***********************************************/
function findX (t, V, fn){
    var x= t*V;
    return fn(x);
}

function sum10(pNum){
    return pNum + 10;
}

var yol = findX(4, 50, sum10);
console.log(yol)