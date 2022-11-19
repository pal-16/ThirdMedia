import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/LandingPage/Home';
import Profile from './components/Profile';
import CardList from './components/CardList';
import { hotDropsData } from './constants/MockupData';
import { DAppProvider } from "@usedapp/core";
import "./index.css";
import Explore from './pages/Explore';
import AnalysisCreator from './components/AnalysisCreator';
import AnalysisFan from './components/AnalysisFan';
import Feed from './components/Feed';
import styles from "./style";
import NFTDetail from "./pages/NFTDetail"
function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />


        <Route path="/explore" element={<Explore />} />
        <Route
          path="/profile"
          element={
            <DAppProvider config={{}}>
              <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <Navbar />
                </div>
              </div>

              <Profile />
              <CardList list={hotDropsData} />
            </DAppProvider>
          }
        />

        <Route
          path="/feed"
          element={
            <DAppProvider config={{}}>
              <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <Navbar />
                </div>
              </div>
              <Feed list={hotDropsData} />
            </DAppProvider>
          }
        />

        <Route
          path="/analysis/creator"
          element={
            <DAppProvider config={{}}>
              <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <Navbar />
                </div>
              </div>
              <AnalysisCreator />
            </DAppProvider>
          }
        />
        <Route
          path="/analysis/fan"
          element={
            <DAppProvider config={{}}>
              <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <Navbar />
                </div>
              </div>
              <AnalysisFan />
            </DAppProvider>
          }
        />
        <Route
          path="/profile"
          element={
            <DAppProvider config={{}}>
              <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <Navbar />
                </div>
              </div>
              <Profile />
            </DAppProvider>
          }
        />
        <Route
          path="/detail"
          element={
            <DAppProvider config={{}}>
              <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <Navbar />
                </div>
              </div>
              <NFTDetail />
            </DAppProvider>
          }
        />

      </Routes>

    </Router>

  )
}

export default App
