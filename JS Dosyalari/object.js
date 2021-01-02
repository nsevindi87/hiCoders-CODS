/* //OBJECT - icinde object ve this fonksiyonu
const person = {
firstName: "Mehmet",
    lastName: "Dogan",
    age: 40,
    salary: 50000.00,
    married: true,
    death: null,
    birthDate: new Date(1, 1, 1978),
    children: [
        "Büsra", "Serhat", "Elif"
    ],
    adress: {
        street: "Musterstra. 19",
        zip: "98673",
        city: "Zurich",
        country: "Switzerland"
    },
    hasChildren() {
        return this.children.length > 0;
    },
    isTheSalaryHigh() {
        return this.salary > 60000;
    }
};
console.log(person.hasChildren());
console.log("Maasi yeterli mi?", person.isTheSalaryHigh()) */

/* //erisim
const person = {
    firstName: "Mehmet",
    lastName: "Dogan",
    age: 40,
    salary: 50000.00,
    married: true,
    death: null,
    birthDate: new Date(1, 1, 1978),
    children: [
        "Büsra", "Serhat", "Elif"
    ],
    adress: {
        street: "Musterstra. 19",
        zip: "98673",
        city: "Zurich",
        country: "Switzerland"
    },
    hasChildren() {
        return this.children.length > 0;
    },
    isTheSalaryHigh() {
        return this.salary > 60000;
    }
};

console.log(person.adress.city);
console.log(person["salary"]);
console.log(person["adress"]["city"]);

let { //object destructuring
    age,
    lastName
} = person;
console.log(age, lastName);
 */


/* //Objecte sonradan bilgi ekleme -
const person = {
    firstName: "Mehmet",
    lastName: "Dogan",
    age: 40,
    salary: 50000.00,
    married: true,
    death: null,
    birthDate: new Date(1, 1, 1978),
    children: [
        "Büsra", "Serhat", "Elif"
    ],
    adress: {
        street: "Musterstra. 19",
        zip: "98673",
        city: "Zurich",
        country: "Switzerland"
    },
    hasChildren() {
        return this.children.length > 0;
    },
    isTheSalaryHigh() {
        return this.salary > 60000;
    }
};




person.friends = ["Mustafa", "Mesut"];
console.log(person.friends)

person.firstName = "Cemil";
console.log(person.firstName);

 */

/* array icinde object
const personList = [{
        firstName: "Joey",
        lastName: "Tribiani",
        age: 29,
        salayr: 2000.00
    },
    {
        firstName: "Ross",
        lastName: "Geller",
        age: 30,
        salayr: 56000.00
    },
    {
        firstName: "Rachel",
        lastName: "Green",
        age: 29,
        salayr: 48000.00
    }
];*/