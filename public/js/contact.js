function contactFormDATA()
{
	var name = document.forms["contact_form"]["name"].value;
	var phone = document.forms["contact_form"]["phone"].value;
	var email = document.forms["contact_form"]["email"].value;
	var message = document.forms["contact_form"]["message"].value;
	var captcha = grecaptcha.getResponse()
    var ele = document.getElementById('submit');
	ele.disabled="true";
	
    var xhttp;
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() 
	{
		if (this.readyState == 4 && this.status == 200) 
		{
			console.log(this.responseText);
			switch(this.responseText){
				case '1': Notiflix.Report.Failure('Error','All fields are required.','OK',function(){location.reload();});
						break;
				case '2': Notiflix.Report.Failure('Error','Captcha Failed','OK',function(){location.reload();});
						break;
				case '3': Notiflix.Report.Failure('Error','Something went wrong, Please try again','OK',function(){location.reload();});
						break;
				case '4': Notiflix.Report.Success('Success','Your response is submitted. Our team will contact you ASAP.','OK',function(){location.reload();});
						break;
				default: Notiflix.Report.Failure('Error','Unexpected error encountered.','OK',function(){location.reload();});
			}
		}
	};
	xhttp.open("POST", "sendresponse.php", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	//xhttp.send(new FormData(contact_form));
	xhttp.send("name="+name+"&email="+email+"&phone="+phone+"&message="+message+"&captcha="+captcha);
	
	return false;
}