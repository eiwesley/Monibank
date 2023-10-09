import ehUmCPF from "./valida-CPF.js";
import ehMaiorIdade from "./validaIdade.js";
const camposDoFormulario = document.querySelectorAll('[required]');

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault()); //retira a autovalidação dos campos do formulario
})

function verificaCampo(campo) {
    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCPF(campo);
    }

    if (campo.name == "aniversario" && campo.value != ""){
        ehMaiorIdade(campo);
    }
    console.log(campo.validity);
}