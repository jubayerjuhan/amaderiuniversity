import React from 'react';
import "../Homepage.css";
import Main_gate_of_university_of_rajshahi from '../../../fakeData/images/images/public Website/Main_gate_of_university_of_rajshahi.jpg';
import cu from '../../../fakeData/images/images/public Website/cu-b-20200704112238.jpg';
import islamic  from '../../../fakeData/images/images/public Website/web-islamic-university-1561735028940-1569059247311.jpg'; 
import khulna from '../../../fakeData/images/images/public Website/khulna.jpg';
import JNU from '../../../fakeData/images/images/public Website/JNU.jpg';
import comilla from '../../../fakeData/images/images/public Website/comilla.jpg';
import jk from '../../../fakeData/images/images/public Website/jk.jpg';
import rokeya from '../../../fakeData/images/images/public Website/rokeya.jpg';
import bup from '../../../fakeData/images/images/public Website/bup.jpg';
import barisal from '../../../fakeData/images/images/public Website/barisal.jpg';
import JSTU_Academic_Bulilding from '../../../fakeData/images/images/public Website/JSTU_Academic_Bulilding.jpg';
import mawlana from '../../../fakeData/images/images/public Website/mawlana.jpg';
import butex from '../../../fakeData/images/images/public Website/butex.jpg';
import agriculture from '../../../fakeData/images/images/public Website/agriculture.png';
import buet from '../../../fakeData/images/images/public Website/buet.jfif';
import bongo from '../../../fakeData/images/images/public Website/bongo.jpg';
import open from '../../../fakeData/images/images/public Website/open.jpg';

