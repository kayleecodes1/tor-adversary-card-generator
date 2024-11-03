import { useState } from 'react';
import clsx from 'clsx';
import './Attribute.scss';

export interface AttributeProps {
    label?: string;
    options?: string[];
    size?: 'small' | 'large';
    value?: number;
}

const Attribute: React.FC<AttributeProps> = ({
    label,
    options,
    size = 'small',
    value,
}) => {
    const [optionsIndex, setOptionsIndex] = useState(0);

    const handleClickLabel = () => {
        setOptionsIndex((prevState) => (prevState + 1) % options!.length);
    };

    return (
        <div className="Attribute">
            <div
                className={clsx(
                    'Attribute__label',
                    `Attribute__label--${size}`,
                    { 'Attribute__label--clickable': Boolean(options) },
                )}
                onClick={handleClickLabel}
            >
                {options ? options[optionsIndex] : label}
            </div>
            <div
                className={clsx(
                    'Attribute__container',
                    `Attribute__container--${size}`,
                )}
                contentEditable
            >
                {typeof value === 'undefined' ? '—' : value}
            </div>
        </div>
    );
};

export default Attribute;
