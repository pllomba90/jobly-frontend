import React, { useEffect, useState } from "react";
import JoblyApi from "../helpers/API";
import CompanyCard from "./CompanyCard";
import { Link } from "react-router-dom";
import "./Companies.css"


const Companies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await JoblyApi.getCompanies();
        setCompanies(response);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <div >
        {companies.map((company) => (
          <div key={company.id}>
            <Link to={`/companies/${company.handle}`}>
            <CompanyCard company={company} />
            </Link>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
