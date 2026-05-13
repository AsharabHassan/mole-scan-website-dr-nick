import type { Metadata } from "next";
import SectionWrapper from "@/components/layout/SectionWrapper";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import {
  generateBreadcrumbSchema,
  generateWebPageSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "MoleScan privacy policy. How we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Privacy Policy", url: "/privacy-policy" },
  ]);
  const webPageSchema = generateWebPageSchema(
    "Privacy Policy",
    "MoleScan privacy policy. How we collect, use, and protect your personal data.",
    "/privacy-policy"
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Privacy Policy" },
        ]}
      />

      <section className="bg-brand-deep-blue text-white py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-4xl font-bold">Website privacy notice</h1>
        </div>
      </section>

      <SectionWrapper background="white">
        <article className="prose prose-lg max-w-3xl mx-auto">
          <h2>1. INTRODUCTION</h2>
          <p>
            This privacy notice provides you with details of how we collect and process your personal data through your use of our site www.molescan.uk
          </p>
          <p>
            By providing us with your data, you warrant to us that you are over 13 years of age.
          </p>
          <p>
            Dermme Health Limited is the data controller and we are responsible for your personal data (referred to as “we”, “us” or “our” in this privacy notice).
          </p>
          <p>
            We have appointed a Data Protection Officer who is in charge of privacy related matters for us. If you have any questions about this privacy notice, please contact the Data Protection Officer using the details set out below.
          </p>
          
          <h3>Contact Details</h3>
          <p>Our full details are:</p>
          <ul>
            <li>Full name of legal entity: Dermme Health Limited trading as MoleScan</li>
            <li>Name or title of Data Protection Officer: Dr P Nosina</li>
            <li>Email address: <a href="mailto:hello@molescan.uk">hello@molescan.uk</a></li>
            <li>Postal address: 52 Thor drive, Bedford, MK41 0WP</li>
          </ul>
          <p>
            It is very important that the information we hold about you is accurate and up to date. Please let us know if at any time your personal information changes by emailing us at hello@molescan.uk
          </p>

          <h2>2. WHAT DATA DO WE COLLECT ABOUT YOU, FOR WHAT PURPOSE AND ON WHAT GROUND WE PROCESS IT</h2>
          <p>
            Personal data means any information capable of identifying an individual. It does not include anonymised data.
          </p>
          <p>We may process the following categories of personal data about you:</p>
          <ul>
            <li>
              <strong>Communication Data</strong> that includes any communication that you send to us whether that be through the contact form on our website, through email, text, social media messaging, social media posting or any other communication that you send us. We process this data for the purposes of communicating with you, for record keeping and for the establishment, pursuance or defence of legal claims. Our lawful ground for this processing is our legitimate interests which in this case are to reply to communications sent to us, to keep records and to establish, pursue or defend legal claims.
            </li>
            <li>
              <strong>Customer Data</strong> that includes data relating to any purchases of goods and/or services such as your name, title, billing address, delivery address email address, phone number, contact details, purchase details and your card details. We process this data to supply the goods and/or services you have purchased and to keep records of such transactions. Our lawful ground for this processing is the performance of a contract between you and us and/or taking steps at your request to enter into such a contract.
            </li>
            <li>
              <strong>User Data</strong> that includes data about how you use our website and any online services together with any data that you post for publication on our website or through other online services. We process this data to operate our website and ensure relevant content is provided to you, to ensure the security of our website, to maintain back-ups of our website and/or databases and to enable publication and administration of our website, other online services and business. Our lawful ground for this processing is our legitimate interests which in this case are to enable us to properly administer our website and our business.
            </li>
            <li>
              <strong>Technical Data</strong> that includes data about your use of our website and online services such as your IP address, your login data, details about your browser, length of visit to pages on our website, page views and navigation paths, details about the number of times you use our website, time zone settings and other technology on the devices you use to access our website. The source of this data is from our analytics tracking system. We process this data to analyse your use of our website and other online services, to administer and protect our business and website, to deliver relevant website content and advertisements to you and to understand the effectiveness of our advertising. Our lawful ground for this processing is our legitimate interests which in this case are to enable us to properly administer our website and our business and to grow our business and to decide our marketing strategy.
            </li>
            <li>
              <strong>Marketing Data</strong> that includes data about your preferences in receiving marketing from us and our third parties and your communication preferences. We process this data to enable you to partake in our promotions such as competitions, prize draws and free give-aways, to deliver relevant website content and advertisements to you and measure or understand the effectiveness of this advertising. Our lawful ground for this processing is our legitimate interests which in this case are to study how customers use our products/services, to develop them, to grow our business and to decide our marketing strategy.
            </li>
          </ul>
          <p>
            We may use Customer Data, User Data, Technical Data and Marketing Data to deliver relevant website content and advertisements to you (including Facebook adverts or other display advertisements) and to measure or understand the effectiveness of the advertising we serve you. Our lawful ground for this processing is legitimate interests which is to grow our business. We may also use such data to send other marketing communications to you. Our lawful ground for this processing is either consent or legitimate interests (namely to grow our business).
          </p>

          <h3>Sensitive Data</h3>
          <p>
            We do not collect any Sensitive Data about you. Sensitive data refers to data that includes details about your race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union membership, information about your health and genetic and biometric data. We do not collect any information about criminal convictions and offences.
          </p>

          <h2>3. HOW WE COLLECT YOUR PERSONAL DATA</h2>
          <p>
            We may collect data about you by you providing the data directly to us (for example by filling in forms on our site or by sending us emails). We may automatically collect certain data from you as you use our website by using cookies and similar technologies. Please see our cookie policy for more details about this.
          </p>
          <p>
            We may receive data from third parties such as analytics providers such as Google based outside the UK, advertising networks such as Facebook based outside the UK such as search information providers such as Google based outside the UK, providers of technical, payment and delivery services, such as data brokers or aggregators.
          </p>
          <p>
            We may also receive data from publicly availably sources such as Companies House and the Electoral Register based inside the UK.
          </p>

          <h2>4. MARKETING COMMUNICATIONS</h2>
          <p>
            Our lawful ground of processing your personal data to send you marketing communications is either your consent or our legitimate interests (namely to grow our business).
          </p>
          <p>
            Under the Privacy and Electronic Communications Regulations, we may send you marketing communications from us if (i) you made a purchase or asked for information from us about our goods or services or (ii) you agreed to receive marketing communications and in each case you have not opted out of receiving such communications since. Under these regulations, if you are a limited company, we may send you marketing emails without your consent. However you can still opt out of receiving marketing emails from us at any time.
          </p>
          <p>
            Before we share your personal data with any third party for their own marketing purposes we will get your express consent.
          </p>
          <p>
            You can ask us or third parties to stop sending you marketing messages at any time by following the opt-out links on any marketing message sent to you or by emailing us at hello@molescan.uk at any time.
          </p>
          <p>
            If you opt out of receiving marketing communications this opt-out does not apply to personal data provided as a result of other transactions, such as purchases, warranty registrations etc.
          </p>

          <h2>5. DISCLOSURES OF YOUR PERSONAL DATA</h2>
          <p>We may have to share your personal data with the parties set out below:</p>
          <ul>
            <li>Other companies in our group who provide services to us.</li>
            <li>Service providers who provide IT and system administration services.</li>
            <li>Professional advisers including lawyers, bankers, auditors and insurers.</li>
            <li>Government bodies that require us to report processing activities.</li>
            <li>Any other third parties, for example, market researchers, fraud prevention agencies.</li>
            <li>Third parties to whom we sell, transfer, or merge parts of our business or our assets.</li>
          </ul>
          <p>
            We require all third parties to whom we transfer your data to respect the security of your personal data and to treat it in accordance with the law. We only allow such third parties to process your personal data for specified purposes and in accordance with our instructions.
          </p>

          <h2>6. INTERNATIONAL TRANSFERS</h2>
          <p>
            We share your personal data within our group of companies which involves transferring your data outside the UK.
          </p>
          <p>
            We are subject to the provisions of the General Data Protection Regulations that protect your personal data. Where we transfer your data to third parties outside of the UK, we will ensure that certain safeguards are in place to ensure a similar degree of security for your personal data. As such:
          </p>
          <ul>
            <li>We may transfer your personal data to countries that the United Kingdom regulatory authorities have approved as providing an adequate level of protection for personal data by; or</li>
            <li>If we use US-based providers that are part of a UK regulator approved privacy framework, we may transfer data to them, as they have equivalent safeguards in place; or</li>
            <li>Where we use certain service providers who are established outside of the UK, we may use specific contracts or codes of conduct or certification mechanisms approved by the European Commission which give personal data the same protection it has in Europe.</li>
          </ul>
          <p>
            If none of the above safeguards is available, we may request your explicit consent to the specific transfer. You will have the right to withdraw this consent at any time.
          </p>

          <h2>7. DATA SECURITY</h2>
          <p>
            We have put in place security measures to prevent your personal data from being accidentally lost, used, altered, disclosed, or accessed without authorisation. We also allow access to your personal data only to those employees and partners who have a business need to know such data. They will only process your personal data on our instructions and they must keep it confidential.
          </p>
          <p>
            We have procedures in place to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach if we are legally required to.
          </p>

          <h2>8. DATA RETENTION</h2>
          <p>
            We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
          </p>
          <p>
            When deciding what the correct time is to keep the data for we look at its amount, nature and sensitivity, potential risk of harm from unauthorised use or disclosure, the processing purposes, if these can be achieved by other means and legal requirements.
          </p>
          <p>
            For tax purposes the law requires us to keep basic information about our customers (including Contact, Identity, Financial and Transaction Data) for six years after they stop being customers.
          </p>
          <p>
            In some circumstances we may anonymise your personal data for research or statistical purposes in which case we may use this information indefinitely without further notice to you.
          </p>

          <h2>9. YOUR LEGAL RIGHTS</h2>
          <p>
            Under data protection laws you have rights in relation to your personal data that include the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
          </p>
          <p>
            You can see more about these rights at: <a href="https://ico.org.uk/for-organisations/guide-to-the-general-data-protection-regulation-gdpr/individual-rights/" target="_blank" rel="noopener noreferrer">https://ico.org.uk/for-organisations/guide-to-the-general-data-protection-regulation-gdpr/individual-rights/</a>
          </p>
          <p>
            If you wish to exercise any of the rights set out above, please email us at hello@molescan.uk
          </p>
          <p>
            You will not have to pay a fee to access your personal data (or to exercise any of the other rights). However, we may charge a reasonable fee if your request is clearly unfounded, repetitive or excessive or refuse to comply with your request in these circumstances.
          </p>
          <p>
            We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal data (or to exercise any of your other rights). This is a security measure to ensure that personal data is not disclosed to any person who has no right to receive it. We may also contact you to ask you for further information in relation to your request to speed up our response.
          </p>
          <p>
            We try to respond to all legitimate requests within one month. Occasionally it may take us longer than a month if your request is particularly complex or you have made a number of requests. In this case, we will notify you.
          </p>
          <p>
            If you are not happy with any aspect of how we collect and use your data, you have the right to complain to the Information Commissioner’s Office (ICO), the UK supervisory authority for data protection issues (<a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer">www.ico.org.uk</a>). We should be grateful if you would contact us first if you do have a complaint so that we can try to resolve it for you.
          </p>

          <h2>10. THIRD-PARTY LINKS</h2>
          <p>
            This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy notice of every website you visit.
          </p>

          <h2>11. COOKIES</h2>
          <p>
            You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly. For more information about the cookies we use, please see our cookie policy on our website.
          </p>
        </article>
      </SectionWrapper>
    </>
  );
}
