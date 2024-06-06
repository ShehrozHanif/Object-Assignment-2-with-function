//Pat 3 colorful shirt in a function

type Product = {
    name: string,
    price: number,
    color: string,
    inventory: {
        stock: number,
        colorOption?: string[],
        changeColor: (product: Product, newColor: string) => void
    }
}

const changeColor = (product: Product, newColor: string): void => {
    product.color = newColor;

    // Adjust the price based on new color
    switch (newColor.toLowerCase()) {
        case 'red':
            product.price *= 1.10;
            // Increase by 10%
            break;
        case 'blue':
            product.price *= 0.95;
            // Decrease by 5%
            break;
        default:
            // Implement other color price adjustment if needed
            break;
    }
}

const createProduct = (name: string, price: number, color: string, stock: number,colorOption?: string[]):Product => {
    const product:Product = {
        name,
        price,
        color,
        inventory: {
            stock,
            colorOption,
            changeColor: (product: Product, newColor: string) => changeColor(product, newColor)
        }
    };
    return product;
}

const myShirt = createProduct("cool T-shirt", 30, "white", 200, ["red", "green", "blue"]);
// console.log(myShirt)

// myShirt.inventory.changeColor(myShirt, "red");
// // // console.log(myShirt);

myShirt.inventory.changeColor(myShirt, "blue");
// console.log(myShirt)


/*This Assignment is divided into three parts, each focusing on using type aliases to model real world scenario 

Part 1: Employee Data 
Challenge:
1. Design a type alias named Employee to represent an employee object with properties like name(string),depatment(string), and role(string).
2. Include an optional nested Object named contact to hold phone and email information(if provided).
3. Employ a union type for the role property to restrict it to "Manager" ,"Engineer", or "Intern".
4. Make a skill property an optional array of string for listing an employee's skill(if any)  */
type Role = "Software Engineer"|"Matketinf Manager"|"Engineer"
type Employee ={
    name:string,
    department:string,
    contact?:{
        phone?:number,
        email?:string,
    }
    role:Role,
    skill?:string
    
}

const newEmployee =(name:string,department:string,role:Role,phone?:number,email?:string,skill?:string):Employee=>{
    const employee:Employee={
        name,
        department,
        role,
        skill,
     }

      //    Only add the contact property if phone or email is provided
      if (phone || email) {
        employee.contact = {
            phone,
            email,
        }
     }



    return employee
}

let newEmployee1 = newEmployee("Shehroz Hanif","Ethical Hacking","Software Engineer",+3256,)
// console.log(newEmployee1) 




//Part 2: Car Details
//challenge:
//1.Design a type alias named product to represent a car object.
//2.Include a Nested Object named engine within Car, containing a property named horsepower(number).
//3.Define a function named getHorsePower directly within the car type alias to recieve the engine's horsepower.


type car = {
    name:string,
    model:number,
    color:string,
    engine:{
        horsePower:number
    }
    getHorsePower:()=>number
    

}



const carObj= (name:string,model:number,color:string,horsePower:number):car=>{
    const carObject:car={
        name,
        model,
        color,
        engine:{
            horsePower
        },
        getHorsePower(){
            return this.engine.horsePower;
        }
        
        
    }
    return carObject
}


const car1 = carObj("Civic",2025,"Vine",250)
console.log(car1)
console.log(car1.getHorsePower())