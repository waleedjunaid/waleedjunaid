import React, { useEffect, useState } from "react";
import classes from "./TermsAndCondition.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../stories/Footer";
import { isMobileViewHook } from "../../CustomHooks/isMobileViewHook";
import Header from "../../stories/Header";
import parse from "html-react-parser";
import { apiHeader, BaseURL } from "../../config/apiUrl";
import { Get } from "../../Axios/AxiosFunctions";
import moment from "moment";
import { Loader } from "../../stories/Loader";

const TermsAndCondition = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    isMobileViewHook(setIsMobile);
  }, [window.innerWidth]);

  const fetchData = async () => {
    const url = BaseURL("users/terms");
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
    <div className={[classes.TermsAndConditionMainScreen].join(" ")}>
      <Header
        // backgroundColor={"var(--header-orange-color)"}
        containerClass={classes.mainContainer}
      />

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
            <h2 className={[classes.header].join(" ")}>Terms & Conditions</h2>
            <p className={["reg", classes.date].join(" ")}>
              Effective Date: {moment(data?.updatedAt).format("LL")}
            </p>
            <p className={["reg", classes.description].join(" ")}>
              <p>
                By accessing the website at https:// DemoResume.com, you are
                agreeing to be bound by these terms of service, all applicable
                laws and regulations, and agree that you are responsible for
                compliance with any applicable local laws. The materials
                contained in this website are protected by applicable copyright
                and trademark law. These Terms of Service cover your use of Demo
                Resume websites and/or sub-domains (collectively, the "Site")
                and the services that Demo Resume and its subsidiaries and
                affiliates (hereinafter referred to as " Demo Resume", "we",
                "us" or "our") provide through the Site or any content or
                information provided as part of these services (hereinafter
                referred to as the "Services").
                <br />
                <br />
                By accessing or signing up to our Site and/or Services, you
                agree to be bound by these Terms of Service, and to review and
                accept our Privacy Policy. You should review the Privacy Policy
                and Terms of Service periodically for any modifications or
                changes. If you do not agree with any of these terms, you are
                prohibited from using or accessing this site.
              </p>
              <p>
                <br />
                <br />
                <br />
              </p>
              <h2>Introduction</h2>
              <p>
                {" "}
                Demo Resume goal is to help people (i.e. jobseekers,
                professionals) develop their careers through a career
                development platform. We are able to do this by providing:
                <br />
                1) a resume analysis engine that uses advanced machine learning,
                artificial intelligence and natural language processing
                techniques to identify errors and potential issues on applicant
                resumes, and recommends improvements.
                <br />
                2) a job description analysis engine that identifies keywords
                and skills on job descriptions and resumes
                <br />
                3) a LinkedIn profile analysis engine that uses natural language
                processing techniques to identify errors and potential issues on
                people's LinkedIn Profiles, and recommends improvements.
                <br />
                4) written content and general career advice
                <br />
                All these products and any future products have the goal of
                helping job applicants write better resumes or LinkedIn
                profiles, and get more interviews and opportunities.
                <br />
                <br />
                <strong>Please note that:</strong>&nbsp; Demo Resume&nbsp;
                <strong>does not</strong>, however, warrant that the use of our
                Site, Services or our Content will provide specific or desired
                results. Demo Resume is not a recruitment company, and makes no
                representations or guarantees regarding the effectiveness of the
                Site and/or Services in meeting user's employment objectives. We
                do not guarantee that resumes or other information submitted by
                the user will result in the user being hired, and is not
                responsible for any employment decisions, for whatever reason,
                made by employer or by others about the user.
              </p>
              <p>
                <br />
                <br />
                <br />
              </p>
              <h2>Eligibility</h2>
              <p>
                You must be 16 years of age or older, or the age of majority as
                defined in your jurisdiction, whichever is older, to use the
                Site or Services provided therein in any manner. By using the
                Site and accepting these Terms of Service, You represent and
                warrant that you have the right, authority and capacity to agree
                to and abide by these Terms of Service. You also represent that
                you will use the Site and any services in a manner consistent
                with any and all applicable laws and regulations.
              </p>
              <p>
                <br />
                <br />
                <br />
              </p>
              <h2>Accounts</h2>
              <p>
                You can sign up for an account to use our Services. You can
                either create an account using an email and password, or via
                Facebook or Google. When you login with either option, we
                automatically create a unique user account for you on our site.
                The Content and information you directly provide on the Site
                will become a part of our Site. You acknowledge that you will
                remain the owner of such Content and information and approve us
                to use the same in accordance with our Privacy Policy and Terms
                of Service. "Content" includes but is not limited to the text,
                scripts, graphics, photos, sounds, videos, questions, responses
                to questions and any other information that you post,
                communicate, transmit, record, link to or direct to any third
                party in any manner through the use of the Site and/or Services
                including, but not limited to, any presentation, appearance or
                participation by you through our Site and/or Services. Further,
                you agree to:
                <br />
                (1) keep your password secure and confidential;
                <br />
                (2) use our Site and/or Services directly and strictly only for
                the authorised purpose, and not for any other individual or
                entity;
                <br />
                (3) not use a Facebook or Google account with a fake/false
                identity (one that is not yourself);
                <br />
                (4) not permit others to use your account;
                <br />
                (5) not use someone else's account(s);
                <br />
                (6) not share account(s);
                <br />
                (7) not sell, trade, or transfer your our account to another
                party;
                <br />
                (8) not charge anyone for access to any portion of our Site
                and/or Services, or any information or services therein; and
                <br />
                (9) follow all applicable rules and regulations; and general
                conduct stated in these Terms of Service.
                <br />
                (10) not create multiple/duplicate accounts
                <br />
                You are solely responsible for all the activities performed
                on/using your account unless you report misuse.
                <br />
                <br />
                You must notify us immediately of any breach of security or
                unauthorized access of your account.
                <br />
                <br />
              </p>
              <p>
                <br />
                <br />
                <br />
              </p>
              <h2>Premium Accounts and Subscriptions (' Demo Resume Pro')</h2>
              <p>
                Some features are only accessible to Premium members, also
                referred to as ' Demo Resume Pro' members. These can be
                purchased directly on our site. Alternatively, they can be
                provided via your organization (e.g. business or university) if
                they have already been prepaid.
                <br />
                These features include:
                <br />
                (a) Searchable database of over 200 resume lines
                <br />
                (b) Full resume reviews using Score My Resume ( Demo Resume
                resume analytics engine)
                <br />
                (c) Database of over 50 metrics
                <br />
                (d) Suggested resume lines through Score My Resume
                <br />
                (e) Resume templates
                <br />
                (f) Resume line-by-line analysis
                <br />
                (g) Targeting with Targeted Resume
                <br />
                (h) Full LinkedIn reviews using LinkedIn Review
                <br />
                <br />
                For Demo Resume Pro members, you agree to pay all applicable
                fees (inclusive of taxes) and provide us with the necessary
                payment information in order to access Demo Resume Pro features
                and any default in payment of these fees may result in
                termination of your Demo Resume Pro Service. There are multiple
                payment plans available for Demo Resume Pro members, including a
                subscription based offering (monthly or quarterly) and a
                one-time option (one year). Users/members are expected to
                cancel/update their subscriptions in their account portal.
              </p>
              <p>
                <br />
                <br />
                <br />
              </p>
              <h2>
                Billing process/cycles for Demo Resume Pro members/subscribers
              </h2>
              <p>
                When you sign up for any of our subscription Premium plans, you
                will be billed every calendar month (Monthly Plan) or Quarterly
                (every 3 months Plan) from the date of subscription. Until you
                cancel, billing will continue according to the cycle stated at
                the time of subscription.
                <br />
                <br /> Demo Resume is not responsible for continued
                subscriptions should a user forget to cancel their account. It
                is the customer&rsquo;s responsibility to confirm the
                cancellation.
              </p>
              <p>
                <br />
                <br />
                <br />
              </p>
              <h2>Payments and orders are handled by Paddle</h2>
              <p>
                Our order process is conducted by our online reseller
                Paddle.com. Paddle.com is the Merchant of Record for all our
                orders. Paddle provides all customer service inquiries and
                handles returns.
                <br />
                <br />
                <br />
              </p>
              <h2>Refunds</h2>
              <p>
                We generally offer very limited refunds to new users. The reason
                is that Demo Resume is a Freemium product and you can "inspect
                the product" and all the site's features in a limited capacity
                for free, before becoming a paid member (i.e. You get a subset
                of resume lines for free, subset of the resume analysis is free
                with Score My Resume, and all our tools have a free tier). Since
                you were/are able to inspect what you buy before buying and
                therefore we can't offer refunds. We appeal any chargebacks
                aggressively and usually win, which means you may have to pay a
                fine.
                <br />
                <br />
                <strong>Existing Pro members who forgot to cancel:</strong>
                <br />
                If you're an existing Pro member and you forgot to cancel your
                subscription in time before it renewed, please contact us
                immediately (maximum within 3 days of your billing date). You
                can contact us via&nbsp;
                <a href="https://help.DemoResume.com/">this form</a>&nbsp;or via
                email at support at DemoResume.com. If you have not used the
                service in the time between being billed and the time of
                contacting us, we'll be able to provide refunds depending on the
                circumstances. Please note that we are unable to offer refunds
                if you contact us outside the 3 day window.
                <br />
                <br />
              </p>
              <p>
                <br />
                <br />
                <br />
              </p>
              <h2>Modifications</h2>
              <p>
                We reserve the right, at our sole discretion, to change, modify
                or otherwise alter the terms and conditions set forth in these
                Terms of Service at any time and you agree to be bound by such
                changes, modifications or alterations. Such modifications shall
                become effective immediately upon the posting thereof on the
                Site and/or Services. Your continued use of our Site and/or
                Services after any changes will signify and confirm your
                acceptance of those changes.
                <br />
                We aim to create the best experience for our Users. Therefore,
                the Site and/or Services provided may change which includes, but
                is not limited to, updates, upgrades or discontinuation of
                features, components or modules, without prior notification, as
                part of our effort to update, improve and expand the Site and/or
                Services.
                <br /> Demo Resume is not obligated to inform you of any such
                changes and you are solely responsible for periodically checking
                <br />
                the Site and/or Services for changes.
              </p>
              <p>
                <br />
                <br />
                <br />
              </p>
              <h2>Acceptable Use Policy</h2>
              <p>
                Unauthorized Use: Demo Resume authorizes you to view and access
                a single copy of the content available on or from the Site
                solely for their personal use. Any recommendations or advice
                provided by us on the Site and/or Services is for informational
                purposes only and Demo Resume expressly excludes any liability
                for any action taken by a User based on such recommendations or
                advice.
                <br />
                <br />
                Only one individual may access the Website using the same email
                or password, as stated in the Accounts section above. Demo
                Resume reserves the right, in our sole discretion, to
                immediately revoke your account and/or seek all other legal
                remedies available for copying copyrighted text (including the
                recommendations, resume lines, metrics, or any site content), or
                otherwise misusing or misappropriating site content, including
                but not limited to, use on a "mirrored", competitive, or third
                party site.
                <br />
                <br />
                Use of Site Content: The contents of this Site such as text,
                graphics, images, logos, button icons, software and other
                content (collectively the "Site Content") are protected under
                both United Kingdom and foreign copyright, trademark and other
                laws. All such content is the property of Demo Resume or its
                content suppliers or clients. Unauthorized use of the Site
                Content may violate these laws, and is strictly prohibited.
                Members must retain all copyright, trademark, service mark and
                other proprietary notices contained in the original Site Content
                on any authorized copy they make of such content. Members may
                not sell or modify the Site Content or reproduce, display,
                publicly perform, distribute, or otherwise use the Site Content
                in any way for any public or commercial purpose, in connection
                with products or services that are not those of Demo Resume, or
                in any other manner that is likely to cause confusion among
                consumers, that disparages or discredits Demo Resume or its
                licensors, that dilutes the strength of Demo Resume or its
                licensor's property, or that otherwise infringes Demo Resume or
                its licensor's intellectual property rights. Members may not in
                any other way misuse the Site Content.
                <br />
                <br />
                Prohibited Uses: You must not misuse the Site by knowingly
                introducing viruses, trojans, worms, malware, logic bombs or
                other material which is or may be malicious or technologically
                harmful. You must not attempt to gain unauthorized access to the
                Site, the server on which the Website is stored or any server,
                computer or database connected to the Website.
                <br />
                <br />
                The Site and/or Services may contain links to third party
                websites that are not owned or controlled by Demo Resume. These
                links are provided solely as a convenience to you and not as an
                endorsement by Demo Resume of the content on such websites. Demo
                Resume has no control over, and assumes no responsibility or
                liability for, the content, privacy policies, terms of use or
                practices of any third party websites. Users are solely
                responsible for reading and agreeing (or disagreeing) with the
                terms and conditions and/or privacy policies of these third
                parties.
              </p>
              <p>
                <br />
                <br />
                <br />
              </p>
              <h2>User Content Restrictions</h2>
              <p>
                Except as otherwise expressly permitted in this Terms of
                Service, you agree that you will not give access to, forward,
                display, post or distribute any part of the Site Content to any
                individuals, persons or companies. You agree that you will not
                use the Site and/or Services to forward, display, post or
                distribute any part of the Site Content or the recommendations
                of improvement (in Score My Resume) to any public website
                including but not limited to YouTube, Facebook, Twitter or
                similar websites.
                <br />
                <br />
                Additionally, you agree not to use the Site and/or Services to
                post, email, or otherwise make available Content:
                <br />
                <br />
                (a) that is unlawful, harmful, threatening, abusive, harassing,
                defamatory, libellous, invasive of another's privacy,
                inappropriate or is harmful to minors in any way;
                <br />
                (b) that contains nudity or graphic or gratuitous violence or is
                pornographic or sexually explicit in any way;
                <br />
                (c) that harasses, degrades, intimidates or is hateful toward an
                individual or group of individuals on the basis of religion,
                gender, sexual orientation, race, ethnicity, age, or disability;
                <br />
                (d) that violates federal, state, or local equal employment
                opportunity laws, including but not limited to, stating in any
                interview for employment a preference or requirement based on
                race, color, religion, sex, national origin, age, or disability;
                <br />
                (e) that impersonates any person or entity or falsely states or
                otherwise misrepresents your affiliation with a person or
                entity;
                <br />
                (f) that includes personal or personally identifiable
                information about another person without that person&rsquo;s
                explicit consent;
                <br />
                (g) that is false, deceptive, misleading, deceitful or wrongly
                informative in any way;
                <br />
                (h) that infringes any patent, trademark, trade secret,
                copyright or other proprietary rights of any third party, or
                Content that you do not have a right to make available under any
                law or under contractual or fiduciary relationships;
                <br />
                (i) that constitutes or contains affiliate marketing, link
                referral code, junk mail, spam, chain letters, pyramid schemes,
                or unsolicited commercial advertisement;
                <br />
                (j) that contains software viruses or any other computer code,
                files or programs designed to interrupt, destroy or limit the
                functionality of any computer software or hardware or
                telecommunications equipment;
                <br />
                (k) that disrupts the normal flow of dialogue with an excessive
                amount of Content (flooding attack) to the Services, or that
                otherwise negatively affects other Users&rsquo; ability to use
                the Services;
                <br />
                (l) that employs misleading email addresses, or forged headers
                or otherwise manipulated identifiers in order to disguise the
                origin of Content transmitted through the Services;
                <br />
                (m) that could disable, overburden, or impair the proper working
                or functionality or appearance of the Site and/or Services; or
                <br />
                (n) that contains a third party's identification documents or
                sensitive financial information
              </p>
              <p>
                <br />
                <br />
                <br />
              </p>
              <h2>
                Organizational Accounts (i.e. Accounts paid for by your
                organization)
              </h2>
              <p>
                Your organization (e.g. your university, recruitment firm or
                other educational firm) may offer our Services to you to help in
                your career development. Typically, your organization will
                pre-purchase access for you that you can claim either via using
                your organizational / university email or via an organizational
                code.
                <br />
                <br />
                Note that if you have registered via an Organization (e.g. a
                university, or you used an organization code provided by your
                organization), your uploaded documents and usage data can also
                be accessed via authorized individuals, including but not
                limited to, Career Services teams, University Counselors, and
                Project Managers of the engagement.
              </p>
              <p>
                <br />
                <br />
              </p>
              <h2>Additional Restrictions</h2>
              <p>
                {" "}
                Demo Resume also specifically prohibits the following:
                <br />
                <br />
                (a) Purposely or intentionally uploading a resume, LinkedIn
                profile or any document whose content is NOT your own,*
                <br />
                (b) Requesting contact to an email address or contact
                information not your own,
                <br />
                (c) Copying / selling resume lines we offer
                <br />
                (d) Taking any action that imposes an unreasonable or
                disproportionately large load on the Site's infrastructure
              </p>
              <p>
                <br />* The only exception is that Career Coach accounts are
                allowed to upload documents that are provided by their clients
                or students. Any document that is uploaded must have the right
                and consent from the owner of the document.
                <br />
                <br />
                <br />
              </p>
              <h2>Software and Technology</h2>
              <p>
                {" "}
                Demo Resume software and technology ("Software") includes the
                Site and/or Services and is hosted by Demo Resume and accessed
                over the Internet. Demo Resume agrees to provide you with a
                limited, personal, non-exclusive, non-transferable,
                non-sublicensable, revocable license to use the Software in
                accordance with these Terms of Service. You may not use the
                Software for anything other than as intended by Demo Resume. You
                may not use the Software with any device, program or service
                designed to circumvent technological measures employed to
                control access to, or the rights in work protected by copyright
                laws. All rights not expressly granted by Demo Resume are hereby
                reserved. You agree not to take any action to interfere with
                Demo Resume ownership of or rights in the Software. You agree
                that, unless otherwise permitted in this section or by law, you
                will not:
                <br />
                (a) reproduce, republish, display, frame, download, distribute,
                copy or transmit the Software;
                <br />
                (b) to the extent permitted under applicable law, redistribute,
                encumber, sell, rent, lease, loan, sublicense, assign, or
                otherwise transfer rights to the Software;
                <br />
                (c) modify or create any derivative works based on the Software,
                including but not limited to customization, translation, or
                localization;
                <br />
                (f) attempt to probe, scan or test the vulnerability of the
                Software or any associated system or network, or breach any
                security or authentication feature or measure of the Software;
                <br />
                (d) copy, reproduce, reuse in another product or service,
                modify, alter, or display in any manner any software or files,
                or parts thereof, included as part of the Software;
                <br />
                (e) except to the extent expressly permitted by law, decompile,
                disassemble, reverse engineer, or otherwise attempt to access or
                derive the source code or architecture of the Software, or in
                any way ascertain, decipher, or obtain the communications
                protocols for accessing the Software, or the underlying ideas or
                algorithms of the Software;
                <br />
                (g) attempt to gain unauthorized access to the Software or to
                any account, application, platform, computer system or network
                associated with the Software (and, if you are blocked by Demo
                Resume from accessing the Software, such as if Demo Resume
                blocks your IP address, you will not implement any measure to
                circumvent such blocking, such as by masking your IP address or
                using a proxy IP address);
                <br />
                (h) use the Software in any way that violates these Terms of
                Service, or any applicable law or regulation; and
              </p>
              <p>
                <br />
                <br />
                <br />
              </p>
              <h2>DISCLAIMER OF WARRANTIES</h2>
              <p>
                THE MATERIALS ON DEMO RESUME WEBSITE ARE PROVIDED ON AN "AS IS"
                OR "AS AVAILABLE" BASIS. DEMO RESUME MAKES NO WARRANTIES,
                EXPRESSED OR IMPLIED, AND HEREBY DISCLAIMS AND NEGATES ALL OTHER
                WARRANTIES INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OR
                CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                OR NON-INFRINGEMENT OF INTELLECTUAL PROPERTY OR OTHER VIOLATION
                OF RIGHTS.
                <br />
                YOU AGREE THAT USE OF THE SITE AND/OR SERVICES IS ENTIRELY AT
                YOUR OWN RISK.
                <br />
                <br /> DEMO RESUME MAKES NO WARRANTIES OR REPRESENTATIONS ABOUT
                THE ACCURACY OR COMPLETENESS OF THE CONTENT ON THE SITE AND/OR
                SERVICES , INCLUDING BUT NOT LIMITED TO, RESUME SCORING,
                SUGGESTED FEEDBACK, SUGGESTED LINES, SUGGESTED METRICS AND OTHER
                RECOMMENDATIONS GIVEN TO THE USER, AND OR THE CONTENT OF ANY
                THIRD PARTY SITES LINKED TO THIS SITE AND/OR SERVICES AND
                ASSUMES NO LIABILITY OR RESPONSIBILITY FOR ANY (I) ERRORS,
                MISTAKES OR INACCURACIES OF CONTENT, (II) PERSONAL INJURY OR
                PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR
                ACCESS TO AND USE OF OUR SITE AND/OR SERVICES, (III) ANY
                UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY
                AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED
                THEREIN, (IV) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO
                OR FROM OUR SITE AND/OR SERVICES, (V) ANY BUGS, VIRUSES, TROJAN
                HORSES AND/OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH
                OUR SITE AND/OR SERVICES BY ANY THIRD PARTY, OR (V) ANY LOSS OR
                DAMAGE TO CONTENT OR DATA (WHETHER STORED THROUGH THE SITE
                AND/OR SERVICE OR OTHERWISE), OR (VI) ANY ERRORS OR OMISSIONS IN
                ANY CONTENT OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A
                RESULT OF THE USE OF ANY CONTENT POSTED, EMAILED, TRANSMITTED OR
                OTHERWISE MADE AVAILABLE VIA THE SITE AND/OR SERVICES. DEMO
                RESUME DOES NOT WARRANT, ENDORSE, GUARANTEE OR ASSUME
                RESPONSIBILITY FOR ANY PRODUCT, SERVICE OR OPPORTUNITY
                ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SITE AND/OR
                SERVICES OR ANY HYPER-LINKED SITES AND/OR SERVICES.
              </p>
              <p>
                <br />
                <br />
                <br />
              </p>
              <h2>Limitations</h2>
              <p>
                In no event shall Demo Resume or its suppliers be liable for any
                damages (including, without limitation, damages for loss of data
                or profit, or due to business interruption) arising out of the
                use or inability to use the materials on Demo Resume website,
                even if Demo Resume or a Demo Resume authorized representative
                has been notified orally or in writing of the possibility of
                such damage. Because some jurisdictions do not allow limitations
                on implied warranties, or limitations of liability for
                consequential or incidental damages, these limitations may not
                apply to you.
              </p>
              <p>
                <br />
                <br />
                <br />
              </p>
              <h2>Termination of your Account</h2>
              <p>
                You agree that Demo Resume may terminate your access to the Site
                and/or Services without notice if: (a) Demo Resume determines
                that you have violated these Terms of Service, or (b) Demo
                Resume is requested or required to do so by any court of
                competent jurisdiction or government authority in any country.
                You agree that the Site and/or Services are not intended to act
                as an indefinite information repository and, therefore, Demo
                Resume may, upon such termination, deactivate or delete your
                account and any related data, information, and files, and bar
                any further access to such data, information, and files. Such
                action may include, among other things, accessing your content
                or data and/or discontinuing your use of the Site and/or
                Services without refund or compensation.
              </p>
              <p>
                <br />
                <br />
                <br />
              </p>
              <h2>Indemnification</h2>
              <p>
                You agree to defend, indemnify and hold harmless Demo Resume,
                its parents, subsidiaries, affiliates, and their respective
                officers, employees and agents from any claim or demand
                including reasonable attorneys' fees and costs, made by any
                third party arising out of or related to i) Your use of the
                Site, ii) Your use of any content contained therein, iii) Your
                Content or any information or material that You post to or
                transmit through the Site, iv) Your violation of these Terms of
                Service, or v) infringement by You or another User using Your
                computer or account, of any intellectual property or any other
                right of any person or entity. Demo Resume shall provide notice
                to You promptly of any such claim, suit or proceeding, and Demo
                Resume reserves the right and shall have the option, at its own
                expense, to assume the exclusive defense and control of any
                matter otherwise subject to indemnification by You, and in such
                case, You agree to cooperate with Demo Resume defense of such
                claim.
              </p>

              {/* {parse(`${html}`)} */}
            </p>
          </div>
        </Container>
      )}

      <Footer containerClass={classes.mainContainer} />
    </div>
  );
};
export default TermsAndCondition;
