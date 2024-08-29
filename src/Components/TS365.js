import * as React from 'react';
import DemoButtons from './Utiilities/DemoButtons';
// import ImageSction1 from "../Assests/Images/Ed365/ImageSction1.png"
import Plans from './Utiilities/Plans';
import Accordion from './Utiilities/AccordionItem';
import SpecailButtons from './Utiilities/SpecialButtons';
import Header from './Header and Footer/Header';
import Footer from './Header and Footer/Footer';
import G2Badge from './Utiilities/G2Badge';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import TabsWithImage from './Utiilities/TabsWithImage';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Availability from './Utiilities/Availability';
import Integration from './Utiilities/Integration';
import OurClients from './Utiilities/OurClients';
function TS365() {

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
        { id: 1, title: 'Microsoft Time Tracking', Heading: 'Microsoft Time Tracking Software for all businesses', content: 'Transform your project management with Timesheet 365, a cloud-based Microsoft time tracking designed for small to medium-sized businesses and large enterprises. This Microsoft-integrated software offers detailed insights into time allocation and activities, enhancing both accurate customer billing and operational efficiency. Its intuitive interface ensures precise time tracking and provides a comprehensive view of past activities, enabling users to make data-driven decisions and optimize their workflows.', image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/Timesheet365/TimeTrack_mOyvlDqZgm.gif?updatedAt=1720167132158' },
        { id: 2, title: 'Seamless Collaboration', Heading: ' Seamless Collaboration with Employee Time Tracking Software', content: 'Effective Microsoft timesheet management is key to successful project execution, and our Microsoft time tracking solution is designed to simplify the reporting process for both users and managers. Our user-friendly software ensures smooth time tracking for employees across various projects, while providing managers with powerful reporting tools for valuable insights. Whether tracking time daily or weekly, our intuitive interface makes it easy to log hours for projects of any size. The robust reporting system allows users to quickly view, print, or export reports, with flexible filtering options.', image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/Timesheet365/SeamlessCollab_iYj0QjoIJ6.gif?updatedAt=1720167132341'},
        { id: 3, title: 'Review Workflow ', Heading: 'Review Workflow in the SharePoint Time tracking  ', content: 'Our SharePoint time tracking solution features a streamlined approval process that enhances your workflow efficiency. When users complete a task, update progress to 100%, or submit their weekly SharePoint timesheet, our system automatically triggers an intuitive approval workflow. Managers and designated approvers can thoroughly review time entries to ensure accuracy and compliance. Once a day or week is approved, users are locked out from making any further edits to the time entries for that specific task or period, thereby maintaining data integrity and accountability.', image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/Timesheet365/ReviewWorkflow_oH_zTtrwNo.gif?updatedAt=1720167132438' },
        {
            id: 4, title: 'Unlimited Projects ', Heading: 'Unlimited Projects & Clients in Our SharePoint Timesheet  ', content: `SharePoint Timesheet empowers you to seamlessly manage your projects. Effortlessly create and oversee customer accounts, distinguish between billable and non-billable hours, and set custom hourly rates for precise client invoicing. This Microsoft Timesheet app integrates a centralized repository within employee time tracking software, enabling you to store and access project documents with ease. Elevate your project management by combining streamlined time tracking with easy document management—all in one powerful solution.`,
            image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/Timesheet365/Unlimitedprojectandclient_M-TLMLTJ5Q.gif?updatedAt=1720167132311'
        },
        {
            id: 5, title: 'Reports', Heading: 'Generate Reports with Microsoft 365 time tracking app  ', content: `Our SharePoint Timesheet app provides project and employee managers with comprehensive insights into project timelines and activities. Track the time recorded by individual users and generate real-time reports that can be easily exported to Excel. This Microsoft 365 time tracking app offers a variety of reports, including detailed overviews of reported time by month, week, and across all projects. Dive into team performance with reports that highlight the time team members spend on specific projects or multiple projects, differentiating between billable and non-billable hours.`,
            image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/Timesheet365/Reports_EZrX33OX9.gif?updatedAt=1720167132311'
        },
    ];
    const planData = [
        {
            name: 'Standard',
            price: '$49',
            sup: '99',
            text: 'Standard Plan Features',
            textY: 'per month, billed yearly',
         
             features :[
                'Upto 10 users',
                '2 support tickets per year',
                'Free updates via Microsoft Store',
                'Integrates with Office 365',
                'SharePoint-hosted app',
                'Data stays in your SharePoint',
                'Weekly / Daily timesheets',
                'Selection of Project / People',
                'Manager ',
                'Auto approve timesheets',
                'Track hours, log hours & live tracking',
                'Draft / Submit / Approve timesheets',
                'Project / Tasks tracking',
                'Daily / Weekly / Monthly reports'
              ],
        },
        {
            name: 'Plus',
            price: '$74',
            sup: '99',
            textY: 'per month, billed yearly',
            text: 'Everything in Standard and...',
            features: [
                '20 users',
                '4 support tickets per annum',
                'Clone weekly timesheets',
                'Detailed project report',
                'Billable/non-billable hours tracking',
                'Configure flat hourly cost for projects',
                'Four user roles',
                'My team report',
                'Configure user-specific hourly cost',
                'Bulk project/task creation',
                'Add custom columns',
                'Self-assign task option'
              ]
              
        },
        {
            name: 'Premium',
            price: '$89',
            sup: '99',
            textY: 'per month, billed yearly',
            text: 'Everything in Plus, and...',
            features: [
                'Up to 20 users',
                'Additional users at $1/user',
                'Unlimited support',
                'Free updates with support',
                'Configure user-specific rates',
                'Configure flat hourly cost for projects',
                'Additional Program Manager role',
                'My team report',
                'Pending weekly timesheet reminders',
                'Bulk project/task/activities creation',
                'Activity tracking',
                'Select weekdays for time tracking',
                'Add Office 365 external users (optional)',
                'Select days for time tracking',
                'Disable projects'
              ]              
        },
        {
            name: 'Enterprise',
            price: '$119',
            sup: '99',
            textY: 'per month, billed yearly',
            text: 'Everything in Premium and...',
            features: [
                'Upto 20 users',
                'Additional users at $2/user',
                'Configure start day of the week',
                'Integrate with Time Off Manager Plus',
                'Project end date & notifications',
                'Email templates',
                'Delete projects',
                'Add Office 365 external users',
                'Customize with Power Automate',
                'API connectivity',
                'Connect with Power BI',
                'Dedicated Account Manager',
                'One customization free*'
              ],
              
        },
    ];
    const accordionItems = [
        { title: `1. What information is included in the timesheet app?`, content: `A timesheet app typically includes the following information: Employee Information: Name, employee ID, department, and other relevant details.Time Entries: Date, start time, end time, and duration of each work period. Project or Task Allocation: Details about the project or specific tasks worked on during each time entry.Overtime and Leave Tracking: Calculation and tracking of overtime hours worked and any leave taken. Approval Workflow: Process for supervisors or managers to review and approve timesheets.Reporting and Analytics: Summaries, charts, or reports showing total hours worked, project/task breakdowns, and other metrics.Integration: Ability to integrate with other systems such as payroll, project management, or HR software.Accessibility: Options for employees to access and submit timesheets through web interfaces, mobile apps, or other platforms.Customization: Flexibility to configure fields, workflows, and settings according to organizational needs Security: Measures to ensure data privacy and compliance with regulations.Timesheet app vary in features and complexity, but these are common elements found in most such software solutions.` },
        {
            title: `2. How can a manager approve or reject his employee's daily or weekly timesheet?`, content: `A manager can approve or reject an employee's daily or weekly timesheet through a streamlined process, usually involving a timesheet management system.

The employees submit their timesheet detailing hours worked and tasks completed. The manager reviews the entry for accuracy, verifying it aligns with project goals and work expectations.

If the timesheet is accurate, the manager approves it, often with a simple click or electronic signature.

If there are discrepancies or errors, the manager can reject it, usually providing comments or corrections, and request resubmission. This process helps ensure accurate time tracking and accountability.` },
        {
            title: `3. How does SharePoint facilitate time tracking?`,
            content: `SharePoint can facilitate time tracking in several ways, leveraging its capabilities as a collaboration and document management platform:

Custom Lists: SharePoint allows users to create custom lists where time entries can be recorded. These lists can include fields for date, start time, end time, task or project details, and other relevant information.
Workflows: SharePoint supports workflows that can automate processes related to time tracking, such as sending reminders for employees to submit timesheets, routing timesheets for approval, and notifying supervisors of overdue submissions.
Integration: SharePoint can integrate with other Microsoft products like Outlook and Excel, allowing users to export or import data easily for further analysis or reporting.
Calendar Views: SharePoint calendars can be used to visually represent time entries, making it easier to see when tasks were worked on or completed.
Access Control: SharePoint's permissions and security features ensure that only authorized personnel can view or modify time tracking data, maintaining data integrity and confidentiality.
Reporting: SharePoint allows users to create custom reports and dashboards using Power BI or other reporting tools, providing insights into time spent on different tasks or projects.
Mobile Accessibility: SharePoint can be accessed via mobile devices, enabling employees to enter time data on the go and ensuring timely updates to timesheets.
Customization: SharePoint's flexibility allows organizations to customize time tracking solutions to fit specific workflows and business requirements, adapting fields, forms, and processes as needed.

SharePoint provides a versatile platform for organizations to implement and manage time tracking processes effectively, leveraging its collaborative and workflow automation capabilities.`
        }

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
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
        }, 2000); // Move to the next slide every 2 seconds for a smoother effect

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    const visibleLogos = Array.from({ length: 3 }).map((_, i) =>
        slidesData[(currentIndex + i) % slidesData.length]
    );
    return (
        <>
            {/* <ScrollToTop/> */}
            <Header />
            <div className='HR_panel'>
                <div className="HR_FlexCenterSpcBetween HR_ParentSection1" >

                    <div className='HR_Section1LeftSide'>
                        <h1 className='HR_primaryclr '>Timesheet App – Microsoft Timesheet 365</h1>
                        <p className='HR_textclr'>
                        Let Timesheet 365 streamline your project management. This Microsoft app tracks hours, manages tasks, and generates reports, all within Microsoft 365.</p>
                       
                    </div>
                    <div className='HR_Section1RightSide'>
                        <img alt='MainImage' src={"https://ik.imagekit.io/zn4au2jftpm5/Assetmanagement_Y3nCwnMqjV.png?updatedAt=1718089340917"} loading="lazy" />
                    </div>
                </div>
            </div>
            <div>
            <G2Badge 
    heading="Now Timesheet 365 App is Available on Microsoft Teams"
    imageUrl="https://ik.imagekit.io/zn4au2jftpm5/hr365/SPFxEDP/site-timesheet/image_2023_11_20T15_46_44_813Z_sM-TG7WPm.png?updatedAt=1700551105010" 
/>

            </div>
            <div id="features" className="IdChanges"></div>
            <div >
            <TabsWithImage tabs={tabs}/>
        </div>
        <div>
                <Availability/>
            </div>
            <div id="integration" className="IdChangesIntegration"></div>
            <div id='integration' className='integartionPT'>
           <Integration appName={"Employee Directory 365"} />

           </div>


           <div id="client" className="IdChanges"></div>
            <div className='HR_whitesection'>
                <h1 className='HR_heading HR_MT' id='client'>Our Clients
                </h1>

                <div className='HR_MT'>
                <OurClients/>

                </div>

                <h1 className='HR_heading HR_MT integartionPT' id='integration'>Connect Timesheet 365 with your other apps
                </h1>
                <div className='HR_MT'>
                    <img alt='Teams' src={"https://ik.imagekit.io/zn4au2jftpm5/hr365/SPFxEDP/powerplatformtoolset_ReRdfzh4N.png?updatedAt=1700466299384"} loading="lazy"
                        onClick={() => openLightbox("https://ik.imagekit.io/zn4au2jftpm5/hr365/SPFxEDP/powerplatformtoolset_ReRdfzh4N.png?updatedAt=1700466299384")}
                    />
                </div>
                <div className='Hr_flex'>
                    <DemoButtons />
                </div>
                <div id="pricing" className="IdChangesIntegration"></div>
                <h1 className='HR_heading HR_MT' id='pricing'>Timesheet 365 Plans
                </h1>
                <div className="HR_MT">
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
export default TS365;