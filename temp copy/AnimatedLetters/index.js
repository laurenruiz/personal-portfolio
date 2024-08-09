import './index.scss';

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((word, wordIndex) => (
        <span key={word + wordIndex} className="word">
          {word.split('').map((letter, letterIndex) => (
            <span key={letter + letterIndex} className={`${letterClass} _${letterIndex + idx + wordIndex * 10}`}>
              {letter}
            </span>
          ))}
          &nbsp;
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
