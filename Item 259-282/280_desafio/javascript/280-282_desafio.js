(function(){
    "use strict";

    var $hamburgBtn = document.querySelector(".header-nav__hamburgger");
    var $html = document.querySelector("html");

    var ariaControl = $hamburgBtn.getAttribute("aria-controls");
    var $menu = document.getElementById(ariaControl);

    //Por padrão, o HTML irá carregar a página sem o javascript, mas caso ele esteja disponível, o próprio javascript irá remover a classe no-js(desabilitado) e adicionar a classe js(habilitado).
    $html.classList.remove("no-js");
    $html.classList.add("js");

    $hamburgBtn.addEventListener("click", function(){
        $html.classList.toggle("menu-opened");

        var ariaExpanded = this.getAttribute("aria-expanded") === "true";   //getAttribute retorna uma string, porém precisamos da variável local armazenar um boolean. Ao compararmos o getAttribute com uma string, podemos ter dois possívels resultados: se getAttribute for igual a "true" (em valor e string), a variável local armazenará um boolean true. Se o getAttribute for diferente de "true" (em valor e string), a variável local armazenará um boolean false.

        $hamburgBtn.setAttribute("aria-expanded", !ariaExpanded);
        $menu.setAttribute("aria-expanded", !ariaExpanded);
    });
})()

//BEM - Block Element Modifier


//Modificando atributos (inclusive id's e classes) no HTML com DOM 2:
//$elemento.setAttribute("disabled", false);
//$elemento.setAttribute("checked", false);
//$elemento.setAttribute("id", "myId");
//$elemento.setAttribute("class", "myClass");