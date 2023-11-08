{
    // 
    // generics
    let fruits1: Array<string> = ["mango", "jackfruit"];
    let val1: Array<number> = [1, 2, 3];


    // dynamically create generic parameter
    type GenericArray<T> = Array<T>
    
    let fruits2: GenericArray<string> = ["mango", "jackfruit"];
    let val2: GenericArray<number> = [1, 2, 3];

    // generic type of object

    interface User {
        name: string;
        contact: string;
        email?: string;
        address: string;
        roll: number;
    }
    const user: GenericArray<User> = [
        {
            name: "Bijori1",
            contact: "01933",
            email: "ab@gm.om",
            address: "Mirp 14",
            roll: 1243,
        },
        {
            name: "Bijori",
            contact: "019",
            email: "ab@gm.com",
            address: "Mirpur 14",
            roll: 113,
        },

    ]


    // generic tuple
    type GenericTuple<X, Y> = [X, Y]

    const newUser: GenericTuple<string, string> = ["mr.x", "mr.y"]
    // console.log(newUser[0])

    // tuple with different
    type NewUser = { name: string; email: string; age: number }
    const NewUserWithNewVal: GenericTuple<number, NewUser> = [123, { name: "Ismat", email: "a@e.com", age: 23, }]

    // 
}