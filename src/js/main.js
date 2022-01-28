console.log("hello world");
console.log("hello world 1");

console.log("hello world 23");

const var1 = "hello const";

let var2 = "hello const let";

const obj = {
    name: "joshua",
    age: 23
};

console.log(var1);
console.log(var2);
console.log(JSON.stringify(obj));
/**
 * this is my first class in documentation
 */
class Person {
    /**
     * @param {string} name - name of the person 
     * @param {number|string} age - age of the person 
     */
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    /**
     * get name of the person1
     * @returns {string} - name of the person
     */
    getName() {
        return this.name;
    }

    /**
     * set the name of the person
     * @param {string} name 
     */
    setName(name) {
        this.name = name;
    }
}

const person1 = new Person("joshua", 23);
console.log(person1.getName());
person1.setName("maj");
console.log(person1.getName());