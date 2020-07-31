import React from 'react';
import ContentLoader from 'react-content-loader'

const HomeSkeleton = props => {
    return (
        <ContentLoader
            viewBox="0 0 100% 100%"
            height={800}
            width={1300}
            speed={2}
            {...props}
        >
            <rect x="5vw" y="5vh" rx="5" ry="5" width="40vw" height="40vh"/>
            <rect x="50vw" y="5vh" rx="5" ry="5" width="40vw" height="40vh"/>

            <rect x="5vw" y="50vh" rx="5" ry="5" width="40vw" height="40vh"/>
            <rect x="50vw" y="50vh" rx="5" ry="5" width="40vw" height="40vh"/>
        </ContentLoader>
    )
};


export default HomeSkeleton;
