const btSobreMim = document.getElementById('link-sobre-mim')
const btProjetos = document.getElementById('link-projetos')
const btDepoimentos = document.getElementById('link-depoimentos')
const btContato = document.getElementById('link-contato')
const btAlterar = document.getElementById('btAlterar')
const localSobreMim = document.getElementById('sobre-mim')
const localProjetos = document.getElementById('projetos')
const localDepoimentos = document.getElementById('depoimentos')
const localContato = document.getElementById('contato')


function scrollToSection(e, local) {
    e.preventDefault();
    if (local) {
        local.scrollIntoView({ behavior: "smooth" })
    }
}

btSobreMim.addEventListener("click", (e) => scrollToSection(e, localSobreMim));
btProjetos.addEventListener("click", (e) => scrollToSection(e, localProjetos));
btDepoimentos.addEventListener("click", (e) => scrollToSection(e, localDepoimentos));
btContato.addEventListener("click", (e) => scrollToSection(e, localContato));

// Suporte a teclado (Enter)
[btSobreMim, btProjetos, btDepoimentos, btContato].forEach(button => {
    button.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            const sectionId = button.id.replace('link-', '');
            const section = document.getElementById(sectionId);
            scrollToSection(event, section);
        }
    });
});

const textDinamico = document.querySelector('.dinamico');
let contador = 0;
const palavras = ['Impressionar!', 'Surpreender!', 'Encantar!', 'Fascinar!']
//Alterar texto
btAlterar.addEventListener('click', () => {
    if (contador < palavras.length - 1) {
        contador++;
        textDinamico.innerText = palavras[contador];
    } else {
        contador = 0;
        textDinamico.innerText = palavras[contador]
    }
})