import type { Metadata } from "next";
import SectionWrapper from "@/components/layout/SectionWrapper";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "MoleScan cookie policy. How we use cookies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <section className="bg-brand-deep-blue text-white py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-4xl font-bold">GDPR compliant cookie policy</h1>
        </div>
      </section>

      <SectionWrapper background="white">
        <article className="prose prose-lg max-w-3xl mx-auto">
          <h2>What's a cookie?</h2>
          <ul>
            <li>A "cookie" is a piece of information that is stored on your computer's hard drive if you agree to this and which records how you move your way around a website so that, when you revisit that website, it can present tailored options based on the information stored about your last visit. Cookies can also be used to analyse traffic and for advertising and marketing purposes.</li>
            <li>Cookies are used by nearly all websites and do not harm your system.</li>
          </ul>
          <p>
            We are required to obtain your consent for all non-essential cookies used on our website. You can block cookies (including essential cookies) at any time by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block essential cookies you may not be able to access all or parts of our site.
          </p>

          <h2>How do we use cookies?</h2>
          <ul>
            <li>We use cookies to track your use of our website. This enables us to understand how you use the site and track any patterns with regards how you are using our website. This helps us to develop and improve our website as well as products and / or services in response to what you might need or want.</li>
            <li>Cookies are either:
              <ul>
                <li><strong>Session cookies:</strong> these are only stored on your computer during your web session and are automatically deleted when you close your browser – they usually store an anonymous session ID allowing you to browse a website without having to log in to each page but they do not collect any personal data from your computer; or</li>
                <li><strong>Persistent cookies:</strong> a persistent cookie is stored as a file on your computer and it remains there when you close your web browser. The cookie can be read by the website that created it when you visit that website again. We use persistent cookies for analytics and performance tracking.</li>
              </ul>
            </li>
            <li>Cookies can also be categorised as follows:
              <ul>
                <li><strong>Strictly necessary cookies:</strong> These cookies are essential to enable you to use the website effectively, such as when buying a product and / or service. Without these cookies, the services available to you on our website cannot be provided. These cookies do not gather information about you that could be used for marketing or remembering where you have been on the internet.</li>
                <li><strong>Performance cookies:</strong> These cookies enable us to monitor and improve the performance of our website. For example, they allow us to count visits, identify traffic sources and see which parts of the site are most popular.</li>
                <li><strong>Functionality cookies:</strong> These cookies allow our website to remember choices you make and provide enhanced features. For instance, we may be able to provide you with news or updates relevant to the services you use. They may also be used to provide services you have requested such as viewing a video or commenting on a blog. The information these cookies collect is usually anonymised.</li>
                <li><strong>Targeting cookies:</strong> These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests.</li>
                <li><strong>First and third party cookies:</strong> First party cookies are cookies set by our website. Third party cookies are cookies on our website that are set by a website other than our website, such as where we have adverts on our website or use third-party analytics so that we can show you relevant content.</li>
              </ul>
            </li>
          </ul>

          <p>We use first and third party cookies on our website and these are set out in the table below.</p>
          <p>You can find more information about the individual cookies we use and the purposes for which we use them in the table below:</p>

          <div className="overflow-x-auto not-prose my-8">
            <table className="w-full text-left border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="p-4 rounded-tl-lg font-semibold w-1/4">Cookie Title</th>
                  <th className="p-4 font-semibold w-1/4">Cookie Name</th>
                  <th className="p-4 rounded-tr-lg font-semibold w-1/2">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="p-4 font-medium">Universal Analytics (Google)</td>
                  <td className="p-4 text-gray-500 font-mono text-sm">_ga<br/>_gali<br/>_gat<br/>_gid</td>
                  <td className="p-4 text-gray-600 text-sm">These cookies are used to collect information about how visitors use our website. We use the information to compile reports and to help us improve the website. The cookies collect information in an anonymous form, including the number of visitors to the website and blog, where visitors have come to the website from and the pages they visited.</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Application Firewall Cookie</td>
                  <td className="p-4 text-gray-500 font-mono text-sm">_zjc*</td>
                  <td className="p-4 text-gray-600 text-sm">This cookie is set by a third-party web application firewall to help maintain the security and performance of our website. Some traffic may receive a challenge to check if it is genuine and if it is, a cookie is set so the user isn't challenged again.</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Security Notice Cookie</td>
                  <td className="p-4 text-gray-500 font-mono text-sm">ASP.NET_SessionId</td>
                  <td className="p-4 text-gray-600 text-sm">This cookie is essential for secure forms to operate. It is set only for those people using the form. This cookie is deleted when you close your browser.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            You can alter your cookie preferences at any time by accessing your browser's privacy settings or by engaging with our website's cookie consent banner. Please refresh your page to ensure that the new settings have taken effect.
          </p>
          <p>You can also control your cookie settings through your web browser.</p>
          <p>
            You can opt out of being tracked by Google Analytics across all websites, by going to <a href="http://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">http://tools.google.com/dlpage/gaoptout</a>.
          </p>
          <p>Except for essential cookies, all cookies will expire after 24 months.</p>
          <p>
            If you have any questions about the cookies that we use, feel free to email us at <a href="mailto:hello@molescan.uk">hello@molescan.uk</a>
          </p>
        </article>
      </SectionWrapper>
    </>
  );
}
