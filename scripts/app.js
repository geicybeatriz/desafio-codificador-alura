//variáveis globais para os textos
let textoOriginal = "";
let textoCriptografado = "";
let textoCopiado = "";

renderizacaoCondicionalDeResultado();

function buscarMensagemParaCriptografia() {
  textoOriginal = document.getElementById("conteudo__entrada__textarea").value;
  const textoEValido = validarEntradaDeTexto(textoOriginal);
  if (!textoEValido) {
    alert("O texto não pode conter letras maiúsculas e acentuação!");
    textoOriginal = "";
  }
  textoCriptografado = criptografarTexto(textoOriginal);
  renderizacaoCondicionalDeResultado();
}

function validarEntradaDeTexto(texto) {
  const regex = /^[a-z\s]+$/;
  return regex.test(texto);
}

function criptografarTexto(texto) {
  texto = texto.replace(/e/g, "enter");
  texto = texto.replace(/i/g, "imes");
  texto = texto.replace(/o/g, "ober");
  texto = texto.replace(/a/g, "ai");
  texto = texto.replace(/u/g, "ufat");
  return texto;
}

function descriptografarTexto(texto) {
  texto = texto.replace(/enter/g, "e");
  texto = texto.replace(/imes/g, "i");
  texto = texto.replace(/ober/g, "o");
  texto = texto.replace(/ufat/g, "u");
  texto = texto.replace(/ai/g, "a");

  return texto;
}

//renderização condicional na página principal
function renderizaTextoCondicional() {
  let areaResultadoTexto = document.getElementById(
    "conteudo__resultado__texto"
  );

  areaResultadoTexto.style.display =
    textoCriptografado.length > 0 ? "flex" : "none";

  if (areaResultadoTexto.style.display === "flex")
    return renderizaTextoCriptografado();
}

function renderizaImagemCondicional() {
  let areaResultadoImagem = document.getElementById(
    "conteudo__resultado__imagem"
  );
  areaResultadoImagem.style.display =
    textoCriptografado.length === 0 ? "flex" : "none";
}

function renderizacaoCondicionalDeResultado() {
  renderizaImagemCondicional();
  renderizaTextoCondicional();
}

function renderizaTextoCriptografado() {
  const areaConteudoCriptografado = document.querySelector(
    ".conteudo__saida__secundario"
  );
  areaConteudoCriptografado.innerHTML = `
    <div class="conteudo__saida__texto">${textoCriptografado}</div>
    <button class="botao" onclick="copiarResultadoParaAreaDeTransferencia()" >Copiar</button>
  `;
  return areaConteudoCriptografado;
}

function copiarResultadoParaAreaDeTransferencia() {
  navigator.clipboard
    .writeText(textoCriptografado)
    .then(() => {
      alert("Texto copiado para a área de transferência!");
    })
    .catch((err) => {
      console.error("Falha ao copiar texto: ", err);
      alert(
        "Erro ao copiar texto para a área de transferência. Por favor, tente novamente."
      );
    });
}
