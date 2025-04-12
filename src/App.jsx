import Hello from "../src/components/Hello";

function App() {
  return (
    <div className="App">
      <Hello name="Ali" emoji="👋" message="Hi there," />
      <Hello name="Ali Jan" message="Hi there, " emoji="👋" />
    </div>
  );
}

export default App;
