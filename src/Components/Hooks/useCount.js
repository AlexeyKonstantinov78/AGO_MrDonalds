import { useState } from 'react';

export function useCount(startCount = 1) {
    const [count, setCount] = useState(startCount);

    const onChange = e => setCount(e.target.value);

    return { count, setCount, onChange }
}