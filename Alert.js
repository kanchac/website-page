function login()
{
	var x = document.forms["myForm"]["firstname"].value;
	var y = document.forms["myForm"]["lastname"].value;
    if (x == "" || y == "") 
    {
        alert("Name must be filled out");  
    }   
    else
    {
    	alert("Welcome!You have successfully logged in!");
    }

}