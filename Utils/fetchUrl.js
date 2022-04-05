import axios from "axios";

const fetchUrl = async (url, method, Data) => {
  const CONTAINER_URL = `${process.env.API_URL}${url}`;
  switch (method) {
    case "POST": {
      return await axios.post(CONTAINER_URL, Data);
    }
    case "GET": {
      return await axios.get(url, Data);
    }
    default:
      return null;
  }
};
export default fetchUrl;
