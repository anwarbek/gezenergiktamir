let block = document.querySelector('.header-top');
let btn = document.getElementById('myBtn');
btn.addEventListener('click', ()=>{
  if (btn.classList.contains('header-top')) {
  } else {
    block.classList.toggle('show')
  }
})

// let blocktwo = document.querySelector('.header-top');
// let btntwo = document.getElementById('myBtn');
// btntwo.addEventListener('click', ()=>{
//   if (btntwo.classList.contains('header-top')) {
//   } else {
//     blocktwo.classList.toggle('show')
//   }
// })
  
  // document.getElementById('myBtn').onclick = function () {
  //   document.getElementById('topHeader').classList.toggle('show');
  // }
  // Qidiruv
  function myFunction() {
    var input, filter, ul, li, h4, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      h4 = li[i].getElementsByTagName("h4")[0];
      txtValue = h4.textContent || h4.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
  // // Enter o'chirildi
  // $(document).on("keydown", "form", function (event) {
  //   return event.key != "Enter";
  // });