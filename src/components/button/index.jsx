import React, { useState } from 'react';

export default function Button(isPlaying) {
    const [btn, setBtn] = useState(isPlaying);

    return (
    <button className='newBtn'>
        {() => btn ? 'verdadeiro' : 'falso'}
    </button>
    )
}