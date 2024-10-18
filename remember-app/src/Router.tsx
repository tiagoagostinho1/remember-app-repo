import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login.page";
import { SignUp } from "./pages/SignUp.page";
import { RememberForm } from "./components/RememberForm";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<RememberForm />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
    </Routes>
  );
};
