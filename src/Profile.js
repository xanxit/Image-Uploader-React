import React from "react";

function Profile({ onSubmit, src }) {
  return (
    <div className="card">
      <form onSubmit={onSubmit}>
        <h1>ANPR</h1>
        <label className="custom-file-upload fas">
          <div className="img-wrap">
            <img for="photo-upload" src={src} />
          </div>
        </label>
        <button type="submit" className="edit">
          EXTRACT
        </button>
      </form>
    </div>
  );
}

export default Profile;
