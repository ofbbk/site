<script>
function myFunction() {
    var x = document.getElementById("mobile");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

function openMenu(menuName) {
var i;

var x = document.getElementsByClassName("menu");
for (i = 0; i < x.length; i++) {
x[i].style.display = "none";

}
document.getElementById(menuName).style.display = "block";  
}
</script>


3-hover-shadow w3-padding-64 w3-center


<button class="w3-button w3-text-grey w3-round w3-mobile" onclick="openMenu('Video', document.getElementById('Video'))" style="margin-top:2vh">Монтаж видео</button>
<button class="w3-button w3-text-grey w3-round w3-mobile" style="margin-top:2vh">Сздание музыки</button>
<div class="w3-container w3-center">
<button class="w3-button w3-text-grey w3-round w3-mobile" style="margin-top:2vh">Написать мне</button>
</div



<button href="mailto:y.kuz@icloud.com?subject=Видеомонтаж или написание музыки" class="w3-button w3-text-grey w3-round w3-mobile" style="margin-top:2vh">Написать мне</button>
      </