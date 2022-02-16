
function getAlum(){
    $.ajax( "http://localhost:8000/alumnos" )
    .done(function(data) {
        var list_html = "<ol>";
            JSON.parse(data).forEach(alum => {
            list_html += "<li>" + alum + "</li>";
        });
        list_html += "</ol>"
        $("#lista").html(list_html);

        })

}

function getProfes(){
    $.ajax( "http://localhost:8000/profesores" )
    .done(function(data) {
        var list_html = "<ol>";
            JSON.parse(data).forEach(profo => {
            list_html += "<li>" + profo + "</li>";
        });
        list_html += "</ol>"
        $("#lista").html(list_html);

        })
}
