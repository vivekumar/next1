import Image from 'next/image'

export default function Team() {
  return (
    <div className="edu-team-area team-area-1 gap-tb-text">
      <div className="container">
        <div className="section-title section-center" data-sal-delay="150" data-sal-duration="800">
          <span className="pre-title">Instructors</span>
          <h2 className="title">Course Instructors</h2>
          <span className="shape-line"><i className="icon-19"></i></span>
        </div>
        <div className="row g-5">

          <div className="col-lg-3 col-sm-6 col-12" data-sal-delay="50" data-sal-duration="800">
            <div className="edu-team-grid team-style-1">
              <div className="inner">
                <div className="thumbnail-wrap">
                  <div className="thumbnail">
                    <a href="team-details.html">
                      <Image src="/assets/images/team/team-01.webp" alt="team images" width={270} height={320} />
                    </a>
                  </div>
                  <ul className="team-share-info">
                    <li><a href="#"><i className="icon-share-alt"></i></a></li>
                    <li><a href="#"><i className="icon-facebook"></i></a></li>
                    <li><a href="#"><i className="icon-twitter"></i></a></li>
                    <li><a href="#"><i className="icon-linkedin2"></i></a></li>
                  </ul>
                </div>
                <div className="content">
                  <h5 className="title"><a href="team-details.html">Jane Seymour</a></h5>
                  <span className="designation">UI Designer</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-12" data-sal-delay="100" data-sal-duration="800">
            <div className="edu-team-grid team-style-1">
              <div className="inner">
                <div className="thumbnail-wrap">
                  <div className="thumbnail">
                    <a href="team-details.html">
                      <Image src="/assets/images/team/team-02.webp" alt="team images" width={270} height={320} />
                    </a>
                  </div>
                  <ul className="team-share-info">
                    <li><a href="#"><i className="icon-share-alt"></i></a></li>
                    <li><a href="#"><i className="icon-facebook"></i></a></li>
                    <li><a href="#"><i className="icon-twitter"></i></a></li>
                    <li><a href="#"><i className="icon-linkedin2"></i></a></li>
                  </ul>
                </div>
                <div className="content">
                  <h5 className="title"><a href="team-details.html">Edward Norton</a></h5>
                  <span className="designation">Web Developer</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-12" data-sal-delay="150" data-sal-duration="800">
            <div className="edu-team-grid team-style-1">
              <div className="inner">
                <div className="thumbnail-wrap">
                  <div className="thumbnail">
                    <a href="team-details.html">
                      <Image src="/assets/images/team/team-03.webp" alt="team images" width={270} height={320} />
                    </a>
                  </div>
                  <ul className="team-share-info">
                    <li><a href="#"><i className="icon-share-alt"></i></a></li>
                    <li><a href="#"><i className="icon-facebook"></i></a></li>
                    <li><a href="#"><i className="icon-twitter"></i></a></li>
                    <li><a href="#"><i className="icon-linkedin2"></i></a></li>
                  </ul>
                </div>
                <div className="content">
                  <h5 className="title"><a href="team-details.html">Penelope Cruz</a></h5>
                  <span className="designation">Digital Marketer</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-12" data-sal-delay="200" data-sal-duration="800">
            <div className="edu-team-grid team-style-1">
              <div className="inner">
                <div className="thumbnail-wrap">
                  <div className="thumbnail">
                    <a href="team-details.html">
                      <Image src="/assets/images/team/team-04.webp" alt="team images" width={270} height={320} />
                    </a>
                  </div>
                  <ul className="team-share-info">
                    <li><a href="#"><i className="icon-share-alt"></i></a></li>
                    <li><a href="#"><i className="icon-facebook"></i></a></li>
                    <li><a href="#"><i className="icon-twitter"></i></a></li>
                    <li><a href="#"><i className="icon-linkedin2"></i></a></li>
                  </ul>
                </div>
                <div className="content">
                  <h5 className="title"><a href="team-details.html">John Travolta</a></h5>
                  <span className="designation">WordPress Expert</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
