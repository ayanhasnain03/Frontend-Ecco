import { useEffect } from 'react';

function ScrollToTopOnReload() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when component mounts
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

  return null; // Since this component only handles the scroll behavior and doesn't render anything, returning null
}

export default ScrollToTopOnReload;
