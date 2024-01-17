import React, { useEffect, useState } from 'react';

const CatList = () => {
  const [breedName, setBreedName] = useState(''); // State to store the selected breed name
  const [catImages, setCatImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Construct the API endpoint with the breed name as a query parameter
        const apiUrl = `https://api.thecatapi.com/v1/images/search?limit=4&breed_id=${breedName}`;
        
        const response = await fetch(apiUrl);
        const data = await response.json();

        setCatImages(data);
      } catch (error) {
        console.error('Error fetching cat data:', error);
      }
    };

    fetchData();
  }, [breedName]);

  const handleBreedChange = (event) => {
    setBreedName(event.target.value);
  };

  return (
    <section className='w-full p-10 text-base my-10 max-h-fit sm:p-6'>
      <label htmlFor="breedSelect" className=' font-medium text-2xl'>Select Cat Breed: </label>
      <select id="breedSelect" onChange={handleBreedChange} value={breedName}>
        <option value="">-- All Breeds --</option>
        <option value="abys">Abyssinian</option>
        <option value="beng">Bengal</option>
        <option value="sibe">siberian</option>
        <option value="sfol">scottish fold</option>
        <option value="ycho">york chocolate</option>
        <option value="dons">donskoy</option>
        <option value="snow">snowshoe</option>
        <option value="chee">cheetoh</option>
        <option value="esho">shorthair</option>
        <option value="emau">Egyptian Mau</option>
        <option value="jbob">Japanese bobtail</option>
        <option value="ocic">Ocicat</option>
        {/* Add more breed options as needed */}
      </select>

      <div>
        <h2>Cat Images</h2>
        <ul className='grid grid-cols-4 gap-4 w-full h-10'>
          {catImages.map((cat, index) => (
            <li key={index}>
                
              <img className='p-3 rounded-full sm:rounded-3xl' src={cat.url} alt={`Cat ${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CatList;
