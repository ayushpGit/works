import React, { useEffect, useState } from "react";
import Nav from "../components/nav";
import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";

const SubWorks = () => {
  const { id } = useParams();
  // const { data: work, error } = useFetch("http://localhost:8001/works/" + id);
  const { data: work, error } = useFetch(
    "https://cpt-web.ryuuzu.xyz/works/" + id
  );

  const [images, setImages] = useState([]);

  useEffect(() => {
    work?.gallery && setImages(work.gallery);
  }, [work?.gallery]);

  return (
    <>
      <div>
        <a href="/">go back</a>
      </div>
      {work ? (
        <div className="container pt-5">
          <div className="row">
            {/* left */}
            <div className="col-lg-6 works-top-left">
              {/* title */}
              <h2 className="sub-heading pb-2 caps">{work.category}</h2>
              <h1 className="heading text-capitalize">
                {work.title} — {work.titleDesc}
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
                  {work.role}
                </li>
              </ul>
              {/* client */}
              <h2 className="sub-heading pb-2 pt-5 caps">Client</h2>
              <div className="small">{work.title}</div>
              {/* year */}
              <h2 className="sub-heading pb-2 pt-5 caps">Year</h2>
              <div className="small">{work.date}</div>
            </div>

            {/* right */}
            <div className="col-lg-6 works-top-right">
              <p className="works-p">{work.desc}</p>
            </div>

            {/* bottom */}
            <div className="col-12 pt-5">
              <img
                className="subworks-img"
                src={require(`../assets/images/${work.img}-inside.jpg`)}
                alt=""
              />
              {/* images from the data dictionary */}
              {images.map((image) => (
                <img
                  key={image}
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
