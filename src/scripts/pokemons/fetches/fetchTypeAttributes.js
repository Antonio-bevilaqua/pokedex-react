
//segundoFetch
const fetchTypeAttribute = async (url) => {

    let typeAttributes = await fetch(url)
    return await typeAttributes.json();
}

export default fetchTypeAttribute;