{

    type Products = Product[]
    interface Product {
        name: string;
        price: number;
        quantity: number;
    }
    const product: Products = [
        {
            name: "product1",
            price: 1243,
            quantity: 4,
        },
        {
            name: "product2",
            price: 113,
            quantity: 3,
        },

    ]

    function calculate(myCart: Products) {
        let sum=0;
        for (let item of myCart){
            sum+= item.price*item.quantity;
        }
        return sum;
    }

    const result= calculate(product);
    console.log(result)
    
}