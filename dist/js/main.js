"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

console.log("hello world");
console.log("hello world 1");
console.log("hello world 23");
var var1 = "hello const";
var var2 = "hello const let";
var obj = {
  name: "joshua",
  age: 23
};
console.log(var1);
console.log(var2);
console.log(JSON.stringify(obj));
/**
 * this is my first class in documentation
 */

var Person = /*#__PURE__*/function () {
  /**
   * @param {string} name - name of the person 
   * @param {number|string} age - age of the person 
   */
  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }
  /**
   * get name of the person1
   * @returns {string} - name of the person
   */


  _createClass(Person, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
    /**
     * set the name of the person
     * @param {string} name 
     */

  }, {
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
  }]);

  return Person;
}();

var person1 = new Person("joshua", 23);
console.log(person1.getName());
person1.setName("maj");
console.log(person1.getName());