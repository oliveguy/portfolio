import video from './assets/video.mp4';
import logo_bw from './assets/logo_bw.png';
import logo_cl from './assets/logo_cl.png';
import profile_pic from './assets/sh.jpg';
import './App.scss';
// COMPONENTS
function Navigation(){
  return <nav className='navigation'>
  <ul>
    <li className='title'>
      <a href="/" className='title'>
        <img src={logo_bw} className="logoImg"></img><span>Sunghyun Park</span>
      </a>
    </li>
    <li><a href="about">About</a></li>
    <li><a href="skills">Technologies</a></li>
    <li><a href="projects">Projects</a></li>
    <li><a href="resume">Resum&#233;</a></li>
  </ul>
</nav>
} 
function Topsection(){
  return <div className='topSection'>
  <div className='videoWrapper'>
    <video src={video} autoPlay loop playsInline muted={true} className='videoTop'></video>
  </div>
  <div className='topText'>
    <img src={logo_cl}></img>
    <h1>Sunghyun Park</h1>
    <h2>I am a front-end developer</h2>
    <h2>who enjoys beating challenging problems</h2>
    <a className='button'>
      <span>Contact &#x3e;</span>
    </a>
  </div>
</div>
}
function About(){
  return <div id='about'>
  <article className='aboutArea'>
    <img src={profile_pic}></img>
    <div className='aboutText'>
      <h2>Hello! I am Sunghyun Park,<br/> also called Collin!</h2>
      <p>As a <b>web developer and UI/UX designer</b>, I am an upstander to solve a challenging problem, which brings unique value to the user experience via web application.</p>
      <p>Starting from my diploma in <b>NMPD</b> {'('}New Media Production & Design{')'} from Southern Alberta Institute of Technology in Calgary, I have been improving both my web development and UI/UX skills.</p>
      <p>I am a dedicated team player and open-minded toward learning new technologies from anyone as an active learner. Exploring new knowledge of development makes my heart quicken.</p>
    </div>
  </article>
</div>
}
// THE APP
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Topsection></Topsection>
      <About></About>
      <div id="technologies">
        <div className='techWrapper'>
          <h2>Technologies</h2>
          <p>that I've been manily working with </p>
        </div>
        <section>
          <article>
            <h3>Front-end</h3>
          </article>
          <article>
            <h3>Back-end</h3>
          </article>
          <article>
            <h3>Design</h3>
          </article>
        </section>
      </div>
    </div>
  );
}

export default App;
