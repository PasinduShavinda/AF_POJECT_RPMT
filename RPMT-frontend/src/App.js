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

import Sug_page from "./components/sug_page";
import Sug_AllPanels from "./components/sug_panel/sug_AllPanel";
import Sug_CreatePanel from "./components/sug_panel/Sug_CreatePanel";
import FirstPage from "./components/sug_FirstPage/sug_FirstPage";

import TopicHeader from "./components/shv_rs_topic_file/shv_topic_file_header";
import TopicHome from "./components/shv_rs_topic_file/shv_topic_file_home";
import TopicFilesList from "./components/shv_rs_topic_file/shv_topic_file_list";

import ResDocFilesList from "./components/shv_rs_res_document/shv_ResDocFilesList";
import ResDocHeader from "./components/shv_rs_res_document/shv_ResDocHeader";
import ResDocHome from "./components/shv_rs_res_document/shv_ResDocHome";

import ThesisDocHome from "./components/shv_rs_thesis_document/shv_ThesisDocHome";
import ThesisDocHeader from "./components/shv_rs_thesis_document/shv_ThesisDocHeader";
import ThesisDocFilesList from "./components/shv_rs_thesis_document/shv_ThesisDocFilesList";

import MarkingSchemeHome from "./components/shv_rs_admin_marking_scheme/shv_marking_scheme_home";
import MarkingSchemeHeader from "./components/shv_rs_admin_marking_scheme/shv_marking_scheme_header";
import MarkingSchemeList from "./components/shv_rs_admin_marking_scheme/shv_marking_scheme_List";

import TemplateHome from "./components/shv_rs_admin_templates/shv_template_home";
import TemplateHeader from "./components/shv_rs_admin_templates/shv_template_header";
import TemplateList from "./components/shv_rs_admin_templates/shv_template_List";

//...........udara............
import UD_Login from "./components/Login/UD_Login";
import UD_SignUp from "./components/SignUp/UD_SignUp";
import UD_Student from "./components/Student/UD_Student";

import UD_PenalLogin from "./components/UD_PenalLogin/UD_PenalLogin";
import UD_PenalSignUp from "./components/UD_PenalSignUp/UD_PenalSignUp";
import UD_Penalmember from "./components/Penalmember/UD_Penalmember";

import UD_SuperLogin from "./components/UD_SuperLogin/UD_SupervisorLogin";
import UD_SuperSignUp from "./components/Ud_SuperSignUp/UD_SuperSignUp";
import UD_Supervisor from "./components/Supervisor/UD_Supervisor";

import UD_Dashboard from "./components/Dashboard/UD_Dashboard";

function App() {
  return (
    <React.Fragment>
      <header></header>
      <main>
        <Routes>
          <Route path="/" element={<FirstPage />} exact />
          <Route path="/shv_page" element={<Home />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/addRsTopics" element={<Shv_rs_add_rs_topic />} exact />
          <Route path="/RsTopics" element={<Shv_rs_topics_student />} exact />
          <Route
            path="/RsTopics/:id"
            element={<Shv_rs_topic_details_update />}
            exact
          />

          <Route
            path="/RsTopicsSupervisor"
            element={<Shv_rs_topics_supervisor />}
            exact
          />

          <Route
            path="/addRsTopicsNotice"
            element={<Shv_res_topic_notice_admin_add />}
            exact
          />

          <Route
            path="/RsTopicsNotices"
            element={<Shv_res_topic_notices_admin />}
            exact
          />

          <Route
            path="/RsTopicsNotice/:id"
            element={<Shv_res_topic_notice_admin_update />}
            exact
          />

          <Route
            path="/RsTopicsNoticesStudent"
            element={<Shv_res_topic_notices_student />}
            exact
          />

          <Route path="/sug_page" element={<Sug_page />} exact />
          <Route path="/allPanel" element={<Sug_AllPanels />} exact />
          <Route path="/createPanel" element={<Sug_CreatePanel />} exact />

          <Route path="/RsTopicFileHome" element={<TopicHome />} exact />
          <Route path="/RsTopicFileHeader" element={<TopicHeader />} exact />
          <Route path="/RsTopiFileList" element={<TopicFilesList />} exact />

          <Route path="/RsDocHome" element={<ResDocHome />} exact />
          <Route path="/RsDocHeader" element={<ResDocHeader />} exact />
          <Route path="/RsDocFilesList" element={<ResDocFilesList />} exact />

          <Route path="/ThesisHome" element={<ThesisDocHome />} exact />
          <Route path="/ThesisHeader" element={<ThesisDocHeader />} exact />
          <Route
            path="/ThesisFilesList"
            element={<ThesisDocFilesList />}
            exact
          />

          <Route path="/MSchemeHome" element={<MarkingSchemeHome />} exact />
          <Route
            path="/MSchemeHeader"
            element={<MarkingSchemeHeader />}
            exact
          />
          <Route path="/MSchemeList" element={<MarkingSchemeList />} exact />

          <Route path="/TemplateHome" element={<TemplateHome />} exact />
          <Route path="/TemplateHeader" element={<TemplateHeader />} exact />
          <Route path="/TemplateList" element={<TemplateList />} exact />

          {/* ........................................... */}
          <Route path="/login" element={<UD_Login />} exact />
          <Route path="/signup" element={<UD_SignUp />} exact />
          <Route path="/student" element={<UD_Student />} exact />

          <Route path="/penalmemberlogin" element={<UD_PenalLogin />} exact />
          <Route path="/penalmembersignup" element={<UD_PenalSignUp />} exact />
          <Route path="/penalmember" element={<UD_Penalmember />} exact />

          <Route path="/supervisorlogin" element={<UD_SuperLogin />} exact />
          <Route path="/supervisorsignup" element={<UD_SuperSignUp />} exact />
          <Route path="/supervisor" element={<UD_Supervisor />} exact />

          <Route path="/dashboard" element={<UD_Dashboard />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
