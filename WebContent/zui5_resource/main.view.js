sap.ui.jsview("zui5_resource.main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zui5_resource.main
	*/ 
	getControllerName : function() {
		return "zui5_resource.main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zui5_resource.main
	*/ 
	createContent : function(oController) {		
		//var oEvent = new sap.ui.getCore().Event;
		//oController.changeLanguage(oEvent);
		var oEngButton = new sap.ui.commons.Button({
			text:"English",
			id:"en",
			press:function(oEvent){oController.changeLanguage(oEvent);}
		});
		
		var oDeButton = new sap.ui.commons.Button({
			text:"German",
			id:"de",
			press:function(oEvent){oController.changeLanguage(oEvent);}
		});
		
		var oFrButton = new sap.ui.commons.Button({
			text:"French",
			id:"fr",
			press:function(oEvent){oController.changeLanguage(oEvent);}
		});
		
		var oMatLayout = new sap.ui.commons.layout.MatrixLayout({
			layOutFixed:true,
			width:'200px',
			columns:2,
			widths:['100px','100px']
		});
		//var oMatRow = new sap.ui.commons.layout.MatrixLayoutRow();
		var oMatCell1 = new sap.ui.commons.layout.MatrixLayoutCell();
		var oMatCell2 = new sap.ui.commons.layout.MatrixLayoutCell();
		var oMatCell3 = new sap.ui.commons.layout.MatrixLayoutCell();
		
		oMatCell1.addContent(oEngButton);
		//oMatRow.addCell(oMatCell);
		oMatCell2.addContent(oDeButton);
		//oMatRow.addCell(oMatCell);
		//oMatLayout.addRow(oMatRow);
		oMatLayout.createRow(oMatCell1,oMatCell2);
		
		oMatCell3.setColSpan(2);
		oMatCell3.addContent(oFrButton);
		//oMatRow.addCell(oMatCell);
		//oMatLayout.insertRow(oMatRow);
		oMatLayout.createRow(oMatCell3);
		
		var oText = new sap.ui.commons.TextView({
			text:"{i18n>BUKRS}"			
		});
		
		var oText1 = new sap.ui.commons.TextView({
			text:"{i18n>MD}"			
		});
		
		oMatLayout.createRow(oText,oText1);
		
		return oMatLayout;
		
	}

});
