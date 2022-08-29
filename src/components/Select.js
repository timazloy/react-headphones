import React, { useState } from 'react';
import Select from 'react-select';

const options = [
    { value: 'expensive', label: 'Сначала дороже' },
    { value: 'cheap', label: 'Сначала дешевле' },
];


function SelectPrice() {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <Select
            classNamePrefix='custom-select'
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            placeholder='Сортировка по цене'
        />
    );
}

export default SelectPrice