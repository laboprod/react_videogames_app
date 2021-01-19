import React from 'react';
// Styling and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { smallImage } from '../util';
// REDUX
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// IMAGES
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
// STARS
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';

const GameDetail = ({ pathId }) => {
	const history = useHistory();
	// Exit Detail
	const exitDetailHandler = (e) => {
		const element = e.target;
		if (element.classList.contains('shadow')) {
			document.body.style.overflow = 'auto';
			history.push('/');
		}
	};

	// GET STARS
	const getStars = () => {
		const stars = [];
		const rating = Math.round(game.rating);
		for (let i = 1; i <= 5; i++) {
			if (i <= rating) {
				stars.push(<img alt='star' key={i} src={starFull}></img>);
			} else {
				stars.push(<img alt='star' key={i} src={starEmpty}></img>);
			}
		}
		return stars;
	};

	// GET PLATFORM IMAGES
	const getPlatform = (platform) => {
		switch (platform) {
			case 'PlayStation 4':
				return playstation;
			case 'PlayStation 5':
				return playstation;
			case 'Xbox One':
				return xbox;
			case 'Xbox Series S/X':
				return xbox;
			case 'Xbox S':
				return xbox;
			case 'PC':
				return steam;
			case 'Nintendo Switch':
				return nintendo;
			case 'iOS':
				return apple;
			default:
				return gamepad;
		}
	};

	// Data
	const { screen, game, isLoading } = useSelector((state) => state.detail);
	return (
		<>
			{!isLoading && (
				<CardShadow className='shadow' onClick={exitDetailHandler}>
					<Detail layoutId={pathId}>
						<Stats>
							<div className='rating'>
								<motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
								<p>Rating: {game.rating}</p>
								{getStars()}
							</div>
							<Info>
								<h3>Platforms</h3>
								<Platforms>
									{game.platforms.map((data) => (
										<img key={data.platform.id} src={getPlatform(data.platform.name)} alt={data.platform.name}></img>
									))}
								</Platforms>
							</Info>
						</Stats>
						<Media>
							<motion.img layoutId={`image ${pathId}`} src={smallImage(game.background_image, 1280)} alt={game.background_image} />
						</Media>
						<Description>
							<p>{game.description_raw}</p>
						</Description>
						<div className='gallery'>
							{screen.results.map((screen) => (
								<img src={smallImage(screen.image, 1280)} key={screen.id} alt={screen.image} />
							))}
						</div>
					</Detail>
				</CardShadow>
			)}
		</>
	);
};

const CardShadow = styled(motion.div)`
	width: 100%;
	min-height: 100vh;
	overflow-y: scroll;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	z-index: 10;
	top: 0;
	left: 0;

	&::-webkit-scrollbar {
		width: 0.5rem;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #ff7676;
	}

	&::-webkit-scrollbar-track {
		background: white;
	}
`;

const Detail = styled(motion.div)`
	width: 80%;
	border-radius: 1rem;
	padding: 2rem 5rem;
	background: white;
	position: absolute;
	left: 10%;
	color: black;

	img {
		width: 100%;
	}

	@media (max-width: 670px) {
		padding: 1rem 0.5rem;
	}
`;

const Stats = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: space-between;

	img {
		width: 1.5rem;
		height: 1.5rem;
		display: inline-block;
	}

	@media (max-width: 670px) {
		h3 {
			display: inline;
		}
		img {
			width: 1rem;
			height: 1rem;
		}
		.rating {
			max-width: 10rem;
		}
	}
`;

const Info = styled(motion.div)`
	text-align: center;

	@media (max-width: 670px) {
		position: absolute;
		top: 1rem;
		right: 1rem;
		h3 {
			padding: 0.5rem;
		}
	}
`;

const Platforms = styled(motion.div)`
	display: flex;
	justify-content: space-evenly;

	img {
		margin-left: 3rem;
	}

	@media (max-width: 670px) {
		img {
			margin-left: 0.5rem;
			margin-right: 0.5rem;
			margin-top: 0.75rem;
		}
	}
`;

const Media = styled(motion.div)`
	margin-top: 5rem;

	img {
		width: 100%;
	}

	@media (max-width: 670px) {
		margin-top: 1rem;
	}
`;

const Description = styled(motion.div)`
	margin: 5rem 0rem;

	@media (max-width: 670px) {
		margin: 1rem 0;
	}
`;

export default GameDetail;
