import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const PlaylistButton = () => {
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
      }
    
      return (
        <section className="p-3 text-center playlistButtonSection" >
           <Form>
                <Button
                  type="submit"
                  className="mx-2 rounded btn playlistButton"
                  style={{ height: "40px"}}
                  onClick={handleSubmit}
                >
                  <p className="text">SAVE THIS PLAYLIST TO SPOTIFY</p>
                  
                </Button>
              </Form>
        </section>
        
      );
}
 
export default PlaylistButton;