
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login/Login";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import List1 from "./pages/User/List1/List1";
import { hotelColumns, roomColumns, userColumns } from "./datatablesource";
function App() {
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/users" >
              <Route index element={<ProtectedRoute><List1  /></ProtectedRoute>}/>
              
              </Route>
            
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
