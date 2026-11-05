let rotation = 0;
document.addEventListener("click", function () {
    let min = 20;
    let max = 50;
    rotation += Math.floor(Math.random() * (max - min + 3)) + min;
    document.body.style.transform = `rotate(${rotation}deg)`;
});