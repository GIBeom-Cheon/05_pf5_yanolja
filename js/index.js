let container = document.querySelector("div.sec3holder");
    container.addEventListener("wheel", (event) => {
    event.preventDefault();
    container.scrollLeft += event.deltaY;

    console.log(event.deltaY);
})