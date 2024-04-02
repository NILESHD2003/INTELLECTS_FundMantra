import React from 'react';
import { Link } from 'react-router-dom';

const DataTable = ({ data }) => {
  return (
    <div className="table-responsive">
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
              <td><Link  to={`/singleCompany/${row._id}`}>Details</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
