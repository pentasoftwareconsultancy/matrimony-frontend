import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Scrolltotop = () => {
  const { pathname } = useLocation(); // Get the current path

  useEffect(() => {
    // Scroll to the top when the pathname changes
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency ensures this runs on every route change

  return null; // This component doesn’t render anything
};

export default Scrolltotop;
