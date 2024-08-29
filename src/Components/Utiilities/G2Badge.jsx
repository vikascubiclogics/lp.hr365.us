import React from 'react';
import Lightbox from './Lightbox';
import CyberSecurity from './CyberSecurity';
import LogoSlider from './Slider';
const logos = [
    'https://ik.imagekit.io/zn4au2jftpm5/Apps365/Newclients/logo5_XEHj6nvWJB.png?updatedAt=1724243961552',
    'https://ik.imagekit.io/zn4au2jftpm5/Apps365/Newclients/logo8_SCUS88b3Cc.png?updatedAt=1724243961399',
    'https://ik.imagekit.io/zn4au2jftpm5/Apps365/Newclients/logo7_otDTw59aTX.png?updatedAt=1724243961458',
    'https://ik.imagekit.io/zn4au2jftpm5/Apps365/Newclients/logo9_OYEpkUq6z.png?updatedAt=1724243961452',
    'https://ik.imagekit.io/zn4au2jftpm5/Apps365/Newclients/logo1_cAXEfyb7NY.png?updatedAt=1724243961384',
    'https://ik.imagekit.io/zn4au2jftpm5/Apps365/Newclients/logo2_f5r9mZMp1q.png?updatedAt=1724243961334',
    'https://ik.imagekit.io/zn4au2jftpm5/Apps365/Newclients/logo10_ebFv0-z6y.png?updatedAt=1724243961274',
    'https://ik.imagekit.io/zn4au2jftpm5/Apps365/Newclients/logo4_r3dgZq-FAt.png?updatedAt=1724243961462',
    'https://ik.imagekit.io/zn4au2jftpm5/Apps365/Newclients/logo1_cAXEfyb7NY.png?updatedAt=1724243961384',
    ''
];

const G2Badge = ({ heading, imageUrl }) => {
    const [isLightboxOpen, setLightboxOpen] = React.useState(false);
    const [selectedImageUrl, setSelectedImageUrl] = React.useState('');

    const openLightbox = (imageUrl) => {
        setSelectedImageUrl(imageUrl);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    return (
        <>
            <div className='Badgesection'>
                <h2 className='Badgeheading'>Trusted by 7100+ businesses from 152 countries</h2>
                <div className='Hr_flex'>
                    <div className='imgwidth'>
                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Badges/ServiceDesk_HighPerformer_HighPerformer_-Z4ie72DuI.png?updatedAt=1720006845409" alt="" />
                    </div>
                    <div className='imgwidth'>
                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Badges/ITServiceManagement(ITSM)Tools_FastestImplementation_GoLiveTime_cFgAK5HFv7.png?updatedAt=1720006845303" alt="" />
                    </div>
                    <div className='imgwidth'>
                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Badges/ServiceDesk_BestRelationship_Total_2-h_fHeyGO.png?updatedAt=1720006845349" alt="" />
                    </div>
                    <div className='imgwidth'>
                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Badges/ServiceDesk_BestResults_Total_tS0NMFyBl.png?updatedAt=1720006845157" alt="" />
                    </div>
                    <div className='imgwidth'>
                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Badges/badge2_n28hZGK7Rg.png?updatedAt=1722599048715" alt="" />
                    </div>
                    <div className='imgwidth'>
                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Badges/ServiceDesk_BestUsability_Total_1xCJYKQmzp.png?updatedAt=1720006845283" alt="" />
                    </div>
                    <div className='imgwidth'>
                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Badges/ITServiceManagement(ITSM)Tools_BestEstimatedROI_Roi_5xNW-V53-s.png?updatedAt=1720006845188" alt="" />
                    </div>
                    <div className='imgwidth'>
                        <img src="https://ik.imagekit.io/zn4au2jftpm5/hr365/Badges/ServiceDesk_MostImplementable_Total_neul3c0nTw.png?updatedAt=1720007370227" alt="" />
                    </div>
                </div>
                <div> 
                    <LogoSlider logos={logos} />
                </div>
            </div>

            <div className='App_whitesectionG2'>
                <h2 className='HR_heading'>{heading}</h2>
                <div className='teamsmain HR_MT Hr_flex'>
                    <img 
                        style={{ borderRadius: '1vw' }} 
                        alt='Teams' 
                        src={imageUrl} 
                        loading="lazy"
                        onClick={() => openLightbox(imageUrl)} 
                    />
                    <Lightbox
                        isOpen={isLightboxOpen}
                        onClose={closeLightbox}
                        imageUrl={selectedImageUrl}
                    />
                </div>
            </div>

            <div className='cybersection' >
                <CyberSecurity />
            </div>
           
            
        </>
    );
}

export default G2Badge;
