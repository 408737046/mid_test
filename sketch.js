let bg = ["#F2EDEC"];
let gradationpallet1 = [
  "#7f5539",
  "#606c38",
  "#ff758f",
  "#f7ede2",
  "#936639",
  "#4ecdc4",
  "#f9c74f",
];
let gradationpallet2 = [
  "#582f0e",
  "#c6ac8f",
  "#fe6d73",
  "#713200",
  "#bd897e",
  "#f9c74f",
  "#6a4c93",
  "#e5383b",
];
var ices = []  //所有球的資料內容
var ice  //正在處理的球

class ice_class{  //宣告一個ball_class物件，
  constructor(args){  //描述物件的初始值，只有設定物件的資料內容   
    this.p = args.p || {x:width/2,y:height/2};
    this.w = args.w || random(40,60);
    this.h = args.h || random(40,60)
    this.d = args.d || random(40,60)
    this.v = args.v || random(40,60)
    this.ang = args.ang || random(-40,40)
    this.gdcolor1 = random(gradationpallet1);
    this.gdcolor2 = random(gradationpallet2);
  }
  draw(){   //畫出物件畫面的程式碼，一個物件繪出的程式碼    
    push();
      translate(this.p.x, this.p.y);
      rotate(random(-20, 20));

      //　どこからどこにかけてのグラデーションか
      let gradient = drawingContext.createLinearGradient(
        this.w / 2,
        -this.h / 2,
        this.w / 2,
        this.h / 2
      );


      // グラデーションの設定(0～1 の間のどこに, その色を置く)
      gradient.addColorStop(0, this.gdcolor1);
      gradient.addColorStop(1, this.gdcolor2);

      // このグラデーションで塗りつぶす

      noStroke();
      drawingContext.fillStyle = gradient;

      arc(0, 0, this.d * 0.9, this.d, 180, 360);

      circle(0, this.d / 8, this.d / 2);
      circle(this.d / 3, this.d / 8, this.d / 2);
      circle(-this.d / 3, this.d / 8, this.d / 2);

      for (let n = 0; n < this.d / 5; n++) {
        fill(random(topping));
        circle(
          random(-this.d / 3, this.d / 3),
          random(-this.d / 14, -this.d / 2.5),
          random(this.d / 10)
        );
      }

      pop();
  }

 
  update(){  //物件移動更新後的程式碼
    //this.p.x = this.p.x + this.v.x  //x軸
    //this.p.y = this.p.y + this.v.y  //y軸
    if(this.p.x<0){        //碰到視窗左邊
      this.v.x = -this.v.x
    }
    if(this.p.x>width){   //碰到視窗右邊
      this.v.x = -this.v.x
    }
    if(this.p.y<0){       //碰到視窗上邊
      this.v.y = -this.v.y
    }
    if(this.p.y>height){  //碰到視窗下邊
      this.v.y = -this.v.y
    }
  
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  for(i=0;i<50;i=i+1){
    ice = new ice_class(
      {
        p:{x:random(0,width),y:random(0,height)}
      }
    )
    ices.push(ice)
  }
}

function draw() {
  background(bg);
  for(j=0;j<ices.length;j=j+1){
  ice = ices[j]
  ice.draw()
  ice.update()
  }
}
