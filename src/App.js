import Dropdown from "./Dropdown";
function App() {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gray-300">
      <div className="w-96 h-72 bg-purple-100 p-6 rounded-lg shadow-lg">
        <h3 className="text-base font-bold text-purple-900">Should you use a dropdown?</h3>
        <Dropdown />
      </div>
    </div>
  );
}

export default App;
