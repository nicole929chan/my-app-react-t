import React, { useReducer, useState } from 'react';

function uniqueReducer(state, action) {
    switch (action.type) {
        case 'add':
            return [...new Set([...state, action.name])];
        case 'delete':
            return state.filter((name) => name === action.name);
        default:
            throw new Error();
    }
}

const ProductList = () => {
    const [names, dispatch] = useReducer(uniqueReducer, []);
    const [newName, setNewName] = useState('');

    const map = (name, i) => <div key={i}>{name}</div>;

    const handleChange = (event) => setNewName(event.target.value);
    const handleAdd = () => dispatch({ type: 'add', name: newName });
    // const map = name => {
    //     const delete = () => dispatch({ type: 'delete', name });
    //     return (
    //       <div>
    //         {name}
    //         <button onClick={delete}>Delete</button>
    //       </div>
    //     );
    //   }

    return (
        <div className='products'>
            {names.map(map)}
            <input type='text' onChange={handleChange} />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default ProductList;
