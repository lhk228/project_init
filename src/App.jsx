import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import MainLayout from "./component/MainLayout.jsx";
import Forbidden from "./page/Forbidden.jsx";
import Main from "./page/Main.jsx";
import { useEffect } from "react";

const queryClient = new QueryClient();
function App() {
  useEffect(() => { 
    window.addEventListener("keyup",function(e){
      if(e.key === "F4"){
        document.querySelector("div").style.outline = "1px solid red";
      }
    });
  }, [])

  return (
    <>
    <div>헤이</div>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route exact path="/forbidden" element={<Forbidden />} />
        <Route element={<MainLayout />}>
          <Route exact path="/main" element={<Main />} />
        </Route>

      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
    </>
  );
}

export default App;
