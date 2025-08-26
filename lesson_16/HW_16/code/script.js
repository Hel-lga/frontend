addEventListener( "load", ()=> {
     const overlay =
     document.getElementById("overlay");

     let position = 0;
     const speed = 1;


     const slide = setInterval(() => {
        position += speed;
        overlay.style.top = position + "%";

        if (position>=100){
            clearInterval(slide);
            overlay.style.display = "none";
        }
     }, 100 );
});