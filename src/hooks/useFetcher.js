import axios from "axios";

function useFetcher() {
  const absoluteUrl = "https://pokeapi.co/api/v2";

  const getFullUrl = (parts) => {
    if (parts.includes(absoluteUrl)) parts = parts.replace(absoluteUrl, "");

    let append = parts[0] === "/" ? parts : "/" + parts;

    return absoluteUrl + append;
  };

  const returnValid = (request) => {
    return request.data;
  };

  const returnInvalid = (error) => {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }

    return null;
  };

  async function post(url, data) {
    const request = await axios.post(getFullUrl(url), data).catch(returnInvalid);

    return returnValid(request);
  }

  async function get(url) {
    const request = await axios.get(getFullUrl(url)).catch(returnInvalid);

    return returnValid(request);
  }

  async function put(url, data) {
    const request = await axios.put(getFullUrl(url), data).catch(returnInvalid);

    return returnValid(request);
  }

  async function del(url) {
    const request = await axios.delete(getFullUrl(url)).catch(returnInvalid);

    return returnValid(request);
  }

  return { post, get, put, del };
}

export default useFetcher;
