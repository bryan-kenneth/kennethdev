import resume from './MunozResume.pdf';
import './App.css';

function App() {

    return (
        <div className="App">
            <header className="App-header">
                Hello World
                <button onClick={() => window.open(resume, '_blank')}>
                    Resume
                </button>
            </header>
        </div>
    );
}

export default App;
