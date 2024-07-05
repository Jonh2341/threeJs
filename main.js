function mapNumberRange(n, a, b, c, d) {
    return (n - a) * (d - c) / (b - a);
}

function initCard(card) {
    const cardContent = card.querySelector(".card_content");
    
    // console.log(card);
    card.addEventListener("mousemove", (event) => {
        const Xposition = event.clientX;
        const Yposition = event.clientY;
        const cardRect = card.getBoundingClientRect();
        const halfWidth = cardRect.width / 2;
        const halfHeight = cardRect.height / 2;
        const cardCenterX = cardRect.left + halfWidth;
        const cardCenterY = cardRect.top + halfHeight;
        // console.log("x:", Xposition, "y:", Yposition);
        // console.log(cardRect);
        // console.log(halfWidth, halfHeight);
        const deltaX = Xposition - cardCenterX;
        const deltaY = Yposition - cardCenterY;
        const distanceToCenter = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const maxDistance = Math.max(halfWidth, halfHeight);
        const degree = mapNumberRange(distanceToCenter, 0, maxDistance, 0, 15);
        const rx = mapNumberRange(deltaY, 0, halfWidth, 0, 1); 
        const ry = mapNumberRange(deltaX, 0, halfHeight, 0, 1);
        cardContent.style.transform = `perspective(400px) rotate3d(${-rx}, ${ry}, 0, ${degree}deg)`;
        // console.log(cardCenterX, cardCenterY);
        console.log(distanceToCenter, maxDistance);
        const age = 21;
        console.log(`мені ${age} років`);
    });

    card.addEventListener("mouseleave", (event) => {
        cardContent.style = null;
    });
}

console.log(mapNumberRange);

function setup() {
    const cards = document.querySelectorAll('.card');
    const cardArray = Array.from(cards);

    cardArray.map((card) => {
        initCard(card);

    });

}

// Виклик функції setup
setup();
