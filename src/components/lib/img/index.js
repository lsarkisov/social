import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function IcImage(props) {
  const [image, setImage] = useState(null)
  const [imagePath, setImagePath] = useState('')

  const onDrop = (acceptedFiles) => {
    console.log(URL.createObjectURL(acceptedFiles[0]))
    setImage(acceptedFiles[0])
    setImagePath(URL.createObjectURL(acceptedFiles[0]))
  }

  const onPreview = (e) => {
    e.preventDefault()
    e.stopPropagation()
    props.onPreview()
  }

  return (
    <div className="ic-image">
      <Dropzone onDrop={onDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <FontAwesomeIcon icon={'plus'} />
            {props.children}
            {image && (
              <span
                style={{ backgroundImage: `url(${imagePath})` }}
                className="ic-image__background"
                onClick={onPreview}
              />
            )}
          </div>
        )}
      </Dropzone>
    </div>
  )
}
