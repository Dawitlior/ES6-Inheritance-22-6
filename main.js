class Teacher {
  static counter = 0;
  constructor(fullName, age, salary) {
    this.fullName = fullName;
    this.age = age;
    this.salary = salary;
    Teacher.counter++;
  }

  static printOlderTeacher(firstTeacher, secundTeacher) {
    if (firstTeacher.age > secundTeacher.age) {
      console.log(firstTeacher);
      return;
    }
    console.log(secundTeacher);
  }
}
console.log(Teacher.counter);
const teacher1 = new Teacher("lior dawit", 25, 2000);
const teacher2 = new Teacher("yaso mlako", 26, 2300);
console.log(Teacher.counter);
printOlderTeacher(teacher1, teacher2);
// ------------------------------------------------------------------------------------------------

let someItem1 = 0;
let someItem2 = 0;

class MainCar {
  constructor(numbersWheels, engineCapacity, color) {
    this.numbersWheels = numbersWheels;
    this.engineCapacity = engineCapacity;
    this.color = color;
  }
  printDetails() {
    return `numbersWheels:${this.numbersWheels},engineCapacity:${this.engineCapacity},color:${this.color}`;
  }
  static getMaxEngine(car1, car2) {
    car1.forEach((item) => {
      someItem1 = item.engineCapacity;
      return someItem1;
    });

    car2.forEach((element) => {
      someItem2 = element.engineCapacity;
      return someItem2;
    });
    if (someItem1 > someItem2) {
      return someItem1;
    } else {
      return someItem2;
    }
  }
}
const firstShow1 = new MainCar(4, 1600, "black");
const firstShow2 = new MainCar(8, 2500, "red");
const arrayCar1 = [firstShow1];
const arrayCar2 = [firstShow2];
MainCar.getMaxEngine(arrayCar1, arrayCar2);

class SportCar extends MainCar {
  constructor(numbersWheels, engineCapacity, color, name) {
    super(numbersWheels, engineCapacity, color);
    this.name = name;
  }
  printDetails() {
    return `${this.printDetails}:${this.name}`;
  }
}

class Jeep extends MainCar {
  constructor(numbersWheels, engineCapacity, color, name) {
    super(numbersWheels, engineCapacity, color);
    this.name = name;
  }
  printDetails() {
    return `${this.printDetails}${this.name}`;
  }
}
const someName1 = new Jeep(4, 1800, "green", "SSSSiDFor");
console.log(someName1.printDetails());

class Buss extends MainCar {
  constructor(numbersWheels, engineCapacity, color, name) {
    super(numbersWheels, engineCapacity, color);
    this.name = name;
  }
  printDetails() {
    return `${this.printDetails}:${this.name}`;
  }
  firstAndLastNameToUpperCase() {
    let stringCatch =
      this.name.charAt(0).toUpperCase() +
      this.name.slice(1, this.name.length - 1) +
      this.name.charAt(this.name.length - 1).toUpperCase();
    return stringCatch;
  }
  get TheResult() {
    return this.firstAndLastNameToUpperCase();
  }
}

let fail;
function sendTheForm() {
  fail = new MainCar(put1.value, put2.value, put3.value);
  tr_head.innerHTML += `<td>${fail.color}</td><td>${fail.engineCapacity}</td>${fail.numbersWheels}</td>`
  console.log(fail);
}
