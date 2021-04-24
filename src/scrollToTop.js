import React, { useEffect, Fragment } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation(); 

  useEffect(() => {
      const pageOffset = window.pageYOffset;
      if(pageOffset > 0) {
        window.scrollTo(0, 0);
      }
  }, [pathname]);

  return <Fragment>{ children }</Fragment>;
}

export default ScrollToTop;