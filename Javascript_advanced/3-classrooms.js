function createClassRoom(numberOfStudents) {
    // Creates and returns seat
    function studentSeat(seat) {
        return function () {
            return seat;
        };
    }
    // Array to hold student seats
    let students = [];

    for (let i = 0; i < numberOfStudents; i++) {
        // Example shows that i starts at 1 //
        students.push(studentSeat(i + 1))
    }

    return students;
}

let classRoom = createClassRoom(10);

// Test values //
console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());