import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/UI/Layout";
import InputPage from "./pages/InputPage";
import MainPage from "./pages/MainPage";

function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' exact element={<MainPage/>}/>
        <Route path='/challenge' element={<InputPage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;