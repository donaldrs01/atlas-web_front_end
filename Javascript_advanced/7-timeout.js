console.log("Start of the execution queue")
;
setTimeout(function() {
    // Displays only after loop hass finished (stack clears) 
    console.log("Final code block to be executed")
}, 0);

for (let i = 0; i <= 100; i++) {
    console.log(i);
}

console.log("End of the loop printing");