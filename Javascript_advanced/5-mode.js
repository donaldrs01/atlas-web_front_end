function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = `${size}px`;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main() {
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
    
    // Create text on page by creating <p> and text elements and appending them to HTML body
    const paragraph = document.createElement('p');
    const text = "Welcome Holberton!";
    paragraph.append(text);
    document.body.append(paragraph);
    // Spooky Button
    const spookyButton = document.createElement("button");
    spookyButton.textContent = "Spooky";
    spookyButton.addEventListener('click', spooky);
    document.body.append(spookyButton);
    // Dark Mode Button
    const darkModeButton = document.createElement("button");
    darkModeButton.textContent = "Dark Mode";
    darkModeButton.addEventListener('click', darkMode);
    document.body.append(darkModeButton);
    // Scream Mode Button
    const screamModeButton = document.createElement("button");
    screamModeButton.textContent = "Scream Mode";
    screamModeButton.addEventListener('click', screamMode );
    document.body.append(screamModeButton);
}

main();