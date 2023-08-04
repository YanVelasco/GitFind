import React, { useState } from 'react';
import { Header } from '../../components/Header';
import backgroundImage from '../../assets/img/background.png';
import List from '../../components/List';
import './styles.css';

function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepositories] = useState([]);

  const handleGetData = async () => {
    try {
      const userDataResponse = await fetch(`https://api.github.com/users/${user}`);
      const newUser = await userDataResponse.json();
      
      setCurrentUser(newUser);

      if (newUser.name) {
        const { avatar_url, name, bio, login } = newUser;
        setCurrentUser({ avatar_url, name, bio, login });

        const reposDataResponse = await fetch(`https://api.github.com/users/${user}/repos`);
        const newRepos = await reposDataResponse.json();

        if (newRepos.length) {
          setRepositories(newRepos);
        }
      }
    } catch (error) {
      console.error('Erro ao buscar os dados do usuário:', error);
    }
  };

  return (
    <div className="App">
      <Header />
      <main className="content">
        <img src={backgroundImage} alt="GitHub" className="background-image" />
        <section className="Informations">
          <article className="search-user">
            <input
              name="user"
              placeholder="@user"
              className="user"
              value={user}
              onChange={(event) => setUser(event.target.value)}
            />
            <button name="user" className="search" onClick={handleGetData}>
              <p>Search</p>
            </button>
          </article>
          {currentUser?.name && (
            <>
              <article className="profile">
                <img src={currentUser.avatar_url} name="profile" alt="Profile" className="profile-img" />
                <div className="profile-datas">
                  <div>
                    <h3>{currentUser.name}</h3>
                    <span>@{currentUser.login}</span>
                  </div>
                  <p>{currentUser.bio}</p>
                </div>
              </article>
              <hr />
            </>
          )}

          {repos.length > 0 && (
            <article className="repositories">
              <h2>Repositories</h2>
              {repos.map((repo) => (
                <List key={repo.id} title={repo.name} description={repo.description} />
              ))}
            </article>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
