import getInnerSize from "../general_functions";

function pageDelimiter() {
    let pokeNumber = 0
    const {width, height} = getInnerSize()

    if (width > 768) {
        if (height >= 620) pokeNumber = 8
        else if (height >= 464) pokeNumber = 6
    } else if (height >= 810 || (width < 290 && height > 650) ) { //Surface Duo
        pokeNumber = 10;
    } else {
        pokeNumber = 8;
    }

    return pokeNumber
}

export default pageDelimiter