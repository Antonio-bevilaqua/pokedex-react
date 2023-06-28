import useFetcher from "../useFetcher";

function usePokemonAttributeTypeFetcher() {
  const { get } = useFetcher();

  const getTypes = async (pokemon) => {
    var typeAttributes = [];
    await Promise.all(
      pokemon.types.map(async (type) => {
        let attributeType = await get(type.type.url);

        typeAttributes.push(attributeType);
      })
    );

    return typeAttributes;
  };

  return { getTypes };
}

export default usePokemonAttributeTypeFetcher;
