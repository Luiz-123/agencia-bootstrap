$( document ).ready(function() {
    
    // Progress Bar Ciclo A
    let containerA = document.getElementById("circleA");
  
    let circleA = new ProgressBar.Circle(containerA, {
      color: '#fff',
      strokeWidth: 8,
      duration: 1400,
      from: { color: '#aaa'},
      to: { color: '#106f8a'},
  
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
  
        var value = Math.round(circle.value() * 60);
        circle.setText(value);
      }
    });

    // Progress Bar Ciclo B
    let containerB = document.getElementById("circleB");
  
    let circleB = new ProgressBar.Circle(containerB, {
      color: '#fff',
      strokeWidth: 8,
      duration: 1600,
      from: { color: '#aaa'},
      to: { color: '#106f8a'},
  
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
  
        var value = Math.round(circle.value() * 254);
        circle.setText(value);
      }
    });  

    // Progress Bar Ciclo C
    let containerC = document.getElementById("circleC");
  
    let circleC = new ProgressBar.Circle(containerC, {
      color: '#fff',
      strokeWidth: 8,
      duration: 2000,
      from: { color: '#aaa'},
      to: { color: '#106f8a'},
  
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
  
        var value = Math.round(circle.value() * 32);
        circle.setText(value);
      }
    });

    // Progress Bar Ciclo D
    let containerD = document.getElementById("circleD");
  
    let circleD = new ProgressBar.Circle(containerD, {
      color: '#fff',
      strokeWidth: 8,
      duration: 2200,
      from: { color: '#aaa'},
      to: { color: '#106f8a'},
  
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
  
        var value = Math.round(circle.value() * 5243);
        circle.setText(value);
      }
    });


    // Iniciando o loader quando o usuário chega no elemento
    let dataAreaOffset = $('#data-area').offset();
    let stop = 0;

    $(window).scroll(function(e) {
      let scroll = $(window).scrollTop();

      if(scroll > (dataAreaOffset.top - 500) && stop == 0) {
        circleA.animate(1.0);
        circleB.animate(1.0);
        circleC.animate(1.0);
        circleD.animate(1.0);

        stop = 1;
      }
    });

    // Parallax 
    setTimeout(function() {
      $('#data-area').parallax({imageSrc:'img/cidadeparallax.png'});  
      $('#apply-area').parallax({imageSrc:'img/pattern.png'});    
    }, 250);
    
});

/*background-color: #3513D4; background-color: #270cc0; #3a2e7c; #960396; #330935*/
