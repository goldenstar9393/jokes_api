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
            <button
                onClick={fetchJoke}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                disabled={loading}
            >
                {loading ? 'Loading...' : 'Fetch Joke'}
            </button>
            <div className="mt-4">
                {loading && (
                    <svg
                        className="animate-spin h-5 w-5 mr-3 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V2.83a1 1 0 00-1.7-.7l-4.58 4.58a1 1 0 00-.29.71 1 1 0 00.29.7l4.58 4.58a1 1 0 001.42-1.42L10.41 12l3.3-3.3a1 1 0 10-1.42-1.4L8.3 10.3a1 1 0 000 1.4l4.59 4.58a1 1 0 001.42 0 1 1 0 000-1.4L10.4 13.99l3.3-3.3a1 1 0 10-1.42-1.4L8.3 12.3a1 1 0 000 1.4l3.3 3.3a1 1 0 101.4-1.42l-3.3-3.3a1 1 0 00-.7-.29 1 1 0 00-.7 1.7l.58.59A8.018 8.018 0 014 12z"
                        ></path>
                    </svg>
                )}
            </div>
            <div className="mt-4">
                <a
                    href="https://example.com"
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit Example.com
                </a>
            </div>
        </div>
    );
};

export default Jokes;
