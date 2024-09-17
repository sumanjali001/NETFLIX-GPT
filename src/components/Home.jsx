import { Outlet, useNavigate } from "react-router-dom";
import Login from "./Login";

function Home() {
  return (
    <div>
      <Login />
      <Outlet />
    </div>
  );
}

export default Home;
