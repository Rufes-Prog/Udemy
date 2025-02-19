let arr = [1, 2, 3, 4, 5];
console.log(arr);

function printArray(arr: Number[]) {
    console.log(arr);
}

printArray(arr);


function printTuple(Tpl: [number, number, string]) {
    console.log(Tpl);
}

let Tpl: [number, number, string]  = [27, 34, 'Raphael'];
printTuple(Tpl);
