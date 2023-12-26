import React from "react";
import { Card, CardBody, CardTitle, CardText} from "reactstrap";

const JobCard = ({job}) => {
    <Card>
    <CardBody>
      <CardTitle tag="h5">{job.title}</CardTitle>
      <CardText>{job.salary}</CardText>
    </CardBody>
  </Card>
}

export default JobCard;