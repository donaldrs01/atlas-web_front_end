const globalVariable = "Welcome";

function outer() {
    alert(globalVariable);
    let course = 'Holberton';
    function inner() {
        alert(globalVariable + " " + course)
        let exclamation = "!"
        function inception() {
            alert(globalVariable + " " + course + exclamation);
        }
        // Calling 'inception' function inside 'inner' function
        inception();
    }
    // Calling 'inside' function inside 'outer' function
    inner();
}
// Calling 'outer' function outside in main code
outer();