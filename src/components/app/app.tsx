import { JSX } from "react";
import styles from './App.module.scss';
import Header from "../header/header";
import { LeftMenu } from "../left-menu/left-menu";
import MainSection from "../main-section/main-section";

export default function App(): JSX.Element {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.center}>
        <LeftMenu />
        <MainSection />
      </div>
    </div>
  );
}
