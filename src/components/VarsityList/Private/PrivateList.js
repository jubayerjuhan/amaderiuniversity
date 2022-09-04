import React from 'react';
import '../VarsityList.css';
// import pic from '../../../fakeData/images/images/ranking/national.jpg';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
const PrivateList = () => {
    return (
        <div>
            <Header></Header>
            <div className="list">
                <div className="publiclist">
                    <h1>Private University List</h1>
                    <p>Establishment of private universities in Bangladesh was initiated after the institution of the Private University Act 1992.There are 108 private universities in Bangladesh.The establishment of a private university is relatively a new phenomenon in this country. In the early 1990s, the private sector came forward to establish universities. Since then the country experienced spectacular growth in private universities.Most of the private universities are in Dhaka Division.
                    </p>
                </div>
                <table className="tableplist">
                    <tbody><tr className="toptable">
                        <th>SL</th>
                        <th>University</th>
                        <th>Acronym</th>
                        <th>established</th>
                        <th>Location</th>
                        <th>Division</th>
                        <th>Specialization</th>
                        <th>Ph.D Granting</th>
                    </tr>
                        <tr>
                            <td>01</td>
                            <td>North South University</td>
                            <td>NSU	</td>
                            <td>1992</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>02</td>
                            <td>University of Science and Technology Chittagong</td>
                            <td>USTC</td>
                            <td>1992</td>
                            <td>Chittagong</td>
                            <td>Chittagong</td>
                            <td>Science and technology</td>
                            <td>NO</td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td>Independent University</td>
                            <td>IUB</td>
                            <td>1993</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>04</td>
                            <td>Central Women's University</td>
                            <td>CWU</td>
                            <td>1993</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>Women's studies</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>05</td>
                            <td>International University of Business Agriculture and Technology</td>
                            <td>IUBAT</td>
                            <td>1991</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>06</td>
                            <td>International Islamic University</td>
                            <td>IIUC</td>
                            <td>1995</td>
                            <td>Chittagong</td>
                            <td>Chittagong</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>07</td>
                            <td>Ahsanullah University of Science and Technology</td>
                            <td>AUST</td>
                            <td>1995</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>Engineering</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>08</td>
                            <td>American International University</td>
                            <td>AIUB</td>
                            <td>1994</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>09</td>
                            <td>East West University</td>
                            <td>EWU	</td>
                            <td>1996</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>University of Asia Pacific</td>
                            <td>UAP	</td>
                            <td>1996</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Gono University</td>
                            <td>GB	</td>
                            <td>1996</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>People's University of Bangladesh</td>
                            <td>PUB	</td>
                            <td>1996</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>Asian University of Bangladesh</td>
                            <td>DAUB	</td>
                            <td>1996</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>Dhaka International University</td>
                            <td>DIU	</td>
                            <td>1995</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>Manarat International University</td>
                            <td>MIU		</td>
                            <td>2001</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td>BRAC University</td>
                            <td>BRAC	</td>
                            <td>2001</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>17</td>
                            <td>Bangladesh University</td>
                            <td>BU	</td>
                            <td>2001</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td>Leading University</td>
                            <td>LU	</td>
                            <td>2002</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td>BGC Trust University Bangladesh</td>
                            <td>BGCTUB		</td>
                            <td>2001</td>
                            <td>Chittagong</td>
                            <td>Chittagong</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td>Sylhet International University</td>
                            <td>SIU		</td>
                            <td>2001</td>
                            <td>Sylhet</td>
                            <td>Sylhet</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>21</td>
                            <td>University of Development Alternative</td>
                            <td>UODA</td>
                            <td>2002</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>22</td>
                            <td>Premier University</td>
                            <td>PU</td>
                            <td>2001</td>
                            <td>Chittagong</td>
                            <td>Chittagong</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>23</td>
                            <td>Southeast University</td>
                            <td>SUB			</td>
                            <td>2001</td>
                            <td>Chittagong</td>
                            <td>Chittagong</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>24</td>
                            <td>Daffodil International University</td>
                            <td>DIU	</td>
                            <td>2002</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>25</td>
                            <td>Stamford University Bangladesh</td>
                            <td>SU		</td>
                            <td>2002</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>26</td>
                            <td>State University of Bangladesh</td>
                            <td>SUB		</td>
                            <td>2002</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>27</td>
                            <td>City University</td>
                            <td>CUB		</td>
                            <td>2002</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>28</td>
                            <td>Prime University</td>
                            <td>PU			</td>
                            <td>2002</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>29</td>
                            <td>Northern University</td>
                            <td>NUB		</td>
                            <td>2002</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>30</td>
                            <td>Southern University</td>
                            <td>SUB			</td>
                            <td>2001</td>
                            <td>Chittagong</td>
                            <td>Chittagong</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>31</td>
                            <td>Green University of Bangladesh</td>
                            <td>GUB			</td>
                            <td>2002</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>32</td>
                            <td>Pundra University of Science and Technology</td>
                            <td>PUST</td>
                            <td>2001</td>
                            <td>Bogra</td>
                            <td>Rajshahi</td>
                            <td>Science &amp; Technology</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>33</td>
                            <td>World University of Bangladesh</td>
                            <td>WUB		</td>
                            <td>2003</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>34</td>
                            <td>Shanto-Mariam University of Creative Technology</td>
                            <td>SMUCT</td>
                            <td>2003</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>Creative technology</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>35</td>
                            <td>Millennium University</td>
                            <td>MU		</td>
                            <td>2003</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>36</td>
                            <td>Eastern University</td>
                            <td>EU			</td>
                            <td>2003</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>37</td>
                            <td>Metropolitan University</td>
                            <td>MU				</td>
                            <td>2003</td>
                            <td>Sylhet</td>
                            <td>Sylhet</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>38</td>
                            <td>United International University</td>
                            <td>UIU			</td>
                            <td>2003</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>39</td>
                            <td>University of South Asia</td>
                            <td>USAB			</td>
                            <td>2003</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>40</td>
                            <td>Uttara  University</td>
                            <td>UU			</td>
                            <td>2003</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>41</td>
                            <td>Bangladesh University of Business and Technology</td>
                            <td>BUBT</td>
                            <td>2003</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>Science and technology</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>42</td>
                            <td>Presidency  University</td>
                            <td>PU</td>
                            <td>2003</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>Science &amp; Technology</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>43</td>
                            <td>University of Information Technology and Sciences</td>
                            <td>UITS			</td>
                            <td>2003</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>44</td>
                            <td>Primeasia  University</td>
                            <td>PAU			</td>
                            <td>2003</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>45</td>
                            <td>University of Liberal Arts Bangladesh</td>
                            <td>ULAB</td>
                            <td>2004</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>Media studies and journalism</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>46</td>
                            <td>Royal University of Dhaka</td>
                            <td>RUD			</td>
                            <td>2003</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>47</td>
                            <td>Atish Dipankar University of Science and Technology</td>
                            <td>ADUST</td>
                            <td>2004</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>Science and technology</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>48</td>
                            <td>Victoria University of Bangladesh</td>
                            <td>VUB			</td>
                            <td>2003</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>49</td>
                            <td>Bangladesh Islami University</td>
                            <td>BIU		</td>
                            <td>2006</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>50</td>
                            <td>ASA  University</td>
                            <td>ASAUB</td>
                            <td>2006</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>51</td>
                            <td>East Delta  University</td>
                            <td>EDU		</td>
                            <td>2006</td>
                            <td>Chittagong</td>
                            <td>Chittagong</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>52</td>
                            <td>European University of Bangladesh</td>
                            <td>EUB		</td>
                            <td>2012</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>53</td>
                            <td>Varendra   University</td>
                            <td>VU		</td>
                            <td>2012</td>
                            <td>Rajshahi</td>
                            <td>Rajshahi</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>54</td>
                            <td>Hamdard University Bangladesh</td>
                            <td>HUB		</td>
                            <td>2012</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>55</td>
                            <td>BGMEA University of Fashion &amp; Technology</td>
                            <td>BUFT</td>
                            <td>1999</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>Textile</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>56</td>
                            <td>North East  University</td>
                            <td>NEUB		</td>
                            <td>2012</td>
                            <td>Sylhet</td>
                            <td>Sylhet</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>57</td>
                            <td>First Capital University Of Bangladesh</td>
                            <td>FCUB			 </td>
                            <td>2012</td>
                            <td>Chuadanga</td>
                            <td>Khulna</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>58</td>
                            <td>Ishakha International  University</td>
                            <td>IIUB</td>
                            <td>2012</td>
                            <td>Kishoreganj</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>59</td>
                            <td>Z H Sikder University of Science &amp; Technology</td>
                            <td>ZHSUST</td>
                            <td>2012</td>
                            <td>Shariatpur</td>
                            <td>Dhaka</td>
                            <td>Science &amp; Technology</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>60</td>
                            <td>Exim Bank Agricultural University Bangladesh</td>
                            <td>EBAUB</td>
                            <td>2013</td>
                            <td>Chapainawabganj</td>
                            <td>Rajshahi</td>
                            <td>Agricultural</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>61</td>
                            <td>North Western  University</td>
                            <td>NWU			</td>
                            <td>2012</td>
                            <td>Khulna</td>
                            <td>Khulna</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>62</td>
                            <td>Khwaja Yunus Ali  University</td>
                            <td>KYAU			</td>
                            <td>2010</td>
                            <td>Enayetpur, Sirajgonj</td>
                            <td>Rajshahika</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>63</td>
                            <td>Sonargaon   University</td>
                            <td>SU</td>
                            <td>2012</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>Engineering &amp; Technology, Business,Law</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>64</td>
                            <td>Feni   University</td>
                            <td>FU			</td>
                            <td>2010</td>
                            <td>Feni</td>
                            <td>Chittagong</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>65</td>
                            <td>Britannia  University</td>
                            <td>BU			</td>
                            <td>2010</td>
                            <td>Comilla</td>
                            <td>Chittagong</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>66</td>
                            <td>Port City International University</td>
                            <td>PCIU		</td>
                            <td>2012</td>
                            <td>Chittagong</td>
                            <td>Chittagong</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>67</td>
                            <td>Bangladesh University of Health Sciences</td>
                            <td>BUHS</td>
                            <td>2012</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>Health Sciences</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>68</td>
                            <td>Chittagong Independent  University</td>
                            <td>CIU		</td>
                            <td>1999</td>
                            <td>Chittagong</td>
                            <td>Chittagong</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>69</td>
                            <td>Notre Dame University Bangladesh</td>
                            <td>NDUB</td>
                            <td>2013</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>70</td>
                            <td>Time University Bangladesh</td>
                            <td>TMUB		</td>
                            <td>2013</td>
                            <td>Faridpur</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>71</td>
                            <td>North Bengal International  University</td>
                            <td>NBIU</td>
                            <td>2013</td>
                            <td>Matihar</td>
                            <td>Rajshahi</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>72</td>
                            <td>Fareast International  University</td>
                            <td>FIU	</td>
                            <td>2013</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>73</td>
                            <td>Rajshahi Science &amp; Technology University</td>
                            <td>RSTU</td>
                            <td>2013</td>
                            <td>Natore</td>
                            <td>Rajshahi</td>
                            <td>Science and Technology</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>74</td>
                            <td>Bangamata Sheikh Fojilatunnesa Mujib Science and Technology University</td>
                            <td>SFMMU			</td>
                            <td>2013</td>
                            <td>Jamalpur</td>
                            <td>Mymensingh</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>75</td>
                            <td>Coxs Bazar International University				</td>
                            <td>CBIU</td>
                            <td>2013</td>
                            <td>Cox's Bazar</td>
                            <td>Chittagong</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>76</td>
                            <td>Ranada Prasad Shaha  University</td>
                            <td>RPSU </td>
                            <td>2013</td>
                            <td>Narayanganj</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>77</td>
                            <td>German University Bangladesh</td>
                            <td>GUB		</td>
                            <td>2013</td>
                            <td>Gazipur</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>78</td>
                            <td>Global  University</td>
                            <td>GUB		</td>
                            <td>2015</td>
                            <td>Barisal</td>
                            <td>Barisal</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>79</td>
                            <td>CCN University of Science &amp; Technology</td>
                            <td>CCNUST</td>
                            <td>2015</td>
                            <td>Comilla</td>
                            <td>Chittagong</td>
                            <td>Science and Technology</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>80</td>
                            <td>Bangladesh Army University of Science and Technology</td>
                            <td>BAUST</td>
                            <td>2015</td>
                            <td>Saidpur</td>
                            <td>Rangpur</td>
                            <td>Engineering and Technology</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>81</td>
                            <td>The International University of Scholars			</td>
                            <td>TIUS</td>
                            <td>2015</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>82</td>
                            <td>Bangladesh Army University of Engineering &amp; Technology</td>
                            <td>BAUET</td>
                            <td>2015</td>
                            <td>Natore</td>
                            <td>Rajshahi</td>
                            <td>Engineering and Technology</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>83</td>
                            <td>Canadian University of Bangladesh</td>
                            <td>CUST		</td>
                            <td>2015</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>84</td>
                            <td>Bangladesh Army International University of Science &amp; Technology</td>
                            <td>BAIUST</td>
                            <td>2015</td>
                            <td>Comilla</td>
                            <td>Chittagong</td>
                            <td>Science and Technology</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>85</td>
                            <td>NPI University of Bangladesh</td>
                            <td>NPIUB			</td>
                            <td>2015</td>
                            <td>Manikganj</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>86</td>
                            <td>Northern University of Business and Technology Khulna</td>
                            <td>NUB		</td>
                            <td>2010</td>
                            <td>Khulna</td>
                            <td>Khulna</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>87</td>
                            <td>Rabindra Maitree University				</td>
                            <td>RMU			</td>
                            <td>2015</td>
                            <td>Kushtia</td>
                            <td>Khulna </td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>88</td>
                            <td>University of Creative Technology Chittagong</td>
                            <td>UCTC		</td>
                            <td>2015</td>
                            <td>Chittagong</td>
                            <td>Chittagong</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>89</td>
                            <td>Central University of Science and Technology</td>
                            <td>CUST</td>
                            <td>2016</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>Science &amp; Technology</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>90</td>
                            <td>Tagore University of Creative Arts</td>
                            <td>TUCA  </td>
                            <td>2016</td>
                            <td>Uttara</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>91</td>
                            <td>University of Global Village</td>
                            <td>UIGV		</td>
                            <td>2016</td>
                            <td>Barisal</td>
                            <td>Barisal</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>92</td>
                            <td>Rupayan A.K.M Shamsuzzoha University
                                <p>(Academic programs have not yet started)<span className="star">*</span></p>
                            </td>
                            <td>-</td>
                            <td>2016</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>93</td>
                            <td>Anwer Khan Modern University		</td>
                            <td>AKMU</td>
                            <td>2016</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>94</td>
                            <td>Z.N.R.F. University of Management Sciences 		</td>
                            <td>ZUMS</td>
                            <td>2018</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>95</td>
                            <td>Ahsania Mission University of Science and Technology</td>
                            <td>-</td>
                            <td>2018</td>
                            <td>Rajshahi</td>
                            <td>Rajshahi</td>
                            <td>Science and Technology</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>96</td>
                            <td>Khulna Khan Bahadur Ahsanullah University
                                <p>(Academic programs have not yet started)<span className="star">*</span></p>
                            </td>
                            <td>-</td>
                            <td>2018</td>
                            <td>Khulna</td>
                            <td>Khulna</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>97</td>
                            <td>Bandarban   University</td>
                            <td>BU</td>
                            <td>2018</td>
                            <td>Bandarban</td>
                            <td>Chittagong</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>98</td>
                            <td>Shah Makhdum Management University
                                <p>(Academic programs have not yet started)<span className="star">*</span></p>
                            </td>
                            <td>SMMU</td>
                            <td>2018</td>
                            <td>Rajshahi</td>
                            <td>Rajshahi</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>99</td>
                            <td>Trust  University</td>
                            <td>TU</td>
                            <td>2006</td>
                            <td>Barisal</td>
                            <td>Barisal</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>100</td>
                            <td>International Standard University</td>
                            <td>ISU</td>
                            <td>2018</td>
                            <td>Mohakhali</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>101</td>
                            <td>University of Brahmanbaria</td>
                            <td>UB</td>
                            <td />
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>102</td>
                            <td>University of Skill Enrichment &amp; Technology</td>
                            <td>USET</td>
                            <td />
                            <td>Siddhirganj</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>103</td>
                            <td>Microland University of Science and Technology
                                <p>(Academic programs have not yet started)<span className="star">*</span></p>
                            </td>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td>104</td>
                            <td>RTM Al-Kabir Technical University</td>
                            <td>RTM-AKTU</td>
                            <td>2020</td>
                            <td>Sylhet</td>
                            <td>Sylhet</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>105</td>
                            <td>Sheikh Hasina University of Science and Technology</td>
                            <td>-</td>
                            <td>2021</td>
                            <td>Netrokona</td>
                            <td>Mymensingh </td>
                            <td>Science and Technology</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>106</td>
                            <td>The University of Comilla
                                <p>(Academic programs have not yet started)<span className="star">*</span></p>
                            </td>
                            <td>UNIC</td>
                            <td>1995</td>
                            <td>Uttara</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>107</td>
                            <td>IBAIS  University</td>
                            <td>IBAIS</td>
                            <td>2002</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>108</td>
                            <td>Queens  University</td>
                            <td>QU	</td>
                            <td>1996</td>
                            <td>Dhaka</td>
                            <td>Dhaka</td>
                            <td>General</td>
                            <td>No</td>
                        </tr>
                    </tbody></table>
            </div>


            <Footer></Footer>
        </div>

    );
};

export default PrivateList;