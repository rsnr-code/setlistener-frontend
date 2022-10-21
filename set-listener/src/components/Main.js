import ArtistInfo from "./ArtistInfo";
import PlaylistButton from "./PlaylistButton";
import SearchArtist from "./SearchArtist";

const Main = () => {
  return (
    <div className="main">
<SearchArtist />
<ArtistInfo />
<PlaylistButton />
    </div>
  );
};

export default Main;
