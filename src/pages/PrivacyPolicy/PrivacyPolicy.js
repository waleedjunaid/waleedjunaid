import React, { useEffect, useState } from "react";
import classes from "./PrivacyPolicy.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { isMobileViewHook } from "../../CustomHooks/isMobileViewHook";
import Footer from "../../stories/Footer";
import Header from "../../stories/Header";
import { apiHeader, BaseURL } from "../../config/apiUrl";
import { Get } from "../../Axios/AxiosFunctions";
import parse from "html-react-parser";
import moment from "moment";
import { Loader } from "../../stories/Loader";

const PrivacyPolicy = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    isMobileViewHook(setIsMobile);
  }, [window.innerWidth]);

  const fetchData = async () => {
    const url = BaseURL("users/privacy-policy");
    setLoading(true);
    const response = await Get(url);
    setLoading(false);
    if (response !== undefined) {
      setData(response?.data?.data);
    }
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <div className={[classes.PrivacyPolicyMainScreen].join(" ")}>
      <Header containerClass={classes.mainContainer} />

      {loading ? (
        <div className={classes.loaderBox}>
          <Loader />
        </div>
      ) : (
        <Container
          fluid
          className={[classes.mainContainer, classes.MiddleSection].join(" ")}
        >
          <div>
            <h2 className={[classes.header].join(" ")}>Privacy Policy</h2>
            <p className={["reg", classes.date].join(" ")}>
              Effective Date: {moment(data?.updatedAt).format("LL")}
            </p>
            <p className={["reg", classes.description].join(" ")}>
              <div>
                <p>
                  <strong>
                    If you're busy, here's a summary of the most common
                    questions. For more details, scroll down to read the full
                    Privacy Policy.
                  </strong>
                </p>
                <br />
                <p>
                  - We&nbsp;<strong>do not</strong>&nbsp;sell your data or your
                  information. This is against our privacy policy and we hate
                  those tactics as much as you do.
                </p>
                <p>
                  - We&nbsp;<strong>do not</strong>&nbsp;share your resumes or
                  LinkedIn profiles with any third-parties or companies.
                </p>
                <p>
                  - To delete your account for any reason, login and fill out
                  the form&nbsp;
                  <a href="https://demoresume.com/account-deletion-request">
                    here
                  </a>
                  . We'll process your deletion request in a few days.
                </p>
                <p>
                  - Once you join Demo Resume, you may get periodic email about
                  your resume review and other career insights. There is a link
                  to unsubscribe at the bottom of every email - clicking it will
                  instantly unsubscribe you.
                </p>
                <p>
                  - If you have registered for an account via an Organization
                  (e.g. a university or educational organization), your resumes
                  and usage data are accessible by authorized individuals, such
                  as Career Services teams or University Counselors
                </p>
              </div>
              <p>
                <br />
                <br />
                <br />
                <br />
              </p>
              <p>
                At Demo Resume we know you care about how your personal
                information is used and shared, and we take your privacy
                seriously. This privacy policy has been compiled to better serve
                those who are concerned with how their Personal Information is
                being used online. This is information that can be used on its
                own or with other information to identify, contact, or locate a
                single person, or to identify an individual in context. Read our
                privacy policy carefully to get a clear understanding of how we
                collect, use, protect or otherwise handle your Personal
                Information in accordance with our website, Demo Resume. IF YOU
                DO NOT AGREE WITH THE PRACTICES DESCRIBED IN THIS PRIVACY
                POLICY, PLEASE STOP USING OUR SITE AND/OR SERVICES IMMEDIATELY.
              </p>
              <p>&nbsp;</p>
              <hr />
              <p>
                <br />
                <br />
              </p>
              <h2>What data do we collect when you create an account?</h2>
              <p>
                When you create an account with us, we collect profile
                information such as your name and email address. This is to help
                improve your experience or to authenticate you as a registered
                user. In addition to this information that you submit on the
                website, we may also collect information such as your IP
                address, Internet browser details, bandwidth, Internet Service
                Provider and other information needed to provide you with access
                to Demo Resume and obtain analytics.
                <br />
                <br />
                To access some features on Demo Resume (specifically the Score
                My Resume resume analysis engine, Targeted Resume, LinkedIn
                Review profile analysis engine, and Demo Resume Pro Lines and
                Metrics), you must create an account by clicking on "Sign in
                with Google" or "Sign in with Facebook" or other similar
                registering options, if available. You understand that, by
                creating an account, we will be able to identify you by your
                registered profile. Our third-party vendors, including but not
                limited, to Paddle, might also ask for your credit card or
                Paypal details if you want to purchase our premium products,
                Demo Resume Pro or LinkedIn Review. We do not collect or use any
                payment information and we claim no responsibility or liability
                for payment transactions.
              </p>
              <p>
                <br />
                <br />
              </p>
              <h2>What data do we collect when you upload your resume?</h2>
              <p>
                To provide recommendations, analysis, scoring and feedback on
                your resume via the Score My Resume or Targeted Resume
                functionality, our engine parses your resume and identifies
                information that may include, but not limited to, your resume's
                sections, your email address, IP address, your resume's content
                / bullet points, and your language. We use this data solely for
                the purpose of providing resume suggestions and recommendations
                to you privately.
              </p>
              <p>
                <br />
                <br />
              </p>
              <h2>
                What data do we collect when you upload your LinkedIn profile?
              </h2>
              <p>
                To provide recommendations, analysis, scoring and feedback on
                your LinkedIn profile via the LinkedIn Review functionality, our
                engine parses your uploaded LinkedIn profile PDF and identifies
                information that may include, but not limited to, your profile's
                sections, your profile's content / bullet points, and your
                language. Note that this data is your LinkedIn public profile.
                We use this data solely for the purpose of providing suggestions
                and recommendations on your LinkedIn profile privately.
              </p>
              <p>
                <br />
                <br />
              </p>
              <h2>When do we collect information?</h2>
              <p>
                In addition to the above cases, we collect information from you
                when you subscribe to a newsletter, fill out a form, Open a
                Support Ticket or enter information on our site. e.g. Provide us
                with feedback on our products or services
              </p>
              <p>
                <br />
                <br />
              </p>
              <h2>Where can I find a list of Demo Resume's subprocessors?</h2>
              <p>
                Here is a non-exclusive list of our subprocessors and what they
                are used for. This list is subject to change as our business
                evolves.
                <br />
                Format is&nbsp;
                <strong>Subprocessor - Nature of processing:</strong>
                <br />
                Amazon Web Services - Storage and archival of Demo Resume user
                data and metadata.
                <br />
                Vultr - Storage and archival of Demo Resume data and metadata.
                <br />
                Digital Ocean - Storage and archival of Demo Resume data and
                metadata.
                <br />
                Google - Authentication, tracking.
                <br />
                Postmark - Email delivery services for communications to data
                exporter personnel involved in the data exporter-data importer
                relationship.
                <br />
                Facebook - Authentication.
              </p>
              <p>
                <br />
                <br />
                <br />
                <br />
              </p>
              <h2>May I opt out of Demo Resume Communications?</h2>
              <p>
                Yes, you may opt out by clicking the Unsubscribe button at hte
                bottom of every email. You can also email Demo Resume's Data
                Protection Officer by contacting&nbsp;contact@demoresume.com.
              </p>
              <p>
                <br />
                <br />
                <br />
                <br />
              </p>
              <h2>Can I update or delete my personal data?</h2>
              <p>
                You have certain rights in relation to your Personally
                Identifiable Information. You can access your Personally
                Identifiable Information and confirm that it remains correct and
                up-to-date or choose whether or not you wish to receive material
                from us by Unsubscribing to our email list(s) (via the
                Unsubscribe link at the bottom of every email) or emailing us
                at&nbsp;contact@demoresume.com.
                <br />
                If you would like further information in relation to your rights
                or would like to exercise any of them, you may also contact us
                via&nbsp;contact@demoresume.com.&nbsp;If you reside or are
                located in the EEA, you have the right to request that we:
                <br />
                <br />- provide access to any Personally Identifiable
                Information we hold about you;
                <br />- prevent the processing of your Personally Identifiable
                Information for direct-marketing purposes;
                <br />- update any Personally Identifiable Information which is
                out of date or incorrect;
                <br />- delete any Personally Identifiable Information which we
                are holding about you;
                <br />- restrict the way that we process your Personally
                Identifiable Information;
                <br />- provide your Personally Identifiable Information to a
                third party provider of services; or
                <br />- provide you with a copy of any Personally Identifiable
                Information which we hold about you.
                <br />- We try to answer every email promptly where possible,
                and provide our response within the time period stated by
                applicable law. Keep in mind, however, that there will be
                residual information that will remain within our databases,
                access logs and other records, which may or may not contain your
                Personally Identifiable Information. Please also note that
                certain Personally Identifiable Information may be exempt from
                such requests in certain circumstances, which may include if we
                need to keep processing your Personally Identifiable Information
                to comply with a legal obligation.
                <br />
                <br />
                When you email us with a request, we may ask that you provide us
                with information necessary to confirm your identity.
              </p>
              <p>
                <br />
                <br />
              </p>
              <h2>How do we use your information?</h2>
              <p>
                <strong>To provide Personalised Resume Recommendations:</strong>
                <br />
                Information provided by you will be used for Demo Resume's Score
                My Resume component including but not limited to, resume
                scoring, analysis, suggestions for improvement, suggestions for
                resume lines and metrics, or for sending you
                confirmation/reminder emails relating to your resume review
                (e.g. link to your analysis).
                <br />
                <br />
                <strong>
                  To provide you with missing skills from the Job Description:
                </strong>
                <br />
                The job description and resume provided to Demo Resume's
                Targeted Resume component will be used for comparing the job
                description to the resume and providing suggestions for
                improvement.
                <br />
                <br />
                <strong>
                  To provide Personalised LinkedIn Profile Recommendations:
                </strong>
                <br />
                Information provided by you will be used for Demo Resume's
                LinkedIn Review component including but not limited to, profile
                scoring, analysis, suggestions for improvement, or for sending
                you confirmation/reminder emails relating to your profile review
                (e.g. link to your analysis).
                <br />
                <br />
                <strong>To provide Suggested Resume Lines:</strong>
                <br />
                Information provided by you will be used to suggest to you
                related resume lines in our database.
                <br />
                <strong>
                  Please note that we will never use your resume lines in our
                  Free or Pro databases of resume lines. Content on your resume
                  is solely used for the purpose of making personalised
                  recommendations to you, and are private to you.
                </strong>
                <br />
                <br />
                <strong>To securely authenticate you:</strong>
                <br />
                We use your profile information that you provided when you
                created an account to authenticate you and enable you to access
                our Premium services (Demo Resume Pro, LinkedIn Review) and your
                personalised resume report(s).
                <br />
                <br />
                <strong>Service communications</strong>
                <br />
                We may use your contact email for limited purposes, including
                but not limited to notification emails (e.g. such as when your
                resume review is ready, reminder emails, and feedback emails).
                If you have opted in to receive marketing material, we may send
                you an email for feedback purposes or product updates.
                <br />
                <br />
                We also may use this information to communicate with you through
                email, notices etc. posted on the Site, and other means
                accessible through the Services, to advise you about how to
                utilize Demo Resume, new features, updates, and key product
                information that will allow you to make better use of our
                Services;
                <br />
                <br />
                You can opt in or out of this at anytime via the unsubscribe
                link at the bottom of every email. You agree that we may use
                this information for such communication with you.
                <br />
                <br />
                <strong>Improve our Services</strong>
                <br />
                We may use your contact information for limited purposes,
                including but not limited to feedback purposes or our monthly
                newsletter. We also may use this information to communicate with
                you through email, notices etc. posted on the Site, and other
                means accessible through the Services, to advise you about how
                to utilize Demo Resume, new features, updates, and general tips;
                You can opt in or out of this via the sign up form. You agree
                that we may use this information for such communication with
                you.
                <br />
                <br />
                <strong>Customer Service / Support</strong>
                <br />
                When you contact our customer support, we collect information
                such as your email address and your query. We use this
                information to be able to contact you and solve your query. We
                use this information to track potential problems and trends and
                customize our support responses to serve you better. Our
                customer support will endeavour to request or review only such
                information that is necessary to assist in your query or provide
                any other technical help you may require.
                <br />
                <br />
                <strong>Third Party Services</strong>
                <br />
                We may employ or engage third party companies (e.g. Typeform)
                and individuals to facilitate support, investigation, review,
                promotion and advancement of our Site and/or Services.
                Additionally, we may use third party vendors (e.g. Paddle) and
                hosting partners to provide the necessary content, hardware,
                software, networking, storage and related technology required to
                run the Site and/or Services. These third parties are bound by
                confidentiality and privacy obligations consistent with this
                Policy and have limited access to your information, meant only
                to perform these tasks on our behalf and are committed to not
                disclose or use it for any other purposes.
                <br />
                <br />
                <strong>Payment</strong>
                <br />
                When you pay for our premium services (Demo Resume Pro, LinkedIn
                Review), our third party payment processor may store data such
                as your name and email address to send you a payment receipt or
                other notifications. As stated above, this third party are bound
                by confidentiality and privacy obligations consistent with this
                Policy and have limited access to your information, meant only
                to perform these tasks on our behalf and are committed to not
                disclose or use it for any other purposes.
              </p>
              <p>
                <br />
                <br />
              </p>
              <h2>Is my resume private?</h2>
              <p>
                Yes. Your resume and your resume review generated by Score My
                Resume and/or Targeted Resume is private to you, and as
                described, we use the data solely for:
                <br />
                (a) providing resume line suggestions
                <br />
                (b) providing feedback on your resume
                <br />
                (c) providing general suggestions for improvement (e.g. missing
                keywords or skills)
                <br />
                <br />
                Note that if you have registered via an Organization (e.g. a
                university, or you used an organization code provided by your
                organization), your resume and usage data can also be accessed
                via authorized individuals, including but not limited to, Career
                Services teams, University Counselors, and Project Managers of
                the engagement.
                <br />
                <br />
                We may occasionally use your data to improve the effectiveness
                of our analysis engine ('Score My Resume'), which is then also
                used only on an anonymized, aggregated basis. In its aggregated
                form, data will not constitute Personal Data for the purposes of
                the GDPR as this data does not directly or indirectly reveal
                your identity.
                <br />
                <br />
                This information is strictly for analytics purposes and to help
                us improve the features and quality of our product. Such
                anonymized data will have all direct personal identifiers
                removed such as name, ID numbers, date of birth, demographic
                information, geolocation information, etc. We may share
                aggregated information that includes non-identifying information
                with third parties for industry analysis and demographic
                profiling. Furthermore, we agree not to attempt to re-identify
                anonymized data. Users of the Site and/or Services shall not be
                entitled to any compensation stemming from the use of such
                aggregated or anonymized information.
                <br />
                <br />
                Please note that we will never use your resume's content in any
                of our tools or services. Content on your resume is solely used
                for the purpose of making personalised recommendations to you,
                and are private to you.
                <br />
                <br />
                If you would like us to delete your resume and/or associated
                resume files from our servers, please email us at contact [at]
                demoresume.com and we will delete your information from our
                servers within 48 hours.
              </p>
              <p>
                <br />
                <br />
              </p>
              <h2>Is my LinkedIn Profile private?</h2>
              <p>
                Yes. Your resume and your profile feedback generated by LinkedIn
                Review is private to you, and as described, we use the data
                solely for:
                <br />
                (a) providing a score on your profile
                <br />
                (a) providing feedback on your profile
                <br />
                (c) providing general suggestions for improvement
                <br />
                <br />
                Note that if you have registered via an Organization (e.g. a
                university, or you used an organization code provided by your
                organization), your resume and usage data can also be accessed
                via authorized individuals, including but not limited to, Career
                Services teams, University Counselors, and Project Managers of
                the engagement.
                <br />
                <br />
                We may occasionally use your data to improve the effectiveness
                of our analysis engine ('LinkedIn Review'), which is then also
                used on an anonymized, aggregated basis.
                <br />
                <br />
                In its aggregated form, data will not constitute Personal Data
                for the purposes of the GDPR as this data does not directly or
                indirectly reveal your identity. This information is strictly
                for analytics purposes and to help us improve the features and
                quality of our product. Such anonymized data will have all
                direct personal identifiers removed such as name, ID numbers,
                date of birth, demographic information, geolocation information,
                etc. We may share aggregated information that includes
                non-identifying information with third parties for industry
                analysis and demographic profiling. Furthermore, we agree not to
                attempt to re-identify anonymized data. Users of the Site and/or
                Services shall not be entitled to any compensation stemming from
                the use of such aggregated or anonymized information.
                <br />
                <br />
                Please note that we will never use your profile content in our
                Free or Pro databases of resume lines. Content on your LinkedIn
                profile is solely used for the purpose of making personalised
                recommendations to you, and are private to you.
                <br />
                <br />
                If you would like us to delete your resume and/or associated
                resume files from our servers, please email us at contact [at]
                demoresume.com and we will delete your information from our
                servers within 48 hours.
              </p>
              <p>
                <br />
                <br />
              </p>
              <h2>How do we protect your information?</h2>
              <p>
                Our website is scanned on a regular basis for security holes and
                known vulnerabilities in order to make your visit to our site as
                safe as possible. We use regular Malware Scanning.
                <br />
                <br />
                Your personal information is contained behind secured networks
                and is only accessible by a limited number of persons who have
                special access rights to such systems, and are required to keep
                the information confidential.
                <br />
                <br />
                We implement a variety of security measures when a user places
                an order enters, submits, or accesses their information to
                maintain the safety of your personal information.
                <br />
                <br />
                All transactions are processed through a gateway provider
                (Paddle or Stripe) and are not stored or processed on our
                servers.
              </p>
              <p>
                <br />
                <br />
              </p>
              <h2>Data aggregation</h2>
              <p>
                We may collect information about your use of Demo Resume, which
                is then also used on an anonymized, aggregated basis. This
                information is strictly for analytics purposes and to help us
                improve the features and quality of our Site and Service. Such
                anonymized data will have all direct personal identifiers
                removed such as name, ID numbers, date of birth, demographic
                information, geolocation information etc. We may share
                aggregated information that includes non-identifying information
                with third parties for industry analysis and demographic
                profiling. Furthermore, we agree not to attempt to re-identify
                anonymized data. Users shall not be entitled to any compensation
                stemming from the use of such aggregated or anonymized
                information.
              </p>
              <p>
                <br />
                <br />
              </p>
              <h2>Your choices</h2>
              <p>
                <strong>Option for Information Removal and Opt-Out</strong>
                <br />
                We may use your personal information to communicate with you
                through email, notices posted on Demo Resume, and other means
                accessible through our products, to offer you products and/or
                services. If you no longer wish to receive such communications
                from us, you may opt-out by unsubscribing from the communication
                or by emailing us at&nbsp;contact@demoresume.com.
                <br />
                <br />
                <strong>
                  Rights to Access, Correct, or Delete Your Information, and
                  Closing Your Account
                </strong>
                <br />
                You have the right to access, change or correct your individual
                profile information, i.e. your Personal Data, with respect to
                your account. You can do so by contacting us
                at&nbsp;contact@demoresume.com.&nbsp;We reserve the right to
                take appropriate steps to authenticate your identity before
                providing access and to deny requests.
                <br />
                <br />
                If you wish to delete your account or request that we no longer
                use your information to provide you services, please contact us
                at contact [at] demoresume.com. Kindly note that doing so may
                result in your not being able to access or receive certain
                services.
              </p>
              <p>
                <br />
                <br />
              </p>
              <h2>Do we use 'cookies'?</h2>
              <p>
                Yes. Cookies are small files that a site or its service provider
                transfers to your computer&acirc;&euro;&trade;s hard drive
                through your Web browser (if you allow) that enables the
                site&acirc;&euro;&trade;s or service
                provider&acirc;&euro;&trade;s systems to recognize your browser
                and capture and remember certain information. They can be used
                to help us understand your preferences based on previous or
                current site activity, which enables us to provide you with
                improved services. We also use cookies to help us compile
                aggregate data about site traffic and site interaction so that
                we can offer better site experiences and tools in the future.
                <br />
                <br />
                You can choose to have your computer warn you each time a cookie
                is being sent, or you can choose to turn off all cookies. You do
                this through your browser settings. Since browser is a little
                different, look at your browser's Help Menu to learn the correct
                way to modify your cookies.
                <br />
                <br />
                If you turn cookies off, Some of the features that make your
                site experience more efficient may not function properly.that
                make your site experience more efficient and may not function
                properly.
              </p>
              <p>
                <br />
                <br />
              </p>
              <h2>Third-party disclosure</h2>
              <p>
                We do not sell, trade, or otherwise transfer to outside parties
                your Personally Identifiable Information unless we provide users
                with advance notice. This does not include website hosting
                partners and other parties who assist us in operating our
                website, conducting our business, or serving our users, so long
                as those parties agree to keep this information confidential. We
                may also release information when it's release is appropriate to
                comply with the law, enforce our site policies, or protect ours
                or others' rights, property or safety.
                <br />
                <br />
                However, non-personally identifiable visitor information may be
                provided to other parties for marketing, advertising, or other
                uses.
              </p>
              <p>
                <br />
                <br />
              </p>
              <h2>Third-party links</h2>
              <p>
                Occasionally, at our discretion, we may include or offer
                third-party products or services on our website. These
                third-party sites have separate and independent privacy
                policies. We therefore have no responsibility or liability for
                the content and activities of these linked sites. Nonetheless,
                we seek to protect the integrity of our site and welcome any
                feedback about these sites.
                <br />
                <br />
                We have implemented the following:
                <br />
                We, along with third-party vendors such as Google use
                first-party cookies (such as the Google Analytics cookies) and
                third-party cookies (such as the DoubleClick cookie) or other
                third-party identifiers together to compile data regarding user
                interactions with ad impressions and other ad service functions
                as they relate to our website.
                <br />
                <br />
                Opting out:
                <br />
                Users can set preferences for how Google advertises to you using
                the Google Ad Settings page. Alternatively, you can opt out by
                visiting the Network Advertising Initiative Opt Out page or by
                using the Google Analytics Opt Out Browser add on.
              </p>
              <p>
                <br />
                <br />
              </p>
              <h2>California Online Privacy Protection Act</h2>
              <p>
                CalOPPA is the first state law in the nation to require
                commercial websites and online services to post a privacy
                policy. The law's reach stretches well beyond California to
                require any person or company in the United States (and
                conceivably the world) that operates websites collecting
                Personally Identifiable Information from California consumers to
                post a conspicuous privacy policy on its website stating exactly
                the information being collected and those individuals or
                companies with whom it is being shared. - See more at:
                <br />
                http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf
                <br />
                <br />
                According to CalOPPA, we agree to the following:
                <br />
                Users can visit our site anonymously.
                <br />
                Once this privacy policy is created, we will add a link to it on
                our home page or as a minimum, on the first significant page
                after entering our website.
                <br />
                Our Privacy Policy link includes the word 'Privacy' and can
                easily be found on the page specified above.
                <br />
                You will be notified of any Privacy Policy changes:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &bull; On our Privacy Policy Page
                <br />
                You can change your personal information:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &bull; By logging in to your
                account
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &bull; Others
              </p>
              <p>&nbsp;</p>
              <h2>How does our site handle Do Not Track signals?</h2>
              <p>
                We honor Do Not Track signals and Do Not Track, plant cookies,
                or use advertising when a Do Not Track (DNT) browser mechanism
                is in place.
                <br />
                <br />
              </p>
              <h2>Does our site allow third-party behavioral tracking?</h2>
              <p>
                It's also important to note that we do not allow third-party
                behavioral tracking
                <br />
                <br />
              </p>
              <h2>COPPA (Children Online Privacy Protection Act)</h2>
              <p>
                When it comes to the collection of personal information from
                children under the age of 13 years old, the Children's Online
                Privacy Protection Act (COPPA) puts parents in control. The
                Federal Trade Commission, United States' consumer protection
                agency, enforces the COPPA Rule, which spells out what operators
                of websites and online services must do to protect children's
                privacy and safety online.
                <br />
                <br />
              </p>
              <h2>- CAN-SPAM Act -</h2>
              <p>
                The CAN-SPAM Act is a law that sets the rules for commercial
                email, establishes requirements for commercial messages, gives
                recipients the right to have emails stopped from being sent to
                them, and spells out tough penalties for violations. We collect
                your email address in order to market to our mailing list or
                continue to send emails to you after the original transaction
                has occurred.
                <br />
                To be accordance with CAN-SPAM we agree to the following:
                <br />* NOT use false, or misleading subjects or email addresses
                <br />* Identify the message as an advertisement in some
                reasonable way
                <br />* Include the physical address of our business or site
                headquarters
                <br />* Monitor third party email marketing services for
                compliance, if one is used.
                <br />* Honour opt-out/unsubscribe requests quickly
                <br />* Allow users to unsubscribe by using the link at the
                bottom of each email
                <br />
                <br />
                If at any time you would like to unsubscribe from receiving
                future emails, you can follow the instructions at the bottom of
                each email.
                <br />
                <br />
              </p>
              <h2>- Contacting Us -</h2>
              <p>&nbsp;</p>
              <p>
                If there are any questions regarding this privacy policy, please
                send an e-mail to
                <br />
                support at demoresume.com.
              </p>

              {/* {parse(`${data?.text}`)} */}
            </p>
          </div>
        </Container>
      )}

      <Footer containerClass={classes.mainContainer} />
    </div>
  );
};
export default PrivacyPolicy;
