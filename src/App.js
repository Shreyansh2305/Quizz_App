import "./styles.css";
import Quiz from "./components/Quiz";
import { QuizProvider } from "./contexts/quiz";

export default function App() {
  return (
    <div className="App">
      <QuizProvider>
        <Quiz />
      </QuizProvider>
    </div>
  );
}
