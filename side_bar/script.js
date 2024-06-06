function openTab(x){
    let contents =document.querySelectorAll(".tab-content");
    for(let i = 0; i< contents.length; i++){
        contents[i].style.display = "none";
    }
    content[x].style.display = "block";
}