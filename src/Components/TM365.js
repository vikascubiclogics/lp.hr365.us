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
function TM365() {
    const dynamicImages = [
        'https://ik.imagekit.io/zn4au2jftpm5/hr365/LOGO/Client%20logos1_RPf_AeXggA.png?updatedAt=1700627745162',
        'https://ik.imagekit.io/zn4au2jftpm5/hr365/LOGO/Client%20logos2_fZX_JD70Nu.png?updatedAt=1700627744112',
        // Add more image URLs as needed
    ];
    const planData = [
        {
            name: 'Standard',
            price: '$49',
            sup: '99',
            text: 'Standard Plan Features',
            textY: 'per month, billed yearly',
            features: ['Upto 50 users','2 support tickets per annum','Free updates via MS store','Integrates with Office 365','Save & submit requests​','Approve & reject requests​','Cancel leave request','Email notifications​','Customized leave types​','Multiple roles – four types​','Customize leave year​','Work week pattern setup'],

        },
        {
            name: 'Plus',
            price: '$129',
            sup: '99',
            textY: 'per month, billed yearly',
            text: 'Everything in Standard and...',
            features: ['Upto 100 users','4 support tickets per annum','Request half day & two-hour leaves​','Comp Off / In Lieu of leaves','Location based public holidays','Level / Grade based leaves','Tenure based leaves​','Custom theme, brand & logo​','Non working days exclusion','Submit leaves on behalf of users'],
        },
        {
            name: 'Premium',
            price: '$199',
            sup: '99',
            textY: 'per month, billed yearly',
            text: 'Everything in Plus, and...',
            features: ['200 users','Add-on $25 for every 50 users','Free update with support​','Unlimited support​','Accrual based leaves​','Hourly leave approval​','Approval delegation​','Reminder notification to approvers','Leave cancellation ​','Auto approvals ​','Approve on behalf of manager​','Leave templates','Multi language'],
        },
        {
            name: 'Enterprise',
            price: '$249',
            sup: '99',
            textY: 'per month, billed yearly',
            text: 'Everything in Premium and...',
            features: ['300 users','Add-on $25 for every 50 users','Recurrence leaves ​','Teams calendar​','Multilevel approval workflow','30 Type of leaves','Customize with Power Automate','API connectivity​','Connect with Power BI​','One free customization*'],
        },
    ];
    const data = [

        {
            heading: 'Application home – Leaves information at a glance ',
            imageUrl: 'https://ik.imagekit.io/zn4au2jftpm5/hr365/TMP_SPFX/ApplicationHome.png?updatedAt=1638250722692',
            p: `Check status of requested leaves at the Home page.`,
            p1:`Type-wise leaves balance visibility.`,
            p2:`Managers can review leave requests.`,
        },
        {
           
            heading: 'Managers can review leave requests.',
            p:`You can give your nod to all your subordinates' leave requests with just a couple of clicks.`,
            imageUrl: 'https://ik.imagekit.io/zn4au2jftpm5/hr365/TMP_SPFX/BulkApproval.png?updatedAt=1638250734127',
        },
        {

            heading: 'Collaborate with your teammates',
            imageUrl: 'https://ik.imagekit.io/zn4au2jftpm5/hr365/HDP_Regular/Comments_HD365_x7hBhTdyM.png?updatedAt=1685503315168',
        },
        {
            heading: 'Control to the HR',
            imageUrl: 'https://ik.imagekit.io/zn4au2jftpm5/hr365/TMP_SPFX/ControlToTheHR.png?updatedAt=1638250711864',
            p:`The HR user can apply and approve leaves on behalf of other users. Manager's role can be delegated.`,
        },
        {
            heading: 'Dynamic reporting',
            imageUrl: 'https://ik.imagekit.io/zn4au2jftpm5/hr365/TMP_SPFX/DynamicReporting.png?updatedAt=1638359954432',
            p:`Leaves statistics through charts. Desired report can be easily exported.Filters to narrow down search results.`
        },
        {
            heading: `Connect Time off Manager 365 with your other apps`,
            imageUrl: 'https://ik.imagekit.io/zn4au2jftpm5/hr365/SPFxEDP/powerplatformtoolset_ReRdfzh4N.png?updatedAt=1700466299384',
        },

        // Add more objects as needed
    ];
    const accordionItems = [
        { title: 'From where the employees can apply leave? ', content: `An employee can apply his leave from their self service portal or from the application.

        First click on New Request button.
        
        Once pop-up is opened, apply your leave request and as soon as user clicks submit for approve, it would get an email to the manager. As well as that leave would be added in manager action.` },
        {
            title: 'Can a HR apply leave on behalf of the users?', content: `As a HR executive, this tool gives the ability to apply leave on behalf of the user.

            Go to HR Actions tab and click on “Add leave on behalf of user” button.
            
            Once the pop-up opens, enter employee name and email and apply the leave on behalf of that employee and click on submit for approve.` },
        {
            title: 'Can I install multiple instances of Time off Manager 365?',
            content: 'Yes, you can install multiple instances of the application as long as it is in one Microsoft 365 tenant and total number of users of all the instances installed remain within the user limit as per your plan or license you purchased.'
        }, {
            title: 'Where can we define annual casual paid leaves & medical leaves?',
            content: `We can configure leave management application settings from the HR365 portal.

            Annual casual paid leaves, medical leaves, number of restricted holidays, annual leave start date and end date can be defined in settings page of HR365. The calendar year also can be defined here.`
        },{
            title:"From where can a manager see all the requests for leaves?",
            content:`Manager can see all the requests for leaves for a particular day in “Manager Action” tab.`
        },{
            title:`Do we have option of customizing or adding more leave types?`,
            content:`Yes. We can customize or add more leave types as per requirement.

            First go to “Leave Settings” tab and select “Leave Type” and add leave type as per your requirement.
            
            This leave type would be added in New request form while adding new leave request.`
        },{
            title: `Where can employee see his status of leave requests?`,
            content:`An employee can see the status of all his previous leave requests where those are in pending, approved or rejected in the home page from this portal.`
        },{
            title:`Where can we define various email templates?`,
            content:`First go to “System Settings” tab then select Email Settings.

            Here you can define email body, email signatures, you can set it up as per your organization needs.`
        },{
            title:`Can we add additional appprovals for approving the leave request?`,
            content:`Yes, we can add additional approvers in Settings by selecting the “Second level approval for LAMS App” and two level approvals would be added in the LAMS application while adding Leave request.`
        },{
            title:`Does the manager has the ability for bulk approval?`,
            content:`Yes. Manager has the ability for bulk approval.

            First click on “Click here for Bulk Approval”.
            
            Once pop-up opens, select the leave request you want to approve or reject and select Approve or Reject button accordingly.`
        },
        {
            title:`Is there any provision for applying Comp-off leave request?`,
            content:`Employee can raise a comp-off for any previous day he worked on.

            First, go to “Add Comp-off” tab, then click on “Add” button.
            
            Once the pop-up opens, apply your Comp-off leave request, and as soon as user clicks submit for approve,
            
            that would stay and get added into the leave record.`
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
    const tabs = [
        { id: 1, title: 'Integration', Heading: 'Employee Directory Software with Microsoft 365 Integration', content: 'Transform your organizational synergy with SharePoint Employee Directory 365. This innovative solution offers seamless integration with Microsoft 365, particularly within SharePoint and Teams, making your employee directory an integral part of your digital workspace. With this integration, your employee directory becomes a central hub that enhances the user experience across platforms. Whether working in SharePoint for project management or collaborating in Teams, the directory provides instant access to crucial employee information..', image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/ED365/Integration_J10FfNdpZB.gif?updatedAt=1720500232501' },
        { id: 2, title: 'Search Capabilities', Heading: ' Enhanced Search Capabilities: Microsoft Employee Directory', content: 'The Microsoft Employee Directory is equipped with powerful search and filtering capabilities, allowing employees to quickly locate colleagues. With advanced features, individuals can search using names, departments, skills, and even custom attributes, personalizing the search experience. This is especially beneficial in large organizations, where finding the right contact can be daunting. The directory’s sophisticated search functions make it easy to navigate through a vast network of colleagues, ensuring users can effortlessly find the information they need.', image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/ED365/Searching_bszxfaq2js.gif?updatedAt=1720500232508'},
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
             <ScrollToTop/>
        <Header/>
            <div className='HR_panel'>

                <div className="HR_FlexCenterSpcBetween HR_ParentSection1" >

                    <div className='HR_Section1LeftSide'>
                        <h1 className='HR_primaryclr'>Time Off Manager</h1>
                        <p className='HR_textclr'>Time off Manager Software / Leave management System on cloud is a highly configurable & this leave management system cab can address need of any organisation, be it small or big. It can also easily be integrated with cloud solutions such as payroll on cloud and time and attendance system. HR 365 leave management software does not require additional infrastructure. This Office 365 leave management system gives the experience of latest UI and best leave management software experience.</p>
                        <h3 className='HR_primaryclr '>Get started with 14 days risk free trial.</h3>
                        <h3 className='HR_primaryclr '>No credit card details required</h3>
                        <div className='HR_OuterDemoButtons'>
                            <DemoButtons />
                        </div>
                    </div>
                    <div className='HR_Section1RightSide'>
                        <img alt='MainImage' src={ImageSction1} loading="lazy" />
                    </div>
                </div>
            </div>
            <div>
                <G2Badge
                 heading="Now Employee Onboarding 365 App is Available on Microsoft Teams"
                 imageUrl="https://ik.imagekit.io/zn4au2jftpm5/Apps365/Teams/EO365_orcVYcu2O.png?updatedAt=1720509487074"  />
            </div>
            <div id="features" className="IdChanges"></div>
            <div id='features'>
            <TabsWithImage tabs={tabs}/>
        </div>
        <div>
                <Availability/>
            </div>
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
                
                <h1 className='HR_heading HR_MT' id='pricing'>Time off Manager 365 Plans
                </h1>
                <div className='HR_MT'>
                    <div>
                        <Plans plans={planData} />
                    </div>
                </div>
                <div className='Hr_flex HR_MT'>
                <DemoButtons />
            </div>
            <SpecailButtons/>
            <h1 className='HR_heading HR_MT'>Get started with 14 days risk free trial. <br />No credit card details required
            </h1>

            </div>
            <div className='HR_panel'>

            <div>
                <h1 className='HR_faq'>Frequently Asked Questions</h1>
                <Accordion items={accordionItems} />
            </div>


        </div>
            
        <Footer/></>
    )
}
export default TM365;