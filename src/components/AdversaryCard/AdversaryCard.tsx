import Attribute from '@/components/Attribute';
import './AdversaryCard.scss';

const AdversaryCard: React.FC = () => {
    return (
        <div className="AdversaryCard">
            <div className="AdversaryCard__header">
                <div className="AdversaryCard__title">
                    <div className="AdversaryCard__name" contentEditable>
                        Highway Robber
                    </div>
                    <div
                        className="AdversaryCard__distinctive-features"
                        contentEditable
                    >
                        Swift, Vengeful
                    </div>
                </div>
                <div className="AdversaryCard__attribute-level">
                    <Attribute label="Attribute Level" size="large" value={4} />
                </div>
            </div>
            <div className="AdversaryCard__attributes">
                <Attribute label="Endurance" value={16} />
                <Attribute label="Might" value={1} />
                <Attribute label="Resolve" value={4} />
                <Attribute label="Parry" />
                <Attribute label="Armour" value={2} />
            </div>
            <div className="AdversaryCard__section">
                <span className="AdversaryCard__section-label">
                    Combat Proficiencies
                </span>
                <span contentEditable>
                    Spear 3 (4/14, Pierce),
                    <br />
                    Bow 2 (3/14, Pierce)
                </span>
            </div>
            <div className="AdversaryCard__section-divider" />
            <div className="AdversaryCard__section">
                <span className="AdversaryCard__section-label">
                    Fell Abilities
                </span>
                <span
                    className="AdversaryCard__section-content"
                    contentEditable
                >
                    <i>Snake-like Speed.</i> When targeted by an attack, spend 1
                    Resolve to make the attack roll <i>Ill-favoured</i>.
                </span>
            </div>
        </div>
    );
};

export default AdversaryCard;
