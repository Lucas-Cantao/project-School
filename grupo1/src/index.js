const container = document.querySelector(".container"),
close_btn = document.querySelector(".close-btn"),
show_btn = document.querySelector(".show-btn"),
add_button = document.querySelector("#add-button"),
post_area = document.querySelector(".post-area"),
post_area_list = document.querySelector(".post-area-list");

show_btn.addEventListener("click", () => {
    container.classList.add("show");
    show_btn.style.display="none";
    close_btn.style.display="block";
    add_button.classList.add("show");
})
close_btn.addEventListener("click", ()=>{
    close_btn.style.display="none";
    container.classList.remove("show");
    show_btn.style.display="block";
    add_button.classList.remove("show");
})