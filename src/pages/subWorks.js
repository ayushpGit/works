import React, { useEffect, useState } from "react";
import Nav from "../components/nav";
import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import { FaArrowLeft } from "react-icons/fa";

const SubWorks = () => {
  const { id } = useParams();
  // const { data: work, error } = useFetch("http://localhost:8001/works/" + id);
  const { data: work, error } = useFetch(
    "https://ayushp.com.np/worksapi/worksApi.json"
  );
  const [project, setProject] = useState(work);

  useEffect(() => {
    setProject(work?.filter((project) => project.id.includes(id)));
  }, [work, id]);

  return (
    <>
      <div className="p-5">
        <a href="/">
          <FaArrowLeft />
          &nbsp;go back
        </a>
      </div>
      {project ? (
        <div className="container pt-5">
          <div className="row">
            {/* left */}
            <div className="col-lg-6 works-top-left">
              {/* title */}
              <h2 className="sub-heading pb-2 caps">{project[0].category}</h2>
              <h1 className="heading text-capitalize">
                {project[0].title} — {project[0].titleDesc}
              </h1>
              {/* role */}
              <h2 className="sub-heading pb-2 pt-5 caps">Our role</h2>
              <ul
                className="small text-capitalize "
                style={{
                  padding: "0",
                }}
              >
                <li>
                  Creative Direction
                  <br />
                  {project[0].role}
                </li>
              </ul>
              {/* client */}
              <h2 className="sub-heading pb-2 pt-5 caps">Client</h2>
              <div className="small">{project[0].title}</div>
              {/* year */}
              <h2 className="sub-heading pb-2 pt-5 caps">Year</h2>
              <div className="small">{project[0].date}</div>
            </div>

            {/* right */}
            <div className="col-lg-6 works-top-right">
              <p className="works-p">{project[0].desc}</p>
            </div>

            {/* bottom */}
            <div className="col-12 pt-5">
              <img
                className="subworks-img"
                src={require(`../assets/images/${project[0].img}-inside.jpg`)}
                alt=""
              />
              {/* images from the data dictionary */}
              {project[0].gallery.map((image, index) => (
                <img
                  key={index}
                  className="subworks-img"
                  src={require(`../assets/images/${image}.jpg`)}
                  alt="mockup"
                />
              ))}
            </div>
          </div>
        </div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default SubWorks;
