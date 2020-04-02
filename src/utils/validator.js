export const lt = (e, len, callback) => {
  if (e.target.value.trim().length > len - 1) {
    callback(true)
  } else {
    callback(false)
  }
}

export const isAlpha = (e, len, callback) => {
  const value = e.target.value.trim()
  if (/^\w+$/.test(value) && value.length > len - 1) {
    callback(true)
  } else {
    callback(false)
  }
}

export const isDigit = (e, callback) => {
  if (/^\d+$/.test(e.target.value.trim())) {
    callback(true)
  } else {
    callback(false)
  }
}

export const isWebsiteValid = (e, callback) => {
  const reg = /[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/
  if (reg.test(e.target.value.trim())) {
    callback(true)
  } else {
    callback(false)
  }
}

export const isEmailValid = (e, callback) => {
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (reg.test(e.target.value.trim())) {
    callback(true)
  } else {
    callback(false)
  }
}

export const isPassword = (e, len, callback) => {
  if (e.target.value.trim().length > len - 1) {
    callback({ valid: true, value: e.target.value.trim() })
  } else {
    callback({ valid: false, value: e.target.value.trim() })
  }
}

export const isConfirm = (e, callback) => {
  callback({ value: e.target.value.trim() })
}
