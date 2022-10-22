function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);      //背景玵色為0黑色
  noFill()            //不充滿顏色
  stroke(255)         //框線顏色為255白色
  rectMode(CENTER)
  var w=mouseX/10

  for(var j=0;j<height/50;j++)
  {
    for(var i=0;i<width/50;i++)
    {
      stroke("#219ebc") //顏色
      rect(50+50*i,50+50*j,mouseX/10)

      stroke("#d4a373")
      ellipse(50+50*i,50+50*j,mouseY/4)

      stroke("#ccd5ae")
      rect(100+50*i,100+50*j,50)
    }
  }
}





  //for(var i=0;i<width/100;i++)
  //{
    //rect(50+100*i,50+100*0,100,) //大方型
   // ellipse(50+100*i,50+100*0,50)//方形中間的圓形
    //rect(100+100*i,100+100*0,50) //小方形
  //}
    //for(var i=0;i<width/100;i++)
   //{
   // rect(50+100*i,50+100*1,100,) //大方型
    //ellipse(50+100*i,50+100*1,50)//方形中間的圓形
    //rect(100+100*i,100+100*1,50) //小方形
   //}
   //}
  