import { useState } from "react";
import axios from "axios";

const SearchArtist = () => {
  const [searchKey, setSearchKey] = useState("");
  const [initialState, setInitialState] = useState("");

  const searchArtist = (e) => {
    e.preventDefault();

    const options = {
      method: "GET",
      url: "http://localhost:5000/setlist",
      params: { artistName: searchKey },
    };

    axios
      .request(options)
      .then((response) => {
        let artistName = response.data.setlist[0].artist.name;

        let setlistSongs, setlistEncore, venueName, cityName, eventDate;

        if (
          response.data.setlist[0].sets.set.length !== 0 &&
          response.data.setlist[0].sets.set[0].song.length > 4
        ) {
          setlistSongs = response.data.setlist[0].sets.set[0].song;
          venueName = response.data.setlist[0].venue.name;
          cityName = response.data.setlist[0].venue.city.name;
          eventDate = response.data.setlist[0].eventDate;
          if (response.data.setlist[0].sets.set[1]) {
            setlistEncore = response.data.setlist[0].sets.set[1].song;
          }
        } else if (
          response.data.setlist[1].sets.set.length !== 0 &&
          response.data.setlist[1].sets.set[0].song.length > 4
        ) {
          setlistSongs = response.data.setlist[1].sets.set[0].song;
          venueName = response.data.setlist[1].venue.name;
          cityName = response.data.setlist[1].venue.city.name;
          eventDate = response.data.setlist[1].eventDate;
          if (response.data.setlist[1].sets.set[1]) {
            setlistEncore = response.data.setlist[1].sets.set[1].song;
          }
        } else if (
          response.data.setlist[2].sets.set.length !== 0 &&
          response.data.setlist[2].sets.set[0].song.length > 4
        ) {
          setlistSongs = response.data.setlist[2].sets.set[0].song;
          venueName = response.data.setlist[2].venue.name;
          cityName = response.data.setlist[2].venue.city.name;
          eventDate = response.data.setlist[2].eventDate;
          if (response.data.setlist[2].sets.set[1]) {
            setlistEncore = response.data.setlist[2].sets.set[1].song;
          }
        } else if (
          response.data.setlist[3].sets.set.length !== 0 &&
          response.data.setlist[3].sets.set[0].song.length > 4
        ) {
          setlistSongs = response.data.setlist[3].sets.set[0].song;
          venueName = response.data.setlist[3].venue.name;
          cityName = response.data.setlist[3].venue.city.name;
          eventDate = response.data.setlist[3].eventDate;
          if (response.data.setlist[3].sets.set[1]) {
            setlistEncore = response.data.setlist[3].sets.set[1].song;
          }
        } else if (
          response.data.setlist[4].sets.set.length !== 0 &&
          response.data.setlist[4].sets.set[0].song.length > 4
        ) {
          setlistSongs = response.data.setlist[4].sets.set[0].song;
          venueName = response.data.setlist[4].venue.name;
          cityName = response.data.setlist[4].venue.city.name;
          eventDate = response.data.setlist[4].eventDate;
          if (response.data.setlist[4].sets.set[1]) {
            setlistEncore = response.data.setlist[4].sets.set[1].song;
          }
        } else if (
          response.data.setlist[5].sets.set.length !== 0 &&
          response.data.setlist[5].sets.set[0].song.length > 4
        ) {
          setlistSongs = response.data.setlist[5].sets.set[0].song;
          venueName = response.data.setlist[5].venue.name;
          cityName = response.data.setlist[5].venue.city.name;
          eventDate = response.data.setlist[5].eventDate;
          if (response.data.setlist[5].sets.set[1]) {
            setlistEncore = response.data.setlist[5].sets.set[1].song;
          }
        } else if (
          response.data.setlist[6].sets.set.length !== 0 &&
          response.data.setlist[6].sets.set[0].song.length > 4
        ) {
          setlistSongs = response.data.setlist[6].sets.set[0].song;
          venueName = response.data.setlist[6].venue.name;
          cityName = response.data.setlist[6].venue.city.name;
          eventDate = response.data.setlist[6].eventDate;
          if (response.data.setlist[6].sets.set[1]) {
            setlistEncore = response.data.setlist[6].sets.set[1].song;
          }
        } else if (
          response.data.setlist[7].sets.set.length !== 0 &&
          response.data.setlist[7].sets.set[0].song.length > 4
        ) {
          setlistSongs = response.data.setlist[7].sets.set[0].song;
          venueName = response.data.setlist[7].venue.name;
          cityName = response.data.setlist[7].venue.city.name;
          eventDate = response.data.setlist[7].eventDate;
          if (response.data.setlist[7].sets.set[1]) {
            setlistEncore = response.data.setlist[7].sets.set[1].song;
          }
        } else if (
          response.data.setlist[8].sets.set.length !== 0 &&
          response.data.setlist[8].sets.set[0].song.length > 4
        ) {
          setlistSongs = response.data.setlist[8].sets.set[0].song;
          venueName = response.data.setlist[8].venue.name;
          cityName = response.data.setlist[8].venue.city.name;
          eventDate = response.data.setlist[8].eventDate;
          if (response.data.setlist[8].sets.set[1]) {
            setlistEncore = response.data.setlist[8].sets.set[1].song;
          }
        } else if (
          response.data.setlist[9].sets.set.length !== 0 &&
          response.data.setlist[9].sets.set[0].song.length > 4
        ) {
          setlistSongs = response.data.setlist[9].sets.set[0].song;
          venueName = response.data.setlist[9].venue.name;
          cityName = response.data.setlist[9].venue.city.name;
          eventDate = response.data.setlist[9].eventDate;
          if (response.data.setlist[9].sets.set[1]) {
            setlistEncore = response.data.setlist[9].sets.set[1].song;
          }
        }

        let songsArr = [];

        setlistSongs.forEach((element) => songsArr.push(element.name));

        if (setlistEncore) {
          setlistEncore.forEach((element) => songsArr.push(element.name));
        }

        console.log(venueName);
        console.log(songsArr);
        console.log(cityName)
        console.log(eventDate)

        setInitialState(`${artistName} at ${venueName} (${cityName}) on ${eventDate}`);
      })
      .catch((err) => {
        console.error(err);
      });

    //This method wouldn't send req.query
    // fetch("http://localhost:5000/setlist", {
    //   method: 'GET',
    //   params: searchKey,
    // })
    // .then(res => res.json())
    // .then(data => console.log(JSON.stringify(data)))
  };

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
      <div>{initialState}</div>
    </div>
  );
};

export default SearchArtist;
