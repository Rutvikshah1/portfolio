import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import myimg from "../../assets/images/myimg.jpg";
import classes from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className={classes.aboutPage}>
        <div className={classes.div_block_1}>
          <h1 className={classes.heading_about}>A little bit about myself.</h1>
          <p>
            My name is Rutvik and I'm passionate about improving the lives of
            others through programming. I'm constantly learning new things
            everyday and love meeting people who are motivated and unafraid of
            sharing their ideas with the world.
          </p>

          <p>
            I'm a computer science graduate and have learnt a lot about
            programming through attending workshops, online courses, reading
            blogs and applying these to projects in my spare time and at work. I
            am very much a big-picture thinker and enjoy working on products end
            to end, from ideation all the way to development.
          </p>

          <img src={myimg} />
        </div>

        <div className={classes.div_block_2}>
          <h2>My Values</h2>

          <div>
            <h3>😍 Passion is everything.</h3>
            <p>
              If you don't enjoy what you're doing - move. You are not a tree.
              Channel your energy into something you believe in. I'm fortunate
              to be inspired and surrounded by motivated people who enjoy what
              they do. We only have so much time on this earth to live - so why
              waste it?
            </p>
          </div>

          <div>
            <h3>🤓 Always be learning.</h3>
            <p>
              Humans are constant works in progress that need to receive
              feedback in order to grow. I am always looking at ways to
              challenge and improve myself, which is why in my spare time I like
              to participate in hackathons, read blogs, dabble in new projects
              and attend meetups.
            </p>
          </div>

          <div>
            <h3>🎨 Embrace your creativity.</h3>
            <p>
              Everyone needs a creative outlet of some sort - else, we'd go
              insane! When I'm not designing, I'm singing with the band,
              painting artworks as a form of meditation and helping startups
              realise their potential with design.
            </p>
          </div>

          <div>
            <h3>🙏 Stay humble.</h3>
            <p>
              It doesn't matter whether you're the president, manager, homeless
              or average kid on the street. Treat others with respect as you
              would yourself because ultimately we're all human sharing the same
              wants and needs and facing our own battles everyday. Stay true to
              yourself and stay true to others.
            </p>
          </div>
        </div>

        <div className={classes.div_block_3}>
          <h3>Testimonials</h3>
          <p>
            I've known Gloria now for 8 months and have been genuinely
            impressed. Gloria has joined Sealadder to help build a startup, and
            in that time, she has taken the lead on a number of areas of the
            business and has been a great sounding board. <br />
            <br />
            Never afraid to speak her mind, Gloria has been able to provide a
            unique perspective and a clarity of thought that I've found
            invaluable. But more importantly, she has demonstrated on multiple
            occasions a level of initiative that isn't common amongst her peers,
            organising and taking the lead in meetings with founders and CEOs of
            potential partner companies.
          </p>

          <h4>— Adam Pond, Founder of Sealadder</h4>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
