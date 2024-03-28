import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Works from "../pages/works";

// for testing
import Playground from "../pages/playground/playground";

import NotFound from "../pages/notFound";
import Home from "../pages/home";
import ToTop from "./scrollToTop";
import SubWorks from "../pages/subWorks";

const Routing = () => {
  return (
    <Router>
      <ToTop />

      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route exact path="/works" element={<Works />} />
        <Route exact path="/works/:id" element={<SubWorks />} />

        <Route exact path="/playground" element={<Playground />} />

        {/* default routes for invalid links */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Routing;
