import React from 'react'
import { CiFacebook } from "react-icons/ci";

const Footer = () => {
    return (
        <>
            <div className="bottom">




                <div className="bottom-area">

                    <div className="bottom-box">
                        <h1>Website Policies</h1>
                        <ul>
                            <li><a href="https://www.nielit.gov.in/calicut/content/covid-compliance"> COVID Compliance</a></li>
                            <li><a href="https://www.nielit.gov.in/node/3562">Disclaimer</a></li>
                            <li><a href="https://www.nielit.gov.in/sitemap_nielit">Sitemap</a></li>
                            <li><a href="https://www.nielit.gov.in/node/3563">Privacy Policy</a></li>
                            <li><a href="https://www.nielit.gov.in/citizen-charter">Citizen Charter</a></li>
                            <li><a href="https://www.nielit.gov.in/content/policies-and-guidelines">Website Policies
                            </a></li>
                            <li><a href="https://www.nielit.gov.in/node/3561">Terms and Conditions</a></li>
                            <li><a href="https://www.nielit.gov.in/content/help-4">Help</a></li>
                        </ul>
                    </div>


                    <div className="bottom-box-right">
                        <p>NIELIT Extension Centre Buxar,<br />
                            ITI Campus<br />
                            Near DRCC Office<br />
                            Buxar-802101, Bihar.<br />
                            E-mail:&nbsp;ec-buxar@nielit.gov.in<br />
                            Mobile: +91-8986020610</p>

                        <div className="clear"></div>

                        <div id="navcontainer">


                        </div>
                        <div>
                            <a href="https://india.gov.in/" target="_blank" onclick="return confirm('This link will take you to an external web site.')">
                                <img alt="indian gov" src="../assets/image/india-gov-logo.jpg" /></a>&nbsp;&nbsp;<a href="https://www.mygov.in/" target="_blank" onclick="return confirm('This link will take you to an external web site.')"><img alt="my gov" src="../assets/image/mygov.jpg" /></a>&nbsp;&nbsp;<a href="http://meity.gov.in/" target="_blank" onclick="return confirm('This link will take you to an external web site.')">
                                <img alt="meity" src="../assets/image/deity.jpg" /></a>
                            <a href="https://www.nielit.gov.in/sites/default/files/headquarter/160808_GIGW_Certificate.pdf" target="_blank">
                                <img style={{ "height": "37px", "marginLeft": "5px" }} alt="cqw" src="../assets/image/cqw_logo.gif" /></a>
                        </div>



                    </div>
                    <div className="footer">
                        <div className=' conatiner'>

                            <h4>follow us</h4>
                            <div className="social-links ">
                                <ul>
                                    <li><a href='#'><i className="fa fa-facebook"></i></a></li>
                                    <li><a href='#'><i className="fa fa-twitter"></i></a></li>
                                    <li><a href='#'><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href='#'><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="footer-outer">

                    <div className="footer">
                        <div className="footer-visitor"><strong>Visitors:</strong>150121171 </div>
                        <div className="footer-copyright">Copyright © NIELIT. All Rights Reserved.</div>
                        <div className="footer-modified"></div>
                    </div>

                </div>


                <div>

                </div>

            </div>

        </>
    )
}

export default Footer
