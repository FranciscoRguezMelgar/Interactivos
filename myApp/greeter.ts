interface Person {
	firstName: string;
	lastName: string;
}

class Student {
	fullName: string;
	constructor(public firstName: string, public middlenInitial: string, public lastName: string) {
		this.fullName = firstName + " " + middlenInitial + " " + lastName;
	}
}

function greeter (person: Person) {
	return "Hello, " + person.firstName + "" + person.lastName;
}
let user = new Student("Gilito","Mc", "Pato");
document.body.innerHTML = greeter(user)