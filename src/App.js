import React, { Component } from 'react'
import './App.css'

const ImgUpload =({
  onChange,
  src
})=>
  <label htmlFor="photo-upload" className="custom-file-upload fas">
    <div className="img-wrap img-upload" >
      <img for="photo-upload" src={src}/>
    </div>
    <input id="photo-upload" type="file" onChange={onChange}/>
  </label>

const Profile =({
  onSubmit,
  src,
})=>
  <div className="card">
    <form onSubmit={onSubmit}>
      <h1>ANPR</h1>
      <label className="custom-file-upload fas">
        <div className="img-wrap" >
          <img for="photo-upload" src={src}/>
        </div>
      </label>
      <button type="submit" className="edit">Extract </button>
    </form>
  </div>


const Edit =({
  onSubmit,
  children,
})=>
  <div className="card">
    <form onSubmit={onSubmit}>
      <h1>ANPR</h1>
        {children}
      <button type="submit" className="save">Save </button>
    </form>
  </div>

export default class App extends Component {
  state = {
    file: '',
    imagePreviewUrl: 'svg.svg',

    active: 'edit'
  }

  photoUpload = e =>{
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file);
  }


  handleSubmit= e =>{
    e.preventDefault();
    let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
    this.setState({
      active: activeP,
    })
  }

  render() {
    const {imagePreviewUrl,
           active} = this.state;
    return (
      <div>
        {(active === 'edit')?(
          <Edit onSubmit={this.handleSubmit}>
            <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl}/>

          </Edit>
        ):(
          <Profile
            onSubmit={this.handleSubmit}
            src={imagePreviewUrl}
            />)}

      </div>
    )
  }
}
