import {useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

export const useDarkMode = () => {

    const [darkState, setDarkState] = useLocalStorage('darkModeSet');


    useEffect(() => {
        const className = 'dark-mode'
        const element = document.querySelector('body');

        if(darkState){
            element.classList.add(className);
        }else{
            element.classList.remove(className);
        }

    },[darkState])
}