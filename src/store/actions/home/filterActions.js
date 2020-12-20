export const openMenu = (type) => {
  return {
    type: '/filters/setOpenMenu',
    payload: type
  }
}

export const setCity = (city) => {
  return {
    type: '/filters/setCity',
    payload: city
  }
}

export const setPrice = (min, max) => {
  return {
    type: '/filters/setPrice',
    payload: { min, max }
  }
}

export const setBedrooms = (min, max) => {
  return {
    type: '/filters/setBedrooms',
    payload: { min, max }
  }
}

export const setBathrooms = (min, max) => {
  return {
    type: '/filters/setBathrooms',
    payload: { min, max }
  }
}

export const setSqft = (min, max) => {
  return {
    type: '/filters/setSqft',
    payload: { min, max }
  }
}