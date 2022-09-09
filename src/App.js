import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthForm } from "./components/AuthForm";
import { Layout } from "./components/Layout";
import { PrivateRoute } from "./components/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";
import { ResultPage } from "./pages/ResultPage";
import { VotePage } from "./pages/VotePage";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthForm />} />
          <Route path="*" element={<h1>404</h1>} />
          {/* private route  */}
          <Route path="/home" element={<PrivateRoute element={<Layout />} />}>
            <Route
              path="/home/vote"
              element={<PrivateRoute element={<VotePage />} />}
            />
            <Route
              path="/home/result"
              element={<PrivateRoute element={<ResultPage />} />}
            />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
