class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartment {
    addResident(resident) {
        if (!this.residents) {
            this.residents = [];
        }
        this.residents.push(resident);
    }
}

class House {
    constructor(maxApartments) {
        this.apartments = [];
        this.maxApartments = maxApartments;
    }

    addApartment(apartment) {
        if (this.apartments.length < this.maxApartments) {
            this.apartments.push(apartment); // Add apartment if within the limit
        } else {
            console.log("Cannot add more apartments. Maximum capacity reached.");
        }
    }

    showDetails() {
        console.log(`House details - Number of apartments: ${this.apartments.length}`);
        this.apartments.forEach((apartment, index) => {
            console.log(`Apartment ${index + 1} - Resident:`);
            apartment.residents.forEach(resident => console.log(resident.name));
        });
    }
}

// Example :
const person1 = new Person("Max", "male");
const person2 = new Person("Sofia", "female");
const person3 = new Person("Kate", "female");

const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();

apartment1.addResident(person1);
apartment2.addResident(person2);
apartment3.addResident(person3);

const house = new House(2);

house.addApartment(apartment1);
house.addApartment(apartment2);
house.addApartment(apartment3);

house.showDetails();
