import React from 'react'
import { Link } from 'gatsby'


const Footer = (props) => (
    <footer id="footer">
        <section id="contact">
            <h2>Get In Touch</h2>
            <p>Send me an email or connect with me via social media. References and additional work samples are also available by request</p>
        </section>
        <section>
            <h2>My Contact Info</h2>
            <dl className="alt">
                <dt>Location</dt>
                <dd>Chicago, Illinois, USA</dd>
                <dt>Email</dt>
                <dd><a href="#">dnd912@gmail.com</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="https://www.linkedin.com/in/dandiaczun/" target="_blank" className="icon fa-linkedin alt"><span className="label">LinkedIn</span></a></li>
                <li><a href="https://github.com/dandiaczun" target="_blank" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
                <li><a href="https://www.instagram.com/dandiaczun/" target="_blank" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; Dan Diaczun 2019 | Built with <a href="https://www.gatsbyjs.org/">Gatsby</a> </p>
    </footer>
)

export default Footer
