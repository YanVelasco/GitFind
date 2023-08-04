import { Header } from "../../components/Header";
import backgroundImage from '../../assets/img/background.png';

import './styles.css'
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content">
        <img src = {backgroundImage} alt = "GitHub img" className="background-image"/>
        <div className="Informations">
          <div>
            <input name="user" placeholder="@user" className ="user"/>
            <button className="search">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
