import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from '../Utiilities/ScrolltoTop'

const Termandcondition = () => {
  return (
    <>
       <ScrollToTop/>
    <Header/>
    <div className='privacy'>
      <h1>Support Policy</h1>
      <h2>Support</h2>
      <p>Break fix support by Microsoft & Industry certified engineers through email & various support assistance tools. Monday to Friday 9AM to 5PM through phone & desktop sharing tools.</p>
      <h2>Preventive Maintenance</h2>
      <p>As some of our applications and services are mission critical for the business, we monitor health of servers with advance tools to ensure maximum uptime.</p>
      <h2>Ticket Management System</h2>
      <p>Customer can create tickets either by calling support phone number or through support email id. Once ticket is created Support supervisor, who will assign the ticket to support engineer for immediate resolution.</p>
      <h2>Incident Management System</h2>
      <p>Incident Management System is managed by ITIL certified professionals with defined severities according to nature of the Incident.
        Severity Critical (A): Response time within 1 hour of the ticket raised (Available with Premium support add-on, to purchase premium support please mail to ist(at)cubiclogic(dot)com)</p>
      <p>Severity Urgent (B): Response time within 4 business hours of the ticket raised (Available with Premium support, to purchase premium support add-onplease mail to ist(at)cubiclogic(dot)com)</p>
      <p>Severity Important (C ): Response time within 8 business hours of the ticket raised (Available as standard support bundled with applications wherever applicable)</p>
      <p>Severity Monitoring (D): Incident can be moved into monitoring severity after resolving issue complete documentation of problem incident from problem description, cause to resolution is sent to the customer upon successful resolution of the incident.</p>
      <p>Severity A is defined where entire organization is impacted and users are not productive. Severity B is defined as, part of users are impacted it or senior management / decision makers are not able to perform actions, severity C is used in the cases where any performance issues, any of the feature may not be working as expected or some of the users are impacted.</p>
      <p>Severity D is used primarily used for monitoring purposes once issue is resolved.</p>
      <h2>Root Cause Analysis</h2>
      <p>Further upon successful resolution of the incident, root cause analysis optionally offered on demand.</p>
      <h2>Warranty and Refund Policy</h2>
      <p>DISCLAIMER OF WARRANTY. The application is licensed “as is,” “with all faults,” and “as available.” You bear the entire risk as to its quality, safety, comfort, and performance. Should it prove defective, you assume the entire cost of all necessary servicing or repair. The HR 365, on behalf of itself, Microsoft, wireless carriers over whose network the application is provided, and each of our respective affiliates, vendors, agents, and suppliers (“Covered Parties”), gives no express warranties, guarantees, or conditions in relation to the application. You may have additional consumer rights under your local laws that this agreement can’t change. To the extent permitted under your local laws, Covered Parties exclude any implied warranties or conditions, including those of merchantability, fitness for a particular purpose, safety, comfort, and non-infringement. If your local laws impose a warranty, guarantee or condition even though these terms do not, its duration is limited to 14 days from when you download the application.</p>
      <p>HR365 warrants that the software will materially confirm the accompanying documentation for a period of 14 days from the date of initial download. At HR365, the customer will only be able to claim if the refund has been raised by the Customer within 14 days from the date of Initial download, only under the following circumstances:</p>
      <ol>
        <li> If the software or the features, you have purchased is not working as advertised on the website/ marketplace and you have attempted to resolve the issues with our support team.</li>
        <li>You have purchased the wrong license or HR365 product and informed us within a period of 10 days from your purchase. The Customer is not eligible for the refund under all the following circumstances.</li>
        <li>The Software is not used in accordance with HR365’s instructions.</li>
        <li> The Software defect has been caused by any of Customer’s malfunctioning equipment, unavailability of Microsoft 365 services which are pre-requisite to run the app or Customer provided software.</li>
        <li>Customer has made modifications to the Software not expressly authorized in writing by HR365.</li>
        <li>Software is not working due to customers environmental changes.</li>
        <li>Combined the software with other products.</li>
        <li> Customer no longer requires the software after the purchase or changes his/her requirements towards the services.</li>
        <li>In cases where the Customer has willingly purchased the software after taking the demo/trial from the HR365 team.</li>
      </ol>

      <div className="HR_FlexCenterSpcBetween HR_ParentSection1" >

        <div className='HR_Section1LeftSide '>
          <h2>Pre-Easter Offer</h2>
          <ol><li>This offer is valid till March 15th 2024 only.
          </li>
            <li>This offer is not applicable to any customization or any other services / products other than premium & enterprise products listed on Cubic Logics site.</li>
            <li>Payment should be received on or before March 15th 2024.</li>
            <li> Products can be purchased without the offer.</li>
          </ol>
          <h2>Pre Easter Offer are as below:</h2>
          <ol><li>An Eggstraordinary 25% Discount for Non-profit Organizations, Government Entities, and Educational Institutions on all Enterprise Versions.</li>
            <li>A Special 20% Discount for Non-profit Organizations, Government Entities, and Educational Institutions on our Premium Versions, and a 20% Reduction for Private Organizations on Enterprise Versions, as part of our Easter Egg Hunt Savings.
            </li>
            <li> A Thankful 15% Discount for Private Organizations on Premium Versions, just in time to hop into Easter celebrations.</li>
          </ol>

        </div>

        <div className='HR_Section1RightSide'>
          <img alt='MainImage' src="https://ik.imagekit.io/zn4au2jftpm5/hr365/random-images/image_2024_03_05T15_52_53_400Z-removebg-preview%20(1)_fRE5_PHYp.webp?updatedAt=1709710849124" loading="lazy" />
        </div>
      </div>
    </div>
<Footer/>
    </>


  )
}

export default Termandcondition