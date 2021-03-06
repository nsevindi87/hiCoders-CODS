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
];
*/

/* //newPerson object
const newPerson = {
    firstName: "John",
    lastName: "Smith",
    isAlive: true,
    age: 25,
    adress: {
        streetAdress: "21 2nd Street",
        city: "New York",
        state: "NY",
        postalCode: "10021-3100"
    },
    phoneNumbers: [{
            type: "home",
            number: "212 555-1234"
        },
        {
            type: "office",
            number: "646 555-4567"
        },
        {
            type: "mobile",
            number: "123 456-7890"
        }
    ],
    children: [],
    spouse: null,

    reachPhone(time) {
        if (time == "day") {
            return this.phoneNumbers[0];
        } else {
            return this.phoneNumbers[1];
        }
    }
}

console.log(newPerson.phoneNumbers.length);
console.log(newPerson.adress.city);
console.log(newPerson.children.length);
console.log(newPerson.spouse);
console.log(newPerson.reachPhone("day")); */


//OBJECTLERIN ONEMLI METHODLARI 

/* //object.assign (birlestirme)
const target = {
    a: 1,
    b: 2
};
const source = {
    b: 4,
    c: 5
};

const returnedTarget = Object.assign(target, source); //concat gibi

console.log(target); //artik degisti  - ayni etiket varsa degistirir.
console.log(returnedTarget); // son hali - aynisi */

/* //object.create ile var olan bir objeyi alip cogalttim ve degistirdim
const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};
person.printIntroduction();

const me = Object.create(person);
me.name = "Ali";
me.isHuman = true;
me.printIntroduction(); */

/* //object.values ile objedeki sadece degerler alinabilir.
const object1 = {
    a: 'somestring',
    b: 42,
    c: true
};
console.log(Object.values(object1)); */

/* //object.keys ile objedeki sadece degerler alinabilir.
const object1 = {
    a: 'somestring',
    b: 42,
    c: true
};
console.log(Object.keys(object1)); */