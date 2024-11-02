import clsx from 'clsx';
import './Attribute.scss';

export interface AttributeProps {
    label: string;
    size?: 'small' | 'large';
    value?: number;
}

const Attribute: React.FC<AttributeProps> = ({
    label,
    size = 'small',
    value,
}) => {
    return (
        <div className="Attribute">
            <div
                className={clsx(
                    'Attribute__label',
                    `Attribute__label--${size}`,
                )}
            >
                {label}
            </div>
            <div
                className={clsx(
                    'Attribute__container',
                    `Attribute__container--${size}`,
                )}
            >
                {typeof value === 'undefined' ? '—' : value}
            </div>
        </div>
    );
};

export default Attribute;
