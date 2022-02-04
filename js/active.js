function activate() {
    let location = window.location.href;
    if (location.indexOf('.html') == -1) {
      document.getElementById('yura').classList.add("active");
    } else {
      var elements = document.getElementsByClassName('nav');
      for (let elem of elements) {
        if (elem == location) {
          document.getElementById(elem.id).classList.add("active");
        } else {
          elem.classList.remove('active');
        }
      }
    }
}

