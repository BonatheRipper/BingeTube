import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const RapidApiKeys = () => {
  let RapidApiKeysArr = [
    process.env.REACT_APP_BINGE_RAPID_API_KEY_ONE,
    process.env.REACT_APP_BINGE_RAPID_API_KEY_TWO,
  ];
  return RapidApiKeysArr[Math.floor(Math.random() * RapidApiKeysArr.length)];
};
console.log(RapidApiKeys());
function Options(query, num) {
  return {
    params: {
      q: query,
      part: "snippet,id",
      regionCode: "US",
      type: "video",
      maxResults: num,
    },
    headers: {
      "X-RapidAPI-Key": RapidApiKeys(),
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
}

export const loadFromApi = async (url, query, num) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, Options(query, num));
  return data;
};
