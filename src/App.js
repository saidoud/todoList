import React from "react";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
import TodoTextInput from "./components/TodoTextInput/TodoTextInput";

function App() {
  return (
    <div className="todoapp">
      {/* Header */}
      <header className="header">
        <h1>Todo</h1>
        <TodoTextInput />
      </header>
      {/* Main Section */}
      <section className="main">
        <TodoList />
      </section>
      {/* Footer */}
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
