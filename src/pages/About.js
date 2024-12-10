import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="container">
      <h1>About 페이지</h1>
      <h2>반응형 타이포그래피</h2>
      <p>이 텍스트의 크기도 화면 크기에 따라 자동으로 조절됩니다.</p>
      <div className="button-group">
        <button className="btn btn-primary">테스트 버튼</button>
        <Link to="/" className="btn btn-primary">홈으로 돌아가기</Link>
      </div>
    </div>
  );
}

export default About;
