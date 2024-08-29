import * as React from "react";
import DemoButtons from "./Utiilities/DemoButtons";
import ImageSction1 from "../Assests/Images/Ed365/ImageSection1.png";
import ImageSlider from "./Utiilities/ImageSlider";
import Plans from "./Utiilities/Plans";
import Accordion from "./Utiilities/AccordionItem";
import Lightbox from "./Utiilities/Lightbox";
import SpecailButtons from "./Utiilities/SpecialButtons";
import Footer from "./Header and Footer/Footer";
import Header from "./Header and Footer/Header";
import ScrollToTop from "./Utiilities/ScrolltoTop";
import G2Badge from "./Utiilities/G2Badge";
import TabsWithImage from "./Utiilities/TabsWithImage";
import Availability from "./Utiilities/Availability";
import OurClients from "./Utiilities/OurClients";
import Integration from "./Utiilities/Integration";

function PM365() {
  const dynamicImages = [
    "https://ik.imagekit.io/zn4au2jftpm5/hr365/LOGO/Client%20logos1_RPf_AeXggA.png?updatedAt=1700627745162",
    "https://ik.imagekit.io/zn4au2jftpm5/hr365/LOGO/Client%20logos2_fZX_JD70Nu.png?updatedAt=1700627744112",
    // Add more image URLs as needed
  ];
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
  const planData = [
    {
      name: "Standard",
      price: "$79",
      sup: "99",
      text: "Standard Plan Features",
      textY: "per month, billed yearly",
      features: [
        "10 users",
        "2 support tickets per annum",
        "Free updates via MS store",
        "Integrates with Office 365",
        "SharePoint app only",
        "Data stays in SharePoint",
        "Multiple roles",
      ],
    },
    {
      name: "Plus",
      price: "$149",
      sup: "99",
      textY: "per month, billed yearly",
      text: "Everything in Standard and...",
      features: [
        "25 users",
        "4 support tickets per annum",
        "Free updates with support",
        "KRA Categories",
        "Custom Logo",
        "5 Point rating scale",
        "Notifications",
        "Multiple departments & groups",
        "Multiple appraisal cycles",
      ],
    },
    {
      name: "Premium",
      price: "$249",
      sup: "99",
      textY: "per month, billed yearly",
      text: "Everything in Plus, and...",
      features: [
        "40 users",
        "Additional users at $1.5/user",
        "Unlimited support tickets",
        "Microsoft Teams App",
        "Self-Review",
        "KRA bank",
        "KRA templates",
        "Weighted rating option",
        "Dashboard - Performance Analytics",
        "Rating to verbatims",
        "360 degree feedback module",
        "1:1 meeting tracker Module",
        "Smart notifications",
      ],
    },
    {
      name: "Enterprise",
      price: "$329",
      sup: "99",
      textY: "per month, billed yearly",
      text: "Everything in Premium and...",
      features: [
        "50 Users",
        "Additional users at $2/user",
        "Multiple Reviewers",
        "9 point enterprise rating scale",
        "Multiple rating scales options",
        "Collaboration timelines",
        "Dashboard - Org analytics",
        "1:1 Meetings on Calendar",
        "Customizable email notifications",
        "Customize with Power Automate",
        "Power BI & Power Apps Integration",
        "Dedicated Account Manager",
        "Integration with KRAs",
        "One free customization*",
      ],
    },
  ];
  const accordionItems = [
    {
      title: "How HR365 Performance Management System differentiate?",
      content:
        "Employee Performance Management Tools or employee feedback app enable clients to conduct a multi-dimensional assessment of their employees’ abilities, behavioural competencies, and performance. The analytics system will provide managers with the data, expertise, and tools they need to conduct a more constructive evaluation of their team.",
    },
    {
      title: "How HR365 Performance Management System differentiate?",
      content: `Employee Performance Management Tools or employee feedback app enable clients to conduct a multi-dimensional assessment of their employees’ abilities, behavioural competencies, and performance. The analytics system will provide managers with the data, expertise, and tools they need to conduct a more constructive evaluation of their team.`,
    },
    {
      title:
        "Can I install multiple instances of Employee Performance Management 365?",
      content:
        "Yes, you can install multiple instances of the application as long as it is in one Microsoft 365 tenant and total number of users of all the instances installed remain within the user limit as per your plan or license you purchased.",
    },
    {
      title: "Who uses performance management Tools / software?",
      content: `Managers and leaders are the main users of Employee Performance Management Software, they could track their team member’s performance and development with goal-tracking and feedback features.`,
    },
    {
      title: "What are the key components of a performance management system?",
      content: `The main components of a complete performance management system include features for:

            Conducting reviews
            
            Supplying feedback
            
            Generating reports
            
            with the goal of improving performance through productive communication between employees, managers, and leadership.`,
    },
    {
      title: "What is the performance management process?",
      content: `Performance management process usually flows as follows:

            Conducting reviews
            
            Collecting feedback
            
            Discussing feedback
            
            Creating performance
            
            improvement plans,
            
            setting and tracking goals
            
            Providing rewards and recognition.`,
    },
    {
      title: `How do I choose a performance management system?`,
      content: `When choosing a performance management system, it’s important to investigate which system will help you easily and efficiently manage performance while having the most impact. Will the prospective system topple current roadblocks, ease frustrations surrounding use and implementation, and facilitate better, more impactful conversations between employees and the managers assigned to their performance and development? Every stakeholder within your organization should have a say in how your current system answers this question and what any future system would need to offer to satisfy their needs. If you need any assistance, don’t hesitate to contact us using this link`,
    },
    {
      title: `What are performance management best practices?`,
      content: `While creating and implementing a performance management program, remember following performance management best practices: Frequent and timely reviews. Frequent meaning on a schedule that prompts an assessment cycle more often than once a year, and timely meaning when feedback is most pertinent following the completion of a major project, on an employment anniversary, etc. A balanced approach when collecting feedback. Allow for self-assessments alongside manager assessments and provide the means for collecting feedback from the employee’s teammates, subordinates, customers, and even vendors. Automation to eliminate the most time-consuming or burdensome aspects of performance management, such as scheduling reviews, conducting them, and collecting and consolidating actionable data from them.

            It also provides a foundation for better follow up as you can easily track performance progress over the long-term with automated reporting features. A focus on people and relationships. Positive, genuine relationships between employees and leadership fosters a culture of growth and accountability. In such a culture, high performance is a natural conclusion to a process that enables attentive relationship maintenance, mentorship, and communication.`,
    },
  ];
  const [isLightboxOpen, setLightboxOpen] = React.useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = React.useState("");

  const openLightbox = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <>
       <ScrollToTop/>
    <Header/>
      <div className="HR_panel">
        <div className="HR_FlexCenterSpcBetween HR_ParentSection1">
          <div className="HR_Section1LeftSide">
            <h1 className="HR_primaryclr  ">
              Employee Performance Management Software
            </h1>
            <p className="HR_textclr">
            Performance Management 365 is a premier appraisal tool designed for visionary organizations. It delivers real-time reviews with sophisticated monitoring, analysis, and evaluation, ensuring your goals and ROI are seamlessly achieved.
            </p>
            
          </div>
          <div className="HR_Section1RightSide">
            <img alt="MainImage" src={ImageSction1} loading="lazy" />
          </div>
        </div>
      </div>
      <div>
                <G2Badge
                 heading="Now Performance Management 365 App is Available on Microsoft Teams"
                 imageUrl="https://ik.imagekit.io/zn4au2jftpm5/Apps365/Teams/PM365_nLChfGaEs.png?updatedAt=1720507129448"  />
            </div>
            <div id="features" className="IdChanges"></div>
            <div id="features">
            <TabsWithImage tabs={tabs}/>
        </div>
        <div>
                <Availability/>
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
           <Integration appName={"Performance Management 365"} />

           </div>
   
           <div id="pricing" className="IdChangesIntegration"></div>
            <h1 className='HR_heading HR_MT' id='pricing'>Performance Management 365 Plans
            </h1>
     

      <div className="HR_whitesection">
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
   <Footer/> </>
  );
}
export default PM365;
