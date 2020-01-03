# Webpack 사용하기 

## 0. 기본 설정

```shell
# 1 node js 설정하기 -> package.json 에 설정됨.  
$ npm init

# 2. vue 설치
# package.json 에 {"dependencies": "vue": "^2.6.10" } 생겼으면 제대로 된 것
$ npm install vue # === npm i vue 축약어 사용 가능

# .gitignore 에 node_modules 추가하기

# 3. webpack 설치 (-D 는 개발환경에서만 사용하겠다는 옵션) 
# webpack 은 개발자 편의 툴 
$ npm i -D webpack-cli
$ npm i -D webpack
```

```
# package.json에 다음이 생겼으면 제대로 설치된 것

  "devDependencies": {
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.10"
  }
```



```shell
# 4. webpack 설정파일 생성. 
$ touch webpack.config.js # js 파일임 
```



## 1. webpack.config.js 파일에서 `entry` 와 `output` 설정

1. `src` 폴더 생성
   * `src` >`main.js` 와 `App.vue` 생성
   * 각각 코드 작성(파일 참조)
2. `entry` 와 `output` 코드 작성



## 2. 라이브러리 설치 & webpack.config.js 에서 `module` 과 `plugins` 설정

```shell
# 5. webpack 은 js 파일만 변환 가능 --> vue 파일 및 template 을 webpack 이 변환하도록 도와주는 라이브러리 
$ npm install -D vue-loader vue-template-compiler
```



```shell
$ npm run build 
```

* main.js 와 App.vue 를 번들링을 통해 하나의 파일로 압축하여 `dist` 폴더 내 `app.js` 파일로 줌

* `public` > `index.html` 에서 `app.js` 사용할 것 



## 3. public 폴더

1. index.html 파일 작성
2. webpack.config.js 에서 `mode: 'development'` 추가



## 4. loader 추가 설치

```shell
$ npm install vue-style-loader css-loader -D
```

설치 후 webpack.config.js 의 module 의 rules 에 추가 