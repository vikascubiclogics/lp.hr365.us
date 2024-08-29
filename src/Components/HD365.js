import * as React from "react";
import DemoButtons from "./Utiilities/DemoButtons";
import ImageSction1 from "../Assests/Images/Ed365/ImageSection1.png";
import ImageSlider from "./Utiilities/ImageSlider";
import Plans from "./Utiilities/Plans";
import Accordion from "./Utiilities/AccordionItem";
import Lightbox from "./Utiilities/Lightbox";
import SpecailButtons from "./Utiilities/SpecialButtons";
import Header from "./Header and Footer/Header";
import Footer from "./Header and Footer/Footer";
import ScrollToTop from "./Utiilities/ScrolltoTop";
import G2Badge from "./Utiilities/G2Badge";
import TabsWithImage from "./Utiilities/TabsWithImage";
import Availability from "./Utiilities/Availability";
import OurClients from "./Utiilities/OurClients";
import Integration from "./Utiilities/Integration";

function HD365() {
  const planData = [
    {
      name: "Standard",
      price: "$11",
      sup: "99",
      text: "Standard Plan Features",
      textY: "per month, billed yearly",
      features: [
        "Minimum 5 users",
        "25 ticket requesters",
        "2 Support tickets per year",
        "Free updates via Microsoft store",
        "Integrates with Office 365",
        "SharePoint-hosted app",
        "Data stays in your SharePoint",
        "Custom request types",
        "Mobile responsive",
        "Multiple roles",
        "Smart notifications",
        "Self Service web forms",
        "Multiple departments groups",
        "Multiple departments groups",
        "Collaboration with ticket requester",
      ],
    },
    {
      name: "Plus",
      price: "$24",
      sup: "99",
      textY: "per month, billed yearly",
      text: "Everything in Standard and...",
      features: [
        "Minimum 5 users",
        "50 ticket requesters",
        "Unlimited support tickets",
        "Commonly users service fields",
        "Dashboard",
        "Canned responses",
        "Custom signatures",
        "Custom ticket status",
        "Custom ticket sequence",
        "Ticket fields customization",
        "Private Notes",
        "Ticket Splitting & Merging",
      ],
    },
    {
      name: "Premium",
      price: "$44",
      sup: "99",
      textY: "per month, billed yearly",
      text: "Everything in Plus, and...",
      features: [
        "Minimum 5 users",
        "Unlimited ticket requesters",
        "Unlimited support",
        "Customer satisfaction Surveys",
        "Free updates with support",
        "Create new ticket from emails",
        "Email templates",
        "Auto assign tickets",
        "Auto close tickets",
        "Auto capture email attachments",
        "Integrate with Asset Management",
        "Block spammers and domains",
        "Onelevel sub services",
        "Custom views",
        "Custom columns",
      ],
    },
    {
      name: "Enterprise",
      price: "$64",
      sup: "99",
      textY: "per month, billed yearly",
      text: "Everything in Premium and...",
      features: [
        "Minimum 5 users ",
        "Dedicated account manager",
        "Kanban View",
        "Escalate Level 1 & Level 2",
        "Multiple SLA choices",
        "Create Sub tickets​",
        "Service and sub-service fields",
        "Auto escalate tickets",
        "Ticket due date reminders​",
        "Ticket aging report",
        "Knowledge - base",
        "Approval workflows",
        "Custom forms",
        "Multiple mailboxes department wise",
        "Rules & automation",
        "Archive",
        "Create KB from tickets",
        "Create ticket through MS Forms",
        "Customize with Power Automate",
        "API connectivity",
        "Connect with Power BI",
        "Available in 10 Language",
        "One free customization*",
        "Multilevel sub service*",
      ],
    },
  ];
  const data = [
    {
      heading: "Respond quickly and consistently",
      imageUrl:
        "https://ik.imagekit.io/zn4au2jftpm5/hr365/HDP_Regular/TicketDetails_HD365_M4XwPCWlv.png?updatedAt=1685598825749",
    },
    {
      p: "View, reply and repeat. With canned actions we’ve made this really easy",
      heading: "Connect Helpdesk 365 with your other apps",
      imageUrl:
        "https://ik.imagekit.io/zn4au2jftpm5/hr365/SPFxEDP/powerplatformtoolset_ReRdfzh4N.png?updatedAt=1700466299384",
    },
    {
      heading: "Collaborate with your teammates",
      imageUrl:
        "https://ik.imagekit.io/zn4au2jftpm5/hr365/HDP_Regular/Comments_HD365_x7hBhTdyM.png?updatedAt=1685503315168",
    },
    {
      heading: "Simple & Easy ticketing system",
      imageUrl:
        "https://ik.imagekit.io/zn4au2jftpm5/hr365/HDP_Regular/Settings_HD365_4vXqK4vRw_.png?updatedAt=1685422911172",
    },
    {
      heading: "Intra-department Support",
      imageUrl:
        "https://ik.imagekit.io/zn4au2jftpm5/hr365/HDP_Regular/Homepage_HD365_noFv1A00F.png?updatedAt=1685424223912",
    },
    {
      heading: "Find & reward your stars ",
      imageUrl:
        "https://ik.imagekit.io/zn4au2jftpm5/hr365/HDP_Regular/Customer_Survey_HD365_3Qei9O4HT.png?updatedAt=1685588116513",
    },

    // Add more objects as needed
  ];

  const dynamicImages = [
    "https://ik.imagekit.io/zn4au2jftpm5/hr365/LOGO/Client%20logos1_RPf_AeXggA.png?updatedAt=1700627745162",
    "https://ik.imagekit.io/zn4au2jftpm5/hr365/LOGO/Client%20logos2_fZX_JD70Nu.png?updatedAt=1700627744112",
    // Add more image URLs as needed
  ];
  const accordionItems = [
    {
      title: "What is an Internal help desk? ",
      content: `Internal help desk software is a tool that serves a wide range of activities a business undertakes to deliver adequate information and support to internal customers of a particular company. It helps them to communicate with customers through a single interface. If the companies are operating on multiple platforms, Microsoft ticketing system would be a perfect solution. Companies can organize messages, give assistance, and exchange information with customers at a single point of contact. 

        The help desk uses tickets for communication and hence the name ticketing system or trouble ticket system.The Microsoft help desk software generates reports that enable to gauge the team’s performance and improve the customer service strategy. Office 365 support ticket system,power automate ticketing system,sharepoint servicedesk, microsoft teams help desk app,powerapps ticketing system, sharepoint based ticketing system`,
    },
    {
      title: "How do you calculate user license?",
      content: `Any individual who is working on tickets, responding to the tickets, managing tickets, or administering the helpdesk i.e. agents, supervisors, and admins are counted towards user license. All the plans come with five user licenses, you can buy more user license by contacting sales team or connecting wit support team.

            All the requesters who are raising the requests for themselves, are defined as requesters, number of requesters are defined in each plan. You can get unlimited requesters in Premium and Enterprise plans.`,
    },
    {
      title: "Can I install multiple instances of Helpdesk 365?",
      content:
        "Yes, you can install multiple instances of the application as long as it is in one Microsoft 365 tenant and total number of users of all the instances installed remain within the user limit as per your plan or license you purchased.",
    },
    {
      title: "Why does your business need a SharePoint Ticketing System?",
      content: "Your business needs a helpdesk trouble ticket system to help organize, prioritize, and consolidate support requests from different departments. Ticketing systems enable organizations to quickly assign inquiries to the most relevant agent or department, provide context to customer interactions, and track inquiries from customers. teams help desk app/simple ticketing system, trouble ticketing system, internal ticketing system, microsoft sharepoint ticketing system, powerapps ticketing system."
    },
    {
      title: "What is Microsoft teams help desk?",
      content: `Ticketing system for small business or large enterprise build on Microsoft teams resources is usually called as Microsoft teams helpdesk. In this app, data stays within client’s tenant instead staying on 3rd party cloud services. This seems to be simple ticketing system yet very rich with advance features including bot using machine learning and artificial intelligent. 

            Microsoft teams ticketing system suits the best for internal ticketing system, hr help desk, it support for employees, help desk software for schools and many more other usage within the organization. Help desk software for schools,sharepoint ticketing system,ms teams ticketing,sharepoint ticketing system app,corporate ticket management system,microsoft sharepoint ticketing system.`,
    },
    {
      title: `Can I install Helpdesk 365 on multiple site collections or run two or more instances.`,
      content: `Yes, you can install Helpdesk 365 on multiple site collections or teams if user license count remains within the purchased license count. Incase you wish to install Helpdesk 365 on different office 365 tenant, you need to buy another license.`,
    },
    {
      title: `Can I migrate Helpdesk 365 from one tenant to another Office 365 tenant.`,
      content: `Yes, you can migrate Helpdesk 365 from one to anther tenant, please contact support team to complete the request.`,
    },
    {
      title: `What are available languages in the Helpdesk 365 application?`,
      content: `The available languages are Czech, Dutch, English, French, German, Hungarian, Italian, Japanese, Polish, Portuguese, Russian, and Spanish.`,
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
  const tabs1 = [
    { id: 1, title: 'Focus on what you need', Heading: 'Focus on what ‘s necessary: SharePoint IT Ticketing System', content: `Revolutionize your workflow management with HR365’s cloud-based SharePoint IT ticketing system. It automatically organizes tickets by priority, category, time, and status, streamlining your processes. The intuitive SharePoint portal allows easy request submission through email or an embedded web part, ensuring a smooth experience for your team. 

Integrated with Microsoft Teams, it provides conversational support and facilitates seamless collaboration across departments. This powerful tool enhances request tracking and monitoring, boosting productivity and customer satisfaction across IT, HR, and beyond.`, image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/HD365/Recording4-ezgif.com-video-to-gif-converter_1t1BQO-ac.gif?updatedAt=1718713728955' },
    { id: 2, title: 'Ticket Management', Heading: ' Comprehensive Ticket Management Features', content: `Expand your IT Service Management capabilities with Helpdesk 365’s advanced features:

Collaborative Ticket Handling
Joint Ticket Management
 Accurate Time Logging
Versatile Ticket Templates
Custom Field Options`, image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/HD365/TicketManagement_NawCmGYkO.gif?updatedAt=1719903031399' },
    { id: 3, title: 'SLA on cloud-based ', Heading: 'Enhance Operational Efficiency with SLAs in our Cloud-Based HR Ticketing System', content: `Experience enhanced service delivery with apps365’s cloud-based SharePoint ticketing system, fortified by robust SLAs. Our platform ensures consistent and dependable service, instilling confidence and satisfaction among customers. 

Leveraging detailed reporting and analytics capabilities within SharePoint, apps365 monitors performance against SLA (Service Level Agreements) benchmarks, identifies opportunities for enhancement, and continuously optimizes support processes to elevate service quality`, image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/HD365/SLA_SKQ5cy1rQf.gif?updatedAt=1719814962251' },
    {
      id: 4, title: 'Helpdesk to your needs', Heading: 'Customize Your SharePoint Helpdesk for Seamless Operations', content: `Tailor your support experience with our versatile office 365 ticketing system, powered by a robust SharePoint integration. Efficiently distribute team tickets, prioritize tasks, and streamline email notifications effortlessly. 

HR Helpdesk acts as a catalyst for boosting team productivity, allowing you to configure settings that align perfectly with your operational needs. Optimize your team’s workflow, enhance response times, and foster a supportive environment that exceeds end users’ expectations.`,
      image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/HD365/approve_Q5cb5xjOH.gif?updatedAt=1719898618060'
    },
   
  ];
  const tabs2 = [
    { id: 1, title: ' Support Experience ', Heading: 'Transform Your Support with Cutting-edge Microsoft Teams Ticketing System Features', content: `Empower Your Customer Support with Our Comprehensive Microsoft Teams Ticketing System and SharePoint IT Ticketing System, elevating productivity to new heights. Clients can effortlessly initiate ticket requests and receive instant updates on their status via our intuitive platform. 

Our SharePoint helpdesk goes beyond simple ticket tracking—it proactively helps users identify solutions. Employees benefit from quick access to historical data through a robust knowledge base, accelerating issue resolution and ultimately minimizing new ticket submissions.`, image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/HD365/Supportexp_eht3Bt82e6.gif?updatedAt=1719903031166' },
    { id: 2, title: 'Security Measures', Heading: ' Enhanced Security for Identity and Access Management', content: `Our SharePoint ticketing system offers a secure environment strengthened by robust identity and access management features. Microsoft 365 employs a defense-in-depth strategy at the service level, integrating multiple layers of security across physical, logical, and data realms. 

These measures, complemented by stringent operational practices, safeguard your SharePoint Helpdesk ticketing system against threats and unauthorized access, providing a resilient and secure foundation. For detailed insights into our security protocols, please reach out to apps365.`, image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/HD365/Securitymeasures_SLoTGlIE5.gif?updatedAt=1719903031258' },
    { id: 3, title: 'Boost Productivity', Heading: 'Transform Customer Support and Drive Operational Excellence with IT & HR Helpdesk', content: `Experience more than just a helpdesk—IT & HR Helpdesk is your all-encompassing digital customer service platform designed to elevate experiences. Harness insightful reports to gauge customer satisfaction and optimize team performance effectively. Uncover actionable insights that lead to immediate enhancements, ensuring a seamless and gratifying journey for both your teams and clients alike.`, image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/HD365/boast_xwE5iohIU.gif?updatedAt=1719904751386' },
    {
      id: 4, title: 'Rules and Automation', Heading: 'Drive Efficiency with Customized Rules and Automation', content: `Discover enhanced operational efficiency with apps365’s groundbreaking innovation: the ‘Rule & Automation’ feature. This advanced capability redefines client interaction and streamlines ITSM operations by prioritizing customization. With its intuitive interface, the ‘Rule & Automation’ feature empowers you to create rules that surpass conventional methods.

Automatically generate tickets, assign VIP requests to designated agents, smoothly close or escalate issues, and seamlessly route tickets with limitless conditions tailored to your specific business needs. This not only optimizes workflows but also ensures every ticket receives prompt attention, saving valuable time and resources across your organization.`,
      image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/HD365/Rules&automation_qYBfGojFe.gif?updatedAt=1719903031561'
    },
   
  ];
  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="HR_panel">
        <div className="HR_FlexCenterSpcBetween HR_ParentSection1">
          <div className="HR_Section1LeftSide">
            <h1 className="HR_primaryclr  ">
            Helpdesk Software – SharePoint Helpdesk 365
            </h1>
            <p className="HR_textclr">
            Elevate customer service with Helpdesk 365. Boost efficiency, enhance communication, and deliver unmatched support for superior customer satisfaction.
            </p>
           
          </div>
          <div className="HR_Section1RightSide">
            <img alt="MainImage" src={ImageSction1} loading="lazy" />
          </div>
        </div>
      </div>
      <div>
        <G2Badge
          heading="Now Helpdesk 365 App is Available on Microsoft Teams"
          imageUrl="https://ik.imagekit.io/zn4au2jftpm5/hr365/SPFxEDP/site-Helpdesk/HD365%20Teams_bGn7Gudo4J.png?updatedAt=1701258105168" />
      </div>
      <div id="features" className="IdChanges"></div>
      <div >
        <TabsWithImage tabs={tabs1} />
      </div>
      <div  >
        <TabsWithImage tabs={tabs2} />
      </div>
      <div>
                <Availability/>
            </div>
            <div id="client" className="IdChanges"></div>
            <div className='HR_whitesection' >
                <h1 className='HR_heading HR_MT' >Our Clients
                </h1>

                <div className='HR_MT'>
                    <OurClients />
                </div>
            </div>
            <div id="integration" className="IdChangesIntegration"></div>
            <div id='integration' className='integartionPT'>
           <Integration appName={"Helpdesk 365"} />

           </div>
           <div id="pricing" className="IdChanges"></div>
      <div className="HR_whitesection">
        <h1 className="HR_heading HR_MT" id="pricing">
          Helpdesk 365 Plans
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

                <div >
                    <h1 className='HR_faq'>Frequently Asked Questions</h1>
                    <Accordion items={accordionItems} />
                </div>


            </div>
      <Footer /></>
  );
}
export default HD365;
