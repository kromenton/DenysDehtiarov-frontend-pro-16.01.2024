class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = [];

        this.MAX_ATTENDANCE_COUNT = 25;
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    addGrade(grade) {
        this.grades.push(grade);
    }

    present() {
        if (this.attendance.length < this.MAX_ATTENDANCE_COUNT) {
            const emptyIndex = this.attendance.indexOf(undefined);
            if (emptyIndex !== -1) {
                this.attendance[emptyIndex] = true;
            } else {
                this.attendance.push(true);
            }
        }
    }

    absent() {
        if (this.attendance.length < this.MAX_ATTENDANCE_COUNT) {
            const emptyIndex = this.attendance.indexOf(undefined);
            if (emptyIndex !== -1) {
                this.attendance[emptyIndex] = false;
            } else {
                this.attendance.push(false);
            }
        }
    }


    summary() {
        const averageGrade =
            this.grades.reduce((total, grade) => total + grade, 0) /
            this.grades.length;
        const averageAttendance =
            this.attendance.filter((status) => status === true).length /
            (this.attendance.filter((status) => status === true).length +
                this.attendance.filter((status) => status === false).length);

        const studentDetails = `Name: ${this.firstName} ${this.lastName
            }, Age: ${this.getAge()}, Average Grade: ${averageGrade}`;

        if (averageGrade > 90 && averageAttendance > 0.9) {
            return `${studentDetails} - Well done!`;
        } else if (averageGrade > 90 || averageAttendance > 0.9) {
            return `${studentDetails} - Good, but you can do better`;
        } else {
            return `${studentDetails} - Bummer!`;
        }
    }
}


// Example :
const student1 = new Student('Robert', 'Scott', 1997);
const student2 = new Student('Peter', 'Smit', 2003);
const student3 = new Student('Maria', 'Duglas', 2000);

const gradesArray1 = [
    80, 85, 90, 95, 95, 88, 92, 87, 84, 91, 97, 83, 89, 86, 99, 94, 81, 93, 97,
    82, 96, 94, 97, 96, 98,
];
const gradesArray2 = [
    70, 65, 60, 75, 55, 68, 62, 77, 64, 71, 78, 73, 69, 72, 79, 74, 61, 63, 67,
    70, 66, 74, 65, 72, 68,
];
const gradesArray3 = [
    90, 92, 95, 88, 97, 93, 89, 91, 96, 94, 90, 95, 92, 88, 97, 93, 89, 91, 96,
    94, 90, 95, 92, 88, 97,
];

student1.grades = gradesArray1;
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
student1.absent();
console.log(student1.summary());

student2.grades = gradesArray2;
student2.present();
student2.absent();
student2.present();
student2.absent();
student2.present();
student2.absent();
student2.present();
student2.absent();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.absent();
student2.present();
console.log(student2.summary());

student3.grades = gradesArray3;
student3.present();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.present();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.present();
student3.absent();
student3.absent();
student3.absent();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
console.log(student3.summary());