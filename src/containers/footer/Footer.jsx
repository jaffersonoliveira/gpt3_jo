import React from 'react';
import './footer.css';
import logo from '../../assets/logo.svg'

const linksData = [
  {
    heading: "Links",
    links: ["Overons", "Social Media", "Counters", "Contact"]
  },
  {
    heading: "Company",
    links: ["Terms & Conditions", "Privacy Policy", "Contact"]
  },
  {
    heading: "Get in touch",
    links: ["Crechterwoord K12 182 DK Alknjkcb", "085-132567", "info@payme.net"]
  }
]

const Links = ({heading, links}) => (
  <div className="gpt3__footer-links-div">
    <h4>{heading}</h4>
    {links.map(link=><p>{link}</p>)}
  </div>
)

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt3__footer-heading">
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links-logo">
            <img src={logo} alt="logo" />
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        {linksData.map(item=><Links {...item} />)}
      </div>
      <div className="gpt3__footer-copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer;