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
      <div className="Header">
        <div>
          <a href="https://news.ycombinator.com/">
            <img src="https://hn.algolia.com/public/899d76bbc312122ee66aaaff7f933d13.png" className="Header-logo"
             alt="logo" />
          </a>
        </div>
        <div>
          Search <br />Hacker News
        </div>
        <form>
          <input onChange={updateArticles} className="Search-input" />
        </form>
        <div>
          <a href="https://hn.algolia.com/settings">
            <img src="https://static-00.iconduck.com/assets.00/settings-cog-icon-512x512-dq8iixy4.png"
             className="Header-logo" alt="settings" />
          </a>
        </div>
      </div>
      
      <div>
        {articles.map((article, i) => 
        <p>
        <a href={`https://news.ycombinator.com/item?id=${article.story_id}`} key={i} className="Title-link">
          {`${article.title} `}</a>
        <a href={article.url} className="Links">{`(${article.url})`}</a><br />
        <a href={`https://news.ycombinator.com/item?id=${article.story_id}`} className="Links">
          {`${article.points} points`}</a> |  
        <a href={`https://news.ycombinator.com/user?id=${article.author}`} className="Links">{` ${article.author}`}</a> |  
        <a href={`https://news.ycombinator.com/item?id=${article.story_id}`} className="Links">
          {` ${article.num_comments} comments`}</a>
        </p>)}
      </div>
    </div>
  );
}

export default App;
