import React, {useState} from "react";
import { Button,
        Card,
        CardText,
        CardTitle,
        Col,
        Form,
        FormGroup,
        Label,
        Input } from "reactstrap";
import {useNavigate} from "react-router-dom";
import { handleInputChange } from "../helpers/formHelpers";

const Login = ({login}) =>{

    const [formData, setFormData] = useState({
        username: "",
        password: "",
      });

      const navigate = useNavigate();

      const handleSubmit = async (e) => {
        e.preventDefault();
        let result = await login(formData);
        if (result.success){
          navigate("/");}
      };

    return(
        <div>
            <div className="container">
            <Col sm="6">
            <Card>
                <CardTitle>
                    <h4>Login</h4>
                </CardTitle>
                <CardText>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="username">
                            Username
                        </Label>
                        <Input
                        id="username"
                        name="username"
                        placeholder="username"
                         type="text"
                         onChange={(e) => handleInputChange(e, setFormData)}
                         value={formData.username}
                     />
                    </FormGroup>
                <FormGroup>
                    <Label for="password">
                        Password
                    </Label>
                <Input
                    id="password"
                    name="password"
                    placeholder="Password"
                     type="password"
                     onChange={(e) => handleInputChange(e, setFormData)}
                     value={formData.password}
                    />
                </FormGroup>
                <Button
                color="primary"
                outline
                >
                    Submit
                </Button>
                </Form>
                </CardText>
            </Card>
            </Col>
            </div>
        </div>
    )
}

export default Login;