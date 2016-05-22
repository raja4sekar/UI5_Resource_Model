sap.ui.controller("zui5_resource.main", {
	changeLanguage: function(oEvent){
		console.clear();
		console.log('Button press detected:',oEvent.getSource().getId());
		var sLangu = oEvent.getSource().getId();
		var sBundleUrl;
		switch(sLangu){
		case "de":
			sBundleUrl = 'translations/translation_de.properties'; 
			break;
		default:
			sBundleUrl = 'translations/translation_en.properties';
			break;
		}
	this.oLangu = new sap.ui.model.resource.ResourceModel({
		bundleUrl:sBundleUrl,
		"bundle_locale":sLangu
	});
	sap.ui.getCore().setModel(this.oLangu,"i18n");
}
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zui5_resource.main
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zui5_resource.main
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zui5_resource.main
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zui5_resource.main
*/
//	onExit: function() {
//
//	}

});