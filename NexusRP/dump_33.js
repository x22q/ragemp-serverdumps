{
let bankmenu = global.ConstrolsBrowser;
mp.events.add('Bank:OpenMenu',(accounSettings)=>{    
        bankmenu.execute(`window.locale='${global.Language}'`)
        bankmenu.execute(`openInterface('bank')`);
        bankmenu.execute(`controls.setProperties(${accounSettings})`);
    global.menuOpen()
})
mp.events.add('Bank:DestroyBrowser',()=>{
    global.menuClose();
    bankmenu.execute(`closeInterface()`);
    mp.events.call("NPC.cameraOff",1500);
})
mp.events.add('Bank:UpdateProperties',(accounSettings)=>{
    if(bankmenu !=null){
        bankmenu.execute(`controls.setProperties(${accounSettings})`);
    }
})
mp.events.add('Bank:AccountInteraction',(accType,type,sum)=>{
    NewEvent.callRemote('Bank:AccountInteraction',accType,type,sum)
})
mp.events.add('Bank:AccountTransfer',(account,sum)=>{
    NewEvent.callRemote('Bank:AccountTransfer',account,sum)
});
mp.events.add('Bank:TaxesTransfer',(type,sum)=>{
    NewEvent.callRemote('Bank:TaxesTransfer',type,sum)
});
mp.events.add('Bank:SendNotify', (type, layout,msg,time) => {
    if (bankmenu != null) {
        bankmenu.execute(`notify(${type},${layout},"${msg}",${time})`);
    }
})

}