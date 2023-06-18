import React, { useEffect,useState } from 'react';
import axios from 'axios';

// getUser()
const CabDetails = () => {

    const [cabDetails, setCabDetails] = useState([]);

    useEffect(() => {
        async function getUser() {
            try {
              const response = await axios.get('http://localhost:5000/CabDetails');
              setCabDetails(response.data);
              console.log(CabDetails);
            } catch (error) {
              console.error(error);
            }
        }
        getUser();
    },[])

  const handleEdit = (id, field, value) => {
    const updatedCabDetails = cabDetails.map((cab) => {
      if (cab.id === id) {
        return { ...cab, [field]: value };
      }
      return cab;
    });

    setCabDetails(updatedCabDetails);
  };

  const handleDelete = (id) => {
    const updatedCabDetails = cabDetails.filter((cab) => cab.id !== id);
    setCabDetails(updatedCabDetails);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Model</th>
          <th>Color</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cabDetails.map((cab) => (
          <tr key={cab.id}>
            <td>
              <input
                type="text"
                value={cab.name}
                onChange={(e) => handleEdit(cab.id, 'name', e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={cab.model}
                onChange={(e) => handleEdit(cab.id, 'model', e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={cab.color}
                onChange={(e) => handleEdit(cab.id, 'color', e.target.value)}
              />
            </td>
            <td>
              <button onClick={() => handleDelete(cab.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CabDetails;
