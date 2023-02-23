import './App.css';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Likes {likes}</p>
      </div>
    </div>
  );
}

export default App;
