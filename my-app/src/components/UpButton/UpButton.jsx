import Reacts,{useState, useEffect} from "react";

import styles from "./UpButton.module.css";

export const UpButton = ({ children}) => {
  const [showScroll, setShowScroll] = useState(false)


  const checkScrollTop = () => {
    if(!showScroll && window.pageYOffset >300){
      setShowScroll(true)
    }
    if(showScroll && window.pageYOffset <=300){
      setShowScroll(false)
    }
  }

  useEffect(()=> {
    window.addEventListener("scroll", checkScrollTop)
    return () => {window.removeEventListener("scroll", checkScrollTop)}
  }, [])
  const scrollToTop = () => {
    console.log("GoUp");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setShowScroll(false)
  };
  return showScroll&&<button onClick={scrollToTop} className={styles.ButtonUp}>{children}</button>;
};


