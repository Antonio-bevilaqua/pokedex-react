import {getPokemonCardProperties, getPokemonCardOpacity} from "./getPokemonCardProperties";

function findLastTwoPokemonCardProperties(scrollPos) {
    const {cardHeight, correctScrollPos} = getPokemonCardProperties(scrollPos);

    const {cardsAppearing, cardOpacity} = getPokemonCardOpacity(correctScrollPos, cardHeight)
    
    let lastPosIndex = cardsAppearing
    lastPosIndex *= 2; //2 cards por linha
    lastPosIndex--; //diminui 1 pois a array começa em 0

    let index1 = lastPosIndex; //ultimo item na página atual
    let index2 = lastPosIndex - 1; //penultimo item na página atual

    return { 'i1': index1, 'i2': index2, 'actualOpacity': cardOpacity };
}

export default findLastTwoPokemonCardProperties