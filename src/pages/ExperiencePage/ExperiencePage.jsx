import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { experienceData } from "../data";
import SearchResultLinks from "../../components/SearchResultLinks/SearchResultLinks";
import { useNavigate } from "react-router-dom";

const ExperiencePage = () => {
  const [openComponent, setOpenComponent] = useState("");

  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      {openComponent === "" &&
        experienceData.map((item, key) => {
          return (
            <div onClick={() => navigate(item.path)}>
              <SearchResultLinks
                key={key}
                url={item.url}
                title={item.title}
                description={item.description}
              />
            </div>
          );
        })}
    </div>
  );
};

export default ExperiencePage;
