import React, { useState } from "react"
import { connect } from "react-redux"
import { navigate } from "@reach/router"

import { Button } from '@material-ui/core'

import Content from "../layout/Content"
import { uploadVideo } from "../store/actions/videos"

const UploadForm = ({ uploadVideo }) => {
  const [file, setFile] = useState(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    uploadVideo({ file })
    setFile(null)
    navigate('/')
  }

  return (
    <Content>
      <form className="form-container" onSubmit={handleSubmit}>
        <label style={{color: '#382b5f'}} htmlFor="fileUpload"></label>
        <p
          style={{color: '#382b5f'}}
        >
          {file && file.name}
        </p>
        <img
          src={'/images/clear.svg'}
          style={{
            width: '25%',
            margin: '0 auto',
            display: file ? 'block' : 'none'
          }}
          onClick={() => setFile(null)}
        />
        <input
          type="file"
          required={true}
          accept="video/*"
          name="videoFile"
          encType="multipart/form-data"
          className="custom-file-input"
          onChange={(e) => setFile(e.target.files[0])}
          style={{ display: file ? 'none' : 'block' }}
        />
        <Button type="submit">Upload</Button>
      </form>
    </Content>
  )
}

const mapDispatchToProps = {
  uploadVideo
}

export default connect(
  null,
  mapDispatchToProps
)(UploadForm)