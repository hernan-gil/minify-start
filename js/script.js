const btn = document.querySelector('button');
const output = document.getElementById('output');
btn.addEventListener("click", () => {
    output.innerHTML = 'Minify Button Clicked';
    console.log("Button Clicked")
});