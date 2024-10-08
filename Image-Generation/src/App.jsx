import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [searchValue, setSearchValue] = useState(''); // Value to trigger search

  useEffect(() => {
    const searchImages = async () => {
      if (!searchValue) return; 

      const key = 'VbhcC0108-aJwBrtc6QTw58QWCSXvzBu04h6Jh4TqPM'; 
      const url = `https://api.unsplash.com/search/photos?query=${searchValue}&client_id=${key}`;
      const response = await axios.get(url);
      setImages(response.data.results);
      
    };

    searchImages();
  }, [searchValue]); 


  const handleSearchClick = (e) => {
    e.preventDefault(); 
    setSearchValue(query); 
  };

  return (
    <div className='App'>
      <h1>Image Generation App</h1>
      <form>
        <input 
        className='search-input'
          type="text" 
          placeholder="Search for images..." 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
        />
        <button type="submit" className='search' onClick={handleSearchClick}>Search</button>
      </form>

      
      <div className="image-grid">
        {images.length > 0 ? (
          images.map((image) => (
            <div key={image.id} className="image-item">
              <img src={image.urls.small} alt={image.alt_description} />
            </div>
          ))
        ) : (
          <p>No images found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
