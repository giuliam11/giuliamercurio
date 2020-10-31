
$(document).ready(function () {
    // Open in new window
        $('.click').each(function() {
        var link = $(this).html();
        $(this).contents().wrap('<a href="google.com"></a>');
        });
});

