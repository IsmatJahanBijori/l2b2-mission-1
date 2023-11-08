{
    // 
    //Type assertion / type narrowing

    let anything: any;
    // anything="Next Level";
    // const res=(anything as string).includes("k");
    anything = 233;
    const res = (anything as number).toString();   //white value
    // console.log(res)
    // console.log(anything)   // toString na dilei value number e asbe yellow value

    const kgToGM = (value: string | number): string | number | undefined => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `The value is : ${convertedValue}`;
            // console.log(convertedValue)

        }
        else if (typeof value === "number") {
            const convertedValue = value * 1000;
            return `The value is : ${convertedValue}`;
            // console.log(convertedValue)
        }
    }

    const res1=kgToGM("300") as string;
    const res2=kgToGM(500) as number;
    console.log(res1, res2)

    //  

}