import React, { useState } from 'react';
import 'bulma/css/bulma.css';

export const InputTodo = (props) => {
    // stateの作成
    const [text, setText] = useState('');

    // 入力値をtextに反映
    const handleChange = e => setText(e.target.value);

    const handleEnter = e => {
        if (e.key === 'Enter') {
            if (!text.match(/\S/g)) return;
            props.onAdd(text);
            setText('');
        }
    }

    return (
        <div className='panel-block'>
            <input 
                type="text"
                className="input"
                placeholder='Enter to add'
                value={text}
                onChange={handleChange}
                onKeyPress={handleEnter}
            />
        </div>
    )
}

export default InputTodo;