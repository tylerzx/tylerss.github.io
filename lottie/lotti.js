let animationmonster = document.getElementById("animationmonster");
let animationtoggle = document.getElementById("animationtoggle");
let toggleframs= 0;

let monster=bodymovin.loadAnimation({
      container: animationmonster ,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: "https://lottie.host/33ccfa01-e166-4618-b59b-7df84f90a3f6/OBvfxJuaMy.json"
    });
    
    let toggle =bodymovin.loadAnimation({
        container: animationtoggle ,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: "https://lottie.host/233ad31a-c700-4b2b-a663-65ae2b5586e1/ccjXcZSoau.json"
      });

    animationmonster.addEventListener('mouseleave', function(){
        monster.playSegments([110, 210],  true);
    });

    animationtoggle.addEventListener('click', function(){
        if (toggleframs== 0){
            toggle.playSegments([1,40], true);
        } else {
            toggle.playSegments([41,110],true);
            let toggleframs = 0;
        }
    });

    