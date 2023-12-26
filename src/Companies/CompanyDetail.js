import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../helpers/API";
import {  Card, CardBody, CardTitle, CardText, Col } from "reactstrap";


const CompanyDetail = () => {
    const { handle } = useParams();
    const [company, setCompany] = useState([]);
    

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await JoblyApi.getCompany(handle);
          setCompany(response);
        } catch (error) {
          console.error("Error fetching company:", error);
        }
      }
  
      fetchData();
    }, [handle]);
  
    return (
      <div>
        <div className="container">
            <Col sm="6" key={company.handle}>
              <Card>
                <CardBody>
                  <CardTitle tag="h5">{company.name}</CardTitle>
                  <CardText>{company.description}</CardText>
                  <CardText>Employee Count: {company.num_employees}</CardText>
                </CardBody>
              </Card>
            </Col>
        </div>
      </div>
    );
}

export default CompanyDetail;