function enableFields(form){
	
	//coleta de dados
	var atual = getValue("WKNumState"); //parametro para integrar com o numero da atividade atual
	var id_form = form.getCardIndex();
	
	
	//Atividades
	var inicio = "5";
	var analisar_gestor = "6";
	var analisar_financ= "12";
	
	//Arrays
	var habilita = [];
	
		
	if(atual == inicio || atual== "0"){
		habilita.push("solicitante");
	}
	
	if(atual == analisar_gestor || atual== "0"){
		habilita.push("solicitante");
	}	
	
	if(atual == analisar_financ || atual== "0"){
		habilita.push("solicitante");
	}	
	
	if(atual == inicio || atual== "0"){
		habilita.push("desc_gestor");
	}
	

	if(atual == inicio || atual== "0"){
		habilita.push("aprov_gestor");
	}
	
	for (var i=0; i<habilita.length; i++){
		form.setEnabled(habilita[i], false);
	}
	
}