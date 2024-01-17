import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Search() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const apiKey = 'live_SQJlfnEUgVpG1TugdU1kHCU4f172lCupVjTzQdnJPymHmmpijTMqcdCVfty4g8pa'; // Replace with your actual API key

  useEffect(() => {
    const headers = {
      'x-api-key': apiKey,
    };

    axios.get('https://api.thecatapi.com/v1/images/search?limit=1', { headers })
      .then(res => {
        setData(res.data);
        setFilter(res.data);
      })
      .catch(err => console.log(err));
  }, [apiKey]);

  const filterByBreedId = (catName) => {
    setFilter(data.filter(cat => {
      const breeds = cat.breeds || []; // Ensure breeds array exists
      return breeds.some(breed => breed.name.toLowerCase().includes(catName.toLowerCase()));
    }));
  }

  const handleFilterChange = (e) => {
    const catName = e.target.value;
    filterByBreedId(catName);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const catName = e.target.value;
      filterByBreedId(catName);
    }
  }

  return (
    <div>
      <input
        type='text'
        onChange={handleFilterChange}
        onKeyDown={handleKeyDown}
        className='p-3 rounded-full bg-transparent outline-1 outline-double'
        placeholder='Search by breed name...'
      />
      {/* Display filtered results */}
      {filter.map(cat => (
        <div key={cat.id}>
          <img src={cat.url} alt={`Cat-${cat.id}`} />
          {/* Add more details if needed */}
        </div>
      ))}
    </div>
  );
}
