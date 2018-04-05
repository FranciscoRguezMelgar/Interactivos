var Student = /** @class */ (function () {
    function Student(firstName, middlenInitial, lastName) {
        this.firstName = firstName;
        this.middlenInitial = middlenInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middlenInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + "" + person.lastName;
}
var user = new Student("Gilito", "Mc", "Pato");
document.body.innerHTML = greeter(user);
