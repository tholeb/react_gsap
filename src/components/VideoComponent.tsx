import React, { useEffect, useRef } from 'react';

import { tigermp4, tigerwebm } from '../assets/video';

const VideoComponent = (props: { progress: number }) => {
	const { progress } = props;

	const ref = useRef(null);


	useEffect(() => {
		// const vid = ref.current!;

		// const duration = vid.duration;
		// const currentTime = progress * duration;

		// if (currentTime) {
		// 	vid.currentTime = currentTime;
		// }

		// if (progress === 0 || progress === 1) {
		// 	vid.pause();
		// }
		// else {
		// 	vid.play();
		// }

		// if (progress <= 0.1) {
		// 	vid.style.opacity = progress;
		// }
		// else if (progress >= 0.9) {
		// 	vid.style.opacity = 1 - progress;
		// }
		// else {
		// 	vid.style.opacity = 1;
		// }
		// console.log(progress, duration, vid.currentTime, progress * vid.duration);
	}, [progress]);

	return (
	    // style={{ transition: 'opacity 1s ease-in-out', opacity: 0 }}
		<video ref={ref} autoPlay muted loop className="object-cover w-screen h-screen" style={{ transition: 'opacity 1s ease-in-out', opacity: 1 }}>
			<source src={tigerwebm} type="video/webm" />

			<source src={tigermp4} type="video/mp4" />

            Sorry, your browser does not support embedded videos.
		</video>
	);
};

export default VideoComponent;
