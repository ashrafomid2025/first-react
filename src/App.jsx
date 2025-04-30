import Hello from "../src/components/Hello";

function App() {
  return (
    <div className="App">
      <Hello message="Hi there," emoji="😊" name="Hamid" />
      <Hello message="Goodbye," emoji="😍" name="Ali" />
    </div>
  );
}
// js extension=> combine html and js

export default App;
