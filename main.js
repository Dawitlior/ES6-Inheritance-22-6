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
    return `numbersWheels:${this.numbersWheels}engineCapacity:${this.engineCapacity}color:${this.color}`;
  }
  static getMaxEngine(carsArr) {
    let maxEngine = carsArr[0];
    console.log(maxEngine);
    carsArr.forEach((car) => {
      if (car.engineCapacity > maxEngine.engineCapacity) {
        maxEngine = car;
      }
    });
    return maxEngine;
  }
}

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

const someName = new Buss(12, 1600, "black", "toyota");
const myArray = [myArray2, myArray2, someName];
const myArray2 = new Buss(busShow, engineCapacity, color);
console.log(MainCar.getMaxEngine(someName,myArray,myArray2));


let fail;
function sendTheForm(){
fail = new MainCar(someName1, someName,);
}
// console.log(someName.getTheResult());
