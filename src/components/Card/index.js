import React, {useState, useEffect} from "react";
import styles from './styles.module.scss';

const Card = ({item, index}) => {
  const [isActive, setIsActive] = useState(false);
  const [fadeDirection, setfadeDirection] = useState("fade-right");
  useEffect(() => {
    if(index%2){
      setfadeDirection("fade-left");
    }
  }, [])
  const handleClick = () =>{
    setIsActive(prevIsActive => !prevIsActive);
  }
  return (
    <div className={styles.flipCard} onClick={handleClick} data-aos={fadeDirection} data-aos-duration="1200" data-aos-offset="75">
    <div className={`${styles.flipCardInner} ${styles[item.characterDirection]} ${isActive && styles.active}`}>
      <div className={styles.flipCardFront}>
        <img
          src={item.image} alt="Character"
        />
      </div>
      <div className={styles.flipCardBack}>
          <h2>{item.character}</h2>
          <p>{item.quote}</p>
      </div>
    </div>
  </div>
  );
};

export default Card;
