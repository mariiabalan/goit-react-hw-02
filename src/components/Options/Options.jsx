import s from "./Options.module.css";

const Options = ({ options, onLeaveFeedback, totalFeedback, onReset }) => {
  return (
    <div className={s.options}>
      {/* <h2 className={s.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </h2> */}
      {options.map((option) => (
        <button
          className={s.btn}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}

      {/* Умовне відображення кнопки Reset */}
      {totalFeedback > 0 && (
        <button
          className={s.btn}
          onClick={onReset}
          style={{ marginTop: "10px" }}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
