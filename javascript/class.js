class Human {
    constructor() {
        this._ssn;
        this._name = "Hong";
        this._age;
    }

    get ssn() {
        return this._ssn;
    }
    set ssn(ssn) {
        this._ssn = ssn;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }

    getInfo() {
        console.log(this._ssn, this._name, this._age);
    }
}

let hu = new Human();

hu.ssn = "991225";
hu.name = "Kang";
hu.age = 25;

hu.getInfo();