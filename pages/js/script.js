const camposFormulario = document.querySelectorAll("[Required]");

camposFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
})

function verificaCampo(campo){

}