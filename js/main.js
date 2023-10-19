// let edenschool = {
//   url: "https://www.edenschool.fr/",
//   title: "le site de l'école",
// };

// $("#menu").replaceWith(
//   `<a href="${edenschool.url}" target="_blank">${edenschool.title}</a>`
// );

// $(document).ready(function () {
//   $("contenu h2[id]").each(function () {
//     let link = $("<a>", { href: "#" + $(this).attr("id") });
//     link.text($(this).text());

//     $("#menu ul").append($("<li>").append(link));
//   });
// });

// $("tr").each(function (index) {
//   if (index % 2) {
//     $(this).css("background-color", "cyan");
//   }
// });

// $("input")
//   .last()
//   .submit(function () {
//     alert($("input[checked]").val());
//   });

// $("h2").css("background-color", "gold");
// $(".syntax").addClass("fondcouleur");

// $("div").on("click", "p", function () {
//   $(this).after("<p>Ce p a les mêmes caractéristiques que son parent</p>");
// });

// $("p").slideDown(1000);
// $("p").show("fast", function () {
//   alert("Paragraphe affiché !");
// }); // affiche le paragraphe en 200ms, et lance une alerte à la fin de l'animation

// $("button").click(function () {
//   $("p").toggle(1000);
// });

// $("#menu a").hover(
//   function () {
//     $(this).addClass("active");
//   },
//   function () {
//     $(this).removeClass("active");
//   }
// );

// let txt = "";
// $("#ajouter").on("click", function () {
//   $("#fruits option:selected").each(function () {
//     txt = $(this).text();
//     $(this).remove();
//     $("#panier").append($("<option>", { text: txt }));
//   });
// });

// $("#supprimer").on("click", function () {
//   $("#panier option:selected").each(function () {
//     txt = $(this).text();
//     $(this).remove();
//     $("#fruits").append($("<option>", { text: txt }));
//   });
// });

// let ms, last;
// $("#click").on("click", function (event) {
//   ms = event.timeStamp - last;
//   if (last) {
//     $("#content").append("time since last event: " + ms + "<br>");
//   } else {
//     $("#content").append("Click again.<br>");
//   }
//   last = event.timeStamp;
// });

// $("input").on("focus", function () {
//   $(this).next().fadeTo(5000, 0);
// });

// UI
// ---------------------------------------------------------------------
// $(function () {
//   $("#accordion").accordion();
// });

// $(function () {
//   $("#sortable").sortable();
// });
