import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
          Hello! My name is Tobi Alade and I am computer science major at Cornell University.
          My main interests are artificial intelligence, software development, and Robotics.
          Here you can access my <a href="https://www.linkedin.com/in/tobi-alade/">linkldin </a> 
          and my <a href="https://www.overleaf.com/read/gbtrcvpgqxck">resume </a>
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Experience</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
          This summer I will be joining Nvidia
          for an immersion software engineering internship with the robotics platform team.
          </p>
          <p>
          I am on the data engineering subteam for the Cornell Data Science team as well as 
          a board member for the Cornell chapter of the National Society of Black Engineers.
          </p>
          <p>
          In the summer of 2020, I joined google for their Computer Science Summer 
          Institute program where we used Javascript to create 
          and present involved projects.
          </p>
  
          <p>
          In terms of technologies and languages I have experience with 
          Python, JavaScript, HTML/CSS, C#, Java, ASP.net, Django, Node.JS,
          MongoDB, Git, AutoDesk software, and 3D printing.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            CornellGo!:
          <ul>
            <li>Cross-platform progressive web app giving new students a virtual tour of the campus through a scavenger hunt </li>
            <li>Finalist project in HackOurCampus and qualifier for Propel, a Cornell campus incubator </li>
          </ul>
          </p>
          <p>
            SearchBarNotes:
          <ul>
            <li>Chrome extension that enhances the user experience by allowing the user to search with the searchbar </li>
          </ul>
          </p>
          <p>
            SafeShopping:
          <ul>
            <li>Webapp that shows stores near you that are crowded in order to stay safe during COVID </li>
          </ul>
          </p>
          <p>
            NoGame:
            <ul>
            <li>Windows Presentation Format application that recognizes when users are online by contacting the game API andonly prevents game access afterwards </li>
          </ul> 
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://github.com/AbioticFactor"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
