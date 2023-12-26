import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardText, CardTitle, Col } from "reactstrap";
import "./Home.css";
import UserContext from "../helpers/UserContext";

const Home = () => {
  const { currentUser } = useContext(UserContext);
  console.debug("Homepage", "currentUser=", currentUser);

  return (
    <div>
      <div className="container">
        <Col sm="6">
          <Card body>
            <CardTitle tag="h5">Welcome to Jobly!</CardTitle>
            {currentUser ? (
              <CardText>Welcome back {currentUser.firstName || currentUser.username}</CardText>
            ) : (
              <div>
                <Button color="primary" outline href="/login">
                  Log in
                </Button>
                <Button color="primary" outline href="/signup">
                  Signup
                </Button>
              </div>
            )}
          </Card>
        </Col>
      </div>
    </div>
  );
};

export default Home;

