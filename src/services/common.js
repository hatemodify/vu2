export default {
  noImg (elem) {
    elem.forEach(element => {
      console.log(element)
    });
  },
  convertDate (date) {
    return date.replace(/-|T/g, ".").slice(0, 16)
  }
}
