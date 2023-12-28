import React, { useState } from "react";
import { Button, Card, CardText, CardTitle, Col, Form, FormGroup, Label, Input } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { handleInputChange } from "../helpers/formHelpers";
import JoblyApi from "../helpers/API";

const UpdateProfileForm = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);
  const user = useParams()
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await JoblyApi.updateProfile(user, formData);
    if (result.success) {
      navigate("/users/:username");
    } else {
      navigate("/");
    }
  };

  return (
    <div>

      <div className="container">
        <Col sm="6">
          <Card>
            <CardTitle>
              <h4>Signup</h4>
            </CardTitle>
            <CardText>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    type="text"
                    onChange={(e) => handleInputChange(e, setFormData)}
                    value={formData.firstName}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    type="text"
                    onChange={(e) => handleInputChange(e, setFormData)}
                    value={formData.lastName}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    onChange={(e) => handleInputChange(e, setFormData)}
                    value={formData.email}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="username">Username</Label>
                  <Input
                    id="username"
                    name="username"
                    placeholder="Username"
                    type="text"
                    onChange={(e) => handleInputChange(e, setFormData)}
                    value={formData.username}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    placeholder="Password"
                    type="password"
                    onChange={(e) => handleInputChange(e, setFormData)}
                    value={formData.password}
                  />
                </FormGroup>
                <Button color="primary" outline>
                  Submit
                </Button>
              </Form>
            </CardText>
          </Card>
        </Col>
      </div>
    </div>
  );
};

export default UpdateProfileForm;

