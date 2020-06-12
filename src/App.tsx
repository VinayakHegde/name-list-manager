import * as React from "react";
import AppContainer from "./components/app-container";

export const App: React.FC<{}> = () => {
  return (
    <>
      <header>Name List Manager</header>
      <main className="app">
        <AppContainer />
      </main>
    </>
  );
};
