{
    //
    //union types | mane hoy eta nahoy ota

    type Typo1 = (string | number)
    let code: Typo1;
    code = 123;   // OK
    code = "ABC"; // OK
    // code = false; // Compiler Error //Type 'boolean' is not assignable to type 'string | number'. 

    type Type2 = string | boolean
    let empId: Type2;
    // empId = 111; // Compiler Error  //Type 'number' is not assignable to type 'string | boolean'. 
    empId = "E111"; // OK
    empId = true; // OK




    //intersection types  & mane sob
    type Typo3 = (string & number)
    let code1: Typo1;
    code1 = 123;   // OK
    code1 = "ABC"; // OK
    //  
}