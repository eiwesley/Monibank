export default function ehMaiorIdade(campo){
    const dataNascimento = new Date(campo.value);
    if(!validaIdade(dataNascimento)){
        campo.setCustomValidity('O Usuario não é maior de idade');
    }
}

function validaIdade(data){
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    console.log(dataMais18);

    return dataAtual >= dataMais18;
}