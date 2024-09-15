import s from "./Feedback.module.css";

const Feedback = ({ feedback, total, positivePercentage }) => {
  const { good, neutral, bad } = feedback;

  return (
    <div>
      <h2 className={s.title}>Statistics</h2>
      <p className={s.categories}>Good: {good}</p>
      <p className={s.categories}>Neutral: {neutral}</p>
      <p className={s.categories}>Bad: {bad}</p>
      <p className={s.categories}>Total: {total}</p>
      <p className={s.categories}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;
