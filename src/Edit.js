import React from "react";

function Edit({ onSubmit, children }) {
  return (
    <div className="card">
      <form onSubmit={onSubmit}>
        <h1>ANPR</h1>
        {children}
        <button type="submit" className="save">
          Save{" "}
        </button>
      </form>
    </div>
  );
}

export default Edit;
