import { useEffect } from 'react';

/**
 * Update the document title with provided string
 * @param title is a string
 */
export const useTitle = (title : string) => {
	useEffect(() => {
		// const oldTitle = document.title;
		title && (document.title += ` - ${title}`);
		// following line is optional, but will reset title when component unmounts
		// return document.title = oldTitle;
	}, [title]);
};

export default useTitle;
