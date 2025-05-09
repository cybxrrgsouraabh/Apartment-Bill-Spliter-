import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import LoginPage from "./pages/login";
import { SignupPage } from "./pages/signup";
import Homepage from "./pages/homepage";
import { ThemeProvider } from "./components/theme-provider";

function  App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Suspense fallback="loading.....">
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/signup" element={<SignupPage />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
