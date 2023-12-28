import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../helpers/API";
import { Card, CardBody, CardTitle, CardText, Col, Button } from "reactstrap";
import UpdateProfileForm from "./UpdateProfileForm"; 

const Profile = () => {
  const { username } = useParams();
  const [user, setUser] = useState([]);
  const [showUpdateForm, setShowUpdateForm] = useState(false); 

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await JoblyApi.getCurrentUser(username);
        setUser(response);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }

    fetchData();
  }, [username]);

  const toggleUpdateForm = () => {
    setShowUpdateForm(!showUpdateForm);
  };

  return (
    <div>
      <div className="container">
        <Col sm="6" key={user.id}>
          <Card>
            <CardBody>
              <CardTitle tag="h5">{user.firstName}'s information</CardTitle>
              <CardText>{user.firstName}</CardText>
              <CardText>{user.lastName}</CardText>
              <CardText>{user.username}</CardText>
              <CardText>{user.email}</CardText>
              <Button color="primary" onClick={toggleUpdateForm}>
                Update
              </Button>
            </CardBody>
          </Card>
        </Col>
      </div>
      {showUpdateForm && <UpdateProfileForm user={user} />}
    </div>
  );
};

export default Profile;
