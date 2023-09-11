import React, { useEffect } from "react";
import Navbar from "./components";
import Pioneer from './Pioneer';
function App() {
  useEffect(() => {
    console.log("hello world");
  }, []);

  return (
    <div className="background-transition">
      <Navbar />
      <Pioneer />
    </div>
  );
}

export default App;