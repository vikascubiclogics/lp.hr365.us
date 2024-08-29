import React, { useState, useEffect } from 'react';
import './LogoSlider.css'; // Import the CSS file

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
];

const LogoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 2000); // Move to the next slide every 2 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  // Dynamic number of visible logos depending on screen size
  const visibleLogos = Array.from({ length: window.innerWidth <= 768 ? 1 : 8 }).map(
    (_, i) => logos[(currentIndex + i) % logos.length]
  );

  return (
    <div className="slider">
      <div className="slider-inner">
        {visibleLogos.map((logo, index) => (
          <div key={index} className="slideh">
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
