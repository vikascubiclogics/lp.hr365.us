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

function CLM() {
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
            features: ['Minimum 5 users', 'Max 30 contracts / year', 'Unlimited support through email only', 'Integrates with Microsoft 365', 'Data stays within Microsoft 365', 'Contract Authoring', 'One level approval flow', 'Negotiation', 'Execution'],

        },
        {
            name: 'Plus',
            price: '$69',
            sup: '99',
            textY: 'per month, billed yearly',
            text: 'Everything in Standard and...',
            features: ['Minimum 5 users', 'Max 60 contracts / year', 'Unlimited support through email only', 'Free updates via MS store', 'Mobile responsive', 'Limited Approval Workflows', 'Draft, Negotiate & Execute', 'Contract Repository', 'Clause Library', 'Reports'],
        },
        {
            name: 'Premium',
            price: '$89',
            sup: '99',
            textY: 'per month, billed yearly',
            text: 'Everything in Plus, and...',
            features: ['Minimum 5 users', 'Max 120 contracts / year', 'Additional 10 contracts/month at $89.99', 'Unlimited support includes live chat', 'Free updates with support', '3 Contract templates', 'Two Level Approvals', 'Alerts & Notifications', 'Version control', 'Amendment', 'Renewals', 'Advance Search Capabilities', 'Advance Reporting', 'Role based Security', 'Add Documents'],
        },
        {
            name: 'Enterprise',
            price: '$129',
            sup: '99',
            textY: 'per month, billed yearly',
            text: 'Everything in Premium and...',
            features: ['Minimum 5 users', 'Max 240 contracts / year', 'Additional 10 contracts/month at $129.99', 'Unlimited support with screen sharing', '7 Contract templates', 'Multilevel Approvals', 'Obligation Management', 'Import Existing Contracts', 'AI based Obligations', 'Audit Trail', 'Activity Log', 'Add Documents', 'Risk Assessment', 'Approval through Emails', 'Digital Signature', 'Dashboard', 'MS Teams & Outlook App'],
        },
    ];
    const data = [

        {
            heading: 'Assets depreciation – calculation &amp; reporting'
            ,
            imageUrl: 'https://ik.imagekit.io/zn4au2jftpm5/AMP_SS/Depreciation_details_QEJu2iBIX.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664186732101',
        },
        {
            heading: 'Bar code &amp; QR code',
            imageUrl: 'https://ik.imagekit.io/zn4au2jftpm5/AMP_SS/bar_code_O1_82R9Ki.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664169542304',
        },
        {

            heading: 'Assets Report',
            imageUrl: 'https://ik.imagekit.io/zn4au2jftpm5/AMP_SS/bar_code_O1_82R9Ki.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664169542304',
        },
        {

            heading: 'Connect Asset Management 365 with your other apps',
            imageUrl: 'https://ik.imagekit.io/zn4au2jftpm5/hr365/SPFxEDP/powerplatformtoolset_ReRdfzh4N.png?updatedAt=1700466299384',
        },


        // Add more objects as needed
    ];
    const accordionItems = [
        {
            title: 'What is contract lifecycle management software?', content: `Contract Lifecycle Management software (CLM) is like a toolbox for handling all the important documents that businesses use to make agreements with others—like suppliers, customers, and employees. These documents, or contracts, are the backbone of most business dealings. CLM is the process that ensures these contracts are created, shared, and stored in a way that’s smart and keeps everything running smoothly. 

            Imagine you’re planning a big party and you have a list of things you need to do to make it happen. You need to send out invitations, decide on the menu, arrange the music, and much more. Each of these tasks is crucial to the party’s success, just like every stage in a contract’s life is crucial to a business deal. ` },
        {
            title: 'How to use contract lifecycle management software for small business?', content: `Small businesses can effectively utilize contract management software to enhance operational efficiency and streamline critical processes. Firstly, the software serves as a centralized repository, providing a systematic storage solution for all contracts. By leveraging pre-built templates, small businesses can expedite contract creation, ensuring consistency and saving valuable time. Automated workflows facilitate seamless approval processes, reducing delays and improving overall efficiency. 

            Proactive alerts and notifications help small businesses stay on top of important contract milestones, such as renewal dates or obligations, preventing oversights. Collaborative editing features enable input from multiple stakeholders, fostering efficient collaboration during the drafting and review process. Integration with e-signature solutions ensures a secure and streamlined signing process, eliminating the need for physical signatures. ` },
        {
            title: 'What are the 4 stages of contract management?',
            content: `he four stages of enterprise contract management typically include: 

            Initiation: This stage involves the initial planning and preparation for the contract. Key activities include defining the objectives, scope, and requirements of the contract, identifying stakeholders, and establishing the contract management system. It is essential to clearly outline the goals, terms, and conditions at this stage. 
            
            Execution: In the execution stage, the actual implementation of the contract takes place. This includes the drafting and negotiation of the contract, obtaining necessary approvals, and finalizing all contractual documentation.  
            
            Performance and Monitoring: Once the contract is executed, the focus shifts to monitoring and managing performance throughout its duration. This stage involves tracking key performance indicators, ensuring that both parties are meeting their obligations, and addressing any issues or deviations from the agreed-upon terms.  
            
            Closure and Renewal: The final stage involves the closure of the contract. This includes formalizing the completion of all contractual obligations, conducting a final review of performance, and ensuring that all deliverables are met. Additionally, if the contract includes renewal options, this stage involves deciding whether to renew the contract, renegotiate terms, or terminate the agreement. 
            
            It’s important to note that these stages may vary slightly depending on the specific contract management process or methodology used by an organization.`
        }, {
            title: 'What is contract management?',
            content: `Contract management refers to the systematic process of creating, negotiating, executing, and overseeing contracts between parties. The primary goal of contract management is to ensure that contracts are effectively and efficiently managed throughout their entire lifecycle, from initiation to closure.`
        },
        {
            title: 'What is the contract management process?',
            content: `The enterprise contract management process is a systematic and strategic approach to handling all aspects of a contract throughout its entire lifecycle. It encompasses several key stages, beginning with the initiation and planning phase where objectives, scope, and requirements are defined. 

            The execution stage involves the drafting, negotiation, and finalization of the contract, including obtaining necessary approvals. Once the contract is in effect, the focus shifts to the performance and monitoring stage, where ongoing activities are tracked, and any deviations from agreed-upon terms are addressed.`
        }, {
            title: 'What is the role of contract management?',
            content: `The role of enterprise contract management is multifaceted and pivotal in ensuring the successful execution and fulfilment of contractual agreements within an organization. Contract managers play a crucial role in overseeing the entire lifecycle of contracts, from initiation to closure. Their responsibilities include defining contract objectives, negotiating terms, and ensuring compliance with legal and regulatory requirements.

            Contract managers collaborate with various stakeholders, both internal and external, to establish effective communication channels and resolve any issues that may arise during the contract’s performance. They monitor key performance indicators, track obligations, and implement proactive measures to mitigate risks. `
        },
        {
            title: 'How it automates with Microsoft 365 / Power Automate',
            content: `

            With the ability to utilize Power Automate, you can automate and streamline your contract processes, saving you time and reducing human error. Additionally, the seamless integration with Power BI enables you to gain valuable insights and analytics from your contract data, empowering you to make informed decisions and drive business growth. Experience a streamlined contract management SharePoint that harnesses the full potential of your Microsoft infrastructure. Significantly improve your contract management processes, from creation to expiration, and enjoy the benefits of enhanced collaboration, increased visibility, and greater control over your contracts. `
        },
        {
            title: 'Can we use contract management software for legal departments ?',
            content: `Yes you can use contract management software for legal departments, and it is highly beneficial for legal departments. It provides a centralized platform to store, manage, and track legal agreements throughout their lifecycle, from initial drafting and negotiation to approval, execution, and renewal. This type of software can streamline workflows, improve compliance, reduce risks associated with manual handling, and enhance overall efficiency. Features like automated reminders, digital signatures, and integration with other legal tools further support a legal department’s needs, making it an essential tool for managing contracts effectively. For more details, please request for  demo.`
        },
        {
            title: 'Is Contract Management 365 (CLM365) available on Microsoft store?',
            content: `Yes, Contract Management 365 aka CLM365 is available on the Microsoft store and offers robust integration with Microsoft Teams & SharePoint. This comprehensive solution is designed for organizations aiming to streamline their contract lifecycle management processes. It integrates seamlessly with Teams & SharePoint, enhancing document management and collaboration. Additionally, its compatibility allows team members to collaborate on contracts directly within their communication platform within Microsoft Teams, fostering a cohesive workflow environment.

            Furthermore, Contract Management 365 leverages Power Automate for workflow automation, enabling automatic notifications, approvals, and renewals to enhance operational efficiency. With Power BI integration, it provides powerful analytics and reporting capabilities, offering deep insights into contract performance, compliance, and risk management. These features ensure that Contract Management 365 is not just a tool but a strategic asset for any organization looking to optimize their contract management within the Microsoft ecosystem. You can visit Microsoft AppSource from below page to know more about availability, support and other information. Contract Management 365.`
        }, {
            title: 'how to choose best contract lifecycle management software?',
            content: `Choosing the best contract management (CLM) software for your organization involves considering several factors to ensure it aligns with your specific needs and requirements. Here are some steps to help you evaluate and select the right CLM software:

            Identify Your Needs: Begin by defining your organization’s specific needs and requirements for contract management. Consider factors such as the volume of contracts, types of contracts (e.g., sales contracts, vendor agreements), key features you need (e.g., contract drafting, electronic signatures, renewal management), integration with existing systems, compliance requirements, and user preferences.
            
            Research Available Solutions: Research and evaluate different CLM software solutions available in the market. Look for reputable vendors and solutions that have a track record of success and positive customer reviews. Consider factors such as ease of use, scalability, customer support, pricing, and deployment options (cloud-based vs. on-premises).
            
            Define Key Features and Functionality: Create a list of key features and functionality that are essential for your organization’s contract management processes. This may include features such as contract drafting and templating, automated workflows, contract repository and search capabilities, electronic signatures, contract analytics and reporting, compliance management, and integration with other systems (e.g., CRM, ERP).
            
            Evaluate Ease of Use and User Experience: Assess the user interface and overall user experience of each CLM software solution. Look for solutions that are intuitive and easy to navigate, with features that streamline contract management processes and reduce manual effort. Consider conducting demos or trials to get a firsthand experience of the software’s usability.
            
            Consider Integration Capabilities: Determine how well each CLM software solution integrates with your organization’s existing systems and tools, such as CRM, ERP, document management systems, and email platforms. Seamless integration can enhance efficiency and data accuracy by eliminating the need for manual data entry and enabling automated workflows.
            
            Assess Security and Compliance Features: Security and compliance are critical considerations when choosing CLM software. Ensure that the solution provides robust security features to protect sensitive contract data, such as role-based access controls, encryption, audit trails, and compliance with industry regulations (e.g., GDPR, HIPAA).
            
            Review Vendor Reputation and Support: Evaluate the reputation and reliability of the CLM software vendor. Look for vendors with a proven track record of delivering quality software and providing excellent customer support and ongoing maintenance. Consider factors such as vendor stability, customer references, service-level agreements (SLAs), and support channels.
            
            Conduct Demos and Trials: Take advantage of demo sessions, trials, or proof-of-concept engagements offered by CLM software vendors. This allows you to explore the software’s features and functionality in-depth, ask questions, and assess how well it meets your organization’s needs before making a final decision.
            
            Consider Total Cost of Ownership: Evaluate the total cost of ownership (TCO) of each CLM software solution, taking into account not only the initial license or subscription fees but also implementation costs, training expenses, ongoing maintenance fees, and any additional costs for integrations or customizations.
            
            Gather Stakeholder Input: Involve key stakeholders from across your organization in the evaluation process to ensure that the chosen CLM software meets the needs and expectations of all relevant departments and users. Solicit feedback and input from legal, procurement, finance, and other teams involved in the contract management process.
            
            By following these steps and thoroughly evaluating your options, you can choose the best contract management software that meets your organization’s needs and helps streamline your contract management processes effectively.`
        }

    ];
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
            <ScrollToTop />
            <Header />
            <div className='HR_panel'>
                <div className="HR_FlexCenterSpcBetween HR_ParentSection1" >
                    <div className='HR_Section1LeftSide'>
                        <h1 className='HR_primaryclr  ' >Contract Management Software - Contract Management 365</h1>
                        <p className='HR_textclr'>Streamline contract oversight with Contract Management 365. Empower your team with intuitive tracking, automated alerts, and comprehensive document management for effortless agreement management.</p>

                    </div>
                    <div className='HR_Section1RightSide'>
                        <img alt='MainImage' src={"https://ik.imagekit.io/zn4au2jftpm5/hr365/random-images/20944145__1_-removebg-preview%20(1)_8HExemHEKq.png?updatedAt=1708084034004"} loading="lazy" />
                    </div>
                </div>
            </div>



            <div>
                <G2Badge
                    heading="Now Contract Management 365 App is Available on Microsoft Teams"
                    imageUrl="https://ik.imagekit.io/zn4au2jftpm5/Apps365/Teams/ContractManagement_c6FWpDEbU.png?updatedAt=1720507108371" />
            </div>
            <div id="features" className="IdChanges"></div>
            <div id='features'>
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
            </div>  <div id="integration" className="IdChangesIntegration"></div>
            <div id='integration' className='integartionPT'>
                <Integration appName={"Contract Management 365"} />

            </div>
            <div id="pricing" className="IdChangesIntegration"></div>
            <h1 className='HR_heading HR_MT' id='pricing'>Contract Management 365 Plans
            </h1>

            <div className='HR_MT HR_whitesection'>

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
            <div id="faq" className="IdChangesIntegration"></div>
            <div className='HR_FAQ' id='faq'>

                <div>
                    <h1 className='HR_faq'>Frequently Asked Questions</h1>
                    <Accordion items={accordionItems} />
                </div>


            </div>

            <Footer />
        </>
    )
}
export default CLM;