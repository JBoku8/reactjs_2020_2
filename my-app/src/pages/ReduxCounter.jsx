import { connect } from "react-redux";

import {
  createActionReset,
  createAddAction,
  createMinusAction,
  createAddNumberAction,
  createMinusNumberAction,
} from "../redux/actions/counter";

function ReduxCounter(props) {
  return (
    <div className="counter">
      <h2>Counted: {props.count}</h2>
      <h4>{props.message}</h4>
      <button onClick={() => props.onPlus()}>+</button>
      <button onClick={() => props.onAdd(5)}>+5</button>
      <button onClick={() => props.onAdd(10)}>+10</button>
      <button onClick={() => props.onReset()}>Reset</button>
      <button onClick={() => props.onSub(5)}>-5</button>
      <button onClick={() => props.onSub(10)}>-10</button>
      <button onClick={() => props.onMinus()}>-</button>

      <hr />
      <button onClick={() => props.onAdd(100)}>+100</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    message: state.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPlus: () => dispatch(createAddAction()),
    onMinus: () => dispatch(createMinusAction()),
    onReset: () => dispatch(createActionReset()),
    onAdd: (value) => dispatch(createAddNumberAction(value)),
    onSub: (value) => dispatch(createMinusNumberAction(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter);
