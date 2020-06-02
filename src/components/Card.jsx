import React, { useState, useEffect } from 'react'

export default function Card({ title, subreddit, link, goToNextQuestion, onAnswer }) {
    const [outcome, setOutcome] = useState(null)
    const handleSelectAnswer = (answer) => {
        if (subreddit.toLowerCase() === 'nottheonion' && answer === 'real') {
            onAnswer(1)
            return setOutcome(1)
        }

        if (subreddit.toLowerCase() === 'theonion' && answer === 'fake') {
            onAnswer(1)
            return setOutcome(1)
        }

        onAnswer(0)
        return setOutcome(-1)
    }

    useEffect(() => {
        setOutcome(null)
    }, [title, subreddit])


    return (
        <div className="w-auto flex flex-col justify-center align-center h-full">
            <div className="mb-8 p-4">
                <h1 className="font-sans text-5xl text-center font-semibold">{title}</h1>
            </div>
            <div className="flex flex-col md:flex-row w-3/5 ml-auto mr-auto justify-around">
                {outcome ? (
                    <div className="flex flex-col">
                        <button className={`p-4 m-4 rounded-lg tracking-wide 
                            bg-${outcome === 1 ? 'green' : 'red'}-300 
                            hover:bg-${outcome === 1 ? 'green' : 'red'}-500 
                            border border-gray-200`} onClick={goToNextQuestion}
                        ><strong>{outcome === 1 ? 'Correct' : 'Incorrect'}</strong></button>
                        {link && <a href={link} target="_blank" rel="noopener noreferrer" className="m-8 hover:underline"><em>Link to reddit article</em></a>}
                    </div>
                ) :
                    <>
                        <button className="p-4 m-4 rounded-lg tracking-wide bg-red-300 hover:bg-red-500 border border-gray-200" onClick={() => handleSelectAnswer('fake')}><strong>Fake news</strong></button>
                        <button className="p-4 m-4 rounded-lg tracking-wide bg-green-300 hover:bg-green-500 border border-gray-200" onClick={() => handleSelectAnswer('real')}><strong>Real news</strong></button>
                    </>
                }
            </div>
        </div>
    )
}
