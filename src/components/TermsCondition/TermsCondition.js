import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import terms from '../../fakeData/images/images/privacy/terms.jpg';
// import rinku from '../../fakeData/images/images/aboutus/rinku.jpg';
// import susmita from '../../fakeData/images/images/aboutus/susmita.jpg';
import './TermsCondition.css';
const TermsCondition = () => {
    return (
        <div>
            <Header></Header>
            <div className="terms">
                <div className="abtdh">
                    <h1 className="abth">Terms &amp; Condition</h1>
                </div>
                <div>
                    <div className="halfwidth">
                        <img src={terms} alt="" />
                    </div>
                    <div className="halfwidth">
                        <p>Every website has certain conditions. Similarly,  www.admissionwar.com also has some terms and conditions. And you have to visit the site in accordance with the terms of the site. Below are the terms of the site:
                            <br />
                            <br />
                            1. If you comment on a post, you have to comment about the relevant topic. No obscene sentences can be used in the comments.
                            <br />
                            <br />
                            2. No anti-national ,provocative comments or bullying isn’t  allowed.
                            <br />
                            <br />
                            3. You can use the link in the comment but unnecessary/irrelevant links cannot be used.
                            <br />
                            <br />
                            4. Nothing can be done that hurts the feelings of others.
                            <br />
                            <br />
                            5. The site owner has the power to ban you without notice.
                            <br />
                            <br />
                            6.We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information.
                            <br />
                            <br />
                            7. The Authority reserves the right to make all modifications, additions and refinements to the Site.
                            <br />
                            <br />
                            We hope you will visit our site in compliance with these terms.</p>
                    </div>
                </div>
                <div className="privacyconfess">
                    <h2>Confession:</h2>
                    <p>All the information presented here is collected from the internet by . Since no human is above error, we may have some unintentional error. We sincerely apologize for all the error and also state that we are not responsible for any misinformation obtained from it and the error visible to you can be sent to us via the following mail (amader mail) .</p>
                    <h2>স্বীকারোক্তিঃ</h2>
                    <p>
                        এখানে উপস্থাপিত সকল তথ্যই ইন্টারনেট থেকে সংগৃহীত। যেহেতু কোন মানুষই ভুলের ঊর্দ্ধে নয় সেহেতু আমাদেরও কিছু অনিচ্ছাকৃত ভুল থাকতে পারে।সে সকল ভুলের জন্য আমরা আন্তরিকভাবে ক্ষমাপ্রার্থী এবং একথাও উল্লেখ থাকে যে এখান থেকে প্রাপ্ত কোন ভুল তথ্যের জন আমরা কোনভাবেই দায়ী নই এবং আপনার নিকট দৃশ্যমান ভুলটি আমাদেরকে নিম্নোক্ত মেইলের মাধ্যমে অবহিত করার অনুরোধ জানাচ্ছি।
                        ই-মেইলঃ
                    </p>
                </div>
            </div>

            <Footer></Footer>
        </div>

    );
};

export default TermsCondition;