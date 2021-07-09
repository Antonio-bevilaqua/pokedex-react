function getPokemonCardProperties(scrollPos) {
    const cardHeight = document.getElementById('pokemon-0').clientHeight + 20;
    scrollPos = scrollPos === 0 ? document.getElementById('pokemonList').clientHeight : scrollPos;

    return {cardHeight: cardHeight, correctScrollPos: scrollPos};
}

function getPokemonCardOpacity(scrollPos, cardHeight) {
    const cardsAppearing = Math.ceil(scrollPos / cardHeight)
    const cardsAppearingPercent = scrollPos / cardHeight

    const cardOpacity = 1 - (cardsAppearing - cardsAppearingPercent)

    return {cardsAppearing: cardsAppearing, cardsAppearingPercent: cardsAppearingPercent, cardOpacity: cardOpacity};
}

export {getPokemonCardProperties, getPokemonCardOpacity}