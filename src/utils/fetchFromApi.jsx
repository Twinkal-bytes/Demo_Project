import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
  params: {
    part: 'snippet', videoId: 'M7FIvfx5J10',  
      maxResults: '50'
    },
  headers: {
    'X-RapidAPI-Key': '453a117488msh6141dad78b9b7ecp17d1b0jsnc81d539f649f',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromApi = async(url)=>{
  const {data} = await axios.get(`${BASE_URL}/${url}`,options)
  return data
}