import * as React from 'react';
import Lightbox from './Lightbox';

function Integration(props){
    const [isLightboxOpen, setLightboxOpen] = React.useState(false);
    const [selectedImageUrl, setSelectedImageUrl] = React.useState('');

    const openLightbox = (imageUrl) => {
        setSelectedImageUrl(imageUrl);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    return(

        <>
           <h2 className='HR_heading HR_MT'>Connect {props.appName} with your other apps
                </h2>
                <div className='HR_MT'>
                    <img alt='Teams' src={"https://ik.imagekit.io/zn4au2jftpm5/hr365/SPFxEDP/powerplatformtoolset_ReRdfzh4N.png?updatedAt=1700466299384"} loading="lazy"
                        onClick={() => openLightbox("https://ik.imagekit.io/zn4au2jftpm5/hr365/SPFxEDP/powerplatformtoolset_ReRdfzh4N.png?updatedAt=1700466299384")}
                    />
                </div>
                {/* <Lightbox
                        isOpen={isLightboxOpen}
                        onClose={closeLightbox}
                        imageUrl={selectedImageUrl}
                    /> */}
        
        </>
    )
}

export default Integration;