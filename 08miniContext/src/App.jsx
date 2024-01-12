import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>hello world</h1>
    </UserContextProvider>
  );
}

export default App;
