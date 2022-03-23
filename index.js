let x = null;
let y = null;



;(()=>{
  x = parseInt(Math.random()*100)
  y = parseInt(Math.random()*100)
  console.log("x",x,"y",y);
  document.getElementById("wanwan").style.left = x+'%'
  document.getElementById("wanwan").style.top = y+'%'
})()


document.getElementById("wanwan").addEventListener('click',()=>{
  document.getElementById('wanwandatou').style.marginLeft = '-324px'
  document.getElementById('wanwandatou').style.marginTop = '-324px'
  document.getElementById('wanwandatou').style.width = '648px'
  document.getElementById('wanwandatou').style.height = '648px'
})