function check_email(x) {
	pattern=/^[a-zA-Z0-9-_.]+@[a-z0-9-]+\.[a-z0-9]{1,6}$/
	pattern1=""
	error=0
	
	if(x.value==''){
		document.getElementById("info").innerHTML="Podaj e-mail"
		error=1
	}else{
	if(!x.value.match(pattern)){
		document.getElementById("info").innerHTML="Błędny format"
		error=1
	}}
	if(error==1){
		document.getElementsByName("email1")[0].style.borderColor="yellow";
		document.getElementById("info").style.color="yellow";
		
	}
}

function validate_email()
{
	
	document.getElementById("info").innerHTML='';
	document.getElementsByName("email1")[0].style.borderColor="#99063c";
	
}

function check_password(x) 
{

	pattern=/\s/
	pattern1=/^\S{8,20}$/
	pattern2=""
	error=0
	
	if(x.value=='')
		{
		document.getElementById("info1").innerHTML="Podaj hasło"
		error=1
	}else {
		
	if(x.value.match(pattern))
	{
		document.getElementById("info1").innerHTML="Hasło nie może zawierać spacji"
		error=1
	}else
	if(!x.value.match(pattern1))
	{
		document.getElementById("info1").innerHTML="Hasło musi zawierać od 8 do 20 znaków"
		error=1
	}}
	if(error==1){
		document.getElementsByName("password")[0].style.borderColor="yellow";
		document.getElementById("info1").style.color="yellow";
		
	}
	
}
	
	function validate_password()
{
	
	document.getElementById("info1").innerHTML='';
	document.getElementsByName("password")[0].style.borderColor="#99063c";
	
}
	