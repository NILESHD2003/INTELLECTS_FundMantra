import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DataTable from './DataTable';
const SingleCollection = () => {

    const {id}=useParams();
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`https://intellects-fundmantra.onrender.com/api/v1/collections/${id}`);
        setData(response.data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    getData();
  },);

  if (loading) {
    return <div className='loading'>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
      <div className="container">
      <h1>Stock Details</h1>
      <DataTable data={data} />
    </div>
   
  )
}

export default SingleCollection
