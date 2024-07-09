const roomDimensions = {
    width: 50,
    length: 100,
    getArea: function() {
        return this.length * this.width;
    }
};

const boundGetArea = roomDimensions.getArea.bind(roomDimensions);
// Creates 'bind function' that carries correct area value in any other context

// Test case
console.log(boundGetArea()); // should display 5000