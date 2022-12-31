
import List from "./List";



function App() {
    return(
        <main>
            <section className='container'>
                <h3> 15 birthdays today</h3>
                <List />
                <button>Clear All</button>
            </section>
        </main>
    );
}

export default App;