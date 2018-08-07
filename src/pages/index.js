import React from 'react';
import Link from 'gatsby-link';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import hero from '../images/cascadiajs-background.png';
import MailChimpForm from '../components/mailChimpForm';
import PropTypes from 'prop-types';
import Organizers from '../components/organizers';
import './index.css';

function IndexPage ({data}) {
  return (
    <div>
      <img
        id="hero"
        alt="CascadiaJS 2018, November 15 & 16, Seattle, Washington"
        src={hero}
      />
      <br />
      <div id="content">
        <section id="tagline">
          <p>CascadiaJS 2018 is a conference for web developers by web developers.</p>
        </section>
        <section id="speakers">
          <p>
           Our speakers will explore the Latest
            developments in the web platform including: <span>PWAs</span>, <span>Accessibility</span>, <span>Security</span>, <span>Decentralization</span> and <span>AR/VR/XR</span>.
          </p>
          <p>We will also explore adjacent topics that are important to our community such as: <span>Healthy and Inclusive Teams</span>, <span>Hardware Hacking</span>, <span>Developer Ethics</span>, <span>Tooling</span>, <span>Serverless</span>.
          </p>
        </section>
        <section id="code-of-conduct">
          <h2>Code of Conduct</h2>
          <p>In order to provide a safe and inclusive environment we expect, and require, all organizers, sponsors, speakers, volunteers, and attendees of all levels to adhere to our <Link to="/code-of-conduct">Code of Conduct</Link>.
          </p>
        </section>
        <section id="venue">
          <h2>Venue</h2>
          <p>Amazon Meeting Center - 2031 7th Ave, Seattle, WA 98121</p>
          <img src="/seattle-map.jpg" alt="map of Seattle and location of Amazon Meeting Center"/>
        </section>
        <section id="tickets">
          <h2>Tickets are on SALE</h2>
          <p>
            <a className="cta" href="https://ti.to/event-loop/cascadiajs-2018" title="Tickets On Sale!">Purchase Tickets</a>
            <Link className="cta" to="/scholarships">Get a Scholarship</Link>
          </p>
        </section>
        <section id="lodging">
          <h2>Lodging</h2>
          <div id="hotels">
            <div>
              <h3>Moxy Seattle</h3>
              <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={50} totalSlides={4}>
                <Slider>
                  <Slide><img src="/moxy-exterior.jpg" alt="exterior of Moxy Seattle hotel"/></Slide>
                  <Slide><img src="/moxy-guestroom.jpg" alt="guest room of Moxy Seattle hotel"/></Slide>
                  <Slide><img src="/moxy-lobby.jpg" alt="lobby of Moxy Seattle hotel"/></Slide>
                  <Slide><img src="/moxy-bar.jpg" alt="bar of Moxy Seattle hotel"/></Slide>
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
              </CarouselProvider>
              <p>Moxy is a boutique hotel with the social heart of a hostel. The WiFi is speedy and the cushy beds are freshly made, but more importantly, the bar is always open and the crew is always on. Just up Westlake Ave from the Amazon Meeting Center (0.6 miles).</p>
              <ul>
                <li>$159 / night</li>
                <li><a href="http://moxyseattle.com/">More Information</a></li>
              </ul>
            </div>
            <div >
              <h3>The Thompson</h3>
              <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={50} totalSlides={4}>
                <Slider>
                  <Slide><img src="/thompson-exterior.jpg" alt="exterior of The Thompson hotel"/></Slide>
                  <Slide><img src="/thompson-room.jpg" alt="guest room of The Thompson hotel"/></Slide>
                  <Slide><img src="/thompson-roof.jpg" alt="roof top of The Thompson hotel"/></Slide>
                  <Slide><img src="/thompson-bar.jpg" alt="bar of The Thompson hotel"/></Slide>
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
              </CarouselProvider>
              <p>The Thompson is a boutique hotel located next to the waterfront and reflects the intrinsic beauty of Seattle. Highlights include their signature restaurant, Scout PNW, and rooftop bar, The Nest. Just southwest of the Amazon Meeting Center (0.5 miles).</p>
              <ul>
                <li>$199 / night</li>
                <li><a href="https://www.thompsonhotels.com/hotels/washington/seattle/thompson-seattle">More Information</a></li>
              </ul>
            </div>
          </div>
          <p>The deadline to book is <strong>September 13, 2018</strong>.</p>
        </section>
        <section id="organizers">
          <h2>Organizers</h2>
          <Organizers data={data}/>
        </section>
        <section id="sponsors">
          <h2>We <span role="img" aria-label="heart">❤️</span> Our Sponsors</h2>
          <p><a href="https://developer.amazon.com/"><img src="/amazon-logo.jpg" alt="Amazon logo"/></a></p>
          <p>
            <Link className="cta" to="/call-for-sponsors">Be a Sponsor <span role="img" aria-label="high five!">🙌</span></Link>
          </p>
        </section>
        <section id="contact">
          <h2>Keep in Touch</h2>
          <MailChimpForm />
        </section>
      </div>
    </div>
  );
}

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.object
};

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata{
        organizers {
          name
          avatar
          role
          twitter
        }
      }
    }
  }
`;
