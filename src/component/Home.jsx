import React from 'react'
import "../App.css";
import Slider from './Slider'



const Home = () => {
  return (
    <>
      <Slider />
      <div className="container clearfix">
        <div className="full">

        </div>
        <div className="clear"></div>

        <div className="content-outer" id="COntentDiv">

          <div className="content">

            <div className="left-item-lf">

              <div className="latestnewstitle">Latest News</div>



              <div id="nt-example1-container">
                <div className="arrow-box">
                  <img id="play-puse-news" className="stop-button-pause" data-state="play" src="https://nielit.gov.in/sites/all/themes/berry/images/pause.gif" />
                 
                </div>



                <ul id="nt-example1" style={{ "paddingLeft": "0px", "height": "130px", "overflow": "hidden" }}>




                  <li style={{ "marginTop": "-41.0437px" }}><p><a title="Advertisement for admission in various NSQF Aligned Short Term, Long Term &amp; Industrial/Internship Courses" href="/sites/default/files/headquarter/Course_adv10022023.png" style={{ "borderBottom": "none" }}>
                    Advertisement for admission in various NSQF Aligned Short Term, Long Term &amp; Industrial/Internship Courses.</a></p></li></ul>
                <div style={{ "height": "30px" }}><span className="latest-news-span"><a href="latest_news">View More</a></span></div>
              </div>


              <div className="focus-panel">

                <div className="tab-panel">

                  <div className="tabs example-a js-tabs"><p className="js-tabs_control-text">Use the tab and enter or arrow keys to move between tabs</p><ul className="js-tabs_control" role="tablist"><li role="presentation" className="js-tabs_control-item--active"><button aria-selected="true" data-controls="js-tabs_panel--00" id="js-tabs_control-item--00" role="tab">News</button></li><li role="presentation"><button aria-selected="false" data-controls="js-tabs_panel--01" id="js-tabs_control-item--01" role="tab">What's New</button></li></ul>




                    <h3 style={{ "display": "none" }}>News</h3>
                    <div style={{ "paddingTop": "15px", "display": "block" }} className="js-tabs_panel" aria-hidden="false" aria-labelledby="js-tabs_control-item--00" id="js-tabs_panel--00" role="tabpanel">


                      <div className="bottom-panel-box">

                        <div className="bottom-panel-box-pic"><img alt="News" src="https://nielit.gov.in/sites/default/files/academic-news_0.jpg" /></div>

                        <div className="bottom-panel-box-content">

                          <h2> Academic News</h2>
                          <ul style={{ "paddingLeft": "20px" }}>
                            <li><a href="#">Guidelines for establishment of Examination Centres for the conduct of the online examination</a></li>
                          </ul>
                          <a href="academic_news_1" className="readmorelinknews">View More</a>
                        </div>

                        <div className="clear"></div>
                      </div>


                      <div className="bottom-panel-box">

                        <div className="bottom-panel-box-pic"><img alt="News" src="https://nielit.gov.in/sites/default/files/nielit-news.jpg" /></div>

                        <div className="bottom-panel-box-content">

                          <h2>NIELIT News</h2>
                          <ul style={{ "paddingLeft": "20px" }}>
                            <li><a href="#">Inauguration of the five day training program on digital Marketing for ‘Warli’ Artists, M</a></li>
                          </ul>
                          <a href="nielit-news" className="readmorelinknews">View More</a>
                        </div>

                        <div className="clear"></div>
                      </div>


                      <div className="bottom-panel-box">

                        <div className="bottom-panel-box-pic"><img alt="News" src="https://nielit.gov.in/sites/default/files/press.jpg" /></div>

                        <div className="bottom-panel-box-content">

                          <h2>NIELIT in Press</h2>
                          <ul style={{ "paddingLeft": "20px" }}>
                            <li><a href="#">Var India : 24th September, 2015 HUDCO and NIELIT savour the Digitization Dream</a></li>
                          </ul>
                          <a href="nielit-press" className="readmorelinknews">View More</a>
                        </div>

                        <div className="clear"></div>
                      </div>

                    </div>
                    <h3 style={{ "display": "none" }}>What's New</h3>
                    <div className="js-tabs_panel" aria-hidden="true" aria-labelledby="js-tabs_control-item--01" id="js-tabs_panel--01" role="tabpanel" style={{ "display": "none" }}>
                      <div className="whatsnew">
                        <ul>

                          <li><p><a href="/sites/default/files/headquarter/Course_adv10022023.png" title="Course Adv">Advertisement for admission in various NSQF Aligned Short Term, Long Term &amp; Industrial/Internship Courses</a></p>
                          </li>


                        </ul>

                        <p><a href="latest_news" style={{ "fontWeight": "bold" }}>View More</a></p>

                      </div>
                    </div>

                  </div>


                </div>

                <div className="clear"></div>
              </div>
            </div>

            <div className="right-item-rf">
              <div className="events-panel">
                <div id="multilines">
                  <div style={{ "float": "right", "width": "100px", "marginTop": "5px", "height": "30px" }}>
                    <div style={{ "textAlign": "right", "marginRight": "15px" }}>
                      <div id="img1">
                        <a className="stop-button" onclick="return display_con(1);">
                          <img alt="pause" src="https://nielit.gov.in/sites/all/themes/berry/images/pause.gif" /></a></div>
                      <div id="img2" style={{ "display": "none" }}>
                        <a onclick="display_con(2);" className="start-button"><img alt="play" src="https://nielit.gov.in/sites/all/themes/berry/images/play.gif" />
                        </a></div>
                    </div>
                  </div>
                  <h1 style={{ "marginTop": "10px" }}>Latest Events</h1>
                  <div className="container">
                    <ul className="newsticker" style={{ "height": "530px", "overflow": "hidden" }}>
                    </ul>
                  </div>
                </div>

                <div>
                  <span className="latest-news-span" style={{ "float": "right", "marginTop": "25px", "paddingRight": "26px" }}>
                    <a href="nielit-news">View More: NIELIT News</a>
                  </span>
                </div>

              </div>


            </div>
            <div className="clear"></div>


            <div className="panels">

              <div className="clear"></div>
            </div>
          </div>
        </div>
        <div className="clear"></div>
      </div>
    </>





  )
}

export default Home
