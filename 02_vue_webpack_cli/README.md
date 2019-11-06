## 2019-11-06 (수)
# Webpack 사용하기 
```shell
# 1 node js 설정하기 -> package.json 에 설정됨.  
$ npm init

# 2. 
$ npm install vue # === npm i vue 축약어 사용 가능 

# .gitignore 에 node_modules 추가하기

# 3. webpack 설치 (-D 는 개발환경에서만 사용하겠다는 옵션) 
# webpack 은 개발자 편의 툴 
$ npm i -D webpack-cli
$ npm i -D webpack

```

```
# package.json에
  "devDependencies": {
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.10"
  }
```

```shell
# 4. webpack 설정파일 생성. 
$ touch webpack.config.js # js 파일임 
```

* webhack cli : command line interface
--> webhack 한데 명령내리는 기능 
* vue : 

```
`src` > `main.js` 기본 폴더 구조 
* `src` 폴더에 source code 들 모아 놓음 
```

```shell
# 5. webpack 은 js 파일만 변환 가능 --> vue 파일 및 template 을 webpack 이 변환하도록 도와주는 라이브러리 
$ npm install -D vue-loader vue-template-compiler
```

* `public` > `index.html` 에서 `app.js` 사용할 것 