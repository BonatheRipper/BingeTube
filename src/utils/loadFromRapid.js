import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const RapidApiKeys = () => {
  let RapidApiKeysArr = [
    "39cae78236msha03f76a76364131p1788cejsn02628243432e",
    "4ec374b9aamsh8b8425033091a15p1d2e6cjsna1f32c9cfc4e",
  ];
  return RapidApiKeysArr[Math.floor(Math.random() * RapidApiKeysArr.length)];
};
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
