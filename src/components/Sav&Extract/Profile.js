import React from "react";
import '../../App.css'
function Profile({ onSubmit, src ,data}) {
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
        <h4>{data}</h4>
      </form>
    </div>
  );
}

export default Profile;
