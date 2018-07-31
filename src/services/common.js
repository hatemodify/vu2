export default {
  noImg () {
    const list = document.querySelectorAll('.wrap_thumb img')
    list.forEach(element => {
      if (!_.startsWith(element.getAttribute('src'), 'http')) {
        element.parentElement.classList.add('no_img')
      }
    })
  },
  convertDate (date) {
    return date.replace(/-|T/g, ".").slice(0, 16)
  }
}
