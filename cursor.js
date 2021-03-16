const cursor = document.querySelector(".cursor"),
    anchor = document.querySelectorAll("a");


//custom cursor
window.addEventListener("mousemove", (e)=> {
    //커서 좌표값
    var x = e.pageX, 
        y = e.pageY;
        
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
})

//anchor tag hover effect
anchor.forEach(anc => {
    anc.addEventListener("mouseover", () => {
        cursor.style.transform = "scale(3)";
        cursor.style.animationName = "borderAnim";
    })
    anc.addEventListener("mouseleave", () => {
        cursor.style.transform = "";
        cursor.style.animationName = "";
    })
})