import React, { useState } from 'react';

const Jokes: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const fetchJoke = () => {
        // Simulate loading for 2 seconds
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div>
                <button
                    onClick={fetchJoke}
                    className="bg-customGreen hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                    disabled={loading}
                >
                    Get A New Random Joke
                </button>
            </div>
            <div className="mt-4">
                <a
                    href="https://example.com"
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View API Docs
                </a>
            </div>
            <div className="mt-4">
                {loading && (
                    <span>LOADING YOUR JOKE...</span>
                )}
            </div>
        </div>
    );
};

export default Jokes;
