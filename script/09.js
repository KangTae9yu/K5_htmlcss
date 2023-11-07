document.addEventListener("DOMContentLoaded", ()=>{
    const txt = document.getElementById("txt");

    txt.addEventListener("change", ()=>{
        console.log(e.target.value);
    });
})