// Menu toggle
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');

toggle.onclick = function() {
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

// links de Navegação

function anoLetivo() {
    limpar();
    document.querySelector('.anoLetivo').style.display = 'block';
    document.querySelector('.cardBox').style.display = 'none';
    document.querySelector('.modal-planejamento').style.display = 'none';
}
function planejamento() {
    limpar();
    document.querySelector('.planejamento').style.display = 'block';
    document.querySelector('.cardBox').style.display = 'none';
    document.querySelector('.modal-planejamento').style.display = 'none';
}
function registroExperiencia() {
    limpar();
    document.querySelector('.registroExperiencia').style.display = 'block';
    document.querySelector('.cardBox').style.display = 'none';
    document.querySelector('.modal-planejamento').style.display = 'none';
}
function frequenciaDiaria() {
    limpar();
    document.querySelector('.frequenciaDiaria').style.display = 'block';
    document.querySelector('.cardBox').style.display = 'none';
    document.querySelector('.modal-planejamento').style.display = 'none';
}
function portifolio() {
    limpar();
    document.querySelector('.portifolio').style.display = 'block';
    document.querySelector('.cardBox').style.display = 'none';
    document.querySelector('.modal-planejamento').style.display = 'none';
}
function auxilioTransporte() {
    limpar();
    document.querySelector('.auxilioTransporte').style.display = 'block';
    document.querySelector('.cardBox').style.display = 'none';
    document.querySelector('.modal-planejamento').style.display = 'none';
}
function relatorios() {
    limpar();
    document.querySelector('.relatorios').style.display = 'block';
    document.querySelector('.cardBox').style.display = 'none';
    document.querySelector('.modal-planejamento').style.display = 'none';
}
function duvidasFrequente() {
    limpar();
    document.querySelector('.duvidasFrequente').style.display = 'block';
    document.querySelector('.cardBox').style.display = 'none';
    document.querySelector('.modal-planejamento').style.display = 'none';
}
function limpar() {
    document.querySelector('.anoLetivo').style.display = 'none';
    document.querySelector('.planejamento').style.display = 'none';
    document.querySelector('.registroExperiencia').style.display = 'none';
    document.querySelector('.frequenciaDiaria').style.display = 'none';
    document.querySelector('.portifolio').style.display = 'none';
    document.querySelector('.auxilioTransporte').style.display = 'none';
    document.querySelector('.relatorios').style.display = 'none';
    document.querySelector('.duvidasFrequente').style.display = 'none';
}

function modalPlanejamento() {
    document.querySelector('.modal-planejamento').style.display = 'block';
}
function ocultarModalPlanejamento() {
    document.querySelector('.modal-planejamento').style.display = 'none';
}


// modal planejamento botoes
function turma() {
    limparBotoes();
    document.querySelector('.modal-planejamento-turma').style.display = 'block';
}
function camposExperiencias() {
    limparBotoes();
    document.querySelector('.modal-planejamento-camposExperiencias').style.display = 'block';
}
function oad() {
    limparBotoes();
    document.querySelector('.modal-planejamento-oad').style.display = 'block';
}
function organizacaoExperiencia() {
    limparBotoes();
    document.querySelector('.modal-planejamento-organizacaoExperiencia').style.display = 'block';
}
function limparBotoes() {
    document.querySelector('.modal-planejamento-turma').style.display = 'none';
    document.querySelector('.modal-planejamento-camposExperiencias').style.display = 'none';
    document.querySelector('.modal-planejamento-oad').style.display = 'none';
    document.querySelector('.modal-planejamento-organizacaoExperiencia').style.display = 'none';
}