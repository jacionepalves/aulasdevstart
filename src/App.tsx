import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/Sign-in";
import MyCart from "./pages/my-cart";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/Sign-up";
import { PrivateRoute } from "./routes/PrivateRoute";
import DashboardLayout from "./routes/dashboard-layout";
import ProfilePage from "./pages/profile";
import RestaurantsPage from "./pages/restaurants";
export default function App() {

  return (
    <BrowserRouter>
      <Routes>
          {/* Rota Publicas */}
          <Route path="/" element={<Home/> }/>
          <Route path="/Signin" element={<SignIn /> }/>
          <Route path="/Signup" element={<SignUp /> }/>
          <Route path="*" element={<NotFound/>}/>

          {/* Rota Privada */}
          <Route
              path="/perfil"
              element={
                  <PrivateRoute>
                      <DashboardLayout />
                  </PrivateRoute>
              }
          >
              <Route index element={<ProfilePage />} />
              <Route path="perfil" element={<ProfilePage />} />
          </Route>

          <Route
              path="/meucarrinho"
              element={
                  <PrivateRoute>
                      <DashboardLayout />
                  </PrivateRoute>
              }
          >
              <Route index element={<MyCart />} />
          </Route>

          <Route
              path="/restaurantes"
              element={
                  <PrivateRoute>
                      <DashboardLayout />
                  </PrivateRoute>
              }
          >
              <Route index element={<RestaurantsPage />} />
          </Route>           
      </Routes>
    </BrowserRouter>  
  );
}