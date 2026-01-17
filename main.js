var imagem1 = document.getElementsByClassName("imagem1")[0];
        imagem1.addEventListener("mouseover", function() {
            imagem1.style.transform = "scale(1.15)";
            imagem1.style.transition = "0.5s ease";   // interações via JavaScript na primeira imagem, Linha (59-67)
        })
        imagem1.addEventListener("mouseout", function() {
            imagem1.style.transform = "scale(1)";
             imagem1.style.transition = "0.5s ease";
        })

        var imagem2 = window.document.getElementsByClassName("imagem2")[0];
        imagem2.addEventListener("mouseover", function() {
            imagem2.style.transform = "scale(1.15)";
            imagem2.style.transition = "0.5s ease";   // interações via JavaScript na segunda imagem, Linha (69-77)
        })
        imagem2.addEventListener("mouseout", function() {
            imagem2.style.transform = "scale(1)";
            imagem2.style.transition = "0.5s ease";
        })

        var links = document.querySelectorAll('.menu nav a'); /* interações via JavaScript nos links do menu, Linha (79-101) usando querySelectorAll para selecionar todos os links dentro da navegação do menu e percorrendo utilizando forEach, uma espécie de loop.
        */
            links.forEach(function(link) {
            link.addEventListener("mouseover", function() {
                link.style.backgroundColor = "#20bfa6";
                link.style.borderRadius = "2px";
                link.style.fontSize = "20px";
                link.style.transition = "0.5s ease";
                link.style.color = "#2de1c2";
                link.style.opacity = "0.95";
            });
        });

        links.forEach(function(link) {
            link.addEventListener("mouseout", function() {
                link.style.backgroundColor = "transparent";
                link.style.borderRadius = "0";
                link.style.fontSize = "16px";
                link.style.transition = "0.5s ease";
                link.style.color = "#2de1c2";
                link.style.opacity = "1";
            })
        })