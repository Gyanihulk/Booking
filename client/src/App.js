import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import List1 from "./pages/User/List1/List1";
import { hotelColumns, roomColumns, userColumns } from "./datatablesource";
import ListSlot from "./pages/User/ListSlot/ListSlot";
import New from "./pages/User/new/New";
import { hotelInputs, userInputs } from "./formSource";
import Single from "./pages/User/single/Single";
import NewHotel from "./pages/User/newHotel/NewHotel";
import NewRoom from "./pages/User/newRoom/NewRoom";
import Register from "./pages/Register/Register";

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
          <Route path="/" element={<Home />} />
          <Route path="/hotel" element={<List />} />
          <Route path="/hotel/:id" element={<Hotel />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users">
            <Route
              index
              element={
                <ProtectedRoute>
                  <List1 columns={userColumns}/>
                </ProtectedRoute>
              }
            />
            <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={userInputs} title="Add New User" />
                  </ProtectedRoute>
                }
              />
          </Route>
          <Route path="hotels">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List1 columns={hotelColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewHotel inputs={hotelInputs} />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="rooms">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List1 columns={roomColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewRoom  />
                  </ProtectedRoute>
                }
              />
            </Route>
          <Route path="/slots">
            <Route
              index
              element={
                <ProtectedRoute>
                  <ListSlot />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
