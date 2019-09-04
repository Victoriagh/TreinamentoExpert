function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	
	var filtroGroup = DatasetFactory.createConstraint('colleagueGroupPK.groupId', 'Gestores', 'Gestores', ConstraintType.MUST);

	var dataset = DatasetFactory.getDataset("colleagueGroup", null, new Array(filtroGroup), null);
	return dataset;
	


}function onMobileSync(user) {

}