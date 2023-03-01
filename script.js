function buscarCEP() {

    fetch()

    fetch(`http://viacep.com.br/ws/${cep.value}/json`) // buscar o dinheiro
        .then(function (resposta) {
            return resposta.json();
        }) // volta com o dinheiro e pega o que só lhe interessa
        .then(function (conteudo) {
        logradouro.value = conteudo.logradouro;
        bairro.value = conteudo.bairro;
        cidade.value = conteudo.localidade;
        estado.value = conteudo.uf;
        }); 
}

const welcome = nome => "Bem Vinda " + nome