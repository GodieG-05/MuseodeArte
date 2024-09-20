const cards = [
    {
        "author" : "El Bosco, 1500-1505",
        "name" : " El jardín de las Delicias",
        "picture" : "../images/gall2.jpg",
        "about" : " Considerada como una de las obras más fascinantes, misteriosas y atrayentes de la historia del arte, el cuadro forma parte de los fondos de exposición permanente del Museo del Prado de Madrid."
    },
    {
        "author" : "Pablo Picasso, 1937",
        "name" : "El Guernica",
        "picture" : "images/gall3.jpg",
        "about" : "Su título alude al bombardeo de Guernica, ocurrido el 26 de abril de dicho año (1937), durante la guerra civil española."
    },
    {
        "author" : "Leonardo da Vinci, 1503-1519",
        "name" : "La Gioconda",
        "picture" : "images/gall4.jpg",
        "about" : "una de las pinturas más famosas (y más fotografiadas) de la historia. También es conocida como la Monna Lisa, y se halla expuesta en el Museo del Louvre de París."
    },
    {
        "author" : "Johannes Vermeer, 1665-1667",
        "name" : "La joven de la perla",
        "picture" : "images/gall6.jpg",
        "about" : "También conocida como 'Muchacha con turbante' esta pintura es una obra maestra en la que el manejo del color y la luz la han hecho mundialmente famosa."
    },
    {
        "author" : "Andy Warhol, 1960",
        "name" : "Marilyn Monroe",
        "picture" : "images/gall7.jpg",
        "about" : "Más allá de ser un homenaje a la icónica actriz, reflejan temas como la muerte, la violencia y la decadencia."
    },
    {
        "author" : "Sandro Botticelli, 1482-1485",
        "name" : "El nacimiento de Venus",
        "picture" : "images/gall8.jpg",
        "about" : "En su momento, fue una obra revolucionaria porque presentaba sin tapujos un desnudo no justificado."
    },
    {
        "author" : "Salvador Dalí, 1931",
        "name" : "La persistencia de la memoria",
        "picture" : "images/gall9.jpg",
        "about" : "En esta famosa obra, los relojes, como la memoria, aparecen reblandecidos con el paso del tiempo."
    },
    {
        "author" : "Artemisia Gentileschi, 1614-1620",
        "name" : "Judith decapitando a Holofernes",
        "picture" : "images/gall10.jpg",
        "about" : "una pieza que retrata una historia del Antiguo Testamento en la que una viuda y su sirvienta dominan, y eventualmente decapitan, a un hombre lujurioso y amenazante. "
    },
    {
        "author" : "Egon Schiele, 1917",
        "name" : "El abrazo",
        "picture" : "images/gall11.jpg",
        "about" : "Muestra a una pareja amorosa desnuda, probablemente el artista y su esposa, abrazados. La obra se encuentra en la Galería Belvedere de Viena."
    },
    {
        "author" : "Katsushika Hokusai, 1830-1833",
        "name" : "La gran ola de Kanagawa",
        "picture" : "images/gall12.jpg",
        "about" : "también conocida simplemente como La ola o La gran ola, es una famosa estampa japonesa del pintor especialista en ukiyo-e, Katsushika Hokusai"
    },
    {
        "author" : "Frida Kahlo, 1944",
        "name" : "La columna rota",
        "picture" : "images/gall1.jpg",
        "about" : "Su título alude al bombardeo de Guernica, ocurrido el 26 de abril de dicho año (1937), durante la guerra civil española."
    },
    {
        "author" : "Eugène Delacroix, 1830",
        "name" : "La libertad guiando al pueblo",
        "picture" : "images/gall5.jpg",
        "about" : "El lienzo simboliza la Revolución de 1830 del día 28 de julio, una escena en la que el pueblo de París se levanta en armas contra el rey Carlos X de Francia."
    }
]

function cardsCreate(card){

    const gallery = document.getElementById("gallery");
    
    //Crear el elemento div que va a contener la tarjeta de cada pintura
    const flipCard = document.createElement('div');
    flipCard.classList.add('flip-card');

    const flipCardInner = document.createElement('div');
    flipCardInner.classList.add('flip-card-inner');

    const cardFront = document.createElement('div');
    cardFront.classList.add("flip-card-front");

    cardFront.style.background = `url('${card.picture}') center/cover`;

    //Crear el elemento div que contiene el respaldo de cada pintura
    const cardBack = document.createElement('div');
    cardBack.classList.add('flip-card-back');

    //Crear los elementos para la informacion del respaldo
    const nameH2 = document.createElement('h2');
    nameH2.textContent = card.name;

    const authorH5 = document.createElement('h5');
    authorH5.textContent = card.author;

    const aboutP = document.createElement('p');
    aboutP.textContent = card.about;

    //Agregar los elementos del respaldo a cardBack
    cardBack.appendChild(nameH2);
    cardBack.appendChild(authorH5);
    cardBack.appendChild(aboutP);

    //Agregar los div cardFront/Back a flipCardInner
    flipCardInner.appendChild(cardFront);
    flipCardInner.appendChild(cardBack);

    //Agregar el div flipCardInner a flipCard
    flipCard.appendChild(flipCardInner);

    //Agregar flipCard a galley
    gallery.appendChild(flipCard);
}

function loadCards(card){
    cards.forEach(card => {
        cardsCreate(card)
    });
}

document.addEventListener('DOMContentLoaded', loadCards);
