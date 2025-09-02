// Interface for Function
interface MathOperation {
  (x:number,y:number):number;
}

let add:MathOperation = (a,b)=> a+b;
let subtract: MathOperation = (a,b)=>a-b;
console.log(add(2,3));
console.log(subtract(2,2));


// Interface for objects

interface Computer {
  name:string,
  ram:number
}

const ComputerExample:Computer ={
  name:'i-7',
  ram : 16
}

console.log(ComputerExample.name);
 