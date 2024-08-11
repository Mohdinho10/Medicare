import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";
import DoctorsPage from "./pages/Doctor/DoctorsPage";
import DoctorDetails from "./pages/Doctor/DoctorDetails";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import axios from "axios";
import { UserProvider } from "./context/UserContext";
import UserProfile from "./pages/UserProfile";
import Dashboard from "./pages/Doctor/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";
import CheckoutSuccess from "./pages/Doctor/CheckoutSuccess";

axios.defaults.withCredentials = true;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/doctors" element={<DoctorsPage />} />
              <Route path="/doctors/:id" element={<DoctorDetails />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="checkout-success" element={<CheckoutSuccess />} />
              <Route
                path="/users/profile"
                element={
                  <ProtectedRoutes allowedRoles={["patient"]}>
                    <UserProfile />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/doctor/profile"
                element={
                  <ProtectedRoutes allowedRoles={["doctor"]}>
                    <Dashboard />
                  </ProtectedRoutes>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        closeOnClick
        pauseOnHover={false}
      />
    </QueryClientProvider>
  );
}

export default App;
