import React, { useEffect, useState } from 'react';

interface JokesProps {
    jokeText: string;
    onPunchlineClick: () => void;
    loaded: boolean;
    error: boolean;
    secondJokeHide: boolean;
    punchline: string;
}

const JokesContent: React.FC<JokesProps> = ({ jokeText, onPunchlineClick, loaded, error, secondJokeHide, punchline }) => {
    const [buttonText, setButtonText] = useState("Hide Punchline");
    useEffect(() => {
        if (!secondJokeHide) {
            setButtonText("Show Punchline");
        } else {
            setButtonText("Hide Punchline");

        }
    }, [secondJokeHide])
    return (
        <div className="flex flex-col gap-8" >
            <div className={`flex flex-col items-center justify-center ${error ? 'text-red-500' : ''}`}>
                <span className='flex text-[24px]'>{jokeText}</span>
            </div>
            {loaded && (!error && (<div className='flex justify-center w-full p-8 lg:flex-row lg:gap-400 lg:p-400 xl:flex-row xl:gap-500'>
                <div className='flex flex-col items-center justify-center'>
                    <button
                        onClick={onPunchlineClick}
                        className="bg-customBlue hover:bg-customBlue text-white py-6 px-12 rounded-full text-[18px]"
                    >
                        {buttonText}
                    </button>
                </div>
            </div>)
            )}
            <div className="flex justify-end">
                {secondJokeHide && (<span className='flex text-[24px]'>{punchline}</span>)}
            </div>
        </div>
    );
};

export default JokesContent;
