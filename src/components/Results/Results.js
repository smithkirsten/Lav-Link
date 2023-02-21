import React, { useEffect } from "react";
import ResultsHeader from '../ResultsHeader/ResultsHeader'
import ResultCard from "../ResultCard/ResultCard";
import './Results.css'
import { useSelector } from 'react-redux'
import { useGetLavsQuery } from "../../apicalls";

const dummyBathroom = { name: 'Establishment Name', distance: '0.5', upvote: '2'}
const dummyResults = [ dummyBathroom, dummyBathroom, dummyBathroom, dummyBathroom, dummyBathroom ]
//order results by distance or by upvote? but Rae said a lot of them dont have upvotes

//did not insert props because....store vs props?
const Results = () => {
  //put links around individual cards
  const gpsCoordinates = useSelector((state) => state.landing.gpsCoordinates)
  // const getLavs = useGetLavsQuery(gpsCoordinates);

  // useEffect(() => {
  //   console.log(getLavs)

  //   // eslint-disable-next-line
  // }, [gpsCoordinates])

  // const cards = dummyResults.map(result => <ResultCard />).sort((a, b) => a.distance - b.distance)

  const {
    data: results,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetLavsQuery(gpsCoordinates);

let content

if (isLoading) {
  content = <h2>Loading ...</h2>;
} else if (isSuccess) {
  content = results
  // content = results.map((result) => <ResultCard />);
  console.log(content)
} else if (isError) {
  content = <h2>Error city</h2>
}
  return (
    <>
      <ResultsHeader />
      <section className='cards-display'>
        {/* {cards} */}
        {content}
      </section>
    </>
  )

}

export default Results