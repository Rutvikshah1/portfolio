import { projectData } from "../data";
import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchResultLinks from "../../components/SearchResultLinks/SearchResultLinks";
import { useNavigate } from "react-router-dom";

const ProjectPage = () => {
  const [openComponent, setOpenComponent] = useState("");

  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      {openComponent === "" &&
        projectData.map((item, key) => {
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

export default ProjectPage;
