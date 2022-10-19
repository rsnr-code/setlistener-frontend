import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ArtistInfo from "./ArtistInfo";

const Main = () => {
  return (
    <div>
      <section
        class="text-light p-5 text-center"
        style={{ backgroundColor: "#82bf00" }}
      >
        <div class="container">
          <div class="align-items-center justify-content-around text-center" >
            <h1 id="title">The Set Listener</h1>
            <p class="lead my-3 mb-4">
              Create a Spotify playlist for your favorite artist's most recent
              show
            </p>

            <div className="d-flex justify-content-center ">
              <Form className="d-flex">
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Tame Impala" />
                </Form.Group>

                <Button
                  type="submit"
                  className="mx-2 rounded btn"
                  style={{ height: "40px", backgroundColor: "#0096bf" }}
                >
                  SEARCH
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </section>

<ArtistInfo />


    </div>
  );
};

export default Main;
