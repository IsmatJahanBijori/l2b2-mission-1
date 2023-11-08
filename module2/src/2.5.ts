{
    // 
    // function with array
    const createArray = (param: string): string[] => {
        return [param];
    }

    const res1 = createArray('BD')
    console.log(res1)


    // const createArray = (param: string): string => {
    //     return param;
    // }

    // const res1=createArray('BD')
    // console.log(res1)



    //2.
    //function with generics

    const createGenericArray = <T>(param: T): T[] => {
        return [param];
    }

    //string
    const res2 = createGenericArray<string>('BD')
    console.log(res2)

    //object
    type User = { id: number; name: string }
    const res3 = createGenericArray<User>({ id: 2, name: "mr. fish" })
    console.log(res3)



    //function with generic tuple
    const createGenericTuple = <T, P>(param1: T, param2: P): [T, P] => {
        return [param1, param2];
    }

    //ekhane type or interface toiri korar proyojon nay
    const user1 = createGenericTuple<number, string>(2, "hj")
    console.log(user1)
    const user2 = createGenericTuple<{ id: number }, string>({ id: 2 }, "hj")
    console.log(user2)



    // 
}