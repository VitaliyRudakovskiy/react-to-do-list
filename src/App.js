import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import AppContent from "./components/AppContent";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <div className='container'>
        <Header />
        <AppContent />
      </div>
      <Toaster
        toastOptions={{
          position: "bottom-right",
          duration: "200",
          style: {
            fontSize: "1.3rem",
          },
        }}
      />
    </>
  );
};

export default App;
