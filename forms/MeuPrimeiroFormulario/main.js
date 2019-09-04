console.log ("estou usando js")

	$ ("#cep").blur(function(){
	
	var cep = $("#cep").val();
	
	$.getJSON("https://viacep.com.br/ws/"+cep+"/json/", function(data){
	$("#endereco").val(data.logradouro+" - " +data.bairro+" /"+data.uf);
	})
	})
	
	$ ("#cnpj").blur(function(){
	
	var cnpj = $("#cnpj").val();
	
	$.getJSON("https://www.receitaws.com.br/v1/cnpj/"+cnpj+"callback=?", function(data){
    $ ("#empresa").val(data.nome)
	})

})