import React, { useEffect, useState, useCallback } from 'react';
import Card from './components/Card'

function App() {
	const [articles, setArticles] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [currentIndex, setCurrentIndex] = useState(0)

	const [onionAfter, setOnionAfter] = useState('')
	const [notTheOnionAfter, setNotTheOnionAfter] = useState('')

	const fetchAllArticles = useCallback(async (onionAfter = '', notTheOnionAfter = '') => {
		setIsLoading(true)
		const [onionArticles, notOnionArticles] = await Promise.all([fetchArticles('TheOnion', { after: onionAfter }), fetchArticles('NotTheOnion', { after: notTheOnionAfter })])
		setIsLoading(false)

		setArticles(prevArticles => [
			...prevArticles,
			...shuffle([...onionArticles.articles, ...notOnionArticles.articles])
		])
 
		setOnionAfter(onionArticles.after)
		setNotTheOnionAfter(notTheOnionAfter.after)
	}, [])

	useEffect(() => {
		fetchAllArticles()
	}, [fetchAllArticles])

	useEffect(() => {
		if (currentIndex > articles.length - 1) {
			fetchAllArticles(onionAfter, notTheOnionAfter)
		}
	}, [fetchAllArticles, currentIndex, articles.length, onionAfter, notTheOnionAfter])

	const [correctAnswers, setCorrectAnswers] = useState(0)
	const [totalAnswers, setTotalAnswers] = useState(0)
	const handleAnswer = (scoreToAdd) => {
		setCorrectAnswers(c => c + scoreToAdd)
		setTotalAnswers(c => c + 1)
	}

	const goToNextQuestion = () => {
		setCurrentIndex(c => c + 1)
	}

	return (
		<div className="App h-screen" style={{ display: 'grid', gridTemplateRows: '1fr auto' }}>
			{isLoading ? <p className="text-center m-12 font-semibold">Loading...</p> : articles[currentIndex] && <Card {...articles[currentIndex]} onAnswer={handleAnswer} goToNextQuestion={goToNextQuestion} />}
			<div className="flex justify-between items-center pl-4 pr-4">
				<h2 className="font-bold text-2xl">{correctAnswers}/{totalAnswers}</h2>
				<button className="p-4 m-4 rounded-lg tracking-wide bg-blue-300 hover:bg-blue-500 border border-gray-200" onClick={goToNextQuestion}>></button>
			</div>
		</div>
	);
}

export default App;

async function fetchArticles(subreddit, params = {}) {
	const url = new URL(`https://www.reddit.com/r/${subreddit}.json`)
	Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
	return fetch(url).then(res => res.json())
		.then(({ data }) => ({
			after: data.after,
			articles: data.children.map(({ data }) => ({
				title: data.title,
				link: 'https://www.reddit.com' + data.permalink,
				subreddit: data.subreddit
			}))
		}))
}

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}
