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
    constructor(brand, model, year, color) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    getInfo() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`);
        if (this.owner) {
            console.log("Owner:");
            this.owner.getInfo();
        }
    }

    setOwner(Person) {
        if (Person.age < 18) {
            console.log("Owner must be at least 18 years old.");
            return;
        }
        this.owner = Person;
    }
}




// Example :

const person1 = new Person("John", 25);
const person2 = new Person("Mark", 17);
const person3 = new Person("Kent", 30);


const car1 = new Car("Toyota", "Corolla", 2015, "blue", person1);
const car2 = new Car("Honda", "Civic", 2020, "green", person2);
const car3 = new Car("Ford", "Focus", 2018, "red", person3);

car1.setOwner(person1)
car1.getInfo();
car2.setOwner(person2)
car2.getInfo();
car3.setOwner(person3)
car3.getInfo();
