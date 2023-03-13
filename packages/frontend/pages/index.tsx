import App from "App";
import { JWTAuthProvider } from "contexts/JWTAuth";
import SettingsProvider from "contexts/settingsContext";
import { NextPage } from "next";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const isBrowser = typeof window !== 'undefined';

const Home: NextPage = () => {
  return (
    isBrowser ? (
    <React.StrictMode>
      <SettingsProvider>
        <JWTAuthProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </JWTAuthProvider>
      </SettingsProvider>
  </React.StrictMode>
  ) : (
    <div>
      <p></p>
    </div>
  )
  );
};

export default Home;