import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

import Shv_rs_add_rs_topic from "./components/shv_rs_topic/shv_rs_add_rs_topic";
import Shv_rs_topics_student from "./components/shv_rs_topic/shv_rs_topics_student";
import Shv_rs_topic_details_update from "./components/shv_rs_topic/shv_rs_topic_details_update";

import Shv_rs_topics_supervisor from "./components/shv_rs_topic/shv_rs_topics_supervisor";

import Shv_res_topic_notice_admin_add from "./components/shv_submission_notices/shv_res_topic_notice_admin_add";
import Shv_res_topic_notices_admin from "./components/shv_submission_notices/shv_res_topic_notices_admin";
import Shv_res_topic_notice_admin_update from "./components/shv_submission_notices/shv_res_topic_notice_admin_update";

import Shv_res_topic_notices_student from "./components/shv_submission_notices/shv_res_topic_notices_student";


function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/addRsTopics" element={<Shv_rs_add_rs_topic />} exact /> 
          <Route path="/RsTopics" element={<Shv_rs_topics_student />} exact />
          <Route path="/RsTopics/:id" element={<Shv_rs_topic_details_update />} exact />

          <Route path="/RsTopicsSupervisor" element={<Shv_rs_topics_supervisor />} exact />

          <Route path="/addRsTopicsNotice" element={<Shv_res_topic_notice_admin_add />} exact />
          
          <Route path="/RsTopicsNotices" element={<Shv_res_topic_notices_admin />} exact />

          <Route path="/RsTopicsNotice/:id" element={<Shv_res_topic_notice_admin_update />} exact />

          <Route path="/RsTopicsNoticesStudent" element={<Shv_res_topic_notices_student />} exact />



        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
