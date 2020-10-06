# Card Game Simulator

![ReactNative](https://img.shields.io/static/v1?label=React%20Native&message=v0.63.2&color=61DAFB&logo=react) ![TypeScript](https://img.shields.io/static/v1?label=TypeScript&message=v3.9.5&color=007ACC&logo=typeScript) ![Docker](https://img.shields.io/static/v1?label=Docker&message=v19.3.13&color=2496ED&logo=docker) ![VSCode](https://img.shields.io/static/v1?label=Visual%20Studio%20Code&message=v1.49.3&color=007ACC&logo=visual-studio-code)

[![NodeJS](https://github.com/2d-rpg/card-game-simulator/workflows/NodeJS/badge.svg)](https://github.com/2d-rpg/card-game-simulator/actions?query=workflow%3ANodeJS) [![CodeQL](https://github.com/2d-rpg/card-game-simulator/workflows/CodeQL/badge.svg)](https://github.com/2d-rpg/card-game-simulator/actions?query=workflow%3ACodeQL)

## How to get started

VSCode の[Remote Container 拡張](https://code.visualstudio.com/docs/remote/containers)の使用を推奨します．  
このプロジェクトをクローンし，VSCode の[Remote Container 拡張](https://code.visualstudio.com/docs/remote/containers)を使用して開く．

```
git clone https://github.com/2d-rpg/card-game-simulator.git
code card-game-simulator
```

以下 Docker コンテナ上で実行

```
yarn install --frozen-lockfile
expo start --tunnel
```

Android, iOS の場合は Expo アプリから表示される QR コードを読みとる．  
Web の場合は w キーを押すと表示される URL からブラウザで開く．  
この状態でコードを変更するとアプリ，ブラウザ上でも変更が即座に適用されます．
