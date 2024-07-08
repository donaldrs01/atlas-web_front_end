function welcomeMessage(fullName) {
    return function () {
        // String interpolation requires backticks
        alert(`Welcome ${fullName}`);
    }
}
let guillaume = welcomeMessage("Guillaume");
let alex = welcomeMessage("Alex");
let fred = welcomeMessage("Fred");

guillaume();
alex();
fred();