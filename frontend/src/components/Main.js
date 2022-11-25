import { useEffect, useState } from "react";
import axios from "axios";
import { BiSearch } from "react-icons/bi";
import SpotifyWebApi from "spotify-web-api-node";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Popup from "./Popup";

const Main = () => {
  const [searchKey, setSearchKey] = useState("");
  const [initialState, setInitialState] = useState("");
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState("");
  const [songArr, setSongArr] = useState("");
  const [trackIdArr, setTrackIdArr] = useState("");
  const [setlist, setSetlist] = useState("");
  const [alertPopup, setAlertPopup] = useState(false);

  // SpotifyWebApi instantiation
  let token = window.localStorage.getItem("token");
  const spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken(token);

  //Spotify username and user image
  useEffect(() => {
    const getUserName = async () => {
      const data = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserImage(data.data.images[0].url);
      setUserName(data.data.display_name);
    };
    getUserName();
    console.log("display name + image retrieved successfully");
  }, []);

  // Artist setlist via setlistfm API
  const searchArtist = (e) => {
    e.preventDefault();

    const options = {
      method: "GET",
      url: "/setlist",
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

        // Creation of setlist array
        let songsArr = [];

        setlistSongs.forEach((element) => songsArr.push(element.name));

        if (setlistEncore) {
          setlistEncore.forEach((element) => songsArr.push(element.name));
        }

        setSetlist(songsArr);

        // Setlist info section (to be display on page)
        setInitialState(
          `${artistName} at ${venueName} (${cityName}) on ${eventDate}`
        );

        // Creation of array which will be passed on to SpotifyWebApi.addTracks
        let trackArtistArr = [];

        if (songsArr) {
          songsArr.forEach((element) => {
            trackArtistArr.push([`track:${element} artist:${artistName}`]);
          });
        }

        setSongArr(trackArtistArr);
      })
      .catch((err) => {
        console.error(err);
      });

    setAlertPopup(false);

    //This method wouldn't send req.query
    // fetch("http://localhost:5000/setlist", {
    //   method: 'GET',
    //   params: searchKey,
    // })
    // .then(res => res.json())
    // .then(data => console.log(JSON.stringify(data)))
  };

  // Once setlist array has been created, this code will run to find trackId
  useEffect(() => {
    let trackId = [];

    if (songArr) {
      songArr.forEach(async (element) => {
        await spotifyApi.searchTracks(element).then(
          function (data) {
            trackId.push(data.body.tracks.items[0].uri);
          },
          function (err) {
            console.log("Something went wrong!", err);
          }
        );
      });

      setTrackIdArr(trackId);
    }
  }, [songArr]);

  // Create playlist button
  const createPlaylist = async (e) => {
    e.preventDefault();
    let playlistId;

    // Playlist creation
    await spotifyApi
      .createPlaylist(`${searchKey} setlist`, {
        description: initialState,
        public: false,
      })
      .then(
        function (data) {
          playlistId = data.body.id;
          console.log("Created playlist!");
        },
        function (err) {
          console.log("Something went wrong!", err);
        }
      );

    // Adding tracks to created playlist
    await spotifyApi.addTracksToPlaylist(playlistId, trackIdArr).then(
      function (data) {
        console.log("Added tracks to playlist!");
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );

      // for (let i = 0; i < trackIdArr; i++){
      //   let trackId = trackIdArr[i];
      //   await spotifyApi.addTracksToPlaylist(playlistId, trackId, {
      //     position: i
      //   }).then(function(data){
      //     console.log(`Added ${trackId} to ${playlistId} successfully`)
      //   },
      //   function{(err){
      //     console.log("Something went wrong!", err)
      //   }})
      // }

    setAlertPopup(true);
  };

  return (
    <div className="main">
      {/* Search Artist Section */}
      <div className="search">
        <section className="text-light p-5 text-center search">
          <div className="container" style={{ height: "15rem" }}>
            <div className="text-center mt-3">
              <h1 id="title">The Set Listener</h1>
              <p className=" my-3 mb-4 titleText">
                Create a Spotify playlist for your favorite artist's most recent
                show
              </p>

              <div className="d-flex justify-content-center searchForm">
                <form onSubmit={searchArtist}>
                  <input
                    name="artist"
                    id="artist"
                    value={searchKey}
                    type="text"
                    onChange={(e) => setSearchKey(e.target.value)}
                  />
                  <button type={"submit"} style={{ fontSize: "1.1rem" }}>
                    {" "}
                    <BiSearch />{" "}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Spotify User Details Section || Setlist Information */}
      {initialState ? (
        <section
          className="p-3 text-center artistInfo"
          style={{
            backgroundColor: "#f2f2f3",
            fontSize: "1.3rem",
            fontWeight: "bold",
          }}
        >
          <div style={{ color: "#0a6312", marginBottom: "20px" }}>
            {initialState}
          </div>

          {setlist ? (
            <div>
              <div
                className="accordion-title"
                style={{ borderTop: "2px solid rgb(208, 208, 208)" }}
              >
                <h2 className="accordion-header">
                  <button
                    className="accordion-collapse collapsed  formBtns"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#question-one"
                    style={{
                      marginTop: "15px",
                      border: "none",
                      fontSize: "1.3rem",
                    }}
                  >
                    View Setlist
                  </button>
                </h2>

                {setlist.map((song, i) => (
                  <div
                    id="question-one"
                    className="accordion-collapse collapse"
                    data-bs-parent="#questions"
                  >
                    <div className="accordion-body">{song}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </section>
      ) : (
        <section
          className="p-3 text-center"
          style={{
            backgroundColor: "#f2f2f3",
            fontSize: "1.3rem",
            fontWeight: "bold",
          }}
        >
          <div style={{ marginTop: "10px" }}>
            Welcome,&nbsp;{" "}
            <img className="userImage" src={userImage} alt="userImage" /> &nbsp;
            {userName}!
            <div
              className="alert alert-secondary mt-3 greetingAlert"
              style={{ margin: "0 auto" }}
            >
              <p style={{ marginTop: "5px", fontSize: "1rem" }}>
                Setlist will be displayed here
              </p>
              <p style={{ fontSize: "1rem", marginBottom: "5px" }}>
                Go ahead and type in a name into the search bar
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Create Playlist Button Section */}
      {initialState ? (
        <section className="p-3 text-center playlistButtonSection">
          <Popup trigger={alertPopup}></Popup>
          <Form>
            <Button
              type="submit"
              className="mx-2 rounded btn playlistButton formBtns"
              style={{ height: "40px" }}
              onClick={createPlaylist}
            >
              <p className="text">SAVE THIS PLAYLIST TO SPOTIFY</p>
            </Button>
          </Form>
        </section>
      ) : (
        <div style={{ backgroundColor: "#0a6312" }}></div>
      )}
    </div>
  );
};

export default Main;