import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
const PublicHomepage = () => {
    return (
        <div>
            <Header></Header>
            <div className="homepage">
                <div className="homehead">
                    <h1>Public Universities Website</h1>
                </div>
                <div className="homefirst">
                    <div className="halfwidth">
                        <a href="http://www.ru.ac.bd/" target="blank">
                            <img src={Main_gate_of_university_of_rajshahi} alt="" style={{ width: '75%' }} />
                        </a>
                    </div>
                    <div className="halfwidth halfborder">
                        <a href="http://www.ru.ac.bd/" target="blank">
                            <h3>
                                Rajshahi University
                            </h3>
                        </a>
                        <p>
                            The University of Rajshahi, also known as Rajshahi University or RU (Bengali: রাজশাহী বিশ্ববিদ্যালয়), is a public co-educational research university in Bangladesh situated near the northern Bangladeshi city of Rajshahi in a 305-hectare (753-acre) campus at Motihar, 3 kilometres (2 mi) East of the Rajshahi city center. It is the second largest, in terms of academic activities and also the second oldest university in Bangladesh. The university's 60 departments are organized into ten faculties. It is considered one of the top research universities in Bangladesh. Researchers of this university have recently contributed a significant amount of effort and played a key role in bringing back medieval Bangladeshi Muslin fiber. It has a formidable alumnus base around Bangladesh and abroad. Because of its beautiful and well-planned verdurous campus, academic atmosphere and traditional inclination towards outdoor sports, it is popularly known as the Cambridge of the East.
                        </p>
                    </div>
                </div>
                <div className="homefirst">
                    <div className="halfwidth">
                        <a href="https://cu.ac.bd/" target="blank">
                            <img src={cu} alt="" />
                        </a>
                    </div>
                    <div className="halfwidth halfborder">
                        <a href="https://cu.ac.bd/" target="blank">
                            <h3>
                                Chittagong University
                            </h3>
                        </a>
                        <p>
                            The University of Chittagong (Bengali: চট্টগ্রাম বিশ্ববিদ্যালয়) is a public research university with multidisciplinary faculties situated across a 2110-acre hilly landmass in Fatehpur Union of Hathazari Upazila, 22 kilometres north of Chittagong city of Bangladesh. This university has the largest campus among Bangladeshi universities. The academic activities of the university formally began on 18 November 1966. It has about 24,000 students and more than 1000 faculty members.
                        </p>
                    </div>
                </div>
                <div className="homefirst">
                    <div className="halfwidth">
                        <a href="https://www.iu.ac.bd/" target="blank">
                            <img src={islamic} alt="" style={{ width: '85%' }} />
                        </a>
                    </div>
                    <div className="halfwidth halfborder">
                        <a href="https://www.iu.ac.bd/" target="blank">
                            <h3>
                                Islamic University
                            </h3>
                        </a>
                        <p>
                            Islamic University, Bangladesh (Bengali: ইসলামী বিশ্ববিদ্যালয়, বাংলাদেশ, Arabic: الجامعة الإسلامية بنغلاديش‎), commonly referred to as Islamic University, Kushtia shortly IU, is one of the major public research and PhD granting universities in Bangladesh and the largest seat of higher education in the south-west part of the country.It is the only university in Bangladesh where a specialized stream of Theology and seven others academic divisions/faculties: Engineering and Technology, Humanities, Social Sciences, Sciences, Biological Sciences, Business Administration and Law are running parallel in a multicultural atmosphere. It is financed by the Government of Bangladesh through University Grants Commission, Bangladesh.It is the seventh oldest university in the country and the first university in Bangladesh established after the independence from West Pakistan in 1971.It offers undergraduate, graduate, M Phil and PhD degrees.
                        </p>
                    </div>
                </div>
                <div className="homefirst">
                    <div className="halfwidth">
                        <a href="https://ku.ac.bd/" target="blank">
                            <img src={khulna} alt="" style={{ width: '70%' }} />
                        </a>
                    </div>
                    <div className="halfwidth halfborder">
                        <a href="https://ku.ac.bd/" target="blank">
                            <h3>
                                Khulna University
                            </h3>
                        </a>
                        <p>
                            Khulna University (Bengali: খুলনা বিশ্ববিদ্যালয়) is a public university in Bangladesh. It is situated at Gollamari, Khulna, Bangladesh, by the river Moyur, beside the Khulna-Satkhira highway. The academic programs of Khulna University started on 31 August 1991 with 80 students in four disciplines. As of November 2019, the university has 29 disciplines under six schools and two institutes. It is the only public university in Bangladesh where student politics is not allowed.No session jam in academic activities. A big number of professors, associate professors and assisstant professors are working as faculty member of various disciplines.
                        </p>
                    </div>
                </div>
                <div className="homefirst">
                    <div className="halfwidth">
                        <a href="https://www.jnu.ac.bd/" target="blank">
                            <img src={JNU} alt="" style={{ width: '80%' }} />
                        </a>
                    </div>
                    <div className="halfwidth halfborder">
                        <a href="https://www.jnu.ac.bd/ " target="blank">
                            <h3>
                                Jagannath University
                            </h3>
                        </a>
                        <p>
                            Jagannath University (JnU) (Bengali: জগন্নাথ বিশ্ববিদ্যালয় Jagannātha biśbabidyālaẏa, University Acrostic : জবি or JnU) is a state-funded public university at 9-10, Chittaranjan Avenue in Sadarghat, Dhaka, the capital of Bangladesh.Even though it is one of the most famous and academically one of the best universities in Bangladesh, JnU is the only non-residential University in this country Jagannath University is in the southern part of Dhaka city near the River Buriganga and a new super modern campus of approximately 200 acres is being built at Keraniganj.Jagannath university offers a great level to the student to achieve great goals focussing on academic abilities and potential of a students.The golden jubilee of Jagannath College was held on 20 March 1935 and was chaired by the zamindar of Santosh, Raja Monmath Roy Chowdhury.
                        </p>
                    </div>
                </div>
                <div className="homefirst" style={{ height: '500px' }}>
                    <div className="halfwidth">
                        <a href="https://www.cou.ac.bd/" target="blank">
                            <img src={comilla} alt="" />
                        </a>
                    </div>
                    <div className="halfwidth halfborder">
                        <a href="https://www.cou.ac.bd/" target="blank">
                            <h3>
                                Comilla University
                            </h3>
                        </a>
                        <p>
                            The Comilla University (Bengali: কুমিল্লা বিশ্ববিদ্যালয়) is a public university located at Kotbari, Cumilla, Bangladesh. The university was constructed on 250 acres (100 ha) of land at Shalban Vihara, Moynamoti.Comilla University is affiliated by University Grants Commission, Bangladesh.It started with 7 functional departments. Now there are a total of 19 departments Under 6 faculties including Information &amp; Communication Technology, Computer Science &amp; Engineering, Pharmacy, Physics, Chemistry, Statistics, Mathematics, Finance and Banking, Accounting &amp; Information Systems, Marketing, Management Studies, Media &amp; Journalism, Law, Economics, Public Administration, Archeology, Anthropology, Bengali, and English.Comilla University is a non-profit public higher-education institution .COU also provides several academic and non-academic facilities and services to students including a library, housing, sports facilities, study abroad and exchange programs, online courses and distance learning opportunities, as well as administrative services.COU also provides several academic and non-academic facilities and services to students including a library, housing, sports facilities, study abroad and exchange programs, online courses and distance learning opportunities, as well as administrative services.
                        </p>
                    </div>
                </div>
                <div className="homefirst">
                    <div className="halfwidth">
                        <a href="https://jkkniu.edu.bd/" target="blank">
                            <img src={jk} alt="" />
                        </a>
                    </div>
                    <div className="halfwidth halfborder">
                        <a href="https://jkkniu.edu.bd/" target="blank">
                            <h3>
                                Jatiya Kabi Kazi Nazrul Islam University
                            </h3>
                        </a>
                        <p>
                            Jatiya Kabi Kazi Nazrul Islam University was established by the Government of Bangladesh on 09 May 2006, though the initiative for its establishment was taken some years before, firstly by a non-official group of socio-cultural local elites, namely Greater Mymensingh Cultural Forum. The university was originally conceived to be built as the first cultural university in Bangladesh, but the JKKNIU Act enacted in 2006 made it a general university with a special focus on liberal-cum-performing arts education and research.The university has a duly qualified and productive band of youthful faculty members and officers/staffs who are deeply committed to the university's mission to produce world class graduates in academic disciplines of arts, social sciences, science &amp; engineering, and business administration - whose services and dedications are urgently needed for the reconstruction of this country.
                        </p>
                    </div>
                </div>
                <div className="homefirst">
                    <div className="halfwidth">
                        <a href="https://www.bup.edu.bd/" target="blank">
                            <img src={bup} alt="" />
                        </a>
                    </div>
                    <div className="halfwidth halfborder">
                        <a href="https://www.bup.edu.bd/" target="blank">
                            <h3>
                                Bangladesh University of Professionals
                            </h3>
                        </a>
                        <p>
                            Bangladesh University of Professionals (BUP) is the 31st public university of Bangladesh (according to University Grants Commission of Bangladesh), located in Mirpur Cantonment, Dhaka. It is the first public university of Bangladesh to be run by the Bangladesh Armed Forces. It was established under the Bangladesh University of Professionals Act, 2009.Before the establishment of Bangladesh University of Professionals, all the educational institutions of the Bangladesh Armed Forces (about 56 institutions) were spread and affiliated with different public universities all over Bangladesh.The main purpose for the establishment of BUP was to unify all the educational institutions of the Bangladesh Armed Forces under one public university run and maintained by the Armed Forces.Although BUP is a military administered institution, it is also a public university. So, anyone can study in the university following the admission test. Currently, almost all the institutions of the Bangladesh Armed Forces are affiliated with BUP.
                        </p>
                    </div>
                </div>
                <div className="homefirst">
                    <div className="halfwidth">
                        <a href="https://brur.ac.bd/" target="blank">
                            <img src={rokeya} alt="" />
                        </a>
                    </div>
                    <div className="halfwidth halfborder">
                        <a href="https://brur.ac.bd/" target="blank">
                            <h3>
                                Begum Rokeya University
                            </h3>
                        </a>
                        <p>
                            Begum Rokeya University of Rangpur (BRUR), formerly Rangpur University, is a government-financed public university in Bangladesh. It is the only general categorised university in Rangpur Division and the second public university in the region. It was named after the feminist writer and social worker Begum Rokeya. It is the 30th public university of Bangladesh. It was established on 12 October 2008 under Begum Rokeya University Act, 2009 (2009–29).The university has constructed four academic building and started class from August 2011 in the main campus. Currently, the university has 21 departments and almost 7,000 students. It contains three student halls (two male and one female). There is a library and a cafeteria on the campus.
                        </p>
                    </div>
                </div>
                <div className="homefirst">
                    <div className="halfwidth">
                        <a href="https://bu.ac.bd/" target="blank">
                            <img src={barisal} alt="" />
                        </a>
                    </div>
                    <div className="halfwidth halfborder">
                        <a href="https://bu.ac.bd/" target="blank">
                            <h3>
                                Barishal University
                            </h3>
                        </a>
                        <p>
                            University of Barishal (Bengali: বরিশাল বিশ্ববিদ্যালয় Boriśhāl Biśbôbidyālôẏ also known as Barishal University or simply BU), is a public university located in Barishal, a divisional city in southern Bangladesh. It is the only general public university in Barishal division and the country's 33rd public university. It was established in 2011 and began academic activities on 24 January 2012. The university offers degrees at undergraduate and postgraduate levels. The university houses twenty-four academic departments under six faculties.The university runs its own regular bus service to and from the city to facilitate frequent commuting of the students residing there.The university own single and doubled-decker buses as well as microbuses to facilitate transport of students, staff and faculty members.The university has several skill development and social organizations which are developed and led by both teachers and students.
                        </p>
                    </div>
                </div>
                <div className="homefirst">
                    <div className="halfwidth">
                        <a href="https://just.edu.bd/" target="blank">
                            <img src={JSTU_Academic_Bulilding} alt="" style={{ width: '80%' }} />
                        </a>
                    </div>
                    <div className="halfwidth halfborder">
                        <a href="https://just.edu.bd/" target="blank">
                            <h3>
                                Jashore University of Science and Technology
                            </h3>
                        </a>
                        <p>
                            Jashore University of Science and Technology (Bengali: যশোর বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়) also known as JUST (Bengali: যবিপ্রবি) is a government-financed public university in Bangladesh. It is the fourth public university in Khulna Division and the first public university in Jashore. It was established in 2007 and started four-year undergraduate courses from the 2009–2010 session. It was previously known as Jessore University of Science &amp; Technology. It is located in Jessore Sadar Upazila. Jashore University of Science and Technology has a six storied library building. JUST has already been declared a research university that aims at generating and advancing knowledge by cutting-edge research in its state-of-the-art laboratories and in the congenial academic ambience. Apart from these, JUST has international and local collaboration with a wide range of reputed academia and industry.
                        </p>
                    </div>
                </div>
                <div className="homefirst" style={{ height: '460px' }}>
                    <div className="halfwidth">
                        <a href="https://mbstu.ac.bd/" target="blank">
                            <img src={mawlana} alt="" style={{ width: '100%' }} />
                        </a>
                    </div>
                    <div className="halfwidth halfborder">
                        <a href="https://mbstu.ac.bd/" target="blank">
                            <h3>
                                Mawlana Bhashani Science and Technology University
                            </h3>
                        </a>
                        <p>
                            Mawlana Bhashani Science and Technology University (MBSTU) (Bengali: মাওলানা ভাসানী বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়) is the 12th oldest public university and 2nd science and technology specialized public university in Bangladesh focusing in science, technology and business. It is named after the charismatic political leader Mawlana Abdul Hamid Khan Bhashani. The medium of instruction is English.The academic departments of the university offer degree programs in different engineering and science disciplines under five faculties - the faculty of Engineering, Faculty of Life Science, Faculty of Science, Faculty of Business Administration and Faculty of Social Science. Dept. of Biotechnology and Genetic Engineering is historically prominent in the country which has astounding lab facilities in collaboration with the University of Saskatchewan. All the departments offer undergraduate degree programs and currently 15 departments offer the graduate program.In 2021, MBSTU ranked as the top research university in Bangladesh (610th in the world) by Scopus-SCImago institution ranking.
                        </p>
                    </div>
                </div>
                <div className="homefirst">
                    <div className="halfwidth">
                        <a href="https://www.butex.edu.bd/" target="blank">
                            <img src={butex} alt="" />
                        </a>
                    </div>
                    <div className="halfwidth halfborder">
                        <a href="https://www.butex.edu.bd/" target="blank">
                            <h3>
                                Bangladesh University of Textiles
                            </h3>
                        </a>
                        <p>
                            Bangladesh University of Textiles, commonly referred to as BUTEX (Bengali: বুটেক্স), is an engineering based public specialized university in Bangladesh. It is a non-profit public higher-education institution located in the urban setting of the large metropolis of Dhaka. The institution emphasizes on technological education in textile while keeps entrepreneurial industrialization as its primary subject of interest.The university itself offers academic and professional degrees in various fields of textile technology, fashion designing, advanced business and marketing strategies and in several other disciplines on both undergraduate and postgraduate levels. As of November 2018, it offers graduate program in 10 different specialized areas under its five distinct faculties.
                        </p>
                    </div>
                </div>
                <div className="homefirst">
                    <div className="halfwidth">
                        <a href="https://www.bau.edu.bd/" target="blank">
                            <img src={agriculture} alt="" />
                        </a>
                    </div>
                    <div className="halfwidth halfborder">
                        <a href="https://www.bau.edu.bd/" target="blank">
                            <h3>
                                Bangladesh Agricultural University
                            </h3>
                        </a>
                        <p>
                            Bangladesh Agricultural University (Bengali: বাংলাদেশ কৃষি বিশ্ববিদ্যালয় Bangladesh Krishi Bishshobiddalôe) or BAU was established as the only university of its kind in Bangladesh in 1961. The scheme for BAU was finalised on 8 June 1961 and its ordinance was promulgated on 18 August 1961. It started functioning with the College of Veterinary Science and Animal Husbandry at Mymensingh as its nucleus. The university has six faculties and 43 departments covering all aspects of agricultural education and research.BAU was the second highest budgeted public university in Bangladesh for the year 2013–2014. It is ranked number one university of Bangladesh according to the webmatrix university ranking 2017. BAU's research in agriculture has made it well recognised across Asia.[citation needed] It also have a very low teacher-student ratio.
                        </p>
                    </div>
                </div>
                <div className="homefirst" style={{ height: '450px' }}>
                    <div className="halfwidth">
                        <a href="https://www.buet.ac.bd/web/#/" target="blank">
                            <img src={buet} alt="" />
                        </a>
                    </div>
                    <div className="halfwidth halfborder">
                        <a href="https://www.buet.ac.bd/web/#/" target="blank">
                            <h3>
                                Bangladesh University of Engineering and Technology
                            </h3>
                        </a>
                        <p>
                            Bangladesh University of Engineering and Technology (BUET) is a public technological university in Dhaka, Bangladesh. Founded in 1876 as the Dacca Survey School, it is the oldest institution for the study of engineering, architecture and urban planning in Bangladesh.The university campus is located at the Palashi area of Dhaka, the capital of Bangladesh.With the construction of new academic buildings, an auditorium complex, a cafeteria and halls of residence, the university has continued to expand over the last three decades. A large number of BUET alumni is working in the industry and academia both in Bangladesh and outside Bangladesh.BUET has been ranked 199th among the Asian universities in the 2021 edition of QS World University Rankings.BUET has been ranked No. 801-1000 among all universities on QS World University Rankings 2022.Only two Bangladeshi universities have been ranked in the 2021 edition of Times Higher Education World University Rankings, BUET is one of them.
                        </p>
                    </div>
                </div>
                <div className="homefirst" style={{ height: '450px' }}>
                    <div className="halfwidth">
                        <a href="https://bsmrmu.edu.bd/" target="blank">
                            <img src={bongo} alt="" />
                        </a>
                    </div>
                    <div className="halfwidth halfborder">
                        <a href="https://bsmrmu.edu.bd/" target="blank">
                            <h3>
                                Bangabandhu Sheikh Mujibur Rahman Maritime University
                            </h3>
                        </a>
                        <p>
                            Bangabandhu Sheikh Mujibur Rahman Maritime University (BSMRMU) (Bengali: বঙ্গবন্ধু শেখ মুজিবুর রহমান মেরিটাইম বিশ্ববিদ্যালয়) was established in 2013, the 37th public university of the country. It is the first maritime university in Bangladesh, the 3rd maritime university in South Asia and the 12th maritime university in the world.It has issued its first calls for admission in December, 2016.The university has 36 departments under a total of 8 faculties for teaching and research at the undergraduate and postgraduate levels in marine fisheries, safe shipping management and administration, naval engineering and technology, oceanography, international maritime law, etc. However, only 5 departments are open for undergraduate level. There is also a Bachelor of Marine Science for Marine Cadets. Apart from this, post-graduate degrees are also being given in some additional subjects. In the future, bachelor's degree will also be given from these faculties.
                        </p>
                    </div>
                </div>
                <div className="homefirst" style={{ height: '400px' }}>
                    <div className="halfwidth">
                        <a href="https://bou.ac.bd/" target="blank">
                            <img src={open} alt="" style={{ width: '70%' }} />
                        </a>
                    </div>
                    <div className="halfwidth halfborder">
                        <a href="https://bou.ac.bd/" target="blank">
                            <h3>
                                The Bangladesh Open University
                            </h3>
                        </a>
                        <p>
                            The Bangladesh Open University (Bengali: বাংলাদেশ উন্মুক্ত বিশ্ববিদ্যালয়) or BOU is a public university with its main campus in Board Bazar, Gazipur District, Dhaka Division. It is the 7th largest university in the world according to enrolment.The university was established on 21 October 1992. As the only public university in Bangladesh to use distance education as a method of delivery, BOU is mandated to "promote through multimedia; instruction of every standard and knowledge – both general and scientific – by means of any form of communications technology, to raise the standard of education and to give the people educational opportunities by democratizing education and creating a class of competent people by raising the standard of education of the people generally." BOU is recognised as a national university by the University Grants Commission of Bangladesh, a statutory body attached to the Ministry of Education.The BOU is a founding and participating institution of the SAARC Consortium on Open and Distance Learning (SACODiL).
                        </p>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default PublicHomepage;