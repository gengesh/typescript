var num1Element = document.getElementById('num1');
var num2Element = document.getElementById('num2');
var buttonElement = document.querySelector('button');
function add1(num1, num2) {
    return num1 + num2;
}
function printResult(resultObj) {
    console.log(resultObj.val, resultObj.timestamp);
}
buttonElement.addEventListener('click', function () {
    var num1 = num1Element.value;
    var num2 = num2Element.value;
    var result = add1(+num1, +num2);
    console.log(result);
    printResult({ val: result, timestamp: new Date() });
});
// console.log(add1(1,6));
// console.log(add1('1','2'));
var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('it worked');
    }, 1000);
});
myPromise.then(function (result) {
    console.log(result.split('w'));
});
