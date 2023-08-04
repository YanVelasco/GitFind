import { Header } from "../../components/Header";
import backgroundImage from "../../assets/img/background.png";

import "./styles.css";
function App() {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <img
          src={backgroundImage}
          alt="GitHub img"
          className="background-image"
        />
        <section className="Informations">
          <article>
            <input name="user" placeholder="@user" className="user" />
            <button className="search"><p>search</p></button>
          </article>
          <article className="profile">
            <img src={backgroundImage} name="profile" alt="Profile img" className="profile-img"/>
            <div className="profile-datas">
              <div>
              <h3>Name</h3>
              <span>@</span>
              </div>
              <p>About</p>
            </div>
          </article>
          <hr></hr>
        </section>
      </main>
    </div>
  );
}

export default App;
