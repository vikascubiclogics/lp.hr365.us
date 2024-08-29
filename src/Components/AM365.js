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

function AM365() {
    const dynamicImages = [
        'https://ik.imagekit.io/zn4au2jftpm5/hr365/LOGO/Client%20logos1_RPf_AeXggA.png?updatedAt=1700627745162',
        'https://ik.imagekit.io/zn4au2jftpm5/hr365/LOGO/Client%20logos2_fZX_JD70Nu.png?updatedAt=1700627744112',
        // Add more image URLs as needed
    ];
    const planData = [
        {
            name: 'Standard',
            price: '$129',
            sup: '99',
            text: 'Standard Plan Features',
            textY: 'per month, billed yearly',
            features: ['50 users','Upto 5x assets per user','2 support tickets per annum','Free updates via MS store','Assign Assets','Return Assets','Track assets','Asset life cycle history','Vendor tagging','Asset Status','Categories & Sub categories'],

        },
        {
            name: 'Plus',
            price: '$149',
            sup: '99',
            textY: 'per month, billed yearly',
            text: 'Everything in Standard and...',
            features: ['50 users ','Upto 5x assets per user','Unlimited support','Assets Dashboard','Configure asset attributes','Custom Asset status','Custom Asset types','Asset assign notifications','Asset return notifications','Bar & QR code generator'],
        },
        {
            name: 'Premium',
            price: '$199',
            sup: '99',
            textY: 'per month, billed yearly',
            text: 'Everything in Plus, and...',
            features: ['100 users ','Upto 5x assets per user','Add-on $25 for every 50 users','Tag Projects','Free updates with support','Custom email templates','MS Intune Integration','Depreciation','Book Assets','Bar & QR code scanner','Export QR Codes and Barcodes','Asset expiry reminders','Return date reminders','Add custom columns'],
        },
        {
            name: 'Enterprise',
            price: '$249',
            sup: '99',
            textY: 'per month, billed yearly',
            text: 'Everything in Premium and...',
            features: ['100 users','Upto 5x assets per user','Add-on $25 for every 50 users','Sync M365 Licenses​','Asset approval workflow​','Digitally Signed Acknowledgment','Desktop Central Integration​','SCCM Integration​','Maintenance Module','Software Module​','Export Audit Logs​','API connectivity​','Customize with Power Automate','Power BI & Power Apps Integration​','Location based roles','Custom forms','Dedicated Account Manager','One free customization*'],
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
        { title: 'What is Asset Management Software?', content: `Asset Management Software is the business initiative for retrieve budget and maximizing value by automating procurement of assert, usage and deployment of licenses along with subscriptions.

        For many organizations, this Software is a tactical approach to balance the number of software licenses or any assert purchased with the number of actual licenses or assert consumed or used. This means there are an abundance of reasons why this software is important.
        
        Wherever you are in the process of implementing this Software in your business, this would provide information to help the organization to go further, quickly and easily. It will help the organization to develop a vision for the Software at the company, and partner with your stakeholders.` },
        {
            title: 'Benefits of Asset Management Software', content: `Software reduces support costs by negotiating volume contract agreements and eliminating or reallocating underutilized software can help to identify the number of licenses for each software vendor.

            It can then provide the number of empty or unused seats allowing to gauge overall usage in the organization. From there, the respective departments could renegotiate the contract with the vendors whose licenses you aren’t fully utilizing and redistribute those licenses to people in the organization who need them. Simply allows the organization to maximize its investment on software products.` },
        {
            title: 'Can I install multiple instances of Asset Management 365?',
            content: 'Yes, you can install multiple instances of the application as long as it is in one Microsoft 365 tenant and total number of users of all the instances installed remain within the user limit as per your plan or license you purchased.'
        }, {
            title: 'Can this app be used as construction asset management software?',
            content: `Yes, this software can be used as construction asset tracking or construction equipment management software or construction inventory management software or construction equipment maintenance software. It has all the features to address the needs of construction equipment and tools. you can track the equipment / tools based on sites. You can track the items which are under maintenance and also set the contract expiry dates.

            There is no specific construction equipment management software or construction inventory management software as these applications are industry neutral and provide a good amount of customizations to suit needs of the construction industry and act as construction asset management software or construction asset tracking app. Equipment tracking or maintenance tracking software features also helpful for construction sites or job sites of construction companies.`
        },
        {
            title:'Allocate all enterprise’s assets and keep a track with figer tips(Asset Management software)',
            content: `Asset Management transforms technology data into actionable intelligence, empowering IT to effectively manage, govern and optimize their hybrid IT estate.

            Discover software and hardware, reduce risk and spend through optimization and control shadow IT.
            
            Spreadsheet or excels could create chaos and decrease service tickets.
            
            Facts and policies could reduce confusions.
            
            Keep a track of what you have, invest only on what organization require.
            
            Streamline with vendor and regulatory audits.
            
            Technology insights are required with hybrid IT environment.`
        },{
            title:'Features of asset management systems used in education',
            content:`This software is perfect for schools and it works well in tracking all the IT, fixed and physical assets in organized manner. Organized assets with school inventory management system / school asset management software or asset management software for schools brings transparency and help in locating unused assets hence saves cost and effort. Also it helps in reallocating assets whenever there is a change in role of the person. Fixed asset inventory can be well managed in this fixed asset manager or facility asset management software.`
        },
        {
            title:'Fixed asset inventory software on SharePoint / Power Apps',
            content:`With advancements of Microsoft 365 and latest tools from Power platform such as Power Automate, Dataverse, etc enabled SharePoint and Office for strong and secure platform to be used other than storing confidential documents. In fact Fortune 500 companies are using Power platform for various line of business apps including fixed asset manager, fixed assets management, now you can track asset data, iot devices, mobile devices, management software licenses quickly and save time by single sign on access available in Apps365’s asset management app.

            This web based / cloud based asset management software etc. also helps in accessing real time data of hardware and software without waiting for various spreadsheets. Also you can manage complete facility with this facility asset management software. Regulatory compliance is no more headache with real time data availability. with this fixed asset inventory / fixed asset tracking,`
        },
        {
            title:'How does the licensing work?',
            content:`Asset Management 365 license works on the number of count of users to whom the assets are assigned and the users who have a role in the application i.e. admin, supervisor, asset manager, etc. Multiple assets could be assigned to single users (at the client's end). In any instance, clients could go up to 5,000 assets allocated for 1000 users. In case the number of assert moves over the 5000 limits, clients have to reach our support team to avail the request alternatively, contact us at ist@hr365.us.`
        },
        {
            title:'Where is the data stored?',
            content:`Asset Management 365, as this is a Microsoft Teams and SharePoint app, all the data of the application resides within the your office 365 tenant and HR365 does not have any access or control over the data of its clients. Keeping the data secure is the highest priority of any organization and we at HR365 understand and build solutions to meet elevated level of security standards. For more information, please feel free to write to us at privacy@hr365.us or visit our privacy policy`
        },{
            title:'Can we integrate with Intune or other apps?',
            content:`Yes, our application, seamlessly integrates with Intune, SCCM, Alloc8, and KACE, Power Apps, Power Automate, and many more other apps, please feel free to write us at ist(at)hr365.us in case you have any query in this regard.`
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
        { id: 1, title: 'Integrated with Azure', Heading: 'Microsoft asset management software integrated with Azure for efficient contract management.', content: 'Our Microsoft asset management software provides extensive functionality, enabling dynamic retrieval of assets from Microsoft Intune and effective SharePoint management of software licenses, service agreements, and subscriptions for cloud applications within Office 365. It supports flexible asset allocation across individuals, groups, and diverse geographical locations, ensuring optimized resource utilization.  Automation capabilities driven by a robust workflow engine streamline the renewal processes for contracts, software licenses, and cloud applications, enhancing operational efficiency. The Azure Asset Management App plays a critical role in continuously updating the Azure asset inventory, thereby improving overall management effectiveness.', image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/AM365/azure_Faooyo8YDz.gif?updatedAt=1720174577090' },
        { id: 2, title: ' Featuring Audits', Heading: ' IT and Physical asset management solutions featuring Audits', content: 'With our SharePoint IT asset management software, managing and reporting licenses through Excel sheets, a traditionally labour-intensive process, becomes streamlined and efficient. Our audit function offers the capability to review an asset’s entire lifecycle, pinpointing its assignment date down to the exact day and month, and tracking its usage patterns over time. You can conduct audits on assets at any time, examining contracts, software licenses, and hardware configurations effortlessly with our Microsoft asset management software. This feature not only ensures compliance but also helps identify underutilized equipment, enabling proactive action planning. For more detailed insights into this feature and its benefits, we invite you to contact us for a personalized demo.', image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/AM365/featuringAudits_R3se0Mc6pO.gif?updatedAt=1720174577072'},
        { id: 3, title: 'Barcode Scanning', Heading: 'Barcode Scanning, Image Capture, and Document Management with SharePoint IT Asset Management solutions', content: `Our Microsoft asset management software offers the capability to generate barcodes and QR codes directly within the platform, facilitating easy tracking through the asset monitoring app's barcode tracking system. Asset details can be verified using mobile devices or barcode scanners, enhancing operational efficiency. Additionally, the software allows users to link comprehensive documentation to each asset, including user manuals, support contacts, and guidelines, ensuring all relevant information is easily accessible.`, image: 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/GIF/AM365/barcode_RPpEWhHap1.gif?updatedAt=1720174576528' },
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
                        <h1 className='HR_primaryclr  ' >Asset Management application- Asset Management 365</h1>
                        <p className='HR_textclr'>Master your investments with ease using our advanced Asset Management app, crafted to simplify portfolio management and enhance your financial outcomes.</p>
                       
                    </div>
                    <div className='HR_Section1RightSide'>
                        <img alt='MainImage' src={ImageSction1} loading="lazy" />
                    </div>
                </div>
            </div>
            <div>
                <G2Badge
                 heading="Now Asset 365 App is Available on Microsoft Teams"
                 imageUrl= "https://ik.imagekit.io/zn4au2jftpm5/Apps365/Teams/AssetManagement_04dXS655fc.png?updatedAt=1720507108442"  />
            </div>
            <div id="features" className="IdChanges"></div>
            <div  >
            <TabsWithImage tabs={tabs}/>
        </div>
        <div>
                <Availability/>
            </div>
            <div id="client" className="IdChanges"></div>
            <div className='HR_whitesection' >
                <h1 className='HR_heading HR_MT' >Our Clients
                </h1>

                <div className='HR_MT.' id='client'>
                    <OurClients />
                </div>
            </div>
            <div id="integration" className="IdChangesIntegration"></div>
            <div id='integration' className='integartionPT'>
           <Integration appName={"Asset Management 365"} />

           </div>
           <div id="pricing" className="IdChangesIntegration"></div>

           <div id='pricing' className='integartionPT'></div>
            <div className='HR_whitesection'>
          <div>
            <Plans plans={planData} appName={"Asset Management 365"}/>
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

        <Footer/>
        </>
    )
}
export default AM365;