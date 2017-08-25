import React from 'react';

const Searchbar = ({ user, onChange, onSave }) => {
  return (
    <div className="container">
      <form onSubmit={onSave}>
        <div className="input-field">
          <i
            className="fa fa-search material-icons prefix pink-text text-darken-4"
            aria-hidden="true"
          />
          <input
            type="text"
            id="icon_prefix"
            placeholder="Github Username"
            value={user}
            className="validate"
            onChange={onChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
