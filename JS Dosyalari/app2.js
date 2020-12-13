/*let numbers = [3,1,2,6,7,3,6,8,6,9,4];
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
 console.log(max);*/

 let question = [
     "Yasiniz Kac",
     "Programlama seviniz nedir?",
     "Kac dil biliyorsun?"
 ];


 for (let index = 0; index < question.length; index++) {
     const nextQuestion = question[index];
     
     let answer = prompt(nextQuestion);
     answerList.push(answer);
 }


 for (let index = 0; index < question.length; index++) {
     const nextQuestion = question[index];
     const nextAnswer = answerList[index];
     console.log("soru: ", nextQuestion, ", Cevap: ", nextAnswer)
 }

 for (let index = 0; index < question.length; index++){
     const nextQuestion = question[index];
     
 }