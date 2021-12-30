import React from 'react';

import { Controller, Scene } from 'react-scrollmagic';

import VideoComponent from './VideoComponent';

const ParallaxVideo = () => {
	return (
		<Controller>
			<Scene duration="300%" triggerHook="onLeave" pin indicators>
				{(progress: number) => {
					console.log(progress);
					return (
						<div>
							<VideoComponent progress={progress} />
						</div>
					);
				}}
			</Scene>
		</Controller>
	);
};

export default ParallaxVideo;
