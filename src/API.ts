import { shuffleArray } from './Utils';

export type Question = {
	category: string;
	correct_answer: string;
	difficulty: string;
	incorrect_answers: string[];
	question: string;
	type: string;
};

export type QuestionState = Question & {
	answers: string[];
};

export enum Difficulty {
	EASY = 'easy',
	MEDIUM = 'medium',
	Hard = 'hard',
}

export const fetchQuizQuestions = async (
	amount: number,
	difficulty: Difficulty
) => {
	// category 14 is specific to the TV questions on the API if
	// I want to make categories dropdown update number
	// https://opentdb.com/api_config.php
	const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=14&difficulty=${difficulty}&type=multiple`;
	const data = await (await fetch(endpoint)).json();
	return data.results.map((question: Question) => ({
		...question,
		answers: shuffleArray([
			...question.incorrect_answers,
			question.correct_answer,
		]),
	}));
};
