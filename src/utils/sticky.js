import React from 'react';
/*import {useState, useEffect, useRef} from 'react';

function stickyEffect(){
    const [sticky, setSticky] = useState(false);
    const element = useRef(null);

    const handleScroll = () => {

    }

    const debounce = () => {

    }

    useEffect(() => {

    }, [handleScroll, debounce])
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entry => {
            if (entry.isIntersecting){
                setSticky(true);
                observer.unobserve(domRef.current);
            }
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);

    return {sticky, element}
}

export default stickyEffect; */
import { useEffect, useState, useRef } from "react"

function useSticky() {
  const [isSticky, setSticky] = useState(false)
  const element = useRef(null)

  const handleScroll = () => {
    window.scrollY > element.current.getBoundingClientRect().bottom
      ? setSticky(true)
      : setSticky(false)
  }

  // This function handle the scroll performance issue
  const debounce = (func, wait = 20, immediate = true) => {
    let timeOut
    return () => {
      let context = this,
        args = arguments
      const later = () => {
        timeOut = null
        if (!immediate) func.apply(context, args)
      }
      const callNow = immediate && !timeOut
      clearTimeout(timeOut)
      timeOut = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll))
    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  }, [debounce, handleScroll])

  return { isSticky, element }
}

export default useSticky