// WEB API STORAGE 
// localStorage and sessionStorage
//it store key value pair in web browsers
// usefull for saving user preferences or persisting data between sessions.

/*
MECHANISIMS OF WE BAPI STORAGES
window.localStorage() and window.sessionStorage() properties invoking one of 
this will return an instance storage object. through which data items can be set or
retrieved or removed.
Both properties are synchronous in nature. this means tha when data is set, retrieve or removed from these 
storage mechanisms, the operations are performed synchronously, blocking the excution of other
js code till the opeartion ends couses limitions.
 */
// setItem,getItem,removeItem,key,length


//USING WEB API STORAGE. 

localStorage.colorSetting="#a4509b";
localStorage["colorSetting"]="#a4509b";
localStorage.setItem("colorSetting","#a4509b")
//key               value
//colorSetting    "#a4509b"

//DETECT WETHER LOCALSTORAGE IS BOTH SUPORTED AND AVAILABLE
function availableStorage(type){
    let storage;
    try {
        storage=window[type]
        const x="storage test"
        storage.setItem(x,x)
        storage.removeItem(x)
        return true;
    } catch (error) {
        retrun (
            error instanceof DOMException && error.name==="QuotaExceededError" && 
            // accknowledge  QuotaExceededError only if there is sth already stored
            storage && storage.length !==0
        )
        
    }

}
if(availableStorage("localStorage")){
    console.log("availabe we can use local storage") // availabe we can use local storage
﻿


}else{
    console.log("not available")
}

//TESTING WHETHER YOUR STRAGE HAS BEEN POPULATED
//i.e the page was prvieosly accessed

const bgColor=document.getElementById("bgColor")
const forntForm=document.getElementById("font")
const imageForm=document.getElementById("image")




if (!localStorage.getItem("bgColor")){
    populateStorage();
}else{
    setStyles()
}
//get values from the storage.
function setStyles(){
    const currentColor=localStorage.getItem("bgColor")
    const currentFont=localStorage.getItem("font")
    const currentImage=localStorage.getItem("image")

    document.getElementById("bgColor").value=currentColor;
    document.getElementById("font").value=currentFont;
    document.getElementById("image").style=currentImage;

    document.getElementById("p").style.backgroundColor=currentColor
    document.getElementById("p").style.fontFamily=currentFont;
    document.getElementById("image2").setAttribute("src", currentImage)
    console.log("currentColor",currentColor)
    console.log("currentFont", currentFont)
    console.log("currentImage",currentImage)
}
//setting value in local storage =
function populateStorage(){
    localStorage.setItem("bgColor", document.getElementById("bgColor").value)
    localStorage.setItem("font", document.getElementById("font").value)
    localStorage.setItem("image",document.getElementById("image").value)

    setStyles()// runs the setStyle() function to update the page styles.

}


bgColor.onchenge=populateStorage;
forntForm.onchenge=populateStorage;

imageForm.onchenge=populateStorage
