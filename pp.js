//Pat 3 colorful shirt in a function
const changeColor = (product, newColor) => {
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
};
const createProduct = (name, price, color, stock, colorOption) => {
    const product = {
        name,
        price,
        color,
        inventory: {
            stock,
            colorOption,
            changeColor: (product, newColor) => changeColor(product, newColor)
        }
    };
    return product;
};
const myShirt = createProduct("cool T-shirt", 30, "white", 200, ["red", "green", "blue"]);
// console.log(myShirt)
// myShirt.inventory.changeColor(myShirt, "red");
// // // console.log(myShirt);
myShirt.inventory.changeColor(myShirt, "blue");
const newEmployee = (name, department, role, phone, email, skill) => {
    const employee = {
        name,
        department,
        role,
        skill,
    };
    //    Only add the contact property if phone or email is provided
    if (phone || email) {
        employee.contact = {
            phone,
            email,
        };
    }
    return employee;
};
let newEmployee1 = newEmployee("Shehroz Hanif", "Ethical Hacking", "Software Engineer", +3256);
const carObj = (name, model, color, horsePower) => {
    const carObject = {
        name,
        model,
        color,
        engine: {
            horsePower
        },
        getHorsePower() {
            return this.engine.horsePower;
        }
    };
    return carObject;
};
const car1 = carObj("Civic", 2025, "Vine", 250);
console.log(car1);
console.log(car1.getHorsePower());
export {};
