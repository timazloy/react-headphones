import React, { useState } from 'react';
import Select from 'react-select';

const options = [
    { value: 'expensive', label: 'Сначала дороже' },
    { value: 'cheap', label: 'Сначала дешевле' },
];


function SelectPrice() {
    const [selectedOption, setSelectedOption] = useState(null);

    const getValue = () => {
        return selectedOption ? options.find(c => c.value === selectedOption) : ''
    }

    getValue()

    const selectChange = (e) => {
        setSelectedOption(e.value)
    }

    return (
        <Select
            classNamePrefix='custom-select'
            currentValue={getValue}
            onChange={selectChange}
            options={options}
            placeholder='Сортировка по цене'
        />
    );
}

export default SelectPrice