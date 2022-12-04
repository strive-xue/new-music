import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faChevronLeft,faMusic,faGuitar,faCompactDisc,faBars } from '@fortawesome/free-solid-svg-icons'
import Main from './component/main'

function App() {
  return (
    <div className="App">
			<div className='header'>
				<div className='header-text'>N.E.W Music</div>
				<div className="right-header-list">
				  <ul>
				    <li>Home</li>
				    <li>文</li>
				    <li><FontAwesomeIcon icon={faBars}/></li>
				  </ul>
				</div>
			</div>
			<div className='content'>
				<div className='content-left'>
					<ul>
					  <li><FontAwesomeIcon icon={faMusic} style={{marginRight:"15px"}}/>音乐</li>
					  <li><FontAwesomeIcon icon={faGuitar} style={{marginRight:"15px"}}/> 歌手</li>
					  <li><FontAwesomeIcon icon={faCompactDisc} style={{marginRight:"15px"}}/> 专辑</li>
					</ul>
				</div>
				<div className='content-right'>
					<Main></Main>
				</div>
			</div>
    </div>
  );
}

export default App;
