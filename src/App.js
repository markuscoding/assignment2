import { Fragment } from "react";

import Header from "./components/Layout/Header";
import Meals860 from "./components/Meals/Meals860";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals860 />
      </main>
    </Fragment>
  );
}

export default App;
