import React from 'react'
import DataTable from './DataTable'

const Prediction = () => {

    // const { id } = useParams();
    // const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     async function getData() {
    //         try {
    //             const response = await axios.get(`https://intellects-fundmantra.onrender.com/api/v1/collections/${id}`);
    //             setData(response.data.data);
    //         } catch (error) {
    //             setError(error.message);
    //         } finally {
    //             setLoading(false);
    //         }
    //     }

    //     getData();
    // },);

    // if (loading) {
    //     return <div className='loading'>Loading...</div>;
    // }

    // if (error) {
    //     return <div>Error: {error}</div>;
    // }

    return (
        <div className="container">
            {/* <h2>Investment Details Form</h2> */}
            <form id="investmentForm">
                <div className="form-group">
                    <label for="amc">AMC (Asset Management Company):</label>
                    <input type="text" id="amc" name="amc" required />
                </div>
                <div className="form-group">
                    <label for="category">Category:</label>
                    <select id="category" name="category" required>
                        <option value="equity">Equity</option>
                        <option value="debt">Debt</option>
                        <option value="hybrid">Hybrid</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="amount">Amount Invested (INR):</label>
                    <input type="number" id="amount" name="amount" required />
                </div>
                <input type="submit" value="Submit" />
            </form>

            {/* <div className="container">
                <h1>Stock Details</h1>
                <DataTable data={data} />
            </div> */}
        </div>
    )
}

export default Prediction
