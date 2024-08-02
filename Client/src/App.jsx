// import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Desktop2 from "./pages/Desktop2";
import Desktop1 from "./pages/Desktop1";
import Desktop from "./pages/Desktop";
import Desktop3 from "./pages/Desktop3";
import SignUp from "./pages/SignUp";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/home" element={<Desktop />} />
      <Route path="/desktop-men" element={<Desktop2 />} />
      <Route path="/desktop-women" element={<Desktop1 />} />
      <Route path="/desktop-quickViews" element={<Desktop3 />} />
    </Routes>
  );
}
export default App;
