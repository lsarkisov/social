import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Dropzone from 'react-dropzone'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { modelImageUpload } from 'actions/model'

export default function IcImage(props) {
  const [image, setImage] = useState(null)
  const [imagePath, setImagePath] = useState('')

  const { uploadImage } = useSelector((state) => state.modelImageUpload)
  const dispatch = useDispatch()

  useEffect(() => {
    if (uploadImage && uploadImage[props.id]) {
      setImage(uploadImage[props.id])
      setImagePath(URL.createObjectURL(uploadImage[props.id]))
    }
  }, [uploadImage])

  const onDrop = (acceptedFiles) => {
    setImage(acceptedFiles[0])
    setImagePath(URL.createObjectURL(acceptedFiles[0]))
    dispatch(modelImageUpload.request({ [props.id]: acceptedFiles[0] }))
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
