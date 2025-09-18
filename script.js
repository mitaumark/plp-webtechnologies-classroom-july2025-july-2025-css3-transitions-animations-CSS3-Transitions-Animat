// -----------------------
// Part 2: JavaScript Functions
// -----------------------

// Example of function with parameters & return value
function calculateArea(width, height) {
  return width * height; // Returns area
}

// Demonstrating global vs local scope
let globalMessage = "Global Variable Accessible Everywhere";

function showArea(w, h) {
  let localMessage = "Local Variable Inside Function"; // Scope limited to this function
  let area = calculateArea(w, h);

  document.getElementById("calc-output").innerText =
    `Width: ${w}, Height: ${h} → Area = ${area}`;
  
  console.log(globalMessage); // Works
  console.log(localMessage); // Works here
}

// -----------------------
// Part 3: Combining CSS + JS
// -----------------------

// Toggle popup by adding/removing the "active" CSS class
function togglePopup() {
  const popup = document.getElementById("popup");
  popup.classList.toggle("active");
}
