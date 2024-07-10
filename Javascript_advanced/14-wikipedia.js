function createElement(data) {
    const paragraph = document.createElement("p");
    // Set content of paragraph to passed data string
    paragraph.textContent = data;
    // Append paragraph to body of doc
    document.body.append(paragraph);
}

function queryWikipedia(callback) {
    const request = new XMLHttpRequest();
    const url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*"

    request.open('GET', url);
}