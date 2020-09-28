import React from 'react';

// types
import { AnswerObject } from '../App';

type Props = {
	question: string;
	answers: string[];
	callback: (
		e: React.MouseEvent<HTMLButtonElement>
	) => void;
	userAnswer: AnswerObject | undefined;
	questionNumber: number;
	totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
	question,
	answers,
	callback,
	userAnswer,
	questionNumber,
	totalQuestions,
}) => (
	<div className='cardContainer'>
		<p className='number'>
			Questions: {questionNumber}/ {totalQuestions}
		</p>
		<p dangerouslySetInnerHTML={{ __html: question }}></p>
		<div>
			{answers.map((answer) => (
				<div key={answer} className='answerBtnsContainer'>
					<button
						disabled={userAnswer ? true : false}
						value={answer}
						onClick={callback}
						className='answerBtns'>
						<span
							dangerouslySetInnerHTML={{
								__html: answer,
							}}></span>
					</button>
				</div>
			))}
		</div>
	</div>
);

export default QuestionCard;
