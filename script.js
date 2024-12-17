/* styles.css */
body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: #f8f5e9; /* 이미지와 비슷한 배경색 */
    font-family: Arial, sans-serif;
  }
  
  .background {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  
  /* 랜덤 도트 스타일 */
  .dot {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #6bcf63; /* 초록색 도트 */
    border-radius: 50%;
    cursor: pointer;
    animation: float 5s infinite ease-in-out;
  }
  
  /* 고정된 보라색 도트 스타일 */
  .fixed-dot {
    position: fixed; /* 화면에서 고정 */
    top: 20px; /* 화면 상단에서 20px */
    left: 20px; /* 화면 왼쪽에서 20px */
    width: 50px; /* 크기 증가 */
    height: 50px; /* 크기 증가 */
    background-color: #9b59b6; /* 보라색 */
    border-radius: 50%; /* 원형 유지 */
    z-index: 1000; /* 다른 요소 위에 표시 */
    cursor: pointer;
    animation: none; /* 애니메이션 제거 */
  }
  
  /* 팝업 스타일 */
  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    display: none; /* 기본적으로 숨김 */
    z-index: 1000;
  }
  
  .popup-content {
    text-align: center;
  }
  
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
  }
  
  /* 팝업 링크 스타일 */
  #popup-link {
    display: block;
    margin-top: 10px;
    text-align: center;
    text-decoration: none;
    color: #3498db;
    font-weight: bold;
  }
  
  #popup-link:hover {
    color: #2980b9;
  }
  
  /* 도트 애니메이션 */
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  