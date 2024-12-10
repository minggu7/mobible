import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="container">
      <h1>Contact 페이지</h1>
      <h3>연락처 정보</h3>
      <p>여기의 모든 요소들도 반응형으로 동작합니다.</p>
      <form>
        <input type="text" placeholder="이름" className="form-input" />
        <input type="email" placeholder="이메일" className="form-input" />
        <button type="submit" className="btn btn-primary">보내기</button>
      </form>
      <Link to="/" className="btn btn-primary">홈으로 돌아가기</Link>
    </div>
  );
}

export default Contact;
