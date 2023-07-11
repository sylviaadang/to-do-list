import React from 'react';
import { useState } from 'react';

const List = (props) => {
    const { name, id, removeTask } = props;
    const [isChecked, setChecked] = useState(false);

    return (
        <div>
            {
                isChecked?
                <p style={{textDecoration: "line-through"}}>{name}</p>:
                <p>{name}</p>
            }
            <input type="checkbox" checked={isChecked} onChange={e => setChecked(e.target.checked)}/>
            <button onClick={() => removeTask(id)}>Delete</button>
        </div>
    )
}

export default List
