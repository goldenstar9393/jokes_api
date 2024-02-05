import React, { useEffect, useState } from 'react';
import JokesContent from './components/jokeContent';
const Jokes: React.FC = () => {
    const [loaded, setLoaded] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [jokeText, setJokeText] = useState<string>("LOADING YOUR JOKE...");
    const [punchline, setPunchline] = useState<string>('');
    const [secondJokeHide, setSecondJokeHide] = useState<boolean>(false)
    useEffect(() => {
        fetchJoke();
    }, [])
    const fetchJoke = () => {
        setLoaded(false);
        setError(false);
        setSecondJokeHide(false);
        setJokeText("LOADING YOUR JOKE...")
        setPunchline('');
        fetch('https://mwks-joke-service.azurewebsites.net/api/joke/random')
            .then(response => response.json())
            .then(data => {
                setJokeText(data.joke); // Update state with fetched data
                setLoaded(true);
                setPunchline(data.punchLine);
            })
            .catch(error => {
                setError(true);
                setLoaded(true);
                setJokeText("THERE WAS AN ERROR LOADING YOUR JOKE")
                console.error('Error fetching data:', error);
            });
    };
    const handlePunchlineClick = () => {
        // Handle punchline click event here
        setSecondJokeHide(!secondJokeHide);
    };

    return (
        <div className='px-60 justify-between py-20 lg:px-[300px] lg:py-[100px] xl:px-[400px] xl:py-[100px]'>
            <div className="flex flex-col items-center justify-center gap-10">
                <div className='flex flex-col justify-between gap-4 w-full lg:flex-row lg:gap-400 xl:flex-row xl:gap-500'>
                    <div className='flex flex-col items-center justify-center'>
                        <button
                            onClick={fetchJoke}
                            className="bg-customGreen hover:bg-customGreen text-white py-6 px-12 rounded-full text-[18px]"
                            disabled={!loaded}
                        >
                            Get A New Random Joke
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <a
                            href="https://mwks-joke-service.azurewebsites.net/swagger/index.html"
                            className="text-blue-500 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View API Docs
                        </a>
                    </div>
                </div>
                <div className="h-[2px] w-full bg-gray-300 my-4"></div>
                <JokesContent
                    jokeText={jokeText}
                    onPunchlineClick={handlePunchlineClick}
                    loaded={loaded}
                    error={error}
                    secondJokeHide={secondJokeHide}
                    punchline={punchline}
                />
            </div>
        </div>

    );
};

export default Jokes;
