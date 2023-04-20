import { FaArrowUp } from 'react-icons/fa';
import './backToTopArrow.scss';
import { useState, useEffect } from 'react';

const BackToTopArrow = () => {
  const [animation, setAnimation] = useState('');

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (window.scrollY < 50) {
      setAnimation('animate-back');
    } else {
      setAnimation('animate');
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
