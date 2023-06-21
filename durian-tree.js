class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }

  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }

  // To get the boss of any employee.
  get bossOfEmployee() {
    return this.employee.boss;
  }

  // Returns the number of subordinates an employee has.
  get numberOfSubordinates() {
    return this.subordinates.length;
  }

  // Returns the number of people in between an employee and the CEO.
  get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;

    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople++;
    }

    return numberOfPeople;
  }

  // Returns true if two employees share the same boss and false otherwise.
  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }

  employeesThatMakeOver(amount) {

    let employees = [];

    if (this.salary > amount) {
      employees.push(this);
    }

    for (const subordinate of this.subordinates) {
      const subordinatesThatMakeOver = subordinate.employeesThatMakeOver(amount);
      employees = employees.concat(subordinatesThatMakeOver);
    }

    return employees;
  }

  get totalEmployees() {

    let totalEmployees = 1;

    for (const subordinate of this.subordinates) {

        totalEmployees = totalEmployees + subordinate.totalEmployees;
    }
    return totalEmployees;

  }
}

const ada = new Employee("Ada", "CEO", 3000000.00);
const craig = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela = new Employee("Angela", "VP Retail", 1000000);
const phil = new Employee("Phil", "VP Marketing", 1000000);

ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);

// console.log(craig.boss);
// console.log(craig.numberOfSubordinates);
// console.log(craig.numberOfPeopleToCEO);
// let wealthyEmployees = ada.employeesThatMakeOver(418401);
let employeeCount = ada.totalEmployees;
console.log(employeeCount);