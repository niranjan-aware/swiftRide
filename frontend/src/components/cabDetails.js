import React, { useEffect,useState } from 'react';
import axios from 'axios';

// getUser()
const CabDetails = () => {
  // const [data, setData] = useState([]);


  // useEffect(() => {
  //   axios.get('http://localhost:5000/CabDetails')
  //     .then(response => {
  //       setData(response.data);
  //       // console.log(response.data)
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);
  // console.log("data=>",data)
    const [cabDetails, setCabDetails] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:5000/CabDetails')
        .then(response => {
          setCabDetails(response.data);
          // console.log(response.data)
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
  const handleEdit = (id, field, value) => {
    const updatedCabDetails = cabDetails.map((cab) => {
      if (cab._id === id) {
        return { ...cab, [field]: value };
      }
      return cab;
    });

    setCabDetails(updatedCabDetails);
  };

  const handleDelete = (id) => {
    const updatedCabDetails = cabDetails.filter((cab) => cab._id !== id);
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
          <tr key={cab._id}>
            {console.log(cab.name)}
            <td>
              <input
                type="text"
                value={cab.cab_registration_number}
                onChange={(e) => handleEdit(cab._id, 'cab_registration_number', e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={cab.cab_model}
                onChange={(e) => handleEdit(cab._id, 'cab_model', e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={cab.cab_colour}
                onChange={(e) => handleEdit(cab._id, 'color', e.target.value)}
              />
            </td>
            <td>
              <button onClick={() => handleDelete(cab._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CabDetails;
