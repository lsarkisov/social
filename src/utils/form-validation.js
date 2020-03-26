export const lt = (e, len, callback) => {
  if (e.target.value.trim().length > len) {
    callback(false)
  } else {
    callback(true)
  }
}

export const isDigit = (e, callback) => {
  if (/^\d+$/.test(e.target.value.trim())) {
    callback(false)
  } else {
    callback(true)
  }
}

export const isWebsiteValid = (e, callback) => {
  const reg = /[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/
  if (reg.test(e.target.value.trim())) {
    callback(false)
  } else {
    callback(true)
  }
}

export const isEmailValid = (e, callback) => {
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (reg.test(e.target.value.trim())) {
    callback(false)
  } else {
    callback(true)
  }
}

export const isPassword = (e, len, callback) => {
  if (e.target.value.trim().length > len) {
    callback({ valid: false, value: e.target.value.trim() })
  } else {
    callback({ valid: true, value: e.target.value.trim() })
  }
}

export const isConfirm = (e, value, callback) => {
  console.log(e.target.value, value)
  if (e.target.value.trim() === value) {
    callback(false)
  } else {
    callback(true)
  }
}
