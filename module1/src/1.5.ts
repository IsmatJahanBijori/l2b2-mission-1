// refernce--> object


// explicit way te refer 
const user: {
    firstName: string;
    lastName: string;
    age: number;
    email?: string;  // optional type : email?: string | undefined
    // company: "PHero"; //literal type
    readonly company: string
}={
    firstName: "Ismat",
    lastName: "Bijori",
    age: 23,
    company: "PHero"
}
console.log(user.company)

// user.age

// implicit way te refer kora
// const user={
//     firstName: "Ismat",
//     lastName: "Bijori",
//     age: 23,
// }