import React from "react";
import { Card, CardBody, CardTitle, CardText} from "reactstrap";

const CompanyCard = ({company}) => {
            <Card>
              <CardBody>
                <CardTitle tag="h5">{company.name}</CardTitle>
                <CardText>{company.description}</CardText>
                <CardText>Employee Count: {company.numEmployees}</CardText>
              </CardBody>
            </Card>
}

export default CompanyCard;