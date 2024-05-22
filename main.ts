/*This Assignment is divided into three parts, each focusing on using type aliases to model real world scenario 

Part 1: Employee Data 
Challenge:
1. Design a type alias named Employee to represent an employee object with properties like name(string),depatment(string), and role(string).
2. Include an optional nested Object named contact to hold phone and email information(if provided).
3. Employ a union type for the role property to restrict it to "Manager" ,"Engineer", or "Intern".
4. Make a skill property an optional array of string for listing an employee's skill(if any)  */
 
type Employee={
    name:string,
    department:string,
    role: "Manger"|"Engineer"|"Intern",  // Union type
    contact?:{               
        phone?:number,                    // Nested Object
        email:string,
    }
    skill?:string[]
    
}


let employee:Employee={
    name:"shehroz",
    department:"Finance",
    role:"Manger",
    contact:{
        email:"ShehrozHanif@gmail.com",
        
    },
    skill:["BlockChain Developer"]
}

console.log(employee)


//Part 2: Car Details
//challenge:
//1.Design a type alias named product to represent a car object.
//2.Include a Nested Object named engine within Car, containing a property named horsepower(number).
//3.Define a function named getHorsePower directly within the car type alias to recieve the engine's horsepower.

type car ={
    name:string,
    model:number,
    color:string
    engine:{
        horsePower:number
    }
    getHorsePower:()=>any;
}

let car1:car={
    name:"Civic",
    model:2025,
    color:"Red Vine",
    engine:{
        horsePower:200,
    },
    getHorsePower:function(){
        return this.engine.horsePower
    }
    
}

console.log(car1.getHorsePower())





/* Part 3: Colorful T-shirts
 challenge:
 1.Design a type alias named product to represent a T-shirt Object with properties like name(string), price(number), and color (string).
 2.Include a Nested Object named inventory within product.This inventory object should have two properties:
  . stock(number):Represent the number of T-shirts available.
  . colorOptions(Optional array of strings):Lists available colors(if any)
 3.Inside a inventory object ,define a function named changeColor.This function accept a new color string as an argument.When called,it should:
  . Update the colorr property of the product object.
  . Adjust the price based on the new color(implement your own logic, e.g, increase by 10% for red, decrease by 5% for blue)  
*/



type product ={
    name:string,
    price:number
    color:string,
    inventory:{
        stock:number,
        colorOption?:string[]
        changeColor:(newColor:string)=>void
    }
}

let shirt:product = {
    name:"polo",
    price:2000,
    color:"white",
    inventory:{
        stock:100,
        colorOption:["red","blue","black"],
        changeColor:function(newColor:string){            
           shirt.color = newColor

           // Adjust the price based on the new color
           switch(newColor.toLowerCase()){
            case 'red':
                shirt.price *= 1.10;   // Increase by 10% for red
                break;
            case 'blue':
                shirt.price *= 0.95;   // Decrease by 5% for blue
                break;
            default:
                break;



           }
        }
    }
}


shirt.inventory.changeColor("BLUE") //For more checing you can change the color to red or add any other color through chagneColor function
console.log(shirt)