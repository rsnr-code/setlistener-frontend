import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SearchArtist = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log('Search Artist Clicked!')
  }

    return ( 
        <div className="search">
            <section
        className="text-light p-5 text-center "
        style={{ backgroundColor: "#82bf00" }}
      >
        <div className="container" style={{height: "15rem"}}>
          <div className="text-center mt-3" >
            <h1 id="title">The Set Listener</h1>
            <p className=" my-3 mb-4">
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
                  onClick={handleClick}
                >
                  SEARCH
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </section>
        </div>
     );
}
 
export default SearchArtist;
<div className="">
    <section
        className="text-light p-5 text-center "
        style={{ backgroundColor: "#82bf00" }}
      >
        <div className="container" style={{height: "15rem"}}>
          <div className="text-center mt-3" >
            <h1 id="title">The Set Listener</h1>
            <p className="lead my-3 mb-4">
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
</div>   