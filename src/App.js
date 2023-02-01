import Dropdown from "./Dropdown";
function App() {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gray-300">
      <div className="w-96 h-auto bg-red-600 p-6 rounded-lg shadow-lg">
        <h3>Should you use a dropdown?</h3>
        <Dropdown />
      </div>
    </div>
  );
}

export default App;
