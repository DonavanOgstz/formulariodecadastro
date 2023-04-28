/*Bloco de verificaçao de preenchimento de campos*/

function Validar() {
    let nome = document.getElementById('nome').value;
    let senha = document.getElementById('senha').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let data = document.getElementById('data').value;
    let cpf = document.getElementById('cpf').value;
    let endereco = document.getElementById('endereco').value;
    let numero = document.getElementById('numero').value;
    let bairro = document.getElementById('Bairro').value;
    let cidade = document.getElementById('Cidade').value;
    let estado = document.getElementById('Estado').value;
    let repetirsenha = document.getElementById('RepetirSenha').value;

    if (!nome || !senha || !email || !telefone || !data || !cpf || !endereco || !numero || !bairro || !cidade || !estado || !repetirsenha) {
        alert("Campos de preenchimento obrigatorio. favor preencher!");
    } else {
        alert("Campos preenchidos com sucesso!");
    }
}