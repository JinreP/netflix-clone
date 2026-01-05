import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
    accept: "application/json",
  },
});

export async function getHeroSection() {
  try {
    const res = await api.get("/movie/now_playing?language=en-US&page=1");
    return res.data.results;
  } catch (error) {
    console.error("Hero fetch error:", error);
    return [];
  }
}
