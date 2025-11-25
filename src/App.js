import { useState } from 'react';
import './App.css';
import Categories from './components/Categories';
import quizData from './data/quizData.json';
import QuizPage from './components/QuizPage';
import Results from './components/Results';
const App =()=>{
  const [category, setCategory] = useState('');
  const [filterQuiz, setFilterQuiz] = useState([]);
  const [finish, setFinish] = useState(false);
  const [score, setScore] = useState(0);
  const onSelectCategory = (select)=>{
    setCategory(select);
    //quizData에서 선택한 카테고리의 문제만 새로 만듦.
    const quizzes = quizData.quizzes.filter((data)=>{
      return data.category === select;
    });
    setFilterQuiz(quizzes);
  }
  const handleReStart = ()=>{
    setCategory('');
    setFinish(false);
    setScore(0);
  }
  const handleScore = ()=>{
    //이전 값에 +20
    setScore((prev)=>{return prev+20});
  }
  return (
    <div id='app'>
      <h1>냥집사 상식 Quiz</h1>
      {
        !category && !finish &&
        <Categories 
          categories={quizData.categories}
          onSelect={onSelectCategory}/>
      }
      {
        category && !finish &&
        <QuizPage 
          quizzes={filterQuiz}
          onFinish={setFinish}
          onScore={handleScore}
          setScore={setScore}
          score={score}
        />
      }
      {
        finish && 
        <Results 
        onReStart={handleReStart}
        score={score}
        />
      }
    </div>
  )
}

export default App;