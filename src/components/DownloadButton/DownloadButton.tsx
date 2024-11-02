import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import './DownloadButton.scss';

const DownloadButton: React.FC = () => {
    const handleClick = async () => {
        const canvas = await html2canvas(document.getElementById('AdversaryCard') as HTMLElement);
        const dataURL = canvas.toDataURL('image/png');
        downloadjs(dataURL, 'download.png', 'image/png');
    };

    return (
        <div className="DownloadButton">
            <button className="DownloadButton__button" onClick={handleClick}>
                Download as Image
            </button>
        </div>
    );
};

export default DownloadButton;
