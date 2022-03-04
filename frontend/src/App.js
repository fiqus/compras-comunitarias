import { FrontOfficeRouter} from "./routers/FrontOfficeRouter";
import { BackOfficeRouter} from "./routers/BackOfficeRouter";

function App() {
  return (
    <>
      <FrontOfficeRouter />
      <BackOfficeRouter />
    </>
  );
}

export default App;
