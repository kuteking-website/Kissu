// ==========================
// KISSU WEBSITE - SCRIPT.JS
// ==========================

// Smooth fade-in animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section, .card, .price").forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
});

// Sticky Header Shadow
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.35)";
    } else {
        header.style.boxShadow = "none";
    }
});

// Hero Floating Animation
const phone = document.querySelector(".phone");

let direction = 1;

setInterval(() => {

    let current = parseFloat(phone.dataset.move || 0);

    current += direction * 0.6;

    if (current >= 12) direction = -1;

    if (current <= -12) direction = 1;

    phone.style.transform = translateY(${current}px);

    phone.dataset.move = current;

},40);

// Button Ripple Effect

document.querySelectorAll("a").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

ripple.style.left=(e.clientX-rect.left)+"px";

ripple.style.top=(e.clientY-rect.top)+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

// Console Message

console.log("%c❤️ Welcome to Kissu",
"font-size:24px;color:#ff4d6d;font-weight:bold");

console.log("%cMeet. Match. Connect.",
"font-size:16px;color:white;");

// Current Year

const footer=document.querySelector("footer p:last-child");

if(footer){

footer.innerHTML="© "+new Date().getFullYear()+" Kuteking. All rights reserved.";

}
