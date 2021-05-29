import React from "react";
import '../../App.css'
function Edit({ onSubmit, children }) {
  return (
    <div className="card">
      <form onSubmit={onSubmit}>
        <h1 className="head">ANPR</h1>
        {children}
        <button type="submit" className="save">
          Save{" "}
        </button>
      </form>
    </div>
  );
}

export default Edit;
