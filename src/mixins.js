const slugify = (text) => {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/[^\w\\-]+/g, '')
    .replace(/--+/g, '-')
}

export { slugify }
