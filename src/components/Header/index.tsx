import React from "react";
import useStore from "store/useStore";
import { observer } from "mobx-react";

import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const { ConfigStore } = useStore();

  return (
    <header className={styles.header}>
      <p>
        Edit <code>src/App.js</code>
      </p>
      <a
        style={{ color: ConfigStore.themeColor }}
        className={styles.header__link}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
};

export default observer(Header);
