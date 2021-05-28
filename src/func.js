import React, { useState} from "react";
import Edit from "./components/Sav&Extract/Edit";
import ImgUpload from "./components/ImageUpload/ImgUpload";
import Profile from "./components/Sav&Extract/Profile";
import Axiosconfig from "./components/connect/Axiosconfig";
import './App.css'

function Func() {
  const [file, setFile] = useState("");
  const [imagePreview, setImagePreview] = useState('svg.svg');
  const [active, setActive] = useState("edit");
  const photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setFile(file);
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let activeP = active === "edit" ? "profile" : "edit";
    setActive(activeP);
    if (active === "edit") {
      const { data } = await Axiosconfig.post("/images", file);
    } else {
      const { data } = await Axiosconfig.get("/images");
    }
  };

  return (
    <div>
      {active === "edit" ? (
        <Edit onSubmit={handleSubmit}>
          <ImgUpload onChange={photoUpload} src={imagePreview} />
        </Edit>
      ) : (
        <Profile onSubmit={handleSubmit} src={imagePreview} />
      )}
    </div>
  );
}
export default Func;
