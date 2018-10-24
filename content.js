console.log("Content running");

document.body.addEventListener('mouseup',doThis);

function doThis(){
  let selectedText = document.getSelection().toString();
  if(selectedText.length > 0)
    console.log(selectedText);
}
