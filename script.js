const container = document.querySelector(".container");

function createDrops() {
    const drop = document.createElement("span");
    drop.classList.add("drop");

    drop.style.top = Math.random() * innerHeight + "px";
    drop.style.left = Math.random() * innerWidth + "px";

    setTimeout(() => {
        drop.remove();
    }, 6500);

    container.appendChild(drop);
}

setInterval(createDrops, 500);
