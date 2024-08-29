import * as React from 'react';
import DemoButtons from './Utiilities/DemoButtons';
import ImageSction1 from "../Assests/Images/Ed365/ImageSection1.png";
import ImageSlider from './Utiilities/ImageSlider';
import Plans from './Utiilities/Plans';
import Accordion from './Utiilities/AccordionItem';
import Lightbox from './Utiilities/Lightbox';
import SpecailButtons from './Utiilities/SpecialButtons';
import Header from './Header and Footer/Header';
import Footer from './Header and Footer/Footer';
import ScrollToTop from './Utiilities/ScrolltoTop';
import G2Badge from './Utiilities/G2Badge';
import TabsWithImage from './Utiilities/TabsWithImage';
import Availability from './Utiilities/Availability';
import OurClients from './Utiilities/OurClients';
import Integration from './Utiilities/Integration';

function ED365() {

    const dynamicImages = [
        'https://ik.imagekit.io/zn4au2jftpm5/hr365/LOGO/Client%20logos1_RPf_AeXggA.png?updatedAt=1700627745162',
        'https://ik.imagekit.io/zn4au2jftpm5/hr365/LOGO/Client%20logos2_fZX_JD70Nu.png?updatedAt=1700627744112',
        // Add more image URLs as needed
    ];
    const accordionItems = [
        { title: 'What is the purpose of a employee directory?', content: 'It stores the names, contact, department, location and more relevant information for employees across the enterprise. These databases can be organized by specific teams, offices, or other groupings. Employees can quickly access the directory and find the appropriate contact information for coworkers.' },
        {
            title: 'What are the benefits of the app?', content: `An organized application can benefit both the employees as well as the organization. From enhancing employee communication to improving onboarding, connecting remote teams, helping people find expertise, and assisting your HR functions, it can link and bring multiple benefits to all the departments across the enterprise. 
        It improves workplace communication and collaboration.
        It builds better relationships at work (making your employees happier).
        It helps people find expertise.
        It helps your remote teams feel more connected.
        It assists your HR team.` },
        {
            title: 'How to see Microsoft teams online status in the app?',
            content: 'Please login as admin in this hr employee directory and go to settings icon which is near org chart on top right corner of the screen. Please look for on line presence settings -> advance settings & enable user online presence. Please note this setting will work only if SharePoint API is enabled. To enable, please check advance settings to configure API.'
        }, {
            title: 'How to exclude employee from Apps365 Sharepoint contact list?',
            content: `Go to System Settings of the app You can hide employees from the list using the employee name or employee email id in Exclude Users column or Exclude Domains column.
        Note: Only the site administrator has the right to access. Incase you need assistance, please click here`
        }

    ];
    const Edimages = [
        'https://ik.imagekit.io/zn4au2jftpm5/hr365/SPFxEDP/site-ED/Seamless-integration_-9GbPXuMO.png?updatedAt=1705384671710',
        'https://ik.imagekit.io/zn4au2jftpm5/hr365/SPFxEDP/site-ED/Real-time-sync_RvMctcJTU.png?updatedAt=1705383933936',
        'https://ik.imagekit.io/zn4au2jftpm5/hr365/SPFxEDP/site-ED/Advance-search-filter_THl4Y7SS0.jpg?updatedAt=1705384438699',
    ];
    const planData = [
        {
            name: 'Standard',
            price: '$49',
            sup: '99',
            text: 'Standard Plan Features',
            textY: 'per month, billed yearly',
            features: ['50 Users', '2 Support tickets per year', 'Free updates via Microsoft store', 'Alphabet filtering', '1 Exclude options ', '1 Search options', 'Mobile responsiveness', 'Auto sync data from M365'],

        },
        {
            name: 'Plus',
            price: '$99',
            sup: '99',
            textY: 'per month, billed yearly',
            text: 'Everything in Standard and...',
            features: ['Upto 150 users ', '4 support tickets per year', '3 Exclude options ', '3 Search options ', 'Choice to hide user properties', 'Configure SIP / Call protocols', 'Multiple profile image sync', 'Add as web part in Intranet'],
        },
        {
            name: 'Premium',
            price: '$149',
            sup: '99',
            textY: 'per month, billed yearly',
            text: 'Everything in Plus, and...',
            features: ['Upto 200 users ', 'Add-on $50 for every 100 users', 'Unlimited support', 'Free updates with support', '5 Exclude options', '5 Search options ', 'Custom Fields', 'Sync Active directory attributes', 'Birthday and anniversary notifications', 'Custom logo', 'Organization chart', 'Custom quick link', 'Custom return page link', 'Available in 10+ languages', 'Modern SharePoint App', 'Advance top bars filters'],
        },
        {
            name: 'Enterprise',
            price: '$249',
            sup: '99',
            textY: 'per month, billed yearly',
            text: 'Everything in Premium and...',
            features: ['Upto 300 users ', 'Add-on $50 for every 100 users', 'Custom column Search​', 'Filters - About me, Projects, Skills', 'Filters - School and Hobbies', 'Quicklink to custom profile pages', 'Executive Assistant relationship', 'Online presence with extended status', 'Calendar - free / busy information', 'Profile Imaged with text frames', 'Import users using CSV', 'QR Code ​', 'Exclude Bulk Shared Mailboxes​', 'Hide Mobile number selectively​', 'Guest Users ​', 'Dashboard', 'Non Microsoft 365 users​', 'Dedicated account manager', 'One free customization'],
        },
    ];
    const [isLightboxOpen, setLightboxOpen] = React.useState(false);
    const [selectedImageUrl, setSelectedImageUrl] = React.useState('');

    const openLightbox = (imageUrl) => {
        setSelectedImageUrl(imageUrl);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };
    const tabs = [
        { id: 1, title: 'Integration', Heading: 'Employee Directory Software with Microsoft 365 Integration', content: 'Transform your organizational synergy with SharePoint Employee Directory 365. This innovative solution offers seamless integration with Microsoft 365, particularly within SharePoint and Teams, making your employee directory an integral part of your digital workspace. With this integration, your employee directory becomes a central hub that enhances the user experience across platforms. Whether working in SharePoint for project management or collaborating in Teams, the directory provides instant access to crucial employee information..', image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/ED365/Integration_J10FfNdpZB.gif?updatedAt=1720500232501' },
        { id: 2, title: 'Search Capabilities', Heading: ' Enhanced Search Capabilities: Microsoft Employee Directory', content: 'The Microsoft Employee Directory is equipped with powerful search and filtering capabilities, allowing employees to quickly locate colleagues. With advanced features, individuals can search using names, departments, skills, and even custom attributes, personalizing the search experience. This is especially beneficial in large organizations, where finding the right contact can be daunting. The directory’s sophisticated search functions make it easy to navigate through a vast network of colleagues, ensuring users can effortlessly find the information they need.', image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/ED365/Searching_bszxfaq2js.gif?updatedAt=1720500232508' },
        { id: 3, title: 'Visualization', Heading: 'Interactive Organizational Visualizations', content: `The SharePoint Employee Directory includes dynamic and visually appealing organizational charts. These interactive charts serve as a visual guide, offering instant clarity on the company's hierarchy, team configurations, and intricate reporting lines. This feature is indispensable for helping team members understand their place within the organization and enables managers to strategically design and optimize team structures. By simplifying complex organizational relationships into clear, accessible visuals, these charts enhance collaboration and support more effective strategic planning and decision-making.`, image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/ED365/visualization_viJFIn6Wt.gif?updatedAt=1720500231624' },
        {
            id: 4, title: 'Data Synchronization', Heading: 'Real-Time Data Synchronization: Employee Directory Software', content: `SharePoint Employee Directory Software guarantees accurate and consistent employee data through real-time synchronization with Microsoft 365. Any updates or changes within Microsoft 365 are immediately reflected in the directory, thanks to this dynamic integration. This real-time syncing ensures that records remain up-to-date and free of discrepancies, offering a reliable framework for managing organizational data efficiently`,
            image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/ED365/dataSync__gvNUPNCn.gif?updatedAt=1720500232251'
        },
        {
            id: 5, title: 'Security', Heading: 'Enhanced Confidentiality and Security: Employee Directory 365 ', content: `Employee Directory 365 stands as a bastion of privacy with its advanced security measures and rigorous controls. It safeguards sensitive employee data by adhering strictly to legal and organizational standards, all within the Microsoft 365 framework. This software ensures that your workforce’s data stays secure within your Microsoft 365 tenant, protecting against unauthorized access and maintaining stringent compliance. This robust defense ensures that critical information about your employees remains protected and confined to your organization.`,
            image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/ED365/Security%20(1)_9wJphPYCa.gif?updatedAt=1720500232285'
        },
    ];


    return (
        <>
            <ScrollToTop />
            <Header />
            <div className='HR_panel'>
                <div className="HR_FlexCenterSpcBetween HR_ParentSection1" >

                    <div className='HR_Section1LeftSide '>
                        <h1 className='HR_primaryclr  ' >Employee Directory Software</h1>
                        <p className='HR_textclr'>Effortlessly manage your organization with Employee Directory 365. Empower your workforce with advanced search, customizable profiles, and real-time updates.</p>
                        {/* <h3 className='HR_primaryclr'>Get started with 14 days risk free trial.</h3>
                        <h3 className='HR_primaryclr'>No credit card details required</h3>
                        <div className='HR_OuterDemoButtons '>
                            <DemoButtons />
                        </div> */}
                    </div>
                    <div className='HR_Section1RightSide'>
                        <img alt='MainImage' src={ImageSction1} loading="lazy" />
                    </div>
                </div>


            </div>
            <div>
                <G2Badge
                    heading="Now Employee Directory 365 App is Available on Microsoft Teams"
                    imageUrl="https://ik.imagekit.io/zn4au2jftpm5/Apps365/Teams/EmployeeDirectory_zaqJrx9Qa.png?updatedAt=1720507108927" />
            </div>
            <div id="features" className="IdChanges"></div>
            <div>
                <div  id='features' >
                    <TabsWithImage tabs={tabs} />
                </div>
            </div>
            <div>
                <Availability />
            </div>
            <div id="client" className="IdChanges"></div>
            <div className='HR_whitesection' id='client'>
                <h1 className='HR_heading HR_MT' >Our Clients
                </h1>

                <div className='HR_MT'>
                    <OurClients />
                </div>
            </div>
            <div id="integration" className="IdChangesIntegration"></div>
           <div id='integration' className='integartionPT'>
           <Integration appName={"Employee Directory 365"} />

           </div>
           <div id="pricing" className="IdChangesIntegration"></div>
            <div className='HR_whitesection'>
                <h1 className='HR_heading HR_MT' id='pricing'>Employee Directory 365 Plans
                </h1>
                <div className='HR_MT'>
                    <div>
                        <Plans plans={planData} />
                    </div>
                </div>


                <SpecailButtons />
                <h1 className='HR_heading HR_MT'>Get started with 14 days risk free trial. <br />No credit card details required
                </h1>
                <div className='Hr_flex HR_MT'>
                    <DemoButtons />
                </div>
            </div>
            <div id="faq" className="IdChangesIntegration"></div>
            <div className='HR_FAQ' id="faq">

                <div>
                    <h1 className='HR_faq'>Frequently Asked Questions</h1>
                    <Accordion items={accordionItems} />
                </div>


            </div>


            <Footer /> </>
    )

}
export default ED365;