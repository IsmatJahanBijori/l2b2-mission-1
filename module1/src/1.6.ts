// function 
// normal function
// ----------->
function addNumbers(num1: number, num2: number): number {
    return num1 + num2;
}

// addNumbers(2, "3")
// Argument of type 'string' is not assignable to parameter of type 'number'.

const res = addNumbers(2, 3)
console.log(res)

// arrow function
// ----------->
const multiplyNumbers = (num1: number, num2: number, num3: number): number => {
    return num1 * num2 * (num3);
}
const res1 = multiplyNumbers(2, 3, 4);
console.log(res1)



// object function
// ----------->
const user1 = {
    name: "Bijori",     //property: value
    age: 23,
    balance:0,
    bijoriBalance(balance: number): string {   //method
        return `My main balance is: ${this.balance+balance}`;
    }

}



//map
const numArr: number[]= [1, 2, 3, 4, 5 ]
const newNumArr: number[]= numArr.map((val:number):number=> val+val)
console.log(newNumArr)