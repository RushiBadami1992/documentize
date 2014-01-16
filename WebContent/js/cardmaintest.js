Ext.onReady(function () {
    var navigate = function (panel, direction) {
            // This routine could contain business logic required to manage the navigation steps.
            // It would call setActiveItem as needed, manage navigation button state, handle any
            // branching logic that might be required, handle alternate actions like cancellation
            // or finalization, etc.  A complete wizard implementation could get pretty
            // sophisticated depending on the complexity required, and should probably be
            // done as a subclass of CardLayout in a real-world implementation.
            var layout = panel.getLayout();
            layout[direction]();
            Ext.getCmp('move-prev').setDisabled(!layout.getPrev());
            Ext.getCmp('move-next').setDisabled(!layout.getNext());
            if(layout.activeItem.id=="card-2")
            	Ext.getCmp('finish').setDisabled(false);
            else
            	Ext.getCmp('finish').setDisabled(true);
        };

    Ext.create('Ext.form.Panel', {
        title: 'Example Wizard',
        width: 450,
        height: 350,
        url:'StorageService',
        layout: 'card',
        bodyStyle: 'padding:15px',
        defaults: {
            // applied to each contained panel
            border: false
        },
        // just an example of one possible navigation scheme, using buttons
        bbar: [{
            id: 'move-prev',
            text: 'Back',
            handler: function (btn) {
                navigate(btn.up("panel"), "prev");
            },
            disabled: true
        }, '->', // greedy spacer so that the buttons are aligned to each side
        {
            id: 'finish',
            text: 'Finish',
            handler: function () {
            	 var form = this.up('form').getForm();
            	 if (form.isValid()) {
                     form.submit({
                    	 	success: function(form, action) {
                            Ext.Msg.alert('Success', "Your Document is ready");
                            window.location = './viewdocument.html';
                         },
                         failure: function(form, action) {
                             Ext.Msg.alert('Failed', action.result.msg);
                         }
                     });
                 }
                
            }
        ,
        disabled: true
        },
        {
            id: 'move-next',
            text: 'Next',
            handler: function (btn) {
                navigate(btn.up("panel"), "next");
            }
        }],
        // the panels (or "cards") within the layout
        items: [{
            id: 'card-0',
            items:[{ 
        		xtype:'textfield',
                fieldLabel:'New Surname', 
                name:'0', 
          //      allowBlank:true 
            },{ 
        		xtype:'textfield',
                fieldLabel:'New Firstname', 
                name:'1', 
        //       allowBlank:true 
            },{ 
        		xtype:'textfield',
                fieldLabel:'Old Surname', 
                name:'2', 
    //            allowBlank:false 
            },{ 
            	xtype:'textfield',
                fieldLabel:'Old Firstname', 
                name:'3', 
      //          allowBlank:false 
            }]
        }, {
            id: 'card-1',
            items:[{ 
        		xtype:'textfield',
                fieldLabel:'Profession', 
                name:'4', 
//                allowBlank:false 
            },{ 
        		xtype:'textareafield',
                fieldLabel:'Address', 
                name:'5', 
//                allowBlank:false 
            },{ 
        		xtype:'datefield',
                fieldLabel:'Date for taking new name', 
                name:'6', 
//                allowBlank:false 
            }]
        }, {
            id: 'card-2',
            items:[{ 
        		xtype:'textfield',
                fieldLabel:'Name of Second Witness', 
                name:'7', 
//                allowBlank:false 
            },{ 
        		xtype:'textareafield',
                fieldLabel:'Address of 1st Witness', 
                name:'8', 
//                allowBlank:false 
            },{ 
        		xtype:'textfield',
                fieldLabel:'Name of 2nd Witness', 
                name:'9', 
//                allowBlank:false 
            },{ 
        		xtype:'textareafield',
                fieldLabel:'Address of 2nd Witness', 
                name:'10', 
//                allowBlank:false 
            }
                   ]
            
        }],
        renderTo: 'form-ct'
    });
});