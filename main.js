class Teacher{
    constructor(fullName,age,salary){
        this.fullName = fullName;
        this.age = age;
        this.salary = salary
    }
    static printOlderTeacher(firstTeacher,secundTeacher){
        if(firstTeacher.age>secundTeacher.age){
            console.log(firstTeacher);
            return
        }
        console.log(secundTeacher);
    }
}
const teacher1 = new Teacher("lior dawit",25,2000);
const teacher2 = new Teacher("yaso mlako",26,2300);
printOlderTeacher(teacher1,teacher2)