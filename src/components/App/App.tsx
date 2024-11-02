import AdversaryCard from '@/components/AdversaryCard';
// import AdversaryForm from '@/components/AdversaryForm';
import './App.scss';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App__header">
                <h1 className="App__title">The One Ring</h1>
                <h2 className="App__subtitle">Adversary Card Generator</h2>
            </header>
            <div className="App__content">
                {/* <section className="App__section">
                    <AdversaryForm />
                </section> */}
                <section className="App__section">
                    <AdversaryCard />
                </section>
            </div>
        </div>
    );
};

export default App;
