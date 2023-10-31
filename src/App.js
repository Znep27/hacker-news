import { useState } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);

  const updateArticles = async (e) => {
    console.log('e.target.value,', e.target.value)
    const { data } = await axios.get(`http://hn.algolia.com/api/v1/search?query=${e.target.value}`)
    console.log(data.hits)
    setArticles(data.hits)
  }

  return (
    <div className="App">
      <form>
        <input onChange={updateArticles} />
      </form>
      <div>
        {articles.map((article, i) => <p key={i}>{article.title}</p>)}
      </div>
    </div>
  );
}

export default App;
