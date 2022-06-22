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
    return `${this.numbersWheels}:${this.engineCapacity}:${this.color}`;
  }
  static getObjAndReturnTheHighEngine(obj1,obj2){
  
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

class Car2 extends MainCar {
  constructor(numbersWheels, engineCapacity, color, name) {
    super(numbersWheels, engineCapacity, color);
    this.name = name;
  }
  printDetails() {
    return `${this.printDetails}${this.name}`;
  }
}
const someName1 = new Car2(4, 1800, "green", "SSSSiDFor");
console.log(someName1.printDetails());

class Car3 extends MainCar {
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
  getTheResult(){
    return this.firstAndLastNameToUpperCase();
  }
  
}

const someName = new Car3(12,1600,"black","toyota");
// console.log(someName.getTheResult());