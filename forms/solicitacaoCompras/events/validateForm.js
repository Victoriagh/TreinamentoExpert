function validateForm(form){
	
	var msg = "";
	
	if(form.getValue("telefone")== ""){
		msg += "O telefone deve ser informado";
		throw msg;
		
	}
	
	if(form.getValue("dtSolicitacao")== ""){
		msg += "A data de solitação deve ser informado";
		throw msg;
		
	}
	
}
	
	