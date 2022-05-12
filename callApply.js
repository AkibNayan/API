const normalPeople = {
    firstName: "Akib",
    lastName: "Nayan",
    salary: 150000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount) {
        this.salary = this.salary - amount;
        //console.log(this.salary);
        return this.salary;
    }
}
const heroPerson = {
    firstName: "Hero",
    lastName: "Balam",
    salary: 25000
}
const friendlyPerson = {
    firstName: "Hero",
    lastName: "Golam",
    salary: 25000
}
//normalPeople.chargeBill();
// const heroChargeBill = normalPeople.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// console.log(heroPerson);
// heroChargeBill(3000);
// console.log(heroPerson);
// console.log(normalPeople.salary);

// normalPeople.chargeBill.call(heroPerson, 2500);
// console.log(heroPerson);
// normalPeople.chargeBill.call(friendlyPerson, 3000);
// console.log(friendlyPerson.salary);

normalPeople.chargeBill.apply(heroPerson, [2000]);
console.log(heroPerson);