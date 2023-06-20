const controls = document.querySelectorAll('.control');
let imgAtual = 0;
const items = document.querySelectorAll('.item');
const maxItems = items.length;
controls.forEach(control => {
    control.addEventListener("click", () => {
        const isLeft = 
        control.classList.contains("esquerda")

        if(isLeft) {
            imgAtual -=  1;
        } else {
            imgAtual += 1;
        }
        if (imgAtual >= maxItems) {
            imgAtual = 0;
        }
        if (imgAtual < 0) {
            imgAtual = maxItems -1
        }

        items.forEach((item) => 
            item.classList.remove('img-atual'));

            items[imgAtual].scrollIntoView ({
                inline: "center",
                behavior: "smooth",
            });

            items[imgAtual].classList.add("img-atual");
    });
});