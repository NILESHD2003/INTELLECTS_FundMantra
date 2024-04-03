import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Prediction = () => {


    const [data,setData]=useState()
    const [fetched,setFetch]=useState(false)



    const [formData, setFormData] = useState({
        amc_name: '',
        category: 'equity', // Default value for category
        min_sip: 0
    });

    // Handler function to update form data when inputs change
    const handleChange = (e) => {
        const { name, value } = e.target;
          const parsedValue = name === 'min_sip' ? parseInt(value, 10) : value;
        setFormData({ ...formData, [name]: parsedValue });
    };

    // Handler function to submit form data
    const handleSubmit =async (e) => {
        try{

            e.preventDefault();
            // Access form data from state variable formData
            console.log(formData);
            const data=await axios.post("https://intellects-fundmantra-1.onrender.com/predict",formData)
            const {prediction}=data.data
            const data_show=await axios.post("https://intellects-fundmantra.onrender.com/api/v1/collections/detailed_amc_schemeName",{schemeName:prediction})
            setData(data_show.data.data);
            console.log(data_show.data.data);
            setFetch(true);

        }catch(error){
            console.log(error);
            throw new Error(error.message)
        }
        // You can dispatch an action here or perform any other necessary logic with the form data
    };

    return (
        <>
        <div className="Prediction">
          
            <form id="investmentForm" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="amc_name">AMC (Asset Management Company):</label>
                    <input type="text" id="amc_name" name="amc_name" value={formData.amc_name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <select id="category" name="category" value={formData.category} onChange={handleChange} required>
                        <option value="equity">Equity</option>
                        <option value="debt">Debt</option>
                        <option value="hybrid">Hybrid</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="min_sip">Amount Invested (INR):</label>
                    <input type="number" id="min_sip" name="min_sip" value={formData.min_sip} onChange={handleChange} required />
                </div>
                <input type="submit" value="Submit" />
            </form>
 </div>
{fetched && 
 <div className="table-responsive profile-data">
  <h3>Predicted data</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Fund Name</th>
            <th></th>
            <th></th>
            <th>1Y</th>
            <th>3Y</th>
            <th>5Y</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
         {data.map((row, index) => (
    <tr key={index}>
      <td><img src={row.links_url} alt="" /></td>
      {/* <td>{index}</td> */}
      <td>{row.scheme_name}</td>
      <td>{row.sub_category}</td>
      <td>{row.returns_1yr}</td>   
      <td>{row.returns_3yr}</td>
      <td>{row.returns_5yr}</td>
      <td>
        <button className='button btn-tableData'>
          <Link to={`/singleCompany/${row._id}`}>Details</Link>
        </button>
      </td>
    </tr>
  ))}
        </tbody>
      </table> 
    </div>

}



</>

       
    );
};

export default Prediction;
