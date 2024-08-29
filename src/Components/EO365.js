import * as React from 'react';
import DemoButtons from './Utiilities/DemoButtons';
// import ImageSction1 from "../Assests/Images/Ed365/ImageSction1.png"
import ImageSlider from './Utiilities/ImageSlider';
import Plans from './Utiilities/Plans';
import Accordion from './Utiilities/AccordionItem';
import SpecailButtons from './Utiilities/SpecialButtons';
import Header from './Header and Footer/Header';
import Footer from './Header and Footer/Footer';
import G2Badge from './Utiilities/G2Badge';
import 'swiper/css';
import 'swiper/css/pagination';
import TabsWithImage from './Utiilities/TabsWithImage';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Integration from './Utiilities/Integration';
import Availability from './Utiilities/Availability';
import OurClients from './Utiilities/OurClients';
const ImageSction1 = require('../Assests/Images/Ed365/ImageSection1.png');
function EO365() {

    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        if (window.innerWidth < 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        };
    })

    const dynamicImages = [
        'https://ik.imagekit.io/zn4au2jftpm5/hr365/LOGO/Client%20logos1_RPf_AeXggA.png?updatedAt=1700627745162',
        'https://ik.imagekit.io/zn4au2jftpm5/hr365/LOGO/Client%20logos2_fZX_JD70Nu.png?updatedAt=1700627744112',

    ];
    const tabs = [
        { id: 1, title: 'Hire employee online', Heading: 'Utilize our cutting-edge Employee Onboarding Software to streamline your online hiring process effortlessly.', content: 'Our Employee Onboarding software, integrated into the Microsoft ecosystem, serves as the central hub for managing every step of onboarding. It streamlines job offer endorsements, digital processing of employment forms, and verification of credentials. Integration with Microsoft Teams ensures timely communication and keeps everyone informed about pending tasks. Our SharePoint HR onboarding template features automated workflows, sending reminders and alerts to IT, admin, hiring managers, and HR teams, simplifying the onboarding process for all stakeholders.', image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/Employee-Directory/HireEmpOnline_UiSuX5ANR.gif?updatedAt=1720179043756' },
        { id: 2, title: 'Onboarding Platform', Heading: ' Upgrade your onboarding process using our state-of-the-art platform', content: 'Facilitated by our Employee Onboarding application in PowerApps, the seamless integration of new hire data spans the Office 365 ecosystem, eliminating manual data entry and preventing redundancy. When a new team member joins, their information seamlessly populates across all HR365 dashboard applications, covering leave management, expense tracking, employee directories, asset management, performance metrics, SharePoint HR onboarding sites, and Microsoft Teams, thus optimizing organizational efficiency.', image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/Employee-Directory/OnBoardingPlaform_LrTLMDLPn.gif?updatedAt=1720179044499' },
        { id: 3, title: ' Self-service portal', Heading: 'Access our SharePoint Employee Onboarding for a seamless self-service portal to complete joining formalities.', content: 'With our SharePoint employee onboarding software, new team members navigate their onboarding journey seamlessly online, ensuring a smooth transition before and during their first day at work. This digital solution facilitates essential tasks such as accepting offer letters and completing employment forms efficiently. Furthermore, our platform enhances the onboarding experience by introducing new hires to their managers, teams, and organizational culture, fostering a strong sense of connection from day one.', image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/Employee-Directory/Selfserviceportal_l0zIfu3_7h.gif?updatedAt=1720179043999' },
        {
            id: 4, title: ' HR & Employee Checklists ', Heading: 'Enhance HR efficiency with our advanced Employee Onboarding Tool, ensuring best practices from start to finish.', content: `We've developed a detailed task list for our HR team using PowerApps to streamline workflows and ensure efficient onboarding. Employees receive a separate checklist with essential information for a smooth, compliant experience. These tools establish a structured approach to prevent oversights, foster organization, and ensure compliance from day one. PowerApps allows us to customize workflows, manage documents, assign tasks across departments, and facilitate electronic document signing and IT setup.`,
            image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/Employee-Directory/Hr&EmpChecklist_XkaypoFOMG.gif?updatedAt=1720179044295'
        },
        {
            id: 5, title: ' Integration and Reporting', Heading: 'Optimize integration and reporting with our Employee Onboarding app  ', content: `Our SharePoint employee onboarding solution offers extensive integration capabilities, enabling smooth connectivity with various business applications and compatibility with diverse payroll software through API connections. Users can also create customized workflows using Microsoft Power Automate and seamlessly integrate with Power Apps across the organization..`,
            image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/Employee-Directory/reports_qeHCGbZhn.gif?updatedAt=1720179043567p'
        },
    ];
    const planData = [
        {
            name: 'Standard',
            price: '$49',
            sup: '99',
            text: 'Standard Plan Features',
            textY: 'per month, billed yearly',
            features: ['10 users', '2 support tickets per annum', 'Free updates via MS store', 'Integrates with Office 365', 'SharePoint app only', 'Data stays in SharePoint', 'Mobile responsive', 'Multiple roles', 'Onboarding module with template', 'Standard notifications'],
        },
        {
            name: 'Plus',
            price: '$149',
            sup: '99',
            textY: 'per month, billed yearly',
            text: 'Everything in Standard and...',
            features: ['25 users', '4 support tickets per annum', 'Free updates with support', 'Theme customization', 'Digital joining forms', 'Employee record repository', 'Tasks & checklist for HR', 'Company policy documents', 'Document repository'],
        },
        {
            name: 'Premium',
            price: '$199',
            sup: '99',
            textY: 'per month, billed yearly',
            text: 'Everything in Plus, and...',
            features: ['40 users', 'Additional users at $1/user', 'Microsoft Teams App', 'Additional user properties', 'Custom fields in joining forms', 'Employee self service portal', 'Dashboard - Onboarding ', 'Outlook calendar integration', 'Tasks & checklist for various roles', 'Task tracking, status and reminders ', 'Employee self-service portal  '],
        },
        {
            name: 'Enterprise',
            price: '$299',
            sup: '99',
            textY: 'per month, billed yearly',
            text: 'Everything in Premium and...',
            features: ['50 users', 'Additional users at $1/user', 'Dashboard - Organization analytics', 'Auto user creation in Office 365 ', ' Auto add employee in MS Teams', 'Auto add employee in Office 365 Groups', 'Pre-onboarding module', 'MS forms integration', 'Adobe Sign / DocuSign Integration', 'Multiple reports', ' Smart and customizable notifications', ' Customize with Power Automate.', 'API connectivity', 'Connect with Power BI', 'Dedicated Account Manager', 'One free customization*'],
        },
    ];
    const accordionItems = [
        { title: `What is employee onboarding process and what are 5 C's in Onboarding?`, content: `How do you count user license in employee onboarding 365 application. Any user who is onboarded using application, via bulk upload, HR, admin, hiring manager or any other roles who interact with application for approvals or any other activities, are counted towards user licenses. This application provides self-service for the onboarded employees, maintain their documents digitally and send reminders based on selected tasks and reminders.` },
        {
            title: 'Why efficient employee onboarding platform or employee onboarding software matters?', content: `This Software is the first communication an employee has with the organization soon after the long interview journey process and: Employee onboarding software can help streamline the process of onboarding new employees. This could save organization business time and money by reducing the amount of time taken and swifts to get a new employee up to initial phase and productivity. This software can help in ensuring that new employees receive the information they need in a consistent and organized manner. It helps in reducing confusion or frustration and ensure everyone is on the same page from the word start. 

            The software can help create a more standardized onboarding experience for all employees. It reduces the turnover and improve the internal employee satisfaction. Onboarding software can help you track the progress of each individual employee during the onboarding process. This information can be used to identify areas where employees are struggling and need additional support. 
            
            It can help to customize each employee’s onboarding experience based on their needs and preferences. This allows to creation a more personalized and effective onboarding experience for everyone involved. So, streamlining employees with the process is not only to impresses new employees however, also to reduces the workload of the HR team and other teams across the organization. To know more on how to set MS out of the box site collection templet for onboarding: Link` },
        {
            title: 'Can I install multiple instances of Employee onboarding 365?',
            content: `Yes, you can install multiple instances of the application as long as it is in one Microsoft 365 tenant and total number of users of all the instances installed remain within the user limit as per your plan or license you purchased.`
        }, {
            title: 'Benefits of using an employee onboarding automation/ employee onboarding software',
            content: `To avoid last-minute confusion and compliance issues, we need to have a rock-solid employee onboarding process. Here’s what an efficient employee onboarding software or employee onboarding platform does: Gives a clearly outlined onboarding template Minimizes the made by paperwork Shortens the employee onboarding lifecycle Reduces manual intervention and human errors Lessens the workload of the HR team Provides a consistent experience to all new hires Injects transparency into the process flow Offers the employees a memorable onboarding experience`
        }, {
            title: "A good employee onboarding solutions/ employee onboarding process flow",
            content: `First stepping stone: Releasing of offer The employee onboarding process starts soon after the recruitment process is completed. Once a candidate is selected, an HR team shares a warm welcome email with a few essential documents like the offer letter, new hire welcome packet, links to fill out digital employee onboarding forms, and policy documents. Reaction from the New hire: Offer Acceptance or denial Once the new hire accepts or denies the offer, as the best practice the organizations should schedule a quick call to review the digital employee onboarding forms, benefits, and policies, and set expectations. Keeping the new hires engaged will affirm their choice to accept the offer. 

            Upon receiving positive feedback on the offer, it is important to kick-start the employee orientation. Waiting period: Critical period It is very important to know if the new hire just accepted the offer, but it doesn’t promise that they’ll turn up for the date of joining. During the waiting period, the employee might be open to offers from other potential employers as well. So, it is very crucial for the organization to build a good rapport with the new hire. Let the new hire know they’re valued. It is essential to have a plan during their waiting period while the employee onboarding process. 
            
            Last milestone: The day of joining On the first day, most new hires have mixed emotions. They feel anxious, happy, excited, and nervous at the same time. So, the primary duty of HR managers is to ensure that the new hires feel welcome and comfortable. Having a handy employee onboarding checklist will relieve the stress of HR staff. Here are a few things to do before the day of joining: Keep the orientation schedule ready Assign IT assets (workstation, email access, etc.) Obtain necessary office supplies (furniture, keys, access card, etc.) 
            
            Set up a salary account Assign a mentor or go-to-person who can help the employee settle down Coordinating with other departments It is essential to coordinate with key stakeholders (co-workers and managers) and notify them of the start date of the new hire via the employee onboarding platform. 
            
            Training and orientation sessions give the new hire an overview of the organization’s culture and an insight into company OKR. This phase offers new hires relevant information about the teams within the company, team processes, and company policies. This is the right time to set role-based goals and objectives for the next 30/ 60/ 90 days to show the new hires what they need to focus on. First bridge: The first quarter 
            
            The major objective of this period is to review the expectations of the organizations and the employee and ensure they match. This phase needs to be filled with active dialogues about the progress and continued efforts of the new hire in becoming an integral part of the organization.`
        }, {
            title: `Reinventing employee onboarding through automation/ digital employee onboarding`,
            content: `No matter how big the organization are, The HR leaders tend to have too much on their plates. They spend enough time scavenging for the right resources, and by the time the onboarding starts, they are downright exhausted. Rather than adding to their fatigue by forcing them to do things the old-fashioned way, automating with employee onboarding software or employee onboarding tools reduces their workload by a considerable amount. Using employee onboarding software, can ditch the onboarding checklist and forms and eliminate manual dependency in the employee onboarding process. With a digital onboarding experience using online employee onboarding app at work, they don’t have to chase after new hires and managers to complete the tasks assigned to them.`
        }, {
            title: "Conclusion",
            content: `A good employee on boarding software or onboarding programs should give new employees a sense of motivation to explore the new company culture compare to

            traditional onboarding . Learn with our employee onboarding tools, new hires can spend less time buried under paperwork and use more time towards
            
            understanding the organizational values, exploring the workplace, and making new friends.
            
            Get the below-listed feature in one app:
            
            SharePoint employee onboarding list.
            
            Learn the employee onboarding process.
            
            Microsoft 365 onboarding implementation.
            
            Employee onboarding with Microsoft.
            
            14 days free trial without using any credit card.
            
            For any support or query, please  click here `
        }

    ];


    return (
        <>
            {/* <ScrollToTop/> */}
            <Header />
            <div className='HR_panel'>
                <div className="HR_FlexCenterSpcBetween HR_ParentSection1" >

                    <div className='HR_Section1LeftSide'>
                        <h1 className='HR_primaryclr '>Employee onboarding software using Office 365</h1>
                        <p className='HR_textclr'>
                            Employee onboarding software using Office 365
                            HR365 employee Onboarding application is an Pre-onboarding and onboarding tools, with no paperwork involved, employees integrate into their teams is quicker, important HR documents such as offer letters, employee credentials, and employee handbooks in Office 365’s secure storage, hence eliminating the need of storing confidential data on 3rd party server.</p>
                        {/* <h3 className='HR_primaryclr '>Get started with 14 days risk free trial.</h3>
                        <h3 className='HR_primaryclr '>No credit card details required</h3>
                        <div className='HR_OuterDemoButtons'>
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
                    heading="Now Employee Onboarding 365 App is Available on Microsoft Teams"
                    imageUrl="https://ik.imagekit.io/zn4au2jftpm5/image%20(1)_arH6NTgsR.png?updatedAt=1724915466230"
                />
            </div>
            <div id="features" className="IdChanges"></div>
            <div >
                <TabsWithImage tabs={tabs} />
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
                <div id="integration" className="IdChangesIntegration"></div>
                <div id='integration' className='integartionPT'>
                    <Integration appName={"Employee Onboarding 365"} />
                </div>
                <div className='Hr_flex'>
                    <DemoButtons />
                </div>
                <div id="pricing" className="IdChangesIntegration"></div>
                <h1 className='HR_heading HR_MT' id='pricing'>Employee Onboarding 365 Plans
                </h1>
                <div className='HR_MT'>
                    <div>
                        <Plans plans={planData} />
                    </div>
                </div>
                <div className='Hr_flex HR_MT'>
                    <DemoButtons />
                </div>
                <SpecailButtons />
                <h1 className='HR_heading HR_MT'>Get started with 14 days risk free trial. <br />No credit card details required
                </h1>
            </div>
            <div id="faq" className="IdChangesIntegration"></div>
            <div className='HR_FAQ' id='faq'>

                <div >
                    <h1 className='HR_faq'>Frequently Asked Questions</h1>
                    <Accordion items={accordionItems} />
                </div>


            </div>

            <Footer /> </>
    )
}
export default EO365;