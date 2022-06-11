document.addEventListener("DOMContentLoaded", function(){


  let larghezza;
  let altezza;
  let numCircles;

  if(window.innerWidth < 768){
    altezza = 30;
    larghezza = 17;
    numCircles = 20;
  }else{
    altezza = 150;
    larghezza = 100;
    numCircles = 50;
  }



  let ground;
  let wall1;
  let wall2;

  const content = document.querySelector('.container');

  let elements = [];

  let w = content.offsetWidth;
  let h = content.offsetHeight;

  window.addEventListener('resize', (e) => {

    engine.render.canvas.width = w;
    engine.render.canvas.height = h;

    Matter.Body.setPosition(wall2, Matter.Vector.create(w + 30, h * .5));
    Matter.Body.setPosition(ground, Matter.Vector.create(w * .5, h + 30));

  });

  // create a Matter.js engine
  var engine = Matter.Engine.create(content, {
    render: {
      options: {
        width: w,
        height: h,
        wireframes: false,
        background: "#FFFFFF00"
      }
    }
  });


  window.engine = engine;

  var mouseConstraint = Matter.MouseConstraint.create(engine, {
    constraint: {
      render: {
        visible: false
      }
    }
  });


  let colours = ["#D855DA", "#4FC0FD", "#279B5F", "#FFB325"];

  function makePattern(numero, w) {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.height = (w || 10 + Math.random() * 20 >> 0);
    console.log(numero, "makepattern");
    ctx.fillStyle = colours[numero];

    if (Math.random() * 2 < 1) {
      ctx.arc(canvas.width / 2 >> 0, canvas.width / 2 >> 0, canvas.width * (Math.random() * 0.5), 0, 2 * Math.PI);
      ctx.fill()
    } else {
      var half = canvas.width / 2;
      var lineHeight = Math.random() * canvas.width >> 0;
      ctx.translate(half, half);
      ctx.rotate(Math.random() * 90 * Math.PI / 180);
      ctx.fillRect(-canvas.width, -lineHeight / 2 >> 0, canvas.width * 2, lineHeight);
    }
    return ctx.createPattern(canvas, 'repeat');
  }


  for(var i = 0; i < numCircles; i++)
  {

    let numero = Math.floor(Math.random() * 4)
    console.log(numero, "loop");

    var x = Math.random() * w;
    var y = Math.random() * - h;
    var rotation = Math.random() * 270;
    var base = 100;
    if(base < 5) base = 5
    if(base > 30) base = 30
    var multiplier = w / 10
    if(multiplier < 30) multiplier = 30
    if(multiplier > 200) multiplier = 200
    var r = base
    let rectangle = Matter.Bodies.rectangle(x, y, 100, 150, {
      render: {
        fillStyle: makePattern(numero),
        strokeStyle: colours[numero],
        lineWidth: 6,
      }});
    Matter.Body.rotate(rectangle, rotation)
    elements.push(rectangle);

  }


  ground = Matter.Bodies.rectangle(w/2, h+30, w*5., 60, { isStatic: true });
  wall1 = Matter.Bodies.rectangle(-30, h/2, 60, h*2, { isStatic: true });
  wall2 = Matter.Bodies.rectangle(w+30, h/2, 60, h*2, { isStatic: true });

  window.wall2 = wall2;
  elements.push(ground);
  elements.push(wall1);
  elements.push(wall2);

  Matter.World.add(engine.world, elements);
  Matter.World.add(engine.world, mouseConstraint);


  Matter.Engine.run(engine);
});
