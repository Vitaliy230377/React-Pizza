
function test(){
    return 'Hello World test!';
}

function App() {
    const name = 'React Pizza';

    return (
        <div className="App">
            <h1>Hello World!</h1>
            {alert(123)}
            {name}
            {test()}
        </div>
    );
}

export default App;
