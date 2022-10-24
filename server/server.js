
const express = require('express')
const axios = require('axios')
const cors = require('cors');


require('dotenv').config()

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: false}));
app.use(express.json());


app.get('/setlist', (req, res) => {
const artist = req.query.artistName

  const options = {
    method: 'GET',
    url: `https://api.setlist.fm/rest//1.0/search/setlists?`,
    params: {artistName: artist},
    headers: {
      'x-api-key': '9bpLkkMMmV7NHKWsOG0Rwc_FNaSsMSJlipwb',
      'Accept': 'application/json'
    }
  }

  axios.request(options).then((response) => {
    res.json(response.data)
  }).catch((err) => {
    console.error(err)
  } )
})







  





// async function getSetlist(artistName) {
//     // Default options are marked with *
//     url = `https://api.setlist.fm/rest//1.0/search/setlists?artistName=${artistName}`
//     const {data} = await axios.get(url, {
//       method: 'GET', // *GET, POST, PUT, DELETE, etc.
//       mode: 'no-cors', // no-cors, *cors, same-origin
//       headers: {
//         'x-api-key': '9bpLkkMMmV7NHKWsOG0Rwc_FNaSsMSJlipwb',
//         'Accept': 'application/json'
//       },
//        // body data type must match "Content-Type" header
//     });
//     console.log((JSON.stringify(data.setlist[0].sets.set)))
// // parses JSON response into native JavaScript objects
   
//   }
// })







// module.exports = (searchKey) => {
//     app.get('/api/artist', (req, res) => {

//     const apiUrl = `https://api.setlist.fm/rest//1.0/search/setlists?artistName=${searchKey}`;

//   axios.get(apiUrl, {
//             headers: {
//               'x-api-key': process.env.REACT_APP_API_KEY,
//               'Accept': "application/json",     
//             },
//         params: {
//             artistName
//         }
//         })
//         .then(res=>res.json()).then(data=>{

//             console.log(data)
//                res.send({
//                         data
//                     });
// })
// .catch(err => {
//     res.redirect('/error');
// });


// })
// }



const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`)
})