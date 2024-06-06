/*This Assignment is divided into three parts, each focusing on using type aliases to model real world scenario

Part 1: Employee Data
Challenge:
1. Design a type alias named Employee to represent an employee object with properties like name(string),depatment(string), and role(string).
2. Include an optional nested Object named contact to hold phone and email information(if provided).
3. Employ a union type for the role property to restrict it to "Manager" ,"Engineer", or "Intern".
4. Make a skill property an optional array of string for listing an employee's skill(if any)  */
let employee = {
    name: "shehroz",
    department: "Finance",
    role: "Manger",
    contact: {
        email: "ShehrozHanif@gmail.com",
    },
    skill: ["BlockChain Developer"]
};
console.log(employee);
let car1 = {
    name: "Civic",
    model: 2025,
    color: "Red Vine",
    engine: {
        horsePower: 200,
    },
    getHorsePower: function () {
        return this.engine.horsePower;
    }
};
console.log(car1.getHorsePower());
let shirt = {
    name: "polo",
    price: 2000,
    color: "white",
    inventory: {
        stock: 100,
        colorOption: ["red", "blue", "black"],
        changeColor: function (newColor) {
            shirt.color = newColor;
            // Adjust the price based on the new color
            switch (newColor.toLowerCase()) {
                case 'red':
                    shirt.price *= 1.10; // Increase by 10% for red
                    break;
                case 'blue':
                    shirt.price *= 0.95; // Decrease by 5% for blue
                    break;
                default:
                    break;
            }
        }
    }
};
shirt.inventory.changeColor("BLUE"); //For more checing you can change the color to red or add any other color through chagneColor function
console.log(shirt);
export {};
