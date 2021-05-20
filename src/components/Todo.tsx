import PropTypes from 'prop-types';
import './Todo.css';

function Todo(props: {
  key: number;
  text: string;
  isCompleted: boolean;
  onClick: any;
}) {
  const { key, text, isCompleted, onClick } = props;
  return (
    <li
      style={{
        cursor: 'pointer',
        textDecoration: isCompleted ? 'line-through' : 'none',
      }}
      onClick={onClick}
      key={key}
    >
      {text}
    </li>
  );
}
Todo.propTypes = {
  key: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Todo;
