class Employee {

	constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
	}


    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
    
    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee"
    }
}

let e = new Employee();
console.log(typeof(e))

module.exports = Employee;