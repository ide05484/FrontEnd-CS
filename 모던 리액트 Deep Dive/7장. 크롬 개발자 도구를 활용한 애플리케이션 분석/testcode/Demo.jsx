import React, { useState } from 'react';

function MemoryLeakDemo() {
    const [showDiv, setShowDiv] = useState(true);

    // 메모리 누수를 유발할 변수
    const leakyArray = [];

    const createLeak = () => {
        const div = document.createElement('div');
        div.innerText = '메모리 누수의 원인 div!';
        leakyArray.push(div); // 전역 배열에 DOM 참조를 저장하여 메모리 누수 발생
        console.log('Leaked div added to array:', leakyArray);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Memory Leak Demo</h1>
            {showDiv && (
                <div id="leaky-div">
                    <p>버튼을 누르면 사라집니다</p>
                </div>
            )}
            <button onClick={() => setShowDiv(false)} style={{ marginRight: '10px' }}>
                숨기기
            </button>
            <button onClick={createLeak}>메모리 누수 발생</button>
        </div>
    );
}

export default MemoryLeakDemo;
