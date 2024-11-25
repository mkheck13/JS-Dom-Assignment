// Page Elements
let boxNumberInput = document.getElementById("boxNumberInput");
let changeColorInput = document.getElementById("changeColorInput");

let changeColorBtn = document.getElementById("changeColorBtn");
let resetColorBtn = document.getElementById("resetColorBtn");

// Event Listeners
changeColorBtn.addEventListener('click', changeBoxColor);
resetColorBtn.addEventListener('click', resetBoxColors);

// Map of the boxes and their ID's
let boxMap = {
    1: "box1",
    2: "box2",
    3: "box3",
    4: "box4",
    5: "box5",
    6: "box6",
    7: "box7",
    8: "box8",
};

// Allowed Colors
let allowedColors = ['red', 'blue', 'purple', 'brown', 'yellow'];

// Color Chnage Function
function changeBoxColor() {

    // Parses the box number and makes sure its valid
    let boxNumber = parseInt(boxNumberInput.value);
    let color = changeColorInput.value.toLowerCase();

    // Check if the box number is correct
    if (boxNumber < 1 || boxNumber > 8) {
        alert("That was not a correct box number. Please enter a box number between 1 and 8");
        return;
    }

    // Check if the color is correct
    if (!allowedColors.includes(color)) {
        alert(`That was not a valid color. Please use: (${allowedColors.join(", ")})`);
        return;
    }

    // Color Change Of The Boxes
    let boxId = boxMap[boxNumber];
    let box = document.getElementById(boxId);
    box.style.background = color;
}

// Function to reset Box Colors
function resetBoxColors() {
    Object.values(boxMap).forEach(boxId => {
        let box = document.getElementById(boxId);
        box.style.background = "";
    });
}