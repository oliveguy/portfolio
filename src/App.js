import video from './video.mp4';
import logo_bw from './logo_bw.png';
import logo_cl from './logo_cl.png';
// import './App.css';
import './App.scss';
function App() {
  return (
    <div className="App">
      {/* NAVIGATION */}
      <nav className='navigation'>
        <ul>
          <li><a className='title'><img src={logo_bw} className="logoImg"></img><span>Sunghyun Park</span></a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Resum&#233;</a></li>
        </ul>
        <div className='bk_blur'></div>
      </nav>
      {/* TOP VIDEO PLAY */}
      <div className='topSection'>
        <div className='videoWrapper'>
          <video src={video} autoPlay loop playsInline muted={true} className='videoTop'></video>
        </div>
        <div className='topText'>
          <img src={logo_cl}></img>
          <h1>Hello my name is Sunghyun Park</h1>
          <h2>I am a front-end developer</h2>
          <h2>who enjoy beating challenging problems</h2>
        </div>
      </div>
      <div id='about'>
        <h1>xcxcxcx</h1>
      </div>
    </div>
  );
}

export default App;
