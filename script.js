const botaomenu = document.getElementById('menu-hamburguer')

const menu = document.querySelector('.menu-desktop')

botaomenu.addEventListener("click", () => {
    menu.classList.toggle("ativo")
})

const botoespacote = document.querySelectorAll(".btn-contratar")
const inputpacote = document.getElementById("ipacote")

botoespacote.forEach(botao => {
    botao.addEventListener("click", () => {
        const pacoteselecionado = botao.dataset.pacote
        inputpacote.value = pacoteselecionado

        document
        .getElementById("formulario")
        .scrollIntoView({ behavior: "smooth" })
    })

    
})

// ENVIAR OS DADOS PARA O WHATSAPP

const form = document.querySelector("form")

form.addEventListener("submit", function (event) {
    event.preventDefault()

    const nome = document.getElementById("inome").value
    const whatsapp = document.getElementById("iwhat").value
    const pacote = document.getElementById("ipacote").value
    const data = document.getElementById("idata").value
    const local = document.getElementById("ilocal").value
    const mensagem = document.getElementById("imensagem").value

    const numeroCantor = "554899897809"

    const texto = `
    Olá Gostaria de solicitar um orçamento

    Nome: ${nome}
    Whatsapp: ${whatsapp}
    Pacote: ${pacote}
    Data do evento: ${data}
    Local: ${local}

    Mensagem:
    ${mensagem}
    `

    const url = `https://wa.me/${numeroCantor}?text=${encodeURIComponent(texto)}`

    window.open(url, "_blank")
}) 
