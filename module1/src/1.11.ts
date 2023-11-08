{
    //
    //    Ternary, optional chaining & nullish coalescing
    // ternary  condition  ?" " :" "
    const age: number = 18;
    if (age >= 18) {
        // console.log("adult")
    }
    else {
        // console.log("children")
    }

    const isAdult = age <= 15 ? "adult" : "not adult"
    // console.log(isAdult)

    // nullish operator    condition ?? " "
    const isUser = null;
    const res = isUser ?? "NO Guest"; //null or undefined true hole string boshbe
    const res1 = isUser ? isUser : "Guest"  //null true hole no guest, false hole guest
    // console.log(res, res1)


   //optional chaining 
   type User={
    name: string;
    contact: string;
    email?: string;    //email?: string | undefined;
    address: string;
   }

   const user: User={
    name: "Bijori",
    contact:"019",
    // email?: "ab@gm.com",
    address: "Mirpur 14"
   }
    // 
}