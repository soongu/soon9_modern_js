# Modern Javascript

### ajax 실습시 JSON Server 설치(가상 Rest Api)
```shell script
$ mkdir json-server-exam && cd json-server-exam
$ npm init -y
$ npm install json-server --save-dev
```

- package.json에 추가
```json
"scripts": {
    "start": "json-server --watch db.json --port 5000"    
  },
```
`$ npm start`로 서버실행

---

### babel 설치
```shell script
$ npm init -y
$ npm install -D @babel/core @babel/cli @babel/preset-env
```

- 불필요한 설정을 제거한 package.json 설정
```json
{
  "name": "packaging-test",
  "version": "1.0.0",  
  "devDependencies": {
    "@babel/cli": "^7.12.1",
    "@babel/core": "^7.12.3",
    "@babel/preset-env": "^7.12.1"
  }
}
```

- babel.config.json 파일 추가 후 아래와 같이 작성
```json
{
  "presets": ["@babel/preset-env"]
}
```

- 트랜스 파일링을 위해 package.json에 아래 설정 추가
```json
{
 
 ...
 
 "version": "1.0.0",
  "scripts": {
    "build" : "babel src/js -w -d dist/js"
  },

  ...
}
```

- `$ npm run build`로 트랜스파일링 실행

---

### Webpack 설치

`$ npm install -D webpack webpack-cli`

- webpack이 모듈을 번들링할 때 babel을 사용하도록 설정
`$ npm install -D babel-loader`

- package.json
```json
{
  "name": "packaging-test",
  "version": "1.0.0",
  "scripts": {
    "build": "webpack -w"
  },
  "devDependencies": {
    "@babel/cli": "^7.12.1",
    "@babel/core": "^7.12.3",
    "@babel/preset-env": "^7.12.1",
    "babel-loader": "^8.1.0",
    "webpack": "^5.1.3",
    "webpack-cli": "^4.0.0"
  }
}
```

- webpack.config.js
```js
const path = require('path');

module.exports = {
    // entry file
    // https://webpack.js.org/configuration/entry-context/#entry
    entry: './src/js/main.js',
    // 번들링된 js 파일의 이름과 저장경로를 지정
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    },
    // https://webpack.js.org/configuration/module
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src/js')
                ],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    devtool: 'source-map',
    mode: 'development'
}
```

- `npm run build`