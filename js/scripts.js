$(document).ready(function(){
    $("#loginMemberButton").click(function(){
        $('#loginModal').modal('show');
    });
    $("#loginModalCloseButton").click(function(){
        $('#loginModal').modal('hide');
    });
    $("#searchPlayerButton").click(function(){
        var sText=$("#userSearchText").val();
        window.location="/searchedUser.html?id="+sText;
    });
    var url_string = window.location.href; 
    var url = new URL(url_string);
    var c = url.searchParams.get("id");
    $("#userSearchText").val(c);
});
