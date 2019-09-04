function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	
	var dataset = DatasetBuilder.newDataset();
	 
	//Cria as colunas
    dataset.addColumn("setor");
    dataset.addColumn("Coordenador");
    dataset.addColumn("Estado");
    
      
    //Cria os registros
    dataset.addRow(new Array("Comercial", "João", "Manaus"));
    dataset.addRow(new Array("Tecnologia da Informação", "Maria", "Belém"));
    dataset.addRow(new Array("Administração", "Carlos", "Cuiabá"));
    dataset.addRow(new Array("Recursos Humanos", "José", "Palmas"));
    dataset.addRow(new Array("Comercio Exterior", "Antonio", "Teresina"));
     
    return dataset;

}function onMobileSync(user) {

}