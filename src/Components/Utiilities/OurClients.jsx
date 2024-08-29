import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Dialog, DialogContent } from "@mui/material";
import { IoClose } from "react-icons/io5";
function OurClients() {
    //Mobile View
    const [isMobile, setIsMobile] = React.useState(false);
    React.useEffect(() => {
        if (window.innerWidth < 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        };
    }, [])
    //Swiper Slides
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const slidesData = [
        {
            id: 1,
            name: 'Wessam Baroudi',
            rating: 5,
            company: 'Head Of Information & Technology  ',
            testimonial: `Having recently joined ABC Mobility, I quickly realised we needed to invest in a helpdesk to streamline the IT operation and be the one-stop shop to manage all our users’ issues and requests.I evaluated several products, and I have decided on HR365. Being a customizable SharePoint system, HR365 met most of our requirements. We wanted a system that is capable of multi teams and HR365 delivers this out of the box.`,
        },
        {
            id: 2,
            name: 'Jason Gardner',
            rating: 5,
            company: 'Director of Infrastructure ',
            testimonial: 'We were operating in an environment where we received support requests in many ways; email, teams messages, texts, phone calls, etc. For a smaller organization, this presented many challenges such as confusion within the teams as to the best way to receive service, no way to track service issues or verify they were completed and when, etc. We evaluated several options for a ticketing system, including building our own within the MS environment.',
        },
        {
            id: 3,
            name: 'Corey Jackson',
            rating: 5,
            company: 'Barton Associates ',
            testimonial: `Great App for SharePoint or MS Teams! 
We currently use within SharePoint and MS Teams to help employees find one another. We have been very happy with functionality and support provided by HR365.`,
        },
        {
            id: 4,
            name: 'JP Nicols',
            rating: 5,
            company: 'Cofounder',
            testimonial: `Outstanding tech support! We use HR365 a little differently than most. We have a small internal team, but 1000+ association members and we use HR365 as a member directory. We had a rather complex permissions issue with making sure our members ("guest users" in MSFT parlance) have full access to everyone's info and Frank and the team spent nearly three hours extremely late on their Friday night making sure we got it resolved.`,
        },
        {
            id: 5,
            name: ' John Persons',
            rating: 5,
            company: 'Vice President of Operations ',
            testimonial: `Great product AND great support!
Having come from a very old version of Employee Directory 365, Frank and Sakshi were fantastic through the upgrade and implementation process of the new Modern SharePoint installation. All questions were answered in a timely fashion with remote support utilized where needed to address in full. It's great to see this level of service from a company. `,
        },

    ];
    // React.useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
    //     }, 2000); // Move to the next slide every 2 seconds for a smoother effect
    //     return () => clearInterval(interval); // Clear interval on component unmount
    // }, []);

    const visibleLogos = Array.from({ length: 3 }).map((_, i) =>
        slidesData[(currentIndex + i) % slidesData.length]
    );



    const [isOpen, setIsOpen] = React.useState(false);
    const [isTruncated, setIsTruncated] = React.useState(true);
    const [currentSlide, setCurrentSlide] = React.useState();
    const toggleModal = () => setIsOpen(!isOpen);
    const toggleTruncated = () => setIsTruncated(!isTruncated);
    const handleClose = () => {
        setIsOpen(false);
    };

    function openModal(slide) {
        toggleModal();
        setCurrentSlide(slide);

    }

    return (
        <>
            <Swiper
                slidesPerView={isMobile ? 1 : 3}
                spaceBetween={30}
                scrollbar
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                className="mySwiper"

            >
                {visibleLogos.map((slide) => (
                    <SwiperSlide key={slide.id} className="swiperSlidestyles">
                        <div className="CardHeaderStyle">
                            <span className="UserNameStyles">{slide.name}</span>
                            <div className="elementor-star-rating">
                                {[...Array(slide.rating)].map((_, i) => (
                                    <i key={i} className="elementor-star-full">★</i>
                                ))}
                            </div>
                            <span className="elementor-testimonial__title">{slide.company}</span>
                            <div className="elementor-testimonial__content">
                                <div className="elementor-testimonial__text">
                                    {isTruncated ? (slide.testimonial.slice(0, 100).concat(isTruncated ? '...' : '')): slide.testimonial}
                                    {slide.testimonial.length > 100 && (
                                        <div>
                                            
                                            <button onClick={() => openModal(slide)} className="read-more-btn">
                                                {isTruncated ? 'Read More' : 'Show Less'}
                                            </button>
                                        </div>
                                    )}
                                    {/* "{slide.testimonial}" */}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Dialog
                open={isOpen}
                onClose={handleClose}
                maxWidth={"xl"}
                className="ClinetModal"
            >
                <DialogContent>

                    <div className="CardHeaderStyleModal">
                        <div className='flexEnd'>
                    <IoClose onClick={handleClose}/>
                    </div>
                        <span className="UserNameStyles">{currentSlide?.name}</span>
                            <span className="elementor-testimonial__title">{currentSlide?.company}</span>
                        <div className="elementor-star-rating">
                            {[...Array(currentSlide?.rating)].map((_, i) => (
                                <i key={i} className="elementor-star-full">★</i>
                            ))}
                        </div>
                        <div className="elementor-testimonial__content">
                            <div className="elementor-testimonial__text">
                                "{currentSlide?.testimonial}"
                            </div>
                        </div>
                    </div>
                    {/* <h2>{currentSlide?.name}</h2>
                    <p>{currentSlide?.testimonial}</p> */}
                    {/* <button onClick={toggleModal} className="close-btn">Close</button> */}
                </DialogContent>

            </Dialog>
        </>
    )
}

export default OurClients;