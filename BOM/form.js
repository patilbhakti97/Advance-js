function validation()
{
    var username=document.getElementById('username').value;
    if(username==""){
        document.getElementById('un').innerHTML="**Please enter username**";
        return false;
    }
        if(username.length<2){
            document.getElementById('un').innerHTML="**Please ennter more than one charater**";
        return false;
        }
        if(!isNaN(username)){
            document.getElementById('un').innerHTML="**Please enter alphabets**";
        return false;
        }
        else{
            document.getElementById('un').innerHTML="";
        }

    var password=document.getElementById('password').value;
    if(password==""){
        document.getElementById('pass').innerHTML="**Please enter password**";
        return false;
    }
    if(password.length<8 || password.length>12){
        document.getElementById('pass').innerHTML="**Please enter password between 5 & 12**";
        return false;
    }
    else{
        document.getElementById('pass').innerHTML="";
    }

    var conpass=document.getElementById('conpass').value;
    if(conpass==""){
        document.getElementById('cp').innerHTML="**Please re-enter password**";
    }
    if(conpass!=password){
        document.getElementById('cp').innerHTML="**Password not matching**";
        return false;
    }
    else{
        document.getElementById('cp').innerHTML="";
    }

    var email=document.getElementById('email').value;
    if(email==""){
        document.getElementById('em').innerHTML="**Please enter email ID**";
        return false;
    }
    if(email.indexOf("@")<=0){
        document.getElementById('em').innerHTML="**Please enter email ID in proper format**";
        return false;
    }
    else{
        document.getElementById('em').innerHTML="";
    }

    var mobile=document.getElementById('mobile').value;
    if(mobile==""){
        document.getElementById('mob').innerHTML="**Please enter mobile no.**";
        return false;
    }
    if(isNaN(mobile)){
        document.getElementById('mob').innerHTML="**Please write numbers only**";
        return false;
    }
    if(mobile.length<10 || mobile.length>10){
        document.getElementById('mob').innerHTML="**Please enter 10 digit mob no.**";
    return false;
    }
    else{
        document.getElementById('mob').innerHTML="";
    }
}