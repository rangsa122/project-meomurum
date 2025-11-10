import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* 헤더 */}
      <header className="header">
        <h1>🌤️ 날씨 기반 로컬 여행지 추천</h1>
        <div className="search-bar">
          <input type="text" placeholder="지역을 입력하세요 (예: 익산)" />
          <input type="date" />
          <button>추천 보기</button>
        </div>
      </header>

      {/* 메인 */}
      <main className="main">
        <section className="weather-box">
          <h2>예측 날씨</h2>
          <p>익산 · 맑음 ☀️ · 22℃</p>
          <p>체감온도 20℃ · 바람 2m/s</p>
        </section>

        <section className="recommend">
          <h2>추천 여행지</h2>
          <div className="card-list">
            <div className="card">
              <img src="https://picsum.photos/300/180?1" alt="미륵사지" />
              <h3>미륵사지 유적전시관</h3>
              <p>비 오는 날 실내 여행 추천 장소</p>
            </div>

            <div className="card">
              <img src="https://picsum.photos/300/180?2" alt="왕궁보석박물관" />
              <h3>왕궁보석박물관</h3>
              <p>맑은 날 문화탐방 추천</p>
            </div>

            <div className="card">
              <img src="https://picsum.photos/300/180?3" alt="중앙시장" />
              <h3>익산 중앙시장</h3>
              <p>흐린 날, 따뜻한 먹거리와 함께</p>
            </div>
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="footer">
        <p>© 2025 Local Trip — 인구소멸 지역 여행 프로젝트</p>
      </footer>
    </div>
  );
}

export default App;
