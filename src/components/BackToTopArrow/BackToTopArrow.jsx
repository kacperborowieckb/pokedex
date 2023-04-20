import { FaArrowUp } from 'react-icons/fa';
import './backToTopArrow.scss';
import { useState, useEffect } from 'react';

const BackToTopArrow = () => {
  const [animation, setAnimation] = useState('');
  const [animateBack, setAnimateBack] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setAnimation('animate');
      setAnimateBack(true);
    } else {
      if (animateBack) {
        setAnimation('animate-back');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [animation]);

  return (
    <button className={'back-to-top-arrow' + ' ' + animation} onClick={scrollToTop}>
      <FaArrowUp />
    </button>
  );
};

export default BackToTopArrow;
