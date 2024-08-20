import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import AddWidgetModal from "./components/AddWidgetModal";
import "./index.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");

  const openModal = (categoryId) => {
    setCurrentCategory(categoryId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentCategory("");
  };

  return (
    <div className="App">
      <Dashboard openModal={openModal} />
      {isModalOpen && (
        <AddWidgetModal categoryId={currentCategory} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;
