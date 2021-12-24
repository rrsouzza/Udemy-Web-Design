(function(){
    "use strict";

    var $hamburgBtn = document.querySelector(".header-nav__hamburgger");
    var $html = document.querySelector("html");

    //Por padrão, o HTML irá carregar a página sem o javascript, mas caso ele esteja disponível, o próprio javascript irá remover a classe no-js(desabilitado) e adicionar a classe js(habilitado).
    $html.classList.remove("no-js");
    $html.classList.add("js");

    $hamburgBtn.addEventListener("click", function(){
        $html.classList.toggle("menu-opened");
    });
})()

//BEM - Block Element Modifier