function App() {
    return (
    <div>
        <Tweet name="Kevin T." username="kevint9" date={new Date().toDateString()} message="React is fun"/>
        <Tweet name="Kevin T." username="kevint9" date={new Date().toDateString()} message="React is cool"/>
        <Tweet name="Kevin T." username="kevint9" date={new Date().toDateString()} message="React is fun and cool"/>
    </div>
    );
}
    
ReactDOM.render(<App />, document.getElementById("root"));