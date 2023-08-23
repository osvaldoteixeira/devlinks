function trocarTema() {
  const html = document.documentElement
  html.classList.toggle('light')

  // CRIAR CONST IMG
  const img = document.querySelector('#profile img')

  // SE O HTML CONTER A CLASSE LIGHT
  if (html.classList.contains("light")) {

    // SE VERDADEIRO: ADICIONAR A IMG AVATAR-LIGHT E TROCAR O TEXTO ALTERNATIVO PARA O CORRESPONDENTE
    img.setAttribute("src", "./assets/avatar-light.jpg")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito de cavanhaque, sorrindo, usando óculos escuros e camisa preta, em um fundo claro."
    )
  } else {

    // SENÃO, MANTER A IMG AVATAR-DARK E O TEXTO ALTERNATIVO CORRESPONDENTE
    img.setAttribute("src", "./assets/avatar-dark.jpg")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito de cavanhaque, sorrindo, usando óculos e camisa preta, em um fundo amarelo."
    )
  }
}
