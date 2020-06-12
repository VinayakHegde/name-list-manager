import * as React from "react";

type Props = {
  list: string[];
  add: (item: string) => object;
};

const AddName: React.FC<Props> = ({ list, add }) => {
  const [state, setState] = React.useState({
    name: "",
    error: null,
    isValid: false,
  });

  const input = React.useRef(null);

  const validateForm = () => {
    const isValid = false;
    if (!state.name.length) {
      return {
        isValid,
        error: "",
      };
    }

    if (list.filter(name => name === state.name).length) {
      return {
        isValid,
        error: "Name already exist",
      };
    }

    return {
      isValid: true,
    };
  };

  const onChange = (e) => {
    setState({
      ...state,
      name: e.target.value,
    });
  };

  const addItem = (e) => {
    if (e) {
      e.preventDefault();
    }
    const { isValid, error } = validateForm();
    if (isValid) {
      add(state.name);
      setState({
        name: "",
        error: null,
        isValid,
      });
    } else {
      setState({
        ...state,
        error,
        isValid,
      });
    }
    input.current.focus();
  };

  const onKeyUp = (e) => {
    const { isValid, error } = validateForm();
    setState({
      ...state,
      error,
      isValid,
    });
    if (e.keyCode === 13) {
      addItem(e);
    }
  };

  return (
    <form className="addItem" onSubmit={addItem} data-testid="addItem">
      <div className="addItem__field">
        <input
          ref={input}
          onChange={onChange}
          onKeyUp={onKeyUp}
          placeholder="Enter a name"
          value={state.name}
        />
        <button className="primary" type="submit" disabled={!state.isValid}>
          Add
      </button>
      </div>
      {state.error && (
        <div className="addItem__notice error">{state.error}</div>
      )}
      {!state.error && (
        <div className="addItem__notice">{`Number of items in the list: ${list.length.toString()}`}</div>
      )}
    </form>
  );
};

export default AddName;
