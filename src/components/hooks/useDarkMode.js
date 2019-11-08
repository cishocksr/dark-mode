import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

const useDarkMode = () => {

    const [darkState, setDarkState] = useLocalStorage('darkModeSet');


    useEffect(() => {
        const dark = 'dark-mode'
        const element = document.querySelector('body');

        darkState ? element.classList.add(dark) : element.classList.remove(dark);

    },[darkState])

    return [darkState, setDarkState]
}

export default useDarkMode;