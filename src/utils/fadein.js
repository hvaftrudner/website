import React from 'react';
import {useState, useEffect, useRef} from 'react';
import './fadein.css';

const FadeIn = ({children}) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        const cachedRef = ref.current,
            observer = new IntersectionObserver(
                ([e]) => setVisible(e.isIntersecting),
            )
        observer.observe(cachedRef)

        return function(){
            observer.unobserve(cachedRef)
        }
    }, []);

    console.log(visible ? 'visible': 'notvisible')
    return (<div ref={ ref } 
                     className={ 'not-visible' + (visible ? ' visible' : '')  }>
                {children}
            </div>)
}

export default FadeIn;