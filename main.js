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
//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------

class MainCar {
  constructor(numbersWheels, engineCapacity, color) {
    this.numbersWheels = numbersWheels;
    this.engineCapacity = engineCapacity;
    this.color = color;
  }
  getDetails() {
    return this.printDetails;
  }
  printDetails() {
    return `numbers-Wheels:${this.numbersWheels}engine-Capacity:${this.engineCapacity}color:${this.color}`;
  }
}
class Car1 extends MainCar {
  getTheFunction() {
    return this.getDetails;
  }
}

class Car2 extends MainCar {
  getTheFunction1() {
    return this.getDetails()
  }
}

class Car3 extends MainCar {}
