const random_color = () => {
    const random_number = Math.floor(Math.random() * 16777215)
    const random_code = "#" + random_number.toString(16);
    return random_code;
}

document.querySelector("#box1").addEventListener(
    "click",
    function color (){
        document.querySelector(".container").style.backgroundColor = random_color();
        alert("Color Changed To "+ random_color() )
    }
)

document.getElementById("colorinfo").innerHTML = color;