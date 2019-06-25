# WSO2 Identity Server Web Apps Library

End-user apps in WSO2 Identity Server

## How to start

1. Install NodeJS and NPM from [https://nodejs.org/en/download/](https://nodejs.org/en/download/).
2. Download or clone the project source code from [https://github.com/jeradrutnam/wso2is-webapps](https://github.com/jeradrutnam/wso2is-webapps)
3. Install all required npm packages by running `npm install` from the command line in the project root folder (where the package.json is located).
4. Start the application by running `npm start` from the command line in the project root folder, this will launch a browser displaying the application.

#### Run sepearate apps in development mode

- Execute `cd apps/<app> && npm start` command. E.g. `cd apps/user-portal && npm start`.

#### Build sepearate modules

- Execute `cd modules/<module> && npm run build` command. E.g. `cd module/theme && npm run build`.

#### Build project

- Execute `npm run build`. And you will get the built distribution in `dist/wso2is-webapps-$version.zip` upon build complete.

## License

Licenses this source under the Apache License, Version 2.0 ([LICENSE](LICENSE)), You may not use this file except in compliance with the License.
