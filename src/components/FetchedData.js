import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FetchedData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const search = 'The Avengers'; // Replace with your desired movie title
        const response = await axios.get(
          `https://www.omdbapi.com/?t=${search}&type=movie&apikey=28a2ff0`
        );
        console.log("res",response)
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Fetched Data</h2>
      <ul>
        <li>Title: {data.Title}</li>
        <li>Year: {data.Year}</li>
        <li>Plot: {data.Plot}</li>
        {/* Include other relevant data fields from the response */}
      </ul>
    </div>
  );
}

export default FetchedData;
