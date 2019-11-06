const path = require('path')

// nodejs 에서는 
// 모듈에서 특정 값을 export 할 때 아래와 같이 module.exports 에 export 할 값들 정의
module.exports = {
  // 모든 파일들의 시작점, object 형식 작성   
  entry: {
    // __dirname : 최상위 위치 나타내는 기본변수 - 현재 디렉토리 이름 갖고 있음  
    app: path.join(__dirname, 'src', 'main.js'), // django 의 BASE_DIR 비슷한 역할
  },

  // webpack은 기본적으로 js만 변환 가능 --> CSS나 html 등은 모듈 통해서 webhack이 이해하도록 변환 필요 
  // 변환 내용 작성하는 곳
  module: {},

  // webpack 을 통해 번들된 결과를 추가 처리하는 부분 
  plugins: {},

  // webpack 을 통해 번들된 결과물이 정의되는 부분
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist') // dist라는 폴더 만들어서 export 할 것 

  }
}