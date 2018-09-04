function reg()
{          
  
    document.getElementById("usere").innerHTML="";
    document.getElementById("passe").innerHTML="";
    document.getElementById("phe").innerHTML="";      
    document.getElementById("adde").innerHTML="";
    document.getElementById("emaile").innerHTML="";
    

 var a,b,ph,add,pin,email,c=true;
 var z=  /^([a-zA-Z0-9_\-\.])+\@([a-zA-Z0-9_+\.])+([a-zA-Z]{2,5})$/;

 a=document.getElementById("user").value;
 b=document.getElementById("pass").value;
 ph=document.getElementById("ph").value;
 pin=document.getElementById("pin").value;
 email=document.getElementById("email").value;
 add=document.getElementById("add").value;


 document.getElementById("pine").innerHTML="";
    
 if(a=="")
 {
    document.getElementById("usere").innerHTML="error here";
    c=false;
 }

 if(b=="")
 {
    document.getElementById("passe").innerHTML="error here";
     c=false;
 }
 if(((email==""))||(!(z.test(email))))
 {
    document.getElementById("emaile").innerHTML="error here";
    c=false;
 }

 if(ph=="" ||(ph>9999999999||ph<1000000000))
 {
    document.getElementById("phe").innerHTML="error here";
    c=false;
 }
 if(pin=="")
 {
    document.getElementById("pine").innerHTML="error here";
    c=false;
 }
 if(add=="")
 {
    document.getElementById("adde").innerHTML="error here";
    c=false;
 }
 return c;
}
//--------------------------------------------------------------------------------------------------------------
function check()
{
document.getElementById("userne").innerHTML="";
    
document.getElementById("passwe").innerHTML="";
 var a,b,ph,add,feed,pin,email,c=true;
 a=document.getElementById("usern").value;
 b=document.getElementById("passw").value;
 
 if(a=="")
 {
    document.getElementById("userne").innerHTML="error here";
    c=false;
 }

 if(b=="")
 {
    document.getElementById("passwe").innerHTML="error here";
     c=false;
 }

 return c;
}
//--------------------------------------------------------------------------------------------------------------
function feedback()
{
    
document.getElementById("ue").innerHTML="";
    
document.getElementById("ee").innerHTML="";
 var a,l,b,c=true;
 a=document.getElementById("u").value;
 b=document.getElementById("e").value;
 
 
 if(a=="")
 {
    document.getElementById("ue").innerHTML="error here";
    c=false;
 }

 if(b=="")
 {
    document.getElementById("ee").innerHTML="error here";
     c=false;
 }


 return c;
}
//--------------------------------------------------------------------------------------------------------------
function numbercheck(event)
{ 
    var d,c=false;
     if (event.keyCode)
     {
         d=event.keyCode;
     }
     else{
         d=event.which;
     }
     if((d>=47 && d<=58)||d==8)
     {
         c=true;
     }
     return c;
}