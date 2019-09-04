function displayFields(form,customHTML){ 
	
	customHTML.append('<script type="text/javascript">'+ '$(document).ready(function(){'); //carregar informações após o HTML carregar
	customHTML.append('console.log("USANDO CUSTOMHTML")'); // Acesso à console de depuração do navegador
	customHTML.append('});'+'</script>') //Função para carregar dados na tela  
	
	function api_usuarioCorrente(){ //carregar dados do usuário logado
		return fluigAPI.getUserService().getCurrent(); // função do fluig para capturar o usuário corrente logado
	}
	log.info("############"+ api_usuarioCorrente());
	
	//coleta de dados
	var atual = getValue("WKNumState"); // parametro para integrar com o numero da atividade 
	var id_form = form.getCardIndex(); //Retorna o ID do formulário
	var user = api_usuarioCorrente().getFullName(); // trazer o nome completo
	
	//Atividades
	var inicio = "5";
	var analisar_gestor = "6";
	var analisar_financ= "12";
	
	//Arrays
	var esconder = [];
	
	if(atual == inicio || atual == "0"){
		esconder.push( "nome");
		form.setValue("solicitante",user)
	}
	
	for (var i=0; i<esconder.length; i++){
		form.setVisibleById(esconder[i], false);
	}
	
	
}

//https://tdn.totvs.com/pages/releaseview.action?pageId=270924158#EventosdeFormul%C3%A1rio-displayFields