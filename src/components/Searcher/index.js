import React from "react";
import styles from "./styles.module.scss";
import {ReactComponent as ArrowIcon} from '../../assets/svg/arrow-down.svg';

const Searcher = ({search, handleSearch}) => {
  const handleInputChange = (event) =>{
    handleSearch(event.target.value);
  }
  return (

    <div className={styles.containerBG}>
      <div className={styles.searchContainer}>
        <h1>
          <span>SEARCH YOUR</span>
          <span>FAVOURITE</span>
        </h1>
        <ArrowIcon className={styles.arrowIcon} />
        <input value={search} onChange={(event) => handleInputChange(event)} type="text" placeholder="Type here bro!" />
      </div>
    </div>
  );
};

export default Searcher;
