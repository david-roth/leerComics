/**
 * Created by david roth on 15/09/2014.
 */

$(document).ready(function() {
$('form').on('submit', function(event) {
    event.preventDefault();
    alert("I'm In");
    $.ajax('http://localhost:63342/leerComics/index.php', {
        type: 'POST',
        dataType: 'json',
        context: 'application/json',
        success: function(response) {
            console.log(response);
        },
        error:function(xhr, desc, err) {
            console.log(xhr);
            console.log("Desc :: "+desc+"\nError :: "+err);
        }
    });
});
});