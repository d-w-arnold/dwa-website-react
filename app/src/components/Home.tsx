import React from "react";

function Home() {
    let cadwell_park = 'https://youtu.be/fjoZ0XNwjz8';
    let euro_pro = 'https://www.europrotour.com/';
    let istj = 'https://www.16personalities.com/istj-personality';
    let jun_open_2011 = 'https://www.howdidido.com/Directory/Result?sectionId=4658&compNumber=663';
    let kent_am_champ_2014 = 'https://www.kentgolf.org/competition.php?compid=441';
    let kent_am_champ_2015 = 'https://www.kentgolf.org/viewround.php?roundid=18996';
    let kent_golf = 'https://www.kentgolf.org/';
    let lake_district = 'https://www.visitlakedistrict.com/';
    let mal = 'https://myanimelist.net/profile/dw_arnie';
    let research_project = '/research/Quantum_Cryptography-Security_for_the_Post-Quantum_world.pdf';
    let uni_of_kent = 'https://www.kent.ac.uk/';
    return (
        <React.Fragment>
            <div className="body">
                <p className="title">Welcome!</p>
                <div className="writing roboto">
                    <p>I'm a Software Engineer (specialty: AWS Cloud Engineer), and a First-Class Honours Computer Science graduate from the <a className="link-color" target="_blank" rel="noopener noreferrer" href={uni_of_kent}>University of Kent</a>.</p>
                </div>
                <div className="spacing4"/>
                <p className="title">About Me</p>
                <div className="writing roboto">
                    <p>My personality type is: <a className="link-color" target="_blank" rel="noopener noreferrer" href={istj}>Logistician (ISTJ)</a></p>
                    <div className="spacing2"/>
                    <p>Hiking in the <a className="link-color" target="_blank" rel="noopener noreferrer" href={lake_district}>Lake District</a>, climbing peaks to take in the views, with the occasional swim in fresh water lakes/tarns/rivers, is an annual summer event I simply live for.</p>
                    <div className="spacing2"/>
                    <p>I enjoy cooking fresh meals, with local ingredients, and I'm always trying to learn new recipes!</p>
                    <div className="spacing2"/>
                    <p>Motorsport is a strong passion of mine. Having done multiple <a className="link-color" target="_blank" rel="noopener noreferrer" href={cadwell_park}>Track Day</a> sessions, with occasional tuition from professional racing drivers, I relish the opportunity to better my skills behind the wheel.</p>
                    <div className="spacing2"/>
                    <p>I'm currently learning Japanese - 読んでいただきありがとうございます！</p>
                    <div className="spacing2"/>
                    <p>Also, you'll find me regularly updating my Japanese <a className="link-color" target="_blank" rel="noopener noreferrer" href={mal}>Watch and Reading Lists</a>.</p>
                </div>
                <div className="spacing4"/>
                <p className="title">My Dissertation (Undergraduate)</p>
                <div className="writing roboto">
                    <p><span className="iconPaper" aria-hidden="true"/>Research Project - <a className="link-color" target="_blank" rel="noopener noreferrer" href={research_project}>"Quantum Cryptography: Security for the Post-Quantum world"</a></p>
                    <div className="spacing2"/>
                    <p>This research project set out to survey the field of Quantum Cryptography, providing a basic insight into various aspects of Quantum Cryptography - all of which could be very important regarding our online security in the future! Aimed at people in industry concerned with security.</p>
                </div>
                <div className="spacing4"/>
                <p className="title">Early Life</p>
                <div className="writing roboto">
                    <p>Before I was a Software Engineer, I trained as a professional golfer.</p>
                    <div className="spacing2"/>
                    <p>My grandfather bought me my first golf clubs for my 7th birthday. Over the years I represented <a className="link-color" target="_blank" rel="noopener noreferrer" href={kent_golf}>Kent County Golf Union (KCGU)</a> in various teams: Kent Under 13's, Under 14's, Under 16's (Captain), Under 18's.</p>
                    <div className="spacing2"/>
                    <p>Aged 15, I scored 68 to win the <a className="link-color" target="_blank" rel="noopener noreferrer" href={jun_open_2011}>Littlestone Junior Open 2011</a>.</p>
                    <div className="spacing2"/>
                    <p>My best (72 hole, 2 days) finish was top 10 in the <a className="link-color" target="_blank" rel="noopener noreferrer" href={kent_am_champ_2014}>Kent Amateur Championship 2014</a>.</p>
                    <div className="spacing2"/>
                    <p>One of my latest best rounds of golf was in the <a className="link-color" target="_blank" rel="noopener noreferrer" href={kent_am_champ_2015}>Kent Amateur Championship 2015</a>.</p>
                    <div className="spacing2"/>
                    <p>Aged 19 with a handicap of [-1], I relinquished my amateur status and turned professional, participating on the <a className="link-color" target="_blank" rel="noopener noreferrer" href={euro_pro}>EuroPro UK Golf Tour</a>.</p>
                    <div className="spacing2"/>
                    <p>In late 2016, I hung up my golf clubs to study Computer Science. Golf remains a passion of mine, and will remain a lifetime hobby.</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;
