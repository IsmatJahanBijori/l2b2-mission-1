{
    // 
    // interface

    type User1 = {
        name: string;
        contact: string;
        email?: string;    //email?: string | undefined;
        address: string;
    }

    const user1: User1 = {
        name: "Bijori",
        contact: "019",
        // email?: "ab@gm.com",
        address: "Mirpur 14"
    }


    // ----> primitive er khetre type alias ber korbo 
    interface User2 {
        name: string;
        contact: string;
        email?: string;    //email?: string | undefined;
        address: string;
    }

    const user: User2= {
        name: "Bijori",
        contact: "019",
        // email?: "ab@gm.com",
        address: "Mirpur 14"
    }


    type UserWithRoll = User2 & { roll: number };  
    //User interface e j properties ache tar sathe roll add hoyehce
    const newUser:UserWithRoll={
        name: "Bijori",
        contact: "019",
        email: "ab@gm.com",
        address: "Mirpur 14",
        roll:113,
    }



    //array with interface
    type Roll1 = number[];
    const rollNumber: Roll1 = [1, 2, 3, 4];

    type Name = string[];
    const name: Name = ["A", "B", "J"];

    //---------->>arrow function with type alias---
    type Add1 = (num1: number, num2: number)=>number;
    const add1: Add1=(num1, num2)=>num1+num2;
    const res1=add1(4,9);
    console.log(res1)


    //---------->> function with type alias---
    function add2(num1: number, num2: number) {
        num1 + num2
    };
    const res2 = add2(4, 9);
    console.log(res2)


    //----------> function with interface

    interface Add2 {
        (num1: number, num2: number): number
    }
    const add3: Add2=(num1, num2)=>num1+num2;
    const res3=add3(4,9);
    console.log(res3)

    // 
}