import { FrontOfficeRuters} from "./router/FrontOfficeRuters";
import { BackOfficeRuters} from "./router/BackOfficeRuters";

function App() {
  return (
    <>
      <FrontOfficeRuters />
      <BackOfficeRuters />
    </>
  );
}

export default App;
