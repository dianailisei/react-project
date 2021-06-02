import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Row, Col } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import ModalA from "./components/ModalA";
import ModalB from "./components/ModalB";

const App = () => {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Link to={{ pathname: "/modalA", state: { modal: true } }}>
              <Button className="buttonA all-contacts-button">Button A</Button>
            </Link>
            <Link to={{ pathname: "/modalB", state: { modal: true } }}>
              <Button className="us-contacts-button">Button B</Button>
            </Link>
          </Col>
        </Row>
      </Container>
      <Switch>
        <Route path="/" exact />
        <Route path="/modalA" component={ModalA} />
        <Route path="/modalB" component={ModalB} />
      </Switch>
    </div>
  );
};

export default App;
