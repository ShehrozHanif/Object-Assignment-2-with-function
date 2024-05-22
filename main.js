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
const myTShirt = {
    name: 'Cool T-Shirt',
    price: 2000,
    color: 'white',
    inventory: {
        stock: 100,
        colorOptions: ['red', 'blue', 'green'],
        changeColor: function (newColor) {
            myTShirt.color = newColor;
            // Adjust the price based on the new color
            switch (newColor.toLowerCase()) {
                case 'red':
                    myTShirt.price *= 1.10; // Increase by 10% for red
                    break;
                case 'blue':
                    myTShirt.price *= 0.95; // Decrease by 5% for blue
                    break;
                default:
                    // Implement other color-based price adjustments if needed
                    break;
            }
        }
    }
};
// Example usage:
console.log(myTShirt); // Initial state
// myTShirt.inventory.changeColor('red');
// console.log(myTShirt); // After changing to red
myTShirt.inventory.changeColor('blue');
console.log(myTShirt); // After changing to blue
export {};
