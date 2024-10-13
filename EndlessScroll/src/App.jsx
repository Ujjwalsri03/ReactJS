import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [images, setImages] = useState([]); 
  const [filteredImages, setFilteredImages] = useState([]); 
  const [page, setPage] = useState(1); 
  const [loading, setLoading] = useState(false); 
  const [query, setQuery] = useState(''); 

  const key = 'VbhcC0108-aJwBrtc6QTw58QWCSXvzBu04h6Jh4TqPM'; 

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const url = `https://api.unsplash.com/photos?page=${page}&client_id=${key}&per_page=10`;
      const response = await axios.get(url);
      
      setImages((prevImages) => [...prevImages, ...response.data]); 
      setFilteredImages((prevImages) => [...prevImages, ...response.data]); 
      setLoading(false);
    };

    fetchImages();
  }, [page]); 

  
  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !loading) {
      setPage((prevPage) => prevPage + 1); // Load the next page
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  
  useEffect(() => {
    if (query === '') {
      setFilteredImages(images); 
    } else {
      const filtered = images.filter((image) =>
        image.alt_description?.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredImages(filtered);
    }
  }, [query, images]);

  return (
    <div className='App'>
      <h1>Endless Scroll Image Gallery</h1>
      
      <input 
        className='search-input'
        type="text"
        placeholder="Search loaded images..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />

      <div className="image-grid">
  {filteredImages.length > 0 ? (
    filteredImages.map((image, index) => (
      <div key={`${image.id}-${index}`} className="image-item">
        <img src={image.urls.small} alt={image.alt_description} />
      </div>
    ))
  ) : (
    <p>No images found.</p>
  )}
      </div>

      {loading && <div className="loading">Loading more images...</div>}
    </div>
  );
}

export default App;
