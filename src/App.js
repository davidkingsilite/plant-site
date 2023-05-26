import React from "react";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import About from "./routes/About";
import RegisterRoute from "./routes/RegisterRoute";
import LoginRoute from "./routes/LoginRoute";
import Dashboard from "./routes/Dashboard";
import Missing from "./routes/Missing";
import Unauthorized from "./routes/Unauthorized";
import Editor from "./routes/Editor";
import Admin from "./routes/Admin";
import Lounge from "./routes/Lounge";
import "./styles.css";
import RequireAuth from "./components/RequireAuth";
import Layout from "./components/Layout";


const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

 const App = () => (
    <Router>
    <div className="App">
     
      <Routes>
      <Route path="/" element={<Layout />}> 
         {/*Public Routes*/}
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service /> }/>
      <Route path ="/contact" element={<Contact /> }/>
      <Route path ="/about" element={<About /> }/>
      <Route path ="/register" element={<RegisterRoute /> }/>
      <Route path ="/login" element={<LoginRoute /> }/> 
      <Route path ="/unauthorized" element={<Unauthorized /> }/> 

          {/* protected Routes */}
      <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>  
        <Route path ="/dashboard" element={<Dashboard /> }/>
      </Route>  

      <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
        <Route path="/editor" element={<Editor />} />
      </Route>

      <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
        <Route path="/dashboard/admin" element={<Admin />} />
      </Route>

      <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}>
        <Route path="/lounge" element={<Lounge />} />
      </Route>

          {/* catch all  */}
      <Route path="*" element={<Missing /> }/>
      </Route>  
      </Routes>

    </div>
    </Router>
 )

export default App;
