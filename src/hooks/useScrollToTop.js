import { useEffect } from 'react';
import { scrollToTop } from '../lib/scrollToTop';

const useScrollToTop = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
};

export default useScrollToTop;
