import Hello from "../src/components/Hello";

function App() {
  const person = {
    name: "Mohammad Ashraf",
    message: "Hi I love you",
    emoji: "👋",
    seatNumbers: [1, 5, 8],
  };
  return (
    <div className="App">
      <Hello person={person} />
      <Hello person={person} />
    </div>
  );
}
// js extension=> combine html and js

export default App;
