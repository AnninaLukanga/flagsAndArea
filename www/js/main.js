var flags = ["imgs/Brezil.png", "imgs/Canada.png", "imgs/Chine.png", "imgs/France.png", "imgs/Italie.png", "imgs/Japon.png", "imgs/Namibi.png"];
var names = ["Brezil", "Canada", "Chine", "France", "Italie", "Japon", "Namibi"];
$(document).ready(function () {
    atRandom(flags);
    $.each(flags, function (index, value) {
        var flag = value.slice(5, -4);
        $("<div><img src=" + value + "></div>").appendTo("#flags").draggable({ revert: true, scope: flag });//faire une recherche google pour scop
        //draggable permet un drop et revert permet un retour à l'endroit initial
        
        //slice supprime les premiers caractères ici à partie de 5
        //et à partir de la fin jusqu'à 4
        console.log(flag);
    });
    atRandom(names);
    $.each(names, function (index, value) {
        $("<div>" + value + "</div>").appendTo("#droparea").droppable({
            scope: value,
            drop: function (event, ui) {
                //Le match avec flag et names fait draggable avec le text
                $(ui.draggable).append($(this).text());

                //Cacher le text après un drop qui a bien matché dessus
                $(this).hide("Puff");
                //Trouver les effects sur :https://jqueryui.com/effect/
            }
        });
    });

});
function atRandom(arr) {
    return arr.sort(function () {
        return .5 - Math.random();
    });
}