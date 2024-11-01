// Definieer de setup-functie
const setup = () => {
    console.log("setup uitgevoerd");

    // Haal de schuifregelaars op
    const redSlider = document.getElementById("red");
    const greenSlider = document.getElementById("green");
    const blueSlider = document.getElementById("blue");

    // Functie om de achtergrondkleur te updaten
    const updateBackgroundColor = () => {
        const red = redSlider.value;
        const green = greenSlider.value;
        const blue = blueSlider.value;

        // Pas de achtergrondkleur aan
        document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    };

    // Voeg event listeners toe aan de schuifregelaars
    redSlider.addEventListener("input", updateBackgroundColor);
    greenSlider.addEventListener("input", updateBackgroundColor);
    blueSlider.addEventListener("input", updateBackgroundColor);

    // Stel de beginwaarde in
    updateBackgroundColor();
};

// Voeg een event listener toe voor het laden van de pagina
window.addEventListener("load", setup);
