import {
  getJapaneseTvShows,
  getHeroSection,
  getOnlyOnNetflix,
  getWesternTvShows,
  getUsTvSeries,
  getWeThinkYouLoveThis,
  getTvDramas,
  getWesternDramas,
  getRousingTvShows,
  getImaginativeTvShows,
  getWannaFeelLikeWorkOut,
  getPoliticalTvShows,
  getViolent,
} from "@/lib/Data/Data";
import { MovieRow } from "./MovieRows";

export async function AllMovies() {
  const heroMovies = await getHeroSection();
  const onlyOnNetflix = await getOnlyOnNetflix();
  const japanesTvShow = await getJapaneseTvShows();
  const westernTvShows = await getWesternTvShows();
  const usTvSeries = await getUsTvSeries();
  const weThinkYouLoveThis = await getWeThinkYouLoveThis();
  const tvDramas = await getTvDramas();
  const westernDramas = await getWesternDramas();
  const rousingTvShows = await getRousingTvShows();
  const imaginativeTvShows = await getImaginativeTvShows();
  const wannaFeelLikeWorkout = await getWannaFeelLikeWorkOut();
  const politicalShows = await getPoliticalTvShows();
  const violentShows = await getViolent();

  return (
    <div className="ml-12 flex flex-col gap-10">
      <MovieRow title="New on Netflix" movies={heroMovies} />
      <MovieRow title="Only on Netflix" movies={onlyOnNetflix} />
      <MovieRow title="Japanese TV Shows" movies={japanesTvShow} />
      <MovieRow title="Western TV Shows" movies={westernTvShows} />
      <MovieRow title="US TV Series" movies={usTvSeries} />
      <MovieRow
        title="We Think You’ll Love These"
        movies={weThinkYouLoveThis}
      />
      <MovieRow title="TV Dramas" movies={tvDramas} />
      <MovieRow title="Western Dramas" movies={westernDramas} />
      <MovieRow title="Rousing TV Shows" movies={rousingTvShows} />
      <MovieRow title="Imaginative TV Shows" movies={imaginativeTvShows} />
      <MovieRow
        title="Wanna Feel Like It’ll All Work Out?"
        movies={wannaFeelLikeWorkout}
      />
      <MovieRow title="Political Shows" movies={politicalShows} />
      <MovieRow title="Violent Shows" movies={violentShows} />
    </div>
  );
}
