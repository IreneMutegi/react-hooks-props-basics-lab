// App.js
import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user"; // Import the user data

function App() {
  return (
    <div>
      <NavBar />
      {/* Pass data to the Home component */}
      <Home 
        name={user.name} 
        city={user.city} 
        bio={user.bio} 
        color={user.color} 
        links={user.links} 
      />
      
      {/* Pass bio, github, and linkedin to the About component */}
      <About 
        bio={user.bio} 
        github={user.links.github} 
        linkedin={user.links.linkedin} 
      />
    </div>
  );
}

export default App;
