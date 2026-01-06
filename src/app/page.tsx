import { Footer } from "@/components/home/Footer";
import { Hero } from "@/components/home/Hero";
import {
  NewOnNetflix,
  OnlyOnNetflix,
  JapaneseTvShow,
  WesternTvShows,
  UsTvSeries,
  WeThinkYouWouldLiveThis,
  TvDramas,
  WesternDramas,
  RousingTvShows,
  ImagivativeTvShows,
  WannaFeelLikeWorkout,
  PoliticalShows,
  ViolentShows,
} from "@/components/home/movies";

import { Navbar } from "@/components/home/Navbar";
import {
  getJapaneseTvShows,
  getHeroSection,
  getOnlyOnNetflix,
  getWesternTvShows,
  getWesternTvThrillers,
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

export default async function Home() {
  const heroMovies = await getHeroSection();
  console.log(heroMovies);
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
    <div className="bg-black w-full min-h-screen text-white">
      <Navbar />
      <Hero movies={heroMovies} />

      <div className="ml-12 flex flex-col gap-10">
        <NewOnNetflix movies={heroMovies} />
        <OnlyOnNetflix movies={onlyOnNetflix} />
        <JapaneseTvShow movies={japanesTvShow} />
        <WesternTvShows movies={westernTvShows} />

        <UsTvSeries movies={usTvSeries} />
        <WeThinkYouWouldLiveThis movies={weThinkYouLoveThis} />
        <TvDramas movies={tvDramas} />
        <WesternDramas movies={westernDramas} />
        <RousingTvShows movies={rousingTvShows} />
        <ImagivativeTvShows movies={imaginativeTvShows} />
        <WannaFeelLikeWorkout movies={wannaFeelLikeWorkout} />
        <PoliticalShows movies={politicalShows} />
        <ViolentShows movies={violentShows} />
      </div>
      <Footer />
    </div>
  );
}
