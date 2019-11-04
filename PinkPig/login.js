var login = {

    init: function() {
        this.event();
    },

     event : function() {
        var t = document.getElementById('submit');
        t.onclick = function(event) {
            //location.href = "/Page/Main.html";
            checkUser();
        }
    },
};

function checkUser() {
    var id = $('#loginID').val();
    var pw = $('#password').val();

    if (id == 'admin' && pw == 'admin')
    {
        location.href = "/Page/Main.html";    
        console.log("관리자 접근");
    }    
};

$(function () {
    login.init();
});