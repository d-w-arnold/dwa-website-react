import React from "react";

function Home() {
    let uni_of_kent = 'https://www.kent.ac.uk/';
    let research_project = '/research/Quantum_Cryptography-Security_for_the_Post-Quantum_world.pdf';
    let kent_golf = 'https://www.kentgolf.org/';
    let euro_pro = 'https://www.europrotour.com/';
    return (
        <React.Fragment>
            <div className="body">
                <p className="title">Welcome!</p>
                <div className="writing roboto">
                    <p>I’m a software engineer and computer science graduate with a first-class honours degree from
                        the <a className="link-color" target="_blank" rel="noopener noreferrer" href={uni_of_kent}>University
                            of Kent</a>. I’m eager to learn new skills and take on roles where I can contribute to
                        real-world projects. I am highly motivated, organised, reliable and work well both independently
                        and as part of a team.</p>
                </div>
                <div className="spacing4"/>
                <p className="title">Quantum Cryptography: Security for the Post-Quantum world</p>
                <div className="writing roboto">
                    <p>During my final year as a university undergraduate, I undertook a research project titled <a
                        className="link-color" target="_blank" rel="noopener noreferrer" href={research_project}>"Quantum
                        Cryptography: Security for the Post-Quantum world"</a>. This project set out to survey the field
                        of quantum cryptography, providing a basic insight into various aspects of quantum cryptography
                        - all of which could be very important regarding our online security in the future! Aimed at
                        computer scientists and people in industry concerned with security.</p>
                </div>
                <div className="spacing4"/>
                <p className="title">About Me</p>
                <div className="writing roboto">
                    <p>Before I became a computer scientist, I was a golfer. Growing up my grandfather lived near a golf
                        club and bought me my first set of golf clubs for my 7th birthday. By the age of 19, I had
                        brought my golfing handicap down from 28 to -1. Over the years I represented <a
                            className="link-color" target="_blank" rel="noopener noreferrer" href={kent_golf}>Kent
                            County Golf Union</a> in various fixtures for their various teams: Kent Under 13's, Under
                        14's, Under 16's (Captain), Under 18's.</p>
                    <div className="spacing2"/>
                    <p>In January 2016, I relinquished my amateur status and turned professional (aged 19) joining
                        the <a className="link-color" target="_blank" rel="noopener noreferrer" href={euro_pro}>EuroPro
                            UK Golf Tour</a> for the 2016 season. In August 2016, I hung up my golf clubs to turn my
                        attention to undergraduate study in Computer Science at the <a className="link-color"
                                                                                       target="_blank"
                                                                                       rel="noopener noreferrer"
                                                                                       href={uni_of_kent}>University of
                            Kent</a>. Golf remains a passion of mine, and will remain a lifetime hobby.</p>
                    <div className="spacing2"/>
                    <p>Motorsport is a strong passion of mine. I have a broad knowledge of various disciplines of motor
                        racing, and I enjoy learning of new technological developments to make cars faster, safer and
                        more efficient at speed. I enjoy the thrill of driving on track, having invested in multiple
                        track day sessions with tuition from professional racing drivers to better my skill set.</p>
                    <div className="spacing2"/>
                    <p>Running used to be a big part of my regular training routine for golf. When I can I find it helps
                        take things off ones mind and keep the body healthy. I participated in a half marathon in
                        September 2016 and hope to do more half and full marathons in the future. I especially enjoy
                        long runs along the coast.</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;
