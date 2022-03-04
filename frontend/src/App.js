import { FrontOfficeRouter} from "./routers/FrontOfficeRouter";
import { BackOfficeRouter} from "./routers/BackOfficeRouter";
import SignUp from "./pages/frontoffice/SignUp";

function App() {
  return (
    <>
      <FrontOfficeRouter />
      <BackOfficeRouter />
    </>
  );
}

export default App;
