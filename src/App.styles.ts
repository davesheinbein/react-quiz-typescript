import styled, {
	createGlobalStyle,
} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-image: url(https://source.unsplash.com/random/tv-movies);
        background-size: cover;
        background-position: center;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    *{
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
        font-weight: 700;
    }
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	> p {
		color: #333333;
	}
	.score {
		color: transparent;
		background: linear-gradient(
			180deg,
			rgba(224, 138, 25, 0.95),
			rgba(255, 255, 255, 0.85)
		);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-background-clip: text;
		filter: drop-shadow(2px 2px 2px #333333);
		font-size: 2rem;
		margin: 0;
	}

	.loafingGif {
		transform: scale(0.5) translate(0%, -50%);
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10px;
		mix-blend-mode: screen;
	}

	h1 {
		font-family: Fascinate Inline;
		background: linear-gradient(180deg, #ffffff, #e08a19);
		font-weight: 400;
		background-size: 100%;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-background-clip: text;
		-moz-text-fill-color: transparent;
		filter: drop-shadow(2px 2px 2px #333333);
		font-size: 70px;
		text-align: center;
		margin: 20px;
	}
	.start,
	.next {
		cursor: pointer;
		background: linear-gradient(180deg, #fff, #e08a19);
		border: 2px solid #d38558;
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
		border-radius: 10px;
		height: 40px;
		margin: 20px 0;
		padding: 0 40px;
	}
	.start {
		max-width: 200px;
	}
`;
