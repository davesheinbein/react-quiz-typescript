import React, { useState } from 'react';
import loadingGif from './images/loadingGif.gif';

// Api
import { fetchQuizQuestions } from './API';
// types
import { QuestionState, Difficulty } from './API';
// Components
import QuestionCard from './components/QuestionCard';

type AnswerObject = {
	question: string;
	answer: string;
	correct: boolean;
	correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App = () => {
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState<
		QuestionState[]
	>([]);
	const [number, setNumber] = useState(0);
	const [userAnswers, setUserAnswers] = useState<
		AnswerObject[]
	>([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);

	// console.log(
	// 	fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY)
	// );

	// console.log(questions);

	const startTrivia = async () => {
		setLoading(true);
		setGameOver(false);

		const newQuestions = await fetchQuizQuestions(
			TOTAL_QUESTIONS,
			Difficulty.EASY
		);

		setQuestions(newQuestions);
		setScore(0);
		setUserAnswers([]);
		setNumber(0);
		setLoading(false);
	};

	const checkAnswer = (
		e: React.MouseEvent<HTMLButtonElement>
	) => {
		if (!gameOver) {
			// users answer
			const answer = e.currentTarget.value;

			// check answer against correct answer
			const correct =
				questions[number].correct_answer === answer;
			if (correct) setScore((prev) => prev + 1);
			// Save Answer in array for user answers
			const answerObject = {
				question: questions[number].question,
				answer,
				correct,
				correctAnswer: questions[number].correct_answer,
			};
			setUserAnswers((prev) => [...prev, answerObject]);
		}
	};

	const nextQuestion = () => {
		// Move to the next question if not on the last question
		const nextQuestion = number + 1;

		if (nextQuestion === TOTAL_QUESTIONS) {
			setGameOver(true);
		} else {
			setNumber(nextQuestion);
		}
	};

	return (
		<div className='App'>
			<h1>React Typescript Quiz App</h1>
			{gameOver ||
			userAnswers.length === TOTAL_QUESTIONS ? (
				<button className='start' onClick={startTrivia}>
					Start
				</button>
			) : null}
			{!gameOver ? <p className='score'>Score:</p> : null}
			{loading && (
				<p>
					<img
						src={loadingGif}
						alt='Loading ...'
						className='loafingGif'
					/>
				</p>
			)}
			{!loading && !gameOver && (
				<QuestionCard
					questionNumber={number + 1}
					totalQuestions={TOTAL_QUESTIONS}
					question={questions[number].question}
					answers={questions[number].answers}
					userAnswer={
						userAnswers ? userAnswers[number] : undefined
					}
					callback={checkAnswer}
				/>
			)}
			{!gameOver &&
			!loading &&
			userAnswers.length === number + 1 &&
			number !== TOTAL_QUESTIONS - 1 ? (
				<button className='next' onClick={nextQuestion}>
					Next
				</button>
			) : null}
		</div>
	);
};

export default App;
