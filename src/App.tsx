import React from 'react';
import './App.css';
import ChessBoard from "./ChessBoard";
import Header from "./Header";

function App() {
  return (
      <div>
        <Header></Header>
        <ChessBoard boardWidth={600}></ChessBoard>
      </div>
  );
}

export default App;
