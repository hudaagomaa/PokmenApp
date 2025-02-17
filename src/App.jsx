
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonList from './components/PokemonList';
import Pagination from './components/Pagination';


export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");

  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  useEffect(() => {
    let cancel;  // to cancel the request // we can consider it as a function 
    setLoading(true);
    axios
      .get(currentPageUrl, { cancelToken: new axios.CancelToken((c) => (cancel = c)) })
      .then((response) => {
        setPokemon(response.data.results.map((p) => p.name));
        setLoading(false);
        setNextPageUrl(response.data.next)
        setPrevPageUrl(response.data.previous)
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    return () => cancel(); // to cancel the request
  }, [currentPageUrl]);
  if (loading)
    return <p>Loading...  <br /> Plaese Wait </p>;
  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }
  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }  // we can use the previous page url to get the previous page data
  return (
    <>
      <PokemonList poke={pokemon} />
      <Pagination
        next={nextPageUrl ? gotoNextPage : null}
        prev={prevPageUrl ? gotoPrevPage : null}
      />
      {/* if there data in stata(nextPageUrl)  then gotoNextPage and stor the data  لو مفيهاش داتا متجيبش حاجه    */}
      {/* if there data in stata(prevPageUrl)  then gotoPrevPage  لو مفيهاش داتا متجيبش حاجه    */}
    </>
  );
}
