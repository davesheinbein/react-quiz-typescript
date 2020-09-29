import styled from 'styled-components';

export const Wrapper = styled.div`
	min-width: 60vw;
	max-width: 80vw;
	background: linear-gradient(
		180deg,
		rgba(255, 255, 255, 0.85),
		rgba(224, 138, 25, 0.95)
	);
	border-radius: 10px;
	border: 2px solid #333333;
	padding: 20px;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
	text-align: center;
	p {
		font-size: 1rem;
	}
`;

type ButtonWrapperProps = {
	correct: boolean;
	userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
	transition: all 0.3s ease;
	:hover {
		opacity: 0.8;
	}
	button {
		cursor: pointer;
		user-select: none;
		font-size: 0.8rem;
		width: 100%;
		height: 40px;
		margin: 5px 0;
		background: ${({ correct, userClicked }) =>
			correct
				? 'linear-gradient(90deg, rgba(86, 255, 165, 1), rgba(89, 188, 134, 1))'
				: !correct && userClicked
				? 'linear-gradient(90deg, rgba(255, 86, 86, 1), rgba(193, 104, 104, 1))'
				: 'linear-gradient(90deg, rgba(93, 220, 240, 0.75), rgba(93, 220, 240, 1))'};
		border: 3px solid rgba(51, 51, 51, 0.2);
		box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		outline: transparent;
		color: #fff;
		text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
		:hover {
			opacity: 0.9;
		}
	}
`;
