// Function to generate a random hex color
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Event Listener for the button
document.getElementById('colorBtn').addEventListener('click', function () {
    let newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    document.getElementById('colorCode').textContent = newColor;
});
