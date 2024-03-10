window.onload=function() {
        document.getElementById("formularid").onsubmit = validatef;

        }

        function validatef() {
          let fe = document.getElementById("formularid").elements;
          if (fe[0]==null || fe[0]=="") {
                alert("Pet Name can't be blank");  
                return false;  }
          if   (!(fe[1].checked || fe[2].checked)) {
                alert("Please choose Cat or Dog...");  
                return false;  } 
          if   (fe[3]==null || fe[3]=="") {
                alert("Your Name can't be blank");  
                return false;  } 
          if   (fe[4]==null || fe[4]=="") {
                alert("Email can't be blank");  
                return false;  } 

         //salvare date form
         localStorage.setItem("pet_name", fe[0].value);
         if (fe[1].checked)
                {localStorage.setItem("pet_type", fe[1].value);}
         if (fe[2].checked)
               {localStorage.setItem("pet_type", fe[2].value); }
	 localStorage.setItem("client_name", fe[3].value);
	 localStorage.setItem("client_email", fe[4].value);
	 localStorage.setItem("client_birth_day",fe[5].value); 
	 localStorage.setItem("client_motiv", fe[6].value);

         }


