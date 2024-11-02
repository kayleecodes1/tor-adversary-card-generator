import AdversaryCard from '@/components/AdversaryCard';
import DownloadButton from '@/components/DownloadButton';
import './App.scss';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App__header">
                <h1 className="App__title">The One Ring</h1>
                <h2 className="App__subtitle">Adversary Card Generator</h2>
            </header>
            <div className="App__content">
                <DownloadButton />
                <section className="App__section">
                    <AdversaryCard />
                </section>
            </div>
        </div>
    );
};

export default App;
