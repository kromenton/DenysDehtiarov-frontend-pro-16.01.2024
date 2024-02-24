class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

class Car {
    constructor(brand, model, year, color, owner) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.owner = owner;
        if (owner.age < 18) {
            this.owner = null;
        }
    }

    getInfo() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`);
        if (this.owner) {
            console.log("Owner:");
            this.owner.getInfo();
        } else {
            console.log("Owner must be at least 18 years old.");
        }
    }
}

// Example :

const person1 = new Person("John", 25);
const person2 = new Person("Alice", 17);
const person3 = new Person("Bob", 30);


const car1 = new Car("Toyota", "Corolla", 2015, "blue", person1);
const car2 = new Car("Honda", "Civic", 2020, "green", person2);
const car3 = new Car("Ford", "Focus", 2018, "red", person3);

car1.getInfo();
car2.getInfo();
car3.getInfo();
