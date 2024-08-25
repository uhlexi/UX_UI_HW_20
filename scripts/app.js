const observerX = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
    });
});

const hiddenElements = document.querySelectorAll(['.hidden-left','.hidden-right']);
hiddenElements.forEach((el) => observerX.observe(el));

const observerY = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show-y');
        } 
    });
});

const hiddenYElements = document.querySelectorAll(['.hidden-y']);
hiddenYElements.forEach((el) => observerY.observe(el));


<!--INTRO-->
let intro = document.querySelector('.intro')
    let logo = document.querySelector('.logo-header')
    let logoSpan = document.querySelectorAll('.logo')
    window.addEventListener('DOMContentLoaded',()=>{
      setTimeout(()=>{
        logoSpan.forEach((span,idx) => {
          setTimeout(()=>{
            span.classList.add('active')
        }, (idx+1)*400);
      });

      setTimeout(()=>{
        logoSpan.forEach((span,idx)=>{
          setTimeout(()=>{
            span.classList.remove('active');
            span.classList.add('fade');
          }, (idx+1)*50)
        })
      },2000);
      setTimeout(() => {
        intro.style.top= '-100vh'
      },2300);
    })
  })



  <!--CASE STUDY-->
<script>
    document.getElementById("fonts").addEventListener("click", function() {
        document.getElementById("main-image").src = "images/style2.png";
    });

    document.getElementById("controls").addEventListener("click", function() {
        document.getElementById("main-image").src = "images/style3.png";
    });

    document.getElementById("colors").addEventListener("click", function() {
        document.getElementById("main-image").src = "images/style1.png";
    });
</script>