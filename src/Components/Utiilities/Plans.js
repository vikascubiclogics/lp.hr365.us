// import { $ } from 'jquery';
import React from 'react';
// const Paddle = window.Paddle;
const Plans = ({ plans }) => {  
  
  // async function callApi() {
  //   console.log("clicked");
  //   var settings = {
  //     url: "https://vendors.paddle.com/api/2.0/product/generate_pay_link",
  //     method: "POST",
  //     timeout: 0,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     data: JSON.stringify({
  //       vendor_id: "132137",
  //       vendor_auth_code:
  //         "b57f8241b2c9673c7ac0b8a6a7fbb23614666c77510dfac17c",
  //       prices: ["USD:10.00"],
  //       title: "Custom Product",
  //       product_id: "872428",
  //       // webhook_url: "https://www.cubiclogics.com/pay-custom-payment-ot/",
  //       custom_message: "Test",
  //       customer_email: "vikas.k@cubiclogics.com",
  //       customer_postcode: "560068",
  //       vat_company_name: "Cubic Logics",
  //       marketing_consent: 1,
  //       subscribed: 1,
  //     }),
  //   };

  //   try {
  //     const response = await fetch("https://vendors.paddle.com/api/2.0/product/generate_pay_link", {
  //       method: 'POST',
  //       async: true,
  //       crossDomain: true,
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(settings.data)
  //     });

  //     const data = await response.json();
  //     console.log('Post created:', data);
  //     // Handle success or update UI accordingly
  //   } catch (error) {
  //     console.error('Error creating post:', error);
  //     // Handle error or update UI accordingly
  //   }

  //   // $.ajax(settings).done(function (response) {
  //   //   console.log(response);
  //   //   console.log("clicked ++");
  //   //   Paddle.Checkout.open({
  //   //     override: response.response.url,
  //   //   });
  //   // });
  // }

  // async function openCheckout(){ 

  //   let formData = {
  //       vendor_id: "132137",
  //       vendor_auth_code: "b57f8241b2c9673c7ac0b8a6a7fbb23614666c77510dfac17c",
  //       'price': 100,
  //       'recurring_prices': 100,
  //       // webhook_url: 'https://www.hr365.us/cart',
  //       title: "test",
  //       customer_email: "vikas.k@cubiclogics.com",
  //       customer_country: "US",
  //       customer_postcode: "152101",
  //       marketing_consent: 1,
  //       subscribed: 1,
  //       product_id: 872428,
  // }
  //   try {
  //     const response = await fetch('https://vendors.paddle.com/api/2.0/product/generate_pay_link', {
  //       method: 'POST',
  //       async: true,
  //       crossDomain: true,
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(formData)
  //     });

  //     const data = await response.json();
  //     console.log('Post created:', data);
  //     // Handle success or update UI accordingly
  //   } catch (error) {
  //     console.error('Error creating post:', error);
  //     // Handle error or update UI accordingly
  //   }
  // };

  return (
    <div className="plans-container">
      {plans.map((plan, index) => (
        <div key={index} className="plan">
          <h2 className='HR_planprice'>{plan.name}</h2>
          
          <p className="HR_plan">{plan.price} <sup className='sup' > {plan.sup}</sup></p>
          <p className='text'>per month, billed yearly</p>
          <p className='Ptext'>{plan.text}</p>
          <ul className="features">
            {plan.features.map((feature, i) => (
              <li key={i}> <span className="tick-icon">✔</span>
              {feature}</li>
            ))}
          </ul>
  
          {/* <div className='hrButton'> */}
          {/* <button className="subscribe-button" onClick={()=>callApi()}>Add to Cart</button> */}
          {/* <button className="subscribe-button" >Add to Cart</button> */}
          {/* </div> */}
        </div>
      ))}
    </div>
  );
};

export default Plans;
