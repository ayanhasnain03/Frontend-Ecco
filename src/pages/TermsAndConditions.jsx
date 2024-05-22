// src/pages/TermsAndConditions.js

import React from 'react';
import ScrollToTopOnReload from '../components/ResetPage';
import MetaData from '../components/MetaData';

const TermsAndConditions = () => {
  return (
  <div className='w-full'>
      <ScrollToTopOnReload />
      <MetaData title="Terms And Conditions"/>

      <div className="  px-6 py-8 border border-red-600 m-20">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <p>
        Welcome to Vertex, located at http://localhost:5173/L. Please read these
        Terms and Conditions ("Terms") carefully before using the site. By accessing or using
        the site, you agree to be bound by these terms. If you do not agree to these terms, you
        must not use the site.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6">1. Eligibility</h2>
      <p className="mb-4">
        To use this site, you must be at least [18] years old or the age of majority in your
        jurisdiction. By using the site, you represent that you meet this age requirement and
        have the legal capacity to agree to these terms.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6">2. Account Registration</h2>
      <p className="mb-4">
        You may be required to create an account to access certain features. You are responsible
        for maintaining the confidentiality of your account credentials and agree to accept
        responsibility for all activities that occur under your account.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6">3. Ordering and Payment</h2>
      <p className="mb-4">
        Orders placed on the site are subject to acceptance. We reserve the right to refuse or
        cancel orders for any reason. Payment must be made through approved methods, and you
        agree to provide accurate billing information.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6">4. Shipping and Returns</h2>
      <p className="mb-4">
        Shipping times are estimated and can vary. We are not responsible for delays caused by
        carriers or other external factors. Our return policy is detailed [here](#). Please refer
        to it for information about returns and refunds.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6">5. Privacy Policy</h2>
      <p className="mb-4">
        Our Privacy Policy, found [here](#), outlines how we collect, use, and protect your
        personal information. By using the site, you agree to our Privacy Policy.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6">6. Intellectual Property</h2>
      <p className="mb-4">
        The site and its content are protected by intellectual property laws. You may not
        reproduce or redistribute our content without written permission.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6">7. Limitation of Liability</h2>
      <p className="mb-4">
        To the maximum extent permitted by law, we are not liable for any damages resulting from
        the use or inability to use the site, whether direct, indirect, incidental, or
        consequential.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6">8. Governing Law</h2>
      <p className="mb-4">
        These Terms are governed by the laws of Jharkhand. Any disputes arising from
        these terms will be resolved in the courts located in Ramgarh Jharkhand 821922.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6">9. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to modify these terms at any time. Changes will be effective upon
        posting on the site. You should review these terms regularly to stay informed about any
        changes.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6">10. Contact Information</h2>
      <p className="mb-4">
        If you have any questions or concerns about these terms, please contact us at
<p className='underline'>
        ayanhasnain2572006@gmail.com.

</p>
      </p>
    </div>
  </div>
  );
};

export default TermsAndConditions;
