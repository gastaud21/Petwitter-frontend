import { Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from "./context/auth-context";
import Login from "./routes/Login";
import Layout from "./components/Layout";
// import PublicPage from "./routes/PublicPage";
// import ProtectedPage from "./routes/ProtectedPage";
import SingnUp from "./routes/SingnUp";
import Home from "./routes/Home";
import MyProfile from "./routes/myProfile";
import OtherProfile from "./routes/otherProfile";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/singnUp" element={<SingnUp />} />
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
        </Route>

        {/* <Route path="/home" element={<Home />} />
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
        </Route> */}
      </Routes>
    </AuthProvider>
  );
}

export default App;
