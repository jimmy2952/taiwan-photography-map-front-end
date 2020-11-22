import React, { useRef, useState, useEffect } from "react"
import Button from "./Button"

import './ImageUpload.css'

const ImageUpload = props => {
  const [file, setFile] = useState()
  const [previewUrl, setPreviewUrl] = useState()
  const [isValid, setIsValid] = useState(false)

  const filePickerRef = useRef()

  useEffect(() => {
    if (!file) {
      return
    }
    const fileReader = new FileReader()
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result)
    }
    fileReader.readAsDataURL(file)
  }, [file])

  const pickedHandler = event => {
    let pickedFile;
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0]
      setFile(pickedFile)
      setIsValid(true)
      fileIsValid = true
    } else {
      setIsValid(false)
      fileIsValid = false
    }
    props.onInput(props.id, pickedFile, fileIsValid)
  }

  const pickImageHandler = () => {
    filePickerRef.current.click()
  }

  return(
    <div className="form-control">
      <label>上傳照片</label>
      <br/>
      <input 
        id={props.id}
        ref={filePickerRef}
        style={{display: "none"}}
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />
      <div className={`image-upload ${props.center && 'center'}` } style={{marginLeft:"0"}}>
        <div className="image-upload__preview" style={{marginLeft:"0"}}>
          {previewUrl && <img src={previewUrl} alt="Preview" />}
          {!previewUrl && <p>預覽照片</p>}
        </div>
        <Button type="button" onClick={pickImageHandler}>選擇照片</Button>
      </div>
    </div>
  )
}

export default ImageUpload