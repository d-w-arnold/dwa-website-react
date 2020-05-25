import React, {Fragment} from "react";

function Home() {
    let uni_of_kent = 'https://www.kent.ac.uk/';
    let kent_golf = 'https://www.kentgolf.org/';
    let euro_pro = 'http://www.europrotour.com/';
    return (
        <Fragment>
            <div className="body">
                <p className="title">Welcome!</p>
                <div className="writing roboto">
                    <p>Hello there, I’m a computer science graduate (graduating June 2020 - available for employment
                        25th May, predicted grade: 1st) from the <a className="link-color" target="_blank"
                                                                    href={uni_of_kent}>University of
                            Kent</a>. I’m eager to learn new skills and
                        take on a role where I can contribute to solving real-world challenges. I am highly motivated,
                        organised, reliable and work well both independently and as part of a team.</p>
                </div>
                <div className="spacingWithoutLine"/>
                <p className="title">About Me</p>
                <div className="writing roboto">
                    <p>Before I became a computer scientist, I was a golfer. Growing up my grandfather lived near a golf
                        club and bought me my first set of golf clubs for my 7th birthday. By the age of 19, I had
                        brought my golfing handicap down from 28 to -1. Over the years I represented <a
                            className="link-color" target="_blank"
                            href={kent_golf}>Kent County
                            Golf Union</a> in various fixtures for their various teams: Kent Under 13's, Under 14's,
                        Under 16's
                        (Captain), Under 18's.</p>
                    <br/>
                    <p>In January 2016, I relinquished my amateur status and turned professional (aged 19) joining
                        the <a
                            className="link-color" target="_blank" href={euro_pro}>EuroPro UK Golf
                            Tour</a> for
                        the 2016 season. In August 2016, I hung up my golf clubs to turn my attention to undergraduate
                        study in
                        Computer Science at the <a className="link-color" target="_blank"
                                                   href={uni_of_kent}>University of
                            Kent</a>. Golf remains a passion of mine, and will remain a lifetime hobby.</p>
                    <br/>
                    <p>Motorsport is a strong passion of mine. I have a broad knowledge of various disciplines of
                        motor racing, and
                        I enjoy learning of new technological developments to make cars faster, safer and more
                        efficient at speed. I
                        enjoy the thrill of driving on track, having invested in multiple track day sessions with
                        tuition from
                        professional racing drivers to better my skill set.</p>
                    <br/>
                    <p>Running used to be a big part of my regular training routine for golf. When I can I find
                        it helps take things
                        off ones mind and keep the body healthy. I participated in a half marathon in September
                        2016 and hope to do
                        more half and full marathons in the future. I especially enjoy long runs along the
                        coast.</p>
                </div>
            </div>
        </Fragment>
    );
}

export default Home;
