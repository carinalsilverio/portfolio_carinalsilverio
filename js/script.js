//Menu - Linkar menu ao campo correspondente

const menuItems = document.querySelectorAll('.menu a');


menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
})
  

function getScroolTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}


function scrollToIdOnClick(event) {
  event.preventDefault(); 
  const to = getScroolTopByHref(event.target) - 122; //valor para que o menu não fique cobrindo o título chamado no click
    
  scroolToPositon(to);
}


function scroolToPositon(to) {
  window.scroll({ //não funciona em todos os navegadores
  top: to, 
  behavior: "smooth", //comportamento suave de rodar a página no click href
});

}

//Animação - digitar cada letra automáticamente

function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(()=>
      elemento.innerHTML += letra, 75 * i);
  });
  
}
const paragrafo = document.querySelector('p');
typeWriter(paragrafo);


//Btn-Topo
//chamando a função ao rolar a tela.
window.onscroll = function() {
  scrollFunc();
};

//função para exibir o botão apenas depois de rolar a tela
function scrollFunc() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("btnTop").style.display = "block";
  } else {
    document.getElementById("btnTop").style.display = "none";
  }
}

function backtoTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

