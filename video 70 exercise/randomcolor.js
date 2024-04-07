const random_color = () => {
    const random_number = Math.floor(Math.random() * 16777215);
    const random_code = "#" + random_number.toString(16);
    return random_code;
}

// Set random background color for the element with id "box"
document.getElementById("box").style.backgroundColor = random_color();

// Set random text color for elements with class "box"
document.querySelector(".box").style.color = random_color();

// Add click event listener to the element with id "box2"
document.querySelector(".box").addEventListener(
    "click",
    function () {
        // Retrieve all elements with class "box"
        const boxes = document.querySelector(".box");
        // Loop through each box to change its background color randomly
        boxes.forEach(box => {
            box.style.backgroundColor = random_color();
        });
    }
);
