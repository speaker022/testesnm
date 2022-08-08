import React from 'react';
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Album from './pages/Album';
import './App.css';
import { Layout } from 'antd';
import METALEAR from "./images/METALEAR.png";
import { SearchOutlined, DownCircleOutlined } from "@ant-design/icons";
import AudioPlayer from "./components/AudioPlayer";

const { Footer, Sider, Content } = Layout;

const App = () => {
  const [nftAlbum, setNftAlbum] =useState();
  return (
    <Layout>
    <Layout>
      <Sider width={300} className="sideBar"> 
        <img src={METALEAR} alt="logo" className="logo"></img>  
        <div className="searchBar">
                     <span> Search </span>
        <SearchOutlined  style={{ fontSize: "30px" }} /> 
        </div>
        <Link to="/">
            <p style={{ color: "#D86525" }}> Home </p>
            <p style={{ color: "#D86525" }}> Album </p>            
            </Link>
            
            <p style={{ color: "#D86525" }}> You Music </p>
            <p style={{ color: "#D86525" }}> My Colection </p>
            <p style={{ color: "#D86525" }}> Open Sea </p>
            <p style={{ color: "#D86525" }}> Bloco Genesis </p>
            <p style={{ color: "#FFFFFF" }}> METALEAR </p>

            <div className="recentPlayed">
              <p className="recentTitle">RECENTLY PLAYED</p>
              <div className="install">
                <span> Install App </span>
                <DownCircleOutlined style={{ fontSize: "30px" }} />
              </div>
            </div>
       </Sider>
      <Content className="contentWindow">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album" element={<Album setNftAlbum={setNftAlbum}/>} />
      </Routes>
      </Content>
    </Layout>
    <footer className="footer">
      {nftAlbum &&
      <AudioPlayer nftAlbum={nftAlbum}/>
      }
    </footer>
    </Layout>
  )
};

export default App;
