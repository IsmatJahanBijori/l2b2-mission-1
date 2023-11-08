{
    // 
    // object destructuring
    const user = {
        name: "Bijori",
        contact: "019",
        age: 23,
        lesson: {
            l1: "html",
            l2: "css",
        }
    }
    const { contact: contactNo, lesson: { l1: learningPoint1 } } = user
    // destructuring e kokhon propertyr pore : type declare explicit way te kora jabe na, 
    // karon ekhane : diye j name declare kora hoy seta diye oi propertyr diff name convention hoy
    // const {contact : string , lesson:{l1:string}}=user  ---> Cannot redeclare block-scoped variable 'string'.


    // array destructuring
    const friends = ["A", "B", "C", "D", "E", "D", "C", "F"]
    const [a,b, bestFriend, ...rest]= friends

  //bestFriend=C, ...rest=D,E,F,D,C  
    // 
}