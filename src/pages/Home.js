import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h1>홈페이지</h1>
      <p>모든 요소들의 크기가 화면 크기에 따라 자동으로 조절됩니다.</p>
      <div className="button-group">
        <Link to="/about" className="btn btn-primary">About 페이지로</Link>
        <Link to="/contact" className="btn btn-primary">Contact 페이지로</Link>
      </div>
    </div>
  );
}

export default Home;
