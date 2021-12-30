import React, { useEffect, useRef } from 'react';

import { tigermp4, tigerwebm } from '../assets/video';

const VideoComponent = (props: { progress: number }) => {
	const { progress } = props;

	const ref = useRef(null);

	useEffect(() => {
		const vid = ref.current!;

		const duration = vid.duration || 1;

		if (vid) {
			vid.currentTime = progress * duration;
		}
		console.log(progress, duration, vid.currentTime, progress * vid.duration);
	}, [progress]);

	return (
		<video ref={ref} style={{ width: '100vw' }}>
			<source src={tigerwebm} type="video/webm" />

			<source src={tigermp4} type="video/mp4" />

            Sorry, your browser does not support embedded videos.
		</video>
	);
};

export default VideoComponent;
