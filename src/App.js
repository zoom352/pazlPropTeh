import './App.css';
import React, {useEffect, useRef, useState} from 'react';
import fetchRacers from "./Api/RacerService";
import Racer from "./components/racer";

const App = () => {
    const [racers, setRacers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const lastElement = useRef()
    const observer = useRef()

    const loadRacers = async () => {
        setIsLoading(true)
        const start = racers.length
        const end = start + 50
        const newRacers = await fetchRacers(start, end)
        setRacers([...racers, ...newRacers])
        setIsLoading(false)
    };

    useEffect(() => {
        if(observer.current) observer.current.disconnect()
        const callback = function (entries) {
            if (entries[0].isIntersecting) {
                loadRacers()
            }
        };
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElement.current)
    }, [loadRacers])

    return (
        <>
            <div className="container-wrapper">
                {racers.map((racer) => {
                        return <Racer key={racer.id} racer={racer}/>
                    }
                )}
                {isLoading && <h1>Loading...</h1>}
            </div>
            <div ref={lastElement}/>
        </>
    )
}

export default App
