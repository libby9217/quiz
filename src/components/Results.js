const Results = ({onReStart, score})=>{
    return (
        <div id="result">
            <p>£ ♧ 퀴즈 종료 ♤ ¢</p>
            <div className="final-score">
                <p>집사력 최종점수는</p> 
                <h3>{score}점</h3>
            </div>
            <button onClick={onReStart}>다시시작</button>
            <p>&copy;libby9217</p>
        </div>
        
    )
}

export default Results