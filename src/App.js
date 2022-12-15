import video from './assets/video.mp4';
import logo_bw from './assets/logo_bw.png';
import logo_cl from './assets/logo_cl.png';
import profile_pic from './assets/sh.jpg';
import chain_gr from './assets/chain-gr-20.png';
import giticon from './assets/giticon.png';

import sass from './assets/sass.png';
import javascript from './assets/javascript.png';
import react from './assets/react.png';
import nodeexpress from './assets/nodeexpress.png';
import mongodb from './assets/mongodb.png';

import tremolo from './assets/tremolo.jpg';

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
    <li><a href="#about">About</a></li>
    <li><a href="#technologies">Technologies</a></li>
    <li><a href="#projects">Projects</a></li>
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
    <a className='button' href="mailto:oliveguy85@gmail.com">
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
function Technologies(){
  return <div id="technologies">
  <div className='techWrapper'>
    <h2 className='h2Title'>Technologies</h2>
    <p>that I've been manily working with recently</p>
    <ul className='techStack'>
      <li><img className="techIcons" src={sass}></img></li>
      <li><img className="techIcons" src={javascript}></img></li>
      <li><img className="techIcons" src={react}></img></li>
      <li><img className="techIcons" src={nodeexpress}></img></li>
      <li><img className="techIcons" src={mongodb}></img></li>
    </ul>
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
}
// THE APP
function App() {
  const webItems = [
    {
      id:0,
      title:'Tremolo',
      brief:'e-learning website',
      desc:'e-learning website for very beginners to learn how to play the guitar',
      img:'tremolo',
      tech:['SCSS','JS','NodeJS','MongoDB'],
      url:'https://tremolo-370108.wl.r.appspot.com/',
      git:'https://github.com/oliveguy/tremolo'
    },
    {
      id:1,
      title:'Fish Creek Prov. Park',
      brief:'Interactive map',
      desc:'e-learning website for very beginners to learn how to play the guitar',
      img:'fishcreek',
      tech:['JS','PHP','MySQL'],
      url:'http://dev.saitnewmedia.ca/~spark/fishcreek/',
      git:'https://github.com/oliveguy/fish-creek'
    },
    {
      id:2,
      title:'Coco Bakery',
      brief:'e-Commerce',
      desc:'e-Commerce website for selling bread and sweat treats',
      img:'coco',
      tech:['JS','PHP','MySQL'],
      url:'http://dev.saitnewmedia.ca/~spark/mmda225/final/',
      git:'https://github.com/oliveguy/e-commerce'
    },
    {
      id:3,
      title:'infinity and beyond',
      brief:'2022 NASA International Space Apps Challenge',
      desc:'Website for displaying current aurora status',
      img:'iab',
      tech:['JS','PHP','MySQL'],
      url:'www.infinityandbeyond.club/',
      git:'https://github.com/hejkeikei/infinity-and-beyond'
    },
    {
      id:4,
      title:'Porfolio',
      brief:'My portfolio website',
      desc:'Website for displaying current aurora status',
      img:'portfolio',
      tech:['SCSS','JS','REACT'],
      url:'',
      git:''
    }
  ]
  return (
    <div className="App">
      <Navigation></Navigation>
      <Topsection></Topsection>
      <About></About>
      <Technologies></Technologies>
      <div id='projects'>
        <div className='projectText'>
          <h2 className='h2Title'>Projects</h2>
          <p>which I participated in and contributed to</p>
        </div>
        <section className='webDev'>
          <h3 className='projectSunTitle'>Web Developments</h3>
          <ul>
            {webItems.map(items=>{
              return <li>
                <h4>{items.title}</h4>
                <img src={require(`./assets/${items.img}.jpg`)} className="webProjectImg"/>
                <div className='webProjectText'>
                  <p>{items.brief}</p>
                  <p>{items.desc}</p>
                  <p>{items.tech.map(techItem=>{return <span>#{techItem}</span>})}</p>
                </div>
                <div className='projectLink'>
                  <a href={items.url} target='_blank'><img src={chain_gr}></img></a>
                  <a href={items.git} target='_blank'><img src={giticon}></img></a>
                </div>
              </li>
            }
            )}
          {/* https://blog.naver.com/wormsbrother/222769963949 */}
          </ul>
        </section>
        <section className='uiux'>
        <h3 className='projectSunTitle'>UI/UX</h3>
          <ul>

          </ul>
        </section>    
      </div>
    </div>
  );
}

export default App;
