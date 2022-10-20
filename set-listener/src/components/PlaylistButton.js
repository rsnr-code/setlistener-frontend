import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const PlaylistButton = () => {
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
      }
    
      return (
        <section className="p-5 text-center playlistButton" >
           <Form>
                <Button
                  type="submit"
                  className="mx-2 rounded btn"
                  style={{ height: "40px", backgroundColor: "#0096bf" }}
                  onClick={handleSubmit}
                >
                  <p className="text">SAVE THIS PLAYLIST TO SPOTIFY</p>
                  
                </Button>
              </Form>
        </section>
        
      );
}
 
export default PlaylistButton;