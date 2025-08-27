const btn = document.getElementById("btn");

/* btn.addEventListener("click", () => {
    alert("The button clicked!")
}); 

btn.addEventListener("dblclick", () => {
console.log("double click")
}); 

btn.addEventListener("mousedown", () => console.log("click the mouse"));
btn.addEventListener("mouseup", () => console.log("up the mouse"));
btn.addEventListener("mousemove", b => console.log(b.clientX, b.clientY));

btn.addEventListener("mouseenter", () => console.log("enter on element"));
btn.addEventListener("mouseleave", () => console.log("leve the element"));

btn.addEventListener("mouseover", () => console.log("over the element"));
btn.addEventListener("mouseout", () => console.log("out the element")); */

btn.addEventListener("focus", () => console.log("Фокус на input"));
btn.addEventListener("blur", () => console.log("Потеря фокуса"));

addEventListener("load", () => console.log("Страница загружена"));
document.addEventListener("DOMContentLoaded", () => console.log("DOM готов"));

