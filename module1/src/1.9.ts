{
    //
    //type alias
    //object

    type Car = { type: string, model: string, year: number }

    const car1: Car = {
        type: "Toyota1",
        model: "Corolla1",
        year: 2008
    };

    const car2: Car = {
        type: "Toyota2",
        model: "Corolla2",
        year: 2009
    };


    //function
    type AddNumbers = (num1: number, num2: number) => number
    const add: AddNumbers = (num1, num2) => num1 + num2;

    // 
}