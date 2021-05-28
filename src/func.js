import React,{useState} from 'react'

const ImgUpload=({
    onChange,src
})=>{
    <label htmlFor="photo-upload" className="custom-file-upload fas">
<div className="img-wrap img-upload" >
  <img for="photo-upload" src={src}/>
</div>
<input id="photo-upload" type="file" onChange={onChange}/>
</label>
}
const Profile=({
  onSubmit,src
})=> {
<div className="card">
<form onSubmit={onSubmit}>
  <h1>ANPR</h1>
  <label className="custom-file-upload fas">
    <div className="img-wrap" >
      <img for="photo-upload" src={src}/>
    </div>
  </label>
  <button type="submit" className="edit">EXTRACT</button>
</form>
</div>
}
const Edit =({
onSubmit,
children,
})=>{
<div className="card">
  <form onSubmit={onSubmit}>
    <h1>ANPR</h1>
      {children}
    <button type="submit" className="save">Save </button>
  </form>
</div>
}
function Func() {
 
    
const [file,setFile]=useState('');
const [imagePreview,setImagePreview]=useState('');
const [active,setActive]=useState('edit');
const photoUpload = (e) =>{
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
        setFile(file)
    //   this.setState({
    //     file: file,
    //     imagePreviewUrl: reader.result
    //   });
    setImagePreview(reader.result)
    }
    reader.readAsDataURL(file);
  }
  const handleSubmit= (e) =>{
    e.preventDefault();
    let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
    // this.setState({
    //   active: activeP,
    // })
    setActive(activeP)
  }

    return (
        <div>
            {(active === 'edit')?(
          <Edit onSubmit={handleSubmit}>
            <ImgUpload onChange={photoUpload} src={imagePreview}/>

          </Edit>
        ):(
          <Profile
            onSubmit={handleSubmit}
            src={imagePreview}
            />)}
        </div>
    )

        }
export default Func
