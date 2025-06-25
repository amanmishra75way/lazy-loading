import React, { lazy, Suspense, useState } from "react";
// import User from "./User";
const User = lazy(() => import("./User")); // Import like thsis
import Loader from "./Loader";
const App = () => {
  const [load, setLoad] = useState(false);
  return (
    <>
      <div>Lazy Loading</div>
      {/* we want this componet to laod only button cick but it still loading on initials which consumes time */}
      {load ? (
        <Suspense fallback={<Loader />}>
          <User />
        </Suspense>
      ) : (
        ""
      )}
      <button className="border border-black " onClick={() => setLoad(true)}>
        Load User
      </button>
    </>
  );
};

export default App;
