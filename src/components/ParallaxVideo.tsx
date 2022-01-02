import React, { useRef, useEffect } from 'react';
import { Controller, Scene } from 'react-scrollmagic';

import VideoComponent from './VideoComponent';

import { Tween, ScrollTrigger, Timeline } from 'react-gsap';

// Assets
import logofull from '../assets/img/WILD.png';

const tweenStyle = [
	// Not shown / not in lauout
	{
		opacity: 0,
		display: 'none',
	},
	// Shown / in layout
	{
		opacity: 1,
		display: 'block',
	},
];


const ParallaxVideo = () => {
	const ref = useRef(null);

	useEffect(() => {
		const e = document.getElementById('parent');
		const offsetHeight : number = e.offsetHeight;

		console.log(offsetHeight);
	}, []);

	return (
		<Controller ref={ref}>
			<Scene duration="300%" triggerHook="onLeave" pin indicators>
				{(progress: number) => {
					return (
						<div className="h-screen bg-black" id="parent">
							<div className="absolute text-2xl text-white">
								<ScrollTrigger start="500px center" end="+=500 70%" scrub={true} markers toggleActions="play reverse play reverse">
									<Timeline
										target={
											<img src={logofull} alt="full wildgang logo" style={{ width: '80rem' }} />
										}
									>
										<Tween from={tweenStyle[0]} to={tweenStyle[1]} duration={4} />
										<Tween to={tweenStyle[0]} />
										<div>
											<Timeline
												target={
													<h1 className='pb-5 font-bold text-center uppercase first'>Watch the teaser</h1>
												}
											>
												<Tween from={tweenStyle[0]} to={tweenStyle[1]} duration={4} />
												<Tween to={tweenStyle[0]} />
											</Timeline>
										</div>
										<div>
											<Timeline
												target={
													<h3 className='font-bold text-center uppercase'>The new NFT collection is coming</h3>
												}
											>
												<Tween from={tweenStyle[0]} to={tweenStyle[1]} duration={4} />
												<Tween to={tweenStyle[0]} />
											</Timeline>
										</div>
										<div>
											<Timeline
												target={
													<h3 className='font-bold text-center uppercase'>Join us on Discord and become a WILD</h3>
												}
											>
												<Tween from={tweenStyle[0]} to={tweenStyle[1]} duration={4} />
												<Tween to={tweenStyle[0]} />
											</Timeline>
										</div>
										<div>
											<Timeline
												target={
													<h3 className='font-bold text-center uppercase'>Reaveal on January</h3>
												}
											>
												<Tween from={tweenStyle[0]} to={tweenStyle[1]} duration={4} />
												<Tween to={tweenStyle[0]} />
											</Timeline>
										</div>
									</Timeline>
								</ScrollTrigger>
							</div>
							<VideoComponent progress={progress} />
						</div>
					);
				}}
			</Scene>
		</Controller>
	);
};

export default ParallaxVideo;
