import { useState } from "react";

const QuizPage = ({ quizzes, onFinish, onScore, score }) => {
  const [corrent, setCorrent] = useState(0);
  const handleClick = (idx) => {
    // 정답 체크
    if (idx+1 === quizzes[corrent].correct) {
        //점수 +20
      onScore(20);
    }
    // 다음 문제로 이동
    if (corrent < quizzes.length - 1) {
      setCorrent(corrent + 1);
    } else {
      onFinish(true); // 퀴즈 종료
    }
  };
  return (
    <div id="quiz-page">
      <h2>문제</h2>
      <p>{quizzes[corrent].question}</p>
      <ul className="choices">
        {quizzes[corrent].choices.map((item, idx) => {
          return (
            <li key={idx} onClick={() => handleClick(idx)}>
              {idx+1}.{item}
            </li>
          );
        })}
      </ul>
      <div className="score">
        <p>
          {`${corrent + 1}`}/{`${quizzes.length}`}
        </p>
        <h4><span>현재점수</span> {score}점</h4>
      </div>
    </div>
  );
};

export default QuizPage;
