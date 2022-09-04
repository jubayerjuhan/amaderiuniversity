import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import privacy from '../../fakeData/images/images/privacy/privacy.jpg';
// import rinku from '../../fakeData/images/images/aboutus/rinku.jpg';
// import susmita from '../../fakeData/images/images/aboutus/susmita.jpg';
import './PrivacyPolicy.css';
const PrivacyPolicy = () => {
    return (
        <div>
            <Header></Header>
            <div className="privacy">
                <div className="abtdh">
                    <h1 className="abth">Privacy &amp; Policy</h1>
                </div>
                <div>
                    <div className="halfwidth">
                        <img src={privacy} alt="" />
                    </div>
                    <div className="halfwidth">
                        <h2>Privacy Policy for Amaderi Biswobidyaloy</h2>
                        <p>If you require any more information or have any questions about our privacy policy, please feel free to contact us by email at amaderibissobiddaloy@gmail.com
                            <br />
                            <br />
                            If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy
                        </p>
                        <h2>Cookies</h2>
                        <p>Our website(amader site)uses these “cookies” to collection information and to improve our Service. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.</p>
                        <h2>Children’s Information</h2>
                        <p>We believe it is important to provide added protection for children online. We encourage parents and guardians to spend time online with their children to observe, participate in and/or monitor and guide their online activity.
                            https://www.admissionwar.com/ does not knowingly collect any personally identifiable information from children under the age of 13. If a parent or guardian believes that https://www.admissionwar.com/ has in its database the personally-identifiable information of a child under the age of 13, please contact us immediately (using the contact in the first paragraph) and we will use our best efforts to promptly remove such information from our records.</p>
                        <h2>Online Privacy Policy Only</h2>
                        <p>This privacy policy applies only to our online activities and is valid for visitors to our website and regarding information shared and/or collected there.
                            This policy does not apply to any information collected offline or via channels other than this website.</p>
                    </div>
                </div>
                <div className="privacyconfess">
                    <h2>Security</h2>
                    <p>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>
                    <h2>Consent</h2>
                    <p>By using our website, you hereby consent to our privacy policy and agree to its terms.</p>
                    <h2>Update</h2>
                    <p>This Privacy Policy was last updated on: Wednesday, October 13, 2021.</p>
                    <h2>Changes to This Privacy Policy</h2>
                    <p>We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.</p>
                    <h2>Confession:</h2>
                    <p>All the information presented here is collected from the internet by . Since no human is above error, we may have some unintentional error. We sincerely apologize for all the error and also state that we are not responsible for any misinformation obtained from it and the error visible to you can be sent to us via the following mail (amader mail) .</p>
                    <h2>স্বীকারোক্তিঃ</h2>
                    <p>এখানে উপস্থাপিত সকল তথ্যই ইন্টারনেট থেকে সংগৃহীত। যেহেতু কোন মানুষই ভুলের ঊর্দ্ধে নয় সেহেতু আমাদেরও কিছু অনিচ্ছাকৃত ভুল থাকতে পারে।সে সকল ভুলের জন্য আমরা আন্তরিকভাবে ক্ষমাপ্রার্থী এবং একথাও উল্লেখ থাকে যে এখান থেকে প্রাপ্ত কোন ভুল তথ্যের জন আমরা কোনভাবেই দায়ী নই এবং আপনার নিকট দৃশ্যমান ভুলটি আমাদেরকে নিম্নোক্ত মেইলের মাধ্যমে অবহিত করার অনুরোধ জানাচ্ছি।
                        <br />
                        ই-মেইলঃ
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default PrivacyPolicy;