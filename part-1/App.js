function App() {
  return (
  <div>
    <FirstComponent />
    <NamedComponent name="Kevin" />
  </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));