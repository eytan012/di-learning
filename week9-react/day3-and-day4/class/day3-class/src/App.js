import './App.css';
import Counter from "./Counter";
import ErrorBoundry from "./ErrorBoundry";

function App() {
    return (
        <div className="App">
            <ErrorBoundry>
                <Counter/>
            </ErrorBoundry>

        </div>
    );
}

export default App;

const val=[];
val.forEach(item=>{console.log(item)})