import scareCrow from "/scarecrow.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="everything">
        <h1 id="not-found">404 NOT FOUND</h1>

        <div className="container">
          <img src={scareCrow} alt="Imagen espantapajaros" />

          <div className="text-container">
            <h1 id="bad-news">I have bad news for you</h1>
            <p id="msg">
              The page you are looking<br></br> for might be removed or is<br></br> temporarily
              unavailable
            </p>
            <button type="submit" id="homepage">
              <strong>BACK TO HOMEPAGE</strong>
            </button>
          </div>
        </div>

        <div className="attribution">
          Coded by&nbsp;
          <a href="https://github.com/mercuryeater"> Federico Cordoba</a>
        </div>
      </div>
    </>
  );
}

export default App;
