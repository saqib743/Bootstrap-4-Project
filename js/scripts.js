$(document).ready(function(){
    $("#loginMemberButton").click(function(){
        $('#loginModal').modal('show');
    });
    $("#loginModalCloseButton").click(function(){
        $('#loginModal').modal('hide');
    });
    $("#searchPlayerButton").click(function(){
        let sText=$("#userSearchText").val();
        window.location="/searchedUser.html?id="+sText;
    });
    
});
