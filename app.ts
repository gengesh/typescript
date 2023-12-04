const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!;

function add1(num1:number,num2:number) {
    return num1 + num2;
}
interface resultObj {
    var:number;
    timestamp:Date;
}
function printResult(resultObj:{val:number;timestamp: Date }) {
    console.log(resultObj.val,resultObj.timestamp);
}
buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add1(+num1,+num2);
    console.log(result);
    printResult({val:result as number,timestamp: new Date()})
})
// console.log(add1(1,6));
// console.log(add1('1','2'));
const myPromise = new Promise<string>((resolve,reject) => {
setTimeout(() => {
    resolve('it worked');
},1000);
});

myPromise.then((result) => {
    console.log(result.split('w'));
});