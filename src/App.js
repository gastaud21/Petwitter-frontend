import { Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from "./context/auth-context";
import Login from "./routes/Login";
import Layout from "./components/Layout";
import PublicPage from "./routes/PublicPage";
import ProtectedPage from "./routes/ProtectedPage";
import SingnUp from "./routes/SingnUp";
import Home from "./routes/Home";
import MyProfile from "./routes/myProfile";
import OtherProfile from "./routes/otherProfile";
import { ChangeContextProvider } from "./context/petweetChange-context";

function App() {
  return (
    <AuthProvider>
      <ChangeContextProvider>
        {/*ChangeContextProvider tava no do luka */}
        <Routes>
          {/* <Route path="/singnUp" element={<SingnUp />} />
          <Route path="/login" element={<Login />} />
          <Route
            element={
              <RequireAuth>
                <Layout />
              </RequireAuth>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<MyProfile />}></Route>
            <Route path="/user" element={<OtherProfile />} />
          </Route> */}

          <Route path="/login" element={<Login />} />
          <Route path="singnup" element={<SingnUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/myProfile" element={<MyProfile />} />
          <Route path="/otherProfile" element={<OtherProfile />} />
          <Route element={<Layout />}>
            <Route path="/" element={<PublicPage />} />
            <Route
              path="/protected"
              element={
                <RequireAuth>
                  <ProtectedPage />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </ChangeContextProvider>
    </AuthProvider>
  );
}

export default App;
