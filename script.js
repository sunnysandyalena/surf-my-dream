let text = "Discover unforgettable waves";
let i=0;
let speed = 100;

function type() {
    if (i<text.length) {
        document.querySelector("#myText").textContent+=text.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}
type();