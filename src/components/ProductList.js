import React, { useState } from 'react';

const ProductList = () => {
    const [names, setNames] = useState(['apple', 'orange']);
    const [newName, setNewName] = useState('');

    const map = (name, i) => <div key={i}>{name}</div>;

    const handleChange = (event) => setNewName(event.target.value);
    const handleAdd = () => {
        const s = new Set([...names, newName]);
        setNames([...s]);
    };

    return (
        <div className='products'>
            {names.map(map)}
            <input type='text' onChange={handleChange} />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default ProductList;
