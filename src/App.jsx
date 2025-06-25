import React, { useState } from "react";
import User from "./User";

const App = () => {
  const [load, setLoad] = useState(false);
  return (
    <>
      <div>Lazy Loading</div>
      {/* we want this componet to laod only button cick but it still loading on initials which consumes time */}
      {load ? <User /> : ""}
      <button onClick={() => setLoad(true)}>Load User</button>
    </>
  );
};

export default App;
