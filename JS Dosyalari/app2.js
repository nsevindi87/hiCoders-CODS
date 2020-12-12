let numbers = [3,1,2,6,7,3,6,8,6,9,4];
let product = 1;

for(let index=0; index<numbers.length; index++){
    let nextValue = numbers[index];
    product = product * nextValue;
}
 console.log(product);

 let max= 0;
 for ( let index=0; index<numbers.length; index++){
    let nextValue=numbers [index];
    if (nextValue>max){
        max = nextValue;
    }
 }
 console.log(max);