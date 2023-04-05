function App() {
    return (
    <div>
        <Person name="Kevin" age={10} hobbies={["watching tv", "archery"]}/>
        <Person name="Kyle" age={20} hobbies={["trying new food", "playing video games"]} />
        <Person name="Kurt" age={30} hobbies={["swimming", "cooking"]}/>
    </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));