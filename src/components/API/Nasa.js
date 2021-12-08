const key = '9OyDJd4K3mQV7jlaO0tLvP1Gsibafxns1tMSrzab'

const Nasa = () => {
    return(
        <div className = 'main'>
            <div className = 'mainDiv'></div>
            <h1>Nasa API</h1>
            <p>Build out project here</p>
        </div>
    )
};

/*

const Hooks2 = () => {
    const [results, queryNum, setQueryNum] = useNumHook('')

    return(
        <div className = 'main'>
            <div className = 'mainDiv'>
                <h3>Enter a number below to see a number fact</h3>
                <input value = {queryNum} onChange={e => setQueryNum(e.target.value)} placeholder='enter a number' />
                {results ? <h2>{results}</h2> : <div></div>}
            </div>
        </div>
    )
}

const useNumHook = (num) => {
    const [queryNum, setQueryNum] = useState(num);
    const [results, setResults] = useState('');

    useEffect(() => {
        if (queryNum !== ''){
            fetch(`http://numbersapi.com/${queryNum}`)
            .then(res=>res.text())
            .then(json => {
                setResults(json);
                console.log(json)
            })
        }
    }, [queryNum])

    return [results, queryNum, setQueryNum]
}

*/

export default Nasa;