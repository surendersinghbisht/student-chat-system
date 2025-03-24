import { data, Navigate, Route, Routes } from "react-router-dom"
import SignUpPage from "./Pages/SignUpPage"
import LandingPage from "./Pages/LandingPage"
import { useQuery } from "@tanstack/react-query"
import {axiosInstance} from "../api/api"
import toast, { Toaster } from "react-hot-toast"
import { IUser } from "./models/User"
import LoginPage from "./Pages/LoginPage"
function App() {

  const { data: authUser, isLoading, isError, error } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/auth/me");
        console.log("Fetched user data:", res.data);
        return res.data;
      } catch (error: any) {
        console.error("Error fetching user:", error?.response?.data || error);
        throw new Error(error?.response?.data?.message || "Failed to fetch user");
      }
    },

    onError: (error: any) => {
      console.error("useQuery Error:", error.message);
      toast.error(error.message || "Failed to fetch user data");
    },
  });

  if(isLoading) return null;
  
  return (
    <div>
      <Routes>
        <Route path="/" element={authUser?<LandingPage />:<SignUpPage />}/>
        <Route path="/signup" element={!authUser? <SignUpPage />: <Navigate to="/" />} />
        <Route path="/login" element={!authUser? <LoginPage />: <Navigate to="/" />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
