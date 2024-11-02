import './AdversaryForm.scss';

const AdversaryForm: React.FC = () => {
    return (
        <div className="AdversaryForm">
            <div className="AdversaryForm__section">
                <label className="AdversaryForm__label">
                    <input
                        className="AdversaryForm__input"
                        name="name"
                        type="text"
                        value="Highway Robber"
                    />
                    <span>Name</span>
                </label>
                <label className="AdversaryForm__label">
                    <input
                        className="AdversaryForm__input"
                        name="distinctiveFeatures"
                        type="text"
                        value="Swift, Vengeful"
                    />
                    <span>Distinctive Features</span>
                </label>
            </div>
            <div className="AdversaryForm__section">
                <label className="AdversaryForm__label">
                    <input
                        className="AdversaryForm__input"
                        name="attributeLevel"
                        type="number"
                        value="4"
                    />
                    <span>Attribute Level</span>
                </label>
                <label className="AdversaryForm__label">
                    <input
                        className="AdversaryForm__input"
                        name="endurance"
                        type="number"
                        value="16"
                        style={{ width: 94 }}
                    />
                    <span>Endurance</span>
                </label>
                <label className="AdversaryForm__label">
                    <input
                        className="AdversaryForm__input"
                        name="might"
                        type="number"
                        value="1"
                        style={{ width: 94 }}
                    />
                    <span>Might</span>
                </label>
                <label className="AdversaryForm__label">
                    <input
                        className="AdversaryForm__input"
                        name="resolve"
                        type="number"
                        value="4"
                        style={{ width: 94 }}
                    />
                    <span>Resolve</span>
                </label>
                <label className="AdversaryForm__label">
                    <input
                        className="AdversaryForm__input"
                        name="parry"
                        type="number"
                        value=""
                        style={{ width: 94 }}
                    />
                    <span>Parry</span>
                </label>
                <label className="AdversaryForm__label">
                    <input
                        className="AdversaryForm__input"
                        name="armour"
                        type="number"
                        value="2"
                        style={{ width: 94 }}
                    />
                    <span>Armour</span>
                </label>
            </div>
        </div>
    );
};

export default AdversaryForm;
