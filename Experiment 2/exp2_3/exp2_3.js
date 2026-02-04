const canvas = document.getElementById('drawingCanvas');
const colorPicker = document.getElementById('colorPicker');
const undoBtn = document.getElementById('undoBtn');
const circleCount = document.getElementById('circleCount');

let circles = [];

canvas.addEventListener('mousedown', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", "10");
    circle.setAttribute("fill", colorPicker.value);

    canvas.appendChild(circle);
    circles.push(circle);
    
    updateCounter();
});

undoBtn.addEventListener('click', () => {
    if (circles.length > 0) {
        const lastCircle = circles.pop();
        canvas.removeChild(lastCircle);
        updateCounter();
    }
});

function updateCounter() {
    circleCount.textContent = circles.length;

}
