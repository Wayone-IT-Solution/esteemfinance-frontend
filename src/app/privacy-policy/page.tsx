import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto mt-[5.7rem] lg:mt-[9rem] text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        Esteem Finance is dedicated to upholding your personal and private information, and this policy explains how we collect, use, hold and share your personal information as you use our website or services. Such practices regarding your data are in compliance with the New Zealand Privacy Act 2020, the Credit Contracts and Consumer Finance Act 2003, and all existing relevant legislation in New Zealand. Please read this policy adequately to fully understand how we deal with your data.
      </p>

      <h2 className="text-2xl font-semibold mt-6">1. Information We Collect</h2>
      <ul className="list-disc ml-6 mb-4 space-y-1">
        <li>Personal details such as your name, contact number, email address, and residential address.</li>
        <li>Financial information including income, credit history, employment status, liabilities, and loan needs.</li>
        <li>Verification documents:
          <ul className="list-disc ml-6">
            <li>Proof of identity (e.g., passport, driver’s license)</li>
            <li>Bank statements and income slips</li>
            <li>Proof of address</li>
          </ul>
        </li>
        <li>Website usage data:
          <ul className="list-disc ml-6">
            <li>IP address</li>
            <li>Device and browser type</li>
            <li>Data from cookies, pixels, and analytics tools</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">2. How We Use Your Information</h2>
      <ul className="list-disc ml-6 mb-4 space-y-1">
        <li>To assess your loan application and financial profile</li>
        <li>To carry out identity and credit checks with authorized bureaus</li>
        <li>To respond to inquiries and support requests</li>
        <li>To comply with legal obligations, including AML and CFT requirements</li>
        <li>To manage internal risk and prevent fraud</li>
        <li>To communicate updates, promotions, and loan-related tips (with your consent)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">3. Sharing and Disclosure of Information</h2>
      <ul className="list-disc ml-6 mb-4 space-y-1">
        <li>Credit bureaus and financial institutions for assessments and approvals</li>
        <li>Trusted third-party services (KYC providers, CRM tools, etc.) under confidentiality agreements</li>
        <li>Government and legal authorities when legally required</li>
        <li>For investigations or legal processes related to fraud or risk</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">4. Cookies and Analytics</h2>
      <p className="mb-2">
        We use cookies and related technologies to enhance your browsing experience. These tools allow us to:
      </p>
      <ul className="list-disc ml-6 mb-4 space-y-1">
        <li>Understand user interactions and preferences</li>
        <li>Retain site settings between visits</li>
        <li>Improve the performance of our website</li>
      </ul>
      <p className="mb-2">
        You can disable cookies in your browser settings, but certain features may not work as intended. We also use services like Google Analytics to track anonymized site usage.
      </p>

      <h2 className="text-2xl font-semibold mt-6">5. Retention and Storage of Data</h2>
      <p className="mb-2">
        Your information is stored securely and encrypted. Access is limited to authorized personnel only. We retain data:
      </p>
      <ul className="list-disc ml-6 mb-4 space-y-1">
        <li>As needed for servicing loans or providing services</li>
        <li>To comply with legal obligations</li>
        <li>For audit, legal, and dispute resolution purposes</li>
      </ul>
      <p>
        When data is no longer needed, we securely delete or anonymize it. If you request deletion, we will act unless legal reasons prevent us from doing so.
      </p>

      <h2 className="text-2xl font-semibold mt-6">6. Your Rights and Choices</h2>
      <p className="mb-2">You have the right to:</p>
      <ul className="list-disc ml-6 mb-4 space-y-1">
        <li>Request a copy of your personal data</li>
        <li>Correct any inaccurate or outdated information</li>
        <li>Request deletion of your data (where legally possible)</li>
        <li>Withdraw marketing consent at any time</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">7. Data Security</h2>
      <p className="mb-2">
        We take security seriously and implement:
      </p>
      <ul className="list-disc ml-6 mb-4 space-y-1">
        <li>Encryption of data during storage and transfer</li>
        <li>Regular audits and system testing</li>
        <li>Role-based access controls</li>
        <li>Compliance with industry-standard protections</li>
      </ul>
      <p>
        If a data breach occurs, we will notify affected users and relevant authorities as required by law.
      </p>

      <h2 className="text-2xl font-semibold mt-6">8. Changes to This Policy</h2>
      <p className="mb-2">
        We may revise this Privacy Policy to reflect updates to services or legal obligations. Updates will be posted here with the revised date. Continued use of our services means you accept the updated policy.
      </p>

      <h2 className="text-2xl font-semibold mt-6">9. Contact Information</h2>
      <p className="mb-2">
        If you have questions or requests about your data, you can reach us at:
      </p>
      <ul className="list-disc ml-6 mb-8">
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:info@esteemfinance.co.nz" className="text-blue-600 underline">
            info@esteemfinance.co.nz
          </a>
        </li>
        <li>
          <strong>Website:</strong>{" "}
          <a href="https://esteemfinance.co.nz" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
            https://esteemfinance.co.nz
          </a>
        </li>
      </ul>
    </div>
  );
}
