import React from 'react'

const Header = () => {
    return (
        <>
            <div className="topbar-outer">
                <div className="topbar">
                    <div className="topbar-left">
                        <div>
                        </div>
                    </div>
                    <div className="topbar-right">
                        <ul>
                            <li className="header-hide"><a href="https://www.nielit.gov.in/content/screen-reader-access">Screen Reader Access</a></li>
                            <li className="header-hide header-skip"><a href="#COntentDiv">Skip to main content</a></li>
                            <li className="header-hide"><div className="region region-sidebar-first">
                                <section id="block-styleswitcher-styleswitcher" className="block block-styleswitcher">

                                    <h2 className="block-title">Style Switcher</h2>

                                    <div className="content">
                                        <div className="item-list"><ul><li className="first"><a href="node.html?destination=node" className="style-switcher custom-style style-default active styleswitcher-processed" data-rel="custom/default" rel="nofollow">.....</a></li>
                                            <li className="last"><a href="node.html?destination=node" className="style-switcher custom-style style-theme2 styleswitcher-processed" data-rel="custom/theme2" rel="nofollow">.....</a></li>
                                        </ul></div>  </div>

                                </section>
                            </div>

                            </li>
                            <li className="header-hide aminus"><a href="#" id="decfont"><img alt="font small" src="assets/image/a-minus.png" width="12" height="12" /></a></li>
                            <li className="header-hide anormal"><a href="#" id="normal"><img alt="font normal" src="assets/image/a-normal.png" width="11" height="11" /></a></li>
                            <li className="header-hide aplus"><a href="#" id="incfont"><img alt="font increase" src="assets/image/a-plus.png" /></a></li>
                            <li id="header-hindi">
                                <div className="region region-language-switcher">
                                    <section id="block-locale-language" className="block block-locale">

                                        <h2 className="block-title">Languages</h2>

                                        <div className="content">
                                            <ul className="language-switcher-locale-url"><li className="en first active"><a href="index-2.html" className="language-link active"><img className="language-icon" src="#" width="16" height="12" alt="English" title="English" /> English</a></li>
                                                <li className="hi last"><a href="hi.html" className="language-link"><img className="language-icon" src="#" width="16" height="12" alt="हिन्दी" title="हिन्दी" /> हिन्दी</a></li>
                                            </ul>  </div>

                                    </section>
                                </div>


                            </li>
                            <li id="header-search"><div className="region region-content-search">
                                <section id="block-custom-search-blocks-1" className="block block-custom-search-blocks">

                                    <h2 className="block-title">Custom Search 1</h2>

                                    <div className="content">
                                        <form className="search-form" role="search" action="#" method="post" id="custom-search-blocks-form-1" accept-charset="UTF-8" target="_self"><div><div className="form-item form-type-textfield form-item-custom-search-blocks-form-1">
                                            <label className="element-invisible" for="edit-custom-search-blocks-form-1--2">Search this site </label>
                                            <input title="Enter the terms you wish to search for." className="custom-search-box form-text" placeholder="" type="text" id="edit-custom-search-blocks-form-1--2" name="custom_search_blocks_form_1" value="" size="15" maxlength="128" />
                                        </div>
                                           
                                           
                                            <div className="form-actions form-wrapper" id="edit-actions"><input type="submit" id="edit-submit" name="op" value="Search" className="form-submit" /></div>
                                        </div></form>
                                    </div>

                                </section>
                            </div>

                            </li>
                        </ul>

                    </div>

                    <div className="clear"></div>
                </div>

            </div>

            <div className="header-outer">

                <div className="header">
                    <div className="header-left">
                        <div className="header-left-logo"><a href="https://www.nielit.gov.in/"><img alt="NIELIT Logo" src="assets/image/logo.png" /></a></div>
                        <div className="header-left-text">
                            <p className="hindi">राष्ट्रीय इलेक्ट्रॉनिकी एवं सूचना प्रौद्योगिकी संस्थान
                                <span style={{ "marginLeft": "7px" }}>,</span><span style={{ "marginLeft": "3px" }}>बक्सर</span> </p>
                            <p>National Institute of Electronics &amp; Information Technology<span style={{ "marginLeft": "0px" }}></span> <span style={{ "marginLeft": "5px" }}>Buxar</span></p>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="header-right">
                        <div className="emblem" style={{ "marginBottom": "5px" }}>
                            <div id="english">

                                <div id="headerrighttext">Ministry of Electronics &amp; Information Technology</div>
                                <div id="headerrighttext1">Government of India</div>
                            </div>
                            <div id="rightlogo"><img alt="Emblem of india" src="assets/image/Emblem_of_India1.png" /></div>

                            <div className="clear"></div>

                        </div>

                        <div className="clear"></div>
                    </div>

                    <div className="clear"></div>
                </div>
            </div>
        
        </>
    )
}

export default Header