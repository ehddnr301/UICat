# Webpack

## webpack-dev-server

- 개발에 특화되어서 페이지를 새로고침시켜주기 위함

## webpack 설정

- clean : 기존내용을 제거하고 새롭게 만듬. (https://webpack.js.org/configuration/output/#outputclean)
- output 의 path 는 절대경로로 명시한다. (https://webpack.js.org/configuration/output/#outputpath)
- devServer : webpack-dev-server 로 실행될 때에 동작을 컨트롤 합니다. (https://webpack.js.org/configuration/dev-server/#devserver)

### modules

- https://webpack.js.org/configuration/module/
- 프로젝트내 다양한 모듈의 동작을 결정하는 부분
- test 로 매칭해서 use로 패키지를 사용함

#### css-loader

- 자바스크립트에서 css를 해석하는 용도

#### style-loader

- html에 css를 삽입하는 역할

### plugins

- https://webpack.js.org/configuration/plugins/#plugins
- third party package 를 넣으면 된다.
- webpack plugin 을 추가합니다.

#### html-webpack-plugin

- https://webpack.js.org/plugins/html-webpack-plugin/
- 결과물을 html에 자동으로 주입해준다.

#### copy-webpack-plugin

- https://webpack.js.org/plugins/copy-webpack-plugin/
- build dir 로 폴더를 카피해준다. 주로 이미지를 담아두는 static 폴더를 옮기는데 활용되면 좋을듯 함
