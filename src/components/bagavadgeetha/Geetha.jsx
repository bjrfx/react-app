import axios from 'axios';

function Geetha() {
    

axios.get('https://gita-api.vercel.app/tel/verse/1/3')
  .then(response => {
    console.log(response.data); // JSON data from the response
  })
  .catch(error => {
    console.error('There was a problem with the request:', error);
  });

}

export default Geetha;
