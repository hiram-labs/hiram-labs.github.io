# React Typescript Scaffold

This is a React App configured and setup up with typescript.

- Bundled with [Webpack](https://webpack.js.org)
- Transpiling with [Babel](https://babeljs.io/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Styling with [Sass](https://sass-lang.com)

---

## Styling

This app allows for modular styling

- For a component with filename **component.tsx**
- Create a stylesheet in same folder as component and name it **'componet.module.scss'**.
- This style sheet can then be imported into the component as **'import styles from './componet.module.scss'**
- To apply the styles from within this stylesheet alone on an element in the component use **className={styles.nameOfClass}**
- To apply multiple classes use **className={cx(styles.nameOfClass, styles.nameOfAnotherClass, 'globalClassAsString')}**

**HINT**

- Dont forget to **import cx from 'classnames'**
- Notice **globalClassAsString** is a string value this means the component will look for this class in a global css stylesheet this project uses **app.scss** in the root directory for this.

---

## Setup

Start a new local workspace in VScode or prefered editor and in the terminal

- git clone https://github.com/hiram-labs/react-typescript-scaffold.git
- cd react-typescript-scaffold
- npm install

## Run

In the **react-typescript-scaffold** directory

- npm start // this will start the dev environment with hot reload and an scss '.d.ts' file maker for module styles
- npm start-no-tsm // this will only start the dev environment and hot reload
- from local browser open http://localhost:3000/

## Build

In the react-typescript-scaffold.git directory

- npm run build

Bundle is available in the **dist** folder
