// class Teacher {
//   static counter = 0;
//   constructor(fullName, age, salary) {
//     this.fullName = fullName;
//     this.age = age;
//     this.salary = salary;
//     Teacher.counter++;
//   }

//   static printOlderTeacher(firstTeacher, secundTeacher) {
//     if (firstTeacher.age > secundTeacher.age) {
//       console.log(firstTeacher);
//       return;
//     }
//     console.log(secundTeacher);
//   }
// }
// console.log(Teacher.counter);
// const teacher1 = new Teacher("lior dawit", 25, 2000);
// const teacher2 = new Teacher("yaso mlako", 26, 2300);
// console.log(Teacher.counter);
// printOlderTeacher(teacher1, teacher2);
//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------

class MainCar {
  constructor(numbersWheels, engineCapacity, color) {
    this.numbersWheels = numbersWheels;
    this.engineCapacity = engineCapacity;
    this.color = color;
  }
  printDetails() {
    document.getElementById(
      "myP"
    ).innerText = `numbers-Wheels:${this.numbersWheels}engine-Capacity:${this.engineCapacity}color:${this.color}`;
  }
}
class SportCar extends MainCar {
  constructor(numbersWheels, engineCapacity, color, name) {
    super(numbersWheels, engineCapacity, color);
    this.name = name;
    this.getDetails;
  }
  getDetails1() {
    return super.printDetails();
  }
  madeTheNameUpperCase() {
    for (const key in SportCar) {
      if (SportCar.name == SportCar.name.toLowerCase) {
        const element = object[key];
      }
    }
  }
}
const lior = new SportCar(4,1600,"black","daniel");
console.log(lior);

class Car2 extends MainCar {
  constructor(numbersWheels, engineCapacity, color, name, size) {
    super(numbersWheels, engineCapacity, color, name);
    this.size = size;
    getDetails();
  }
  getDetails1() {
    return super.printDetails();
  }
}

class Car3 extends MainCar {
  constructor(numbersWheels, engineCapacity, color, name, size, country) {
    super(numbersWheels, engineCapacity, color, name, size);
    this.country = country;
    getDetails();
  }
  getDetails1() {
    return super.printDetails();
  }
}
