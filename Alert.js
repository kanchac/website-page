function login()
{
	var x = document.forms["myForm"]["Username"].value;
    if (x == "") 
    {
        alert("Name must be filled out");  
    }   
    else
    {
    	window.alert("Welcome " +document.getElementById("Username").value);

    }

}

