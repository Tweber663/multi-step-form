import { useEffect, useRef } from 'react';

function useCustomEffect(callback: any, dependencies: any) {
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
    } else {
      callback();
    }
  }, dependencies);
}

export default useCustomEffect;