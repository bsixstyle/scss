import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Aside from "./components/Aside";
import Box from "./components/Box";
import Buttons from "./components/Buttons";
import Collapse from "./components/Collapse";
import Dropdown from "./components/Dropdown";
import Form from "./components/Form";
import Grid from "./components/Grid";
import Header from "./components/Header";
import HeaderNav from "./components/HeaderNav";
import Home from "./components/Home";
import Install from "./components/Install";
import Modal from "./components/Modal";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import Table from "./components/Table";
import Tab from "./components/Tab";
import Themes from "./components/Themes";
import Typography from "./components/Typography";
import Footer from "./components/Footer";
import FooterNav from "./components/FooterNav";
import LinkPage from "./components/LinkPage";

// import "./scss/bsix.scss";
// import "./scss/theme/bsix-themes.scss";

// import "./cssmin/bsix.css";
// import "./cssmin/theme/bsix-themes.css";

import "./scss/prism.scss";

function App() {
  let hashHistory = Router.hashHistory;
  return (
    <Router basename={process.env.PUBLIC_URL} history={hashHistory}>
      <Aside />
      <div className="c10 m2">
        <Header />
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/box" component={Box} />
          <Route exact path="/buttons" component={Buttons} />
          <Route exact path="/collapse" component={Collapse} />
          <Route exact path="/dropdown" component={Dropdown} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/footer" component={FooterNav} />
          <Route exact path="/grid" component={Grid} />
          <Route exact path="/headernav" component={HeaderNav} />
          <Route exact path="/install" component={Install} />
          <Route exact path="/linkpage" component={LinkPage} />
          <Route exact path="/modal" component={Modal} />
          <Route exact path="/navigation" component={Navigation} />
          <Route exact path="/sidebar" component={Sidebar} />
          <Route exact path="/tab" component={Tab} />
          <Route exact path="/table" component={Table} />
          <Route exact path="/themes" component={Themes} />
          <Route exact path="/typography" component={Typography} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
