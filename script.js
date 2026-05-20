const colorBtn = document.getElementById('change_color');
const colotText = document.getElementById('')
// Function to generate a random hex color
function getRandomHexColor() {
    const hexCharacters = '0123456789ABCDEF';
    let hexColor = '#';
    
    // Loop 6 times to get 6 random characters
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * 16);
        hexColor += hexCharacters[randomIndex];
    }
    
    return hexColor;
}

// Change the background color on click
colorBtn.addEventListener('click', () => {
    const newColor = getRandomHexColor();
    document.body.style.backgroundColor = newColor;
    colorText.innerText = newColor;
});
