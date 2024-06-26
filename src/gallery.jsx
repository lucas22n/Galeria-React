// Gallery.jsx
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

// Debo hacer un .map para iterar todas las cards y no agregar mucho codigo
// Para evitar esta repetición, puedes usar un array para almacenar los datos de las tarjetas y luego usar .map para iterar sobre estos datos y renderizar las tarjetas.

export default function Gallery() {
  return (
    <div>
      <header>
        <CardGroup>
          <Card className="cards">
            <Card.Img
              variant="top"
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHJmZJnc3CXc9PVtSVupCRW3pe-0CFWuYdNdhSNM1ubR6-aD6YZs64tMkDufvx0TJDfbJesaxm0_Sh2ett9algGCLXjPbolQGDP245dt0F-lLF2PegxiqI-jSjbtmj5Y9KE49jwyFJkqRB3U5EsMcO8KrvHnD2mjnH0X5FaHR3S3ZmYUCH6BYczcO2/s1170/1.jpg"
            />
            <Card.Body>
              <Card.Title>Maldivas</Card.Title>
              <Card.Text>
                This is a fantastic place with beautiful beaches.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">1200USD</small>
            </Card.Footer>
          </Card>
          <Card className="cards">
            <Card.Img
              variant="top"
              src="https://media.tacdn.com/media/attractions-content--1x-1/12/29/06/2b.jpg"
            />
            <Card.Body>
              <Card.Title>Cancun</Card.Title>
              <Card.Text>
                Visit the most beautiful place in Mexico.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">1000USD</small>
            </Card.Footer>
          </Card>
          <Card className="cards">
            <Card.Img
              variant="top"
              src="https://lp-cms-production.imgix.net/2022-12/Mexico-iStock-484404659-RFC.jpeg?w=1920&h=640&fit=crop&crop=faces%2Cedges&auto=format&q=75"
            />
            <Card.Body>
              <Card.Title>Brazil</Card.Title>
              <Card.Text>
                Visit Cristo in Rio De Janeiro.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">800USD</small>
            </Card.Footer>
          </Card>
        </CardGroup>

        <CardGroup>
          <Card className="cards">
            <Card.Img
              variant="top"
              src="https://www.dresseldivers.com/wp-content/uploads/Punta-Cana-Scuba-Diving-Dressel-Divers-e1693493993944.jpg"
            />
            <Card.Body>
              <Card.Title>Buzios</Card.Title>
              <Card.Text>
                Another Alternative in Brazil with beautiful beaches.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">900USD</small>
            </Card.Footer>
          </Card>
          <Card className="cards">
            <Card.Img
              variant="top"
              src="https://www.civitatis.com/f/mexico/cancun/excursion-isla-mujeres-catamaran-grid.jpg"
            />
            <Card.Body>
              <Card.Title>Isla Mujeres</Card.Title>
              <Card.Text>
                Visit the best alternative for Women in the world.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">1200USD</small>
            </Card.Footer>
          </Card>
          <Card className="cards">
            <Card.Img
              variant="top"
              src="https://cdn.hometogo.net/assets/media/pics/1920_600/611bd17e65130.jpg"
            />
            <Card.Body>
              <Card.Title>Miami</Card.Title>
              <Card.Text>
                Visit de most beautiful place in USA.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">2000USD</small>
            </Card.Footer>
          </Card>
        </CardGroup>

          <NavLink
            className="volver"
            to="/"
          >
            <h1 className="homeparrafo">Click Here And Go Back Home</h1>
          </NavLink>
      </header>
    </div>
  );
}
