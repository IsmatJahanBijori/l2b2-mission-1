{
    //


    //spread operator [array theke element gula element akare spread kore]
    const a: string[] = ["A", "B", "C", "D"]
    const b: string[] = ["D", 'E']
    a.push(...b)
    // a.push(b)        Argument of type 'string[]' is not assignable to parameter of type 'string'




    // rest operator  [element gula ekta array te niye ashe]
    // const friends:string[]=["A", "B", "C", "D", 'E']
    const greetFriends = (...friends: string[]) => {
        friends.forEach((fre: string) => console.log(`Hi ${fre}`))
    }

    greetFriends("A", "B", "C", "D", 'E')






    //
}