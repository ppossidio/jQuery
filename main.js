$(document).ready(function () {
    $("#task-form").submit(function (event) {
        event.preventDefault();
        const taskName = $("#nome-tarefa").val();
        if (taskName) {
            const listItem = $("<li>").append(`<p>${taskName}</p>`);
            $("#task-list").append(listItem);
            $("#nome-tarefa").val("");
        }
    });

    $("#task-list").on("click", "li", function () {
        $(this).toggleClass("completed");
    });
});