import React from "react";
import "./App.scss";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header branding="My brand"></Header>
      <section className="body">
        <h1>This is Body</h1>
      </section>
    </div>
  );
}
export default App;