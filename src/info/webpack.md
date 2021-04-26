# Webpack

## webpack-dev-server

- 개발에 특화되어서 페이지를 새로고침시켜주기 위함

## webpack 설정

- clean : 기존내용을 제거하고 새롭게 만듬. (https://webpack.js.org/configuration/output/#outputclean)
- output 의 path 는 절대경로로 명시한다. (https://webpack.js.org/configuration/output/#outputpath)
- devServer : webpack-dev-server 로 실행될 때에 동작을 컨트롤 합니다. (https://webpack.js.org/configuration/dev-server/#devserver)

### plugins

- third party package 를 넣으면 된다.
- https://webpack.js.org/configuration/plugins/#plugins
- webpack plugin 을 추가합니다.

#### html-webpack-plugin

- https://www.npmjs.com/package/html-webpack-plugin
- 결과물을 html에 자동으로 주입해준다.
