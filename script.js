function opentab(tabIndex){
  const tabs = document.querySelectorAll(".mytab")
  const datas = document.querySelectorAll(".tabData")
 
  tabs.forEach((tab , index)=> {
    tab.classList.remove("myActive");
    datas[index].classList.remove("myActive");
  })
  tabs[tabIndex].classList.add("myActive");
  datas[tabIndex].classList.add("myActive")
  
}
