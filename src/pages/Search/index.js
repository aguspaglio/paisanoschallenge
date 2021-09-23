import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import Loading from "../../components/Loading";
import Searcher from "../../components/Searcher";
import { getSimpsonsPhrases } from "../../utils/getSimpsonsPhrases";
import styles from './styles.module.scss';


const Search = () => {
  const [simpsonsData, setSimpsonsData] = useState([]);
  const [counter, setCounter] = useState(0);
  const [search, setSearch] = useState('');
  const [filterData, setFilterData] = useState([]);
  const [isLoaded, setisLoaded] = useState(true);
  const handleSearch = (value) =>{
    setSearch(value);
  }


  useEffect(() => {
    const aux = simpsonsData.filter((item) => item.character.toLowerCase().includes(search.toLowerCase()))
    setFilterData(aux);
  // eslint-disable-next-line
  }, [search]);

  useEffect(() => {
    if (counter < 2) {
      getSimpsonsPhrases()
        .then((phrases) => {
          setSimpsonsData((prevPhrases) => [...prevPhrases, ...phrases]);
          setFilterData((prevPhrases) => [...prevPhrases, ...phrases]);
          setCounter(prevCounter => prevCounter+1);
        })
        .catch(() => {
          alert("Error");
        });
    }else{
      setisLoaded(false);
    }
  }, [counter]);

  return (
    <div className={styles.searcherContainer}>
    <Loading isFinished={!isLoaded}/>
    <Searcher search={search} handleSearch={handleSearch} />
    <Cards simpsonsData={filterData}/>
    </div>
  );
};

export default Search;
