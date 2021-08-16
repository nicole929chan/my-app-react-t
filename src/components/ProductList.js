import React, { useState } from 'react';
import { useUnique } from './hooks/useUnique';

const ProductList = () => {
    const [names, add] = useUnique([]);
    const [newName, setNewName] = useState('');

    const map = (name, i) => <div key={i}>{name}</div>;

    const handleChange = (event) => setNewName(event.target.value);
    const handleAdd = () => add(newName);

    return (
        <div className='products'>
            {names.map(map)}
            <input type='text' onChange={handleChange} />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default ProductList;
