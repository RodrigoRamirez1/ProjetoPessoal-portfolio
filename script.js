function carregar() {
  var date = new Date()
  var hora = date.getHours()

  if (hora >= 5 && hora < 19) {
    const html = document.documentElement
    html.classList.toggle("light")
  } else {
    html.classList.toggle("root")
  }
}