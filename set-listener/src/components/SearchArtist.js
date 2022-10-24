import { useState } from "react";
import axios from 'axios'

const SearchArtist = () => {
  const [searchKey, setSearchKey] = useState("");
  const [initialState, setInitialState] = useState("");



 const searchArtist = (e) => {
  e.preventDefault();

  const options = {
    method: 'GET',
    url: "http://localhost:5000/setlist",
    params: {artistName: searchKey},
  }

  axios.request(options).then((response) => {
    let setlistSongs = response.data.setlist[1].sets.set[0].song
    setInitialState(JSON.stringify(setlistSongs));

    let songsArr = []

    setlistSongs.forEach(element => songsArr.push(element.name))

    console.log(songsArr)

  }).catch((err) => {
    console.error(err)
  })


  //This method wouldn't send req.query
  // fetch("http://localhost:5000/setlist", {
  //   method: 'GET',
  //   params: searchKey,
  // })
  // .then(res => res.json())
  // .then(data => console.log(JSON.stringify(data)))

 }


  return (
    <div className="search">
      <section
        className="text-light p-5 text-center "
        style={{ backgroundColor: "#82bf00" }}
      >
        <div className="container" style={{ height: "15rem" }}>
          <div className="text-center mt-3">
            <h1 id="title">The Set Listener</h1>
            <p className=" my-3 mb-4">
              Create a Spotify playlist for your favorite artist's most recent
              show
            </p>

            <div className="d-flex justify-content-center ">
              <form onSubmit={searchArtist}>
                <input
                name="artist"
                id="artist"
                value={searchKey}
                  type="text"
                  onChange={(e) => setSearchKey(e.target.value)}
                />
                <button type={"submit"}>Search</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    <div>
      {initialState}
    </div>

    </div>
  );
};

export default SearchArtist;
