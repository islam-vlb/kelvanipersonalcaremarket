import type { Metadata } from 'next';
import { COMPANY } from '@/lib/company';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>This Privacy Policy explains how {COMPANY.legal} (DBA {COMPANY.dba}), operator of {COMPANY.domain}, collects, uses and protects your information.</p>
      <p><strong>{COMPANY.thirdParty}</strong></p>
      <h2>Information we collect</h2>
      <ul>
        <li>Contact details: name, email address and phone number.</li>
        <li>Order details: shipping and billing address and the items you purchase.</li>
        <li>Payment details: card information entered at checkout, used only to process your payment. We do not store full card numbers.</li>
        <li>Basic technical data such as browser type and pages visited, to keep the site working.</li>
      </ul>
      <h2>How we use information</h2>
      <ul>
        <li>To process and ship your orders and send order confirmations and tracking.</li>
        <li>To provide customer service and handle returns.</li>
        <li>To maintain security, prevent fraud and comply with legal obligations.</li>
        <li>To improve the site and our product selection.</li>
      </ul>
      <h2>Sharing of information</h2>
      <p>{COMPANY.thirdParty} We use only the service providers needed to complete your order, such as payment processing and shipping carriers, and they may use your information solely to perform those services. We may disclose information if required by law.</p>
      <h2>Cookies and local storage</h2>
      <p>The site uses your browser&apos;s local storage to remember your cart and wishlist on your device. You can clear this at any time in your browser settings.</p>
      <h2>Data security</h2>
      <p>We use reasonable administrative and technical safeguards to protect your information. No method of transmission over the internet is completely secure, so we cannot guarantee absolute security.</p>
      <h2>Your choices</h2>
      <p>You may request access to, correction of or deletion of your personal information by contacting us. California residents may exercise rights available under applicable California law by using the contact details below.</p>
      <h2>Age requirement</h2>
      <p>Our store is intended for adults. You must be 18 or older to purchase, and we do not knowingly collect information from children under 18.</p>
      <h2>Changes</h2>
      <p>We may update this policy from time to time. The date at the top shows the latest revision.</p>
      <h2>Contact</h2>
      <p>{COMPANY.legal}, {COMPANY.corpAddress}. Phone <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>. Email <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.</p>
    </LegalPage>
  );
}
