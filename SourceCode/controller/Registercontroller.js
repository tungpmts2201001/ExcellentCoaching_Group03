function check(){
    var sName = document.getElementById("txtName").value;
    var reName = /^\w/;
    if(!reName.test(sName)){
        alert("Login Name cannot left blank!")
        document.getElementById("txtName").focus;
        return false;
    }
    var sMail = document.getElementById("txtMail").value;
    var reMail = /^\w+[@]\w+[.]\w+([.]\w+)?/;
    if(!reMail.test(sMail)){
        alert("Wrong Email")
        document.getElementById("txtMail").focus;
        return false;
    }
    var sPhone = document.getElementById("txtPhone").value;
    var rePhone = /^\d{8,12}$/;
    if(!rePhone.test(sPhone)){
        alert("False Phone")
        document.getElementById("txtPhone").focus;
        return false;
    }

 var message = [];
message.push("Your iformation has been sent successfully!");
message.push("You have successfully Registered");
alert(message.join("\n"));

}