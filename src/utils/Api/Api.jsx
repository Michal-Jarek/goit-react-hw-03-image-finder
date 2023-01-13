import axios from 'axios';

const apiKey = 'key=30058964-66debb9f20d9f056f9054d1c1';
const basePath = `?${apiKey}page=1&image_type=photo&orientation=horizontal&per_page=12`;

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  timeout: 1000,
});


const cokolwiek = async description => {
  let inquiry = description.replace(' ', '+');
  const response = await instance.get(`${basePath}&q=${inquiry}`);
  console.log(response);
};

export { cokolwiek };
