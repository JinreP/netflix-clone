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

export async function getOnlyOnNetflix() {
  try {
    const res = await api.get("/movie/top_rated?language=en-US&page=1");
    return res.data.results;
  } catch (error) {
    console.error("Hero fetch error:", error);
    return [];
  }
}

export async function getJapaneseTvShows() {
  try {
    const res = await api.get(
      "/discover/tv?with_original_language=ja&language=en-US&page=1"
    );
    return res.data.results;
  } catch (error) {
    console.error("Hero fetch error:", error);
    return [];
  }
}

export async function getWesternTvShows() {
  try {
    const res = await api.get(
      "/discover/tv?with_genres=10765,37&with_origin_country=US&language=en-US&page=1"
    );
    return res.data.results;
  } catch (error) {
    console.error("Hero fetch error:", error);
    return [];
  }
}

export async function getWesternTvThrillers() {
  try {
    const res = await api.get(
      "/discover/tv?with_genres=53&with_origin_country=US&language=en-US&page=1"
    );
    return res.data.results;
  } catch (error) {
    console.error("Hero fetch error:", error);
    return [];
  }
}

export async function getUsTvSeries() {
  try {
    const res = await api.get(
      "/discover/tv?with_origin_country=US&language=en-US&page=1"
    );
    return res.data.results;
  } catch (error) {
    console.error("Hero fetch error:", error);
    return [];
  }
}

export async function getWeThinkYouLoveThis() {
  try {
    const res = await api.get("/trending/all/week?language=en-US");
    return res.data.results;
  } catch (error) {
    console.error("Hero fetch error:", error);
    return [];
  }
}

export async function getTvDramas() {
  try {
    const res = await api.get(
      "/discover/tv?with_genres=18&with_original_language=ko&language=en-US&page=1"
    );
    return res.data.results;
  } catch (error) {
    console.error("Hero fetch error:", error);
    return [];
  }
}

export async function getWesternDramas() {
  try {
    const res = await api.get(
      "/discover/tv?with_genres=18&with_origin_country=US&language=en-US&page=1"
    );
    return res.data.results;
  } catch (error) {
    console.error("Hero fetch error:", error);
    return [];
  }
}

export async function getRousingTvShows() {
  try {
    const res = await api.get(
      "/discover/tv?with_genres=10759&language=en-US&page=1"
    );
    return res.data.results;
  } catch (error) {
    console.error("Hero fetch error:", error);
    return [];
  }
}

export async function getImaginativeTvShows() {
  try {
    const res = await api.get(
      "/discover/tv?with_genres=10765&language=en-US&page=1"
    );
    return res.data.results;
  } catch (error) {
    console.error("Hero fetch error:", error);
    return [];
  }
}

export async function getWannaFeelLikeWorkOut() {
  try {
    const res = await api.get(
      "/discover/movie?with_genres=35&language=en-US&page=1"
    );
    return res.data.results;
  } catch (error) {
    console.error("Hero fetch error:", error);
    return [];
  }
}

export async function getPoliticalTvShows() {
  try {
    const res = await api.get(
      "/discover/tv?with_genres=10768&language=en-US&page=1"
    );
    return res.data.results;
  } catch (error) {
    console.error("Hero fetch error:", error);
    return [];
  }
}

export async function getViolent() {
  try {
    const res = await api.get(
      "/discover/tv?with_genres=10759,80&language=en-US&page=1"
    );
    return res.data.results;
  } catch (error) {
    console.error("Hero fetch error:", error);
    return [];
  }
}
