import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await fetch('/api/coordinate');
        const data = await response.json();
        setCoordinates(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchCoordinates();
  }, []);

  return (
    <div>
      {coordinates ? (
        <>
          <p>Latitude: {coordinates.lat}</p>
          <p>Longitude: {coordinates.lon}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyComponent;
