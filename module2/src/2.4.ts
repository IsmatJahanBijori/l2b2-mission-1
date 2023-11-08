{
    // 
    // generic with interface

    type User = { name: string; age: number; }
    const user: User[] = [
        {
            name: "B",
            age: 23,
        },
        {
            name: "G",
            age: 34,
        },
    ]


    //generic with interface
    interface Developer<T> {
        name: string;
        computer: {
            brand: string;
            model: string;
            release: number;
        }
    }
    type Brand = { brand: string }
    const juniorDev: Developer<Brand> = {
        name: "A",
        computer:{
            brand: "acer",
            model: "extensa",
            release: 15,
        }
    }
    // 
}