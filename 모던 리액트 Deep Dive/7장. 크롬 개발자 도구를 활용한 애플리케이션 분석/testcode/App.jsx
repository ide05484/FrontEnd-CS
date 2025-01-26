import MemoryLeakDemo from './Demo';

const DUMMY_LIST = [];

function App() {
    // const handleClick = () => {
    //     Array.from({ length: 10000000 }).forEach((_, idx) => DUMMY_LIST.push(Math.random() * idx));
    //     alert('완료!');
    // };

    // const handleClick = () => {
    //     Array.from({ length: 10000000 }).forEach(function addDummy(_, idx) {
    //         DUMMY_LIST.push(Math.random() * idx);
    //     });
    //     alert('완료!');
    // };

    return (
        <>
            {/* <button onClick={handleClick}>Bug Button</button> */}
            <MemoryLeakDemo />
        </>
    );
}

export default App;
