import MoviesCarousel from "@/components/MoviesCarousel"
import { getDiscoverMovies } from "@/lib/getMovies"

type Props = {
  params: {
    id: string
  }
  searchParams: {
    genre: string
  }
}

async function GenrePage({params: {id}, searchParams: {genre}}: Props) {
  const movies = await getDiscoverMovies(id);


  return (
    <div className="max-w-7xl mx-auto">
      {/* Azure OPENAI service Suggestion */}
      <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">
          {genre}
        </h1>


        <MoviesCarousel movies={movies} title={'Genre'} isVertical />
      </div>
    </div>
  )

  //localhost:3000/genre/80?genre=action
}

export default GenrePage
