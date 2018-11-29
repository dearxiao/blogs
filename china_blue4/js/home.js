 ;$(function(){	
	var width=$(window).width();
		
	if(width>=1600){
		
	
  //中心点横坐标
  var dotLeft = ($(".field_yuan").width()-150)/2;
  //中心点纵坐标
  var dotTop = ($(".field_yuan").height()-150)/2;
  //起始角度
  var stard = 0;
  //半径
  var radius = 320;
  //每一个BOX对应的角度;
  var avd = 360/$(".field_yuan ul li").length;
  //每一个BOX对应的弧度;
  var ahd = avd*Math.PI/180;
  //设置圆的中心点的位置
  $(".field_yuan ul li").each(function(index, element){
          $(this).css({"left":Math.sin((ahd*index))*radius+dotLeft,"top":Math.cos((ahd*index))*radius+dotTop});
          $(this).click(function() {
            // console.log($(this).css("transform"))
        var el = $(".field_yuan");
        var st = window.getComputedStyle(el[0], null);
        var tr = st.getPropertyValue("-webkit-transform") ||
         st.getPropertyValue("-moz-transform") ||
         st.getPropertyValue("-ms-transform") ||
         st.getPropertyValue("-o-transform") ||
         st.getPropertyValue("transform") ||
         "FAIL";
        var values = tr.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var c = values[2];
        var d = values[3];
        var scale = Math.sqrt(a * a + b * b);
        var sin = b / scale;
        var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
           
            if (10 < angle && angle <= 50) {
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              $(".field_li").fadeOut();
                              $(".one_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:30,animateTo: -90,duration:2000})
                              setTimeout(() => {
                                $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: 90,duration:2000
                        })
                                          
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:30,animateTo: -50,duration:1500})
                              setTimeout(() => {
                                $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: 50,duration:1500
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(this).rotate({angle:30,animateTo: -10,duration:1000})
                              setTimeout(() => {
                                $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: 10,duration:1000
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:30,animateTo: 30,duration:500})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: -30,duration:500
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:30,animateTo: 70,duration:1000})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: -70,duration:1000
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:30,animateTo: 110,duration:1500})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: -110,duration:1500
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:30,animateTo: 150,duration:2000})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: -150,duration:2000
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:30,animateTo: 190,duration:2500})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: -190,duration:2500
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:30,animateTo: -130,duration:2000})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: 130,duration:2000
                        })
                        break;
                    // default :
                  }
                  // break;
              }else if (50 < angle && angle <= 90) {
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".noe_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: -90,duration:2500})
                              setTimeout(() => {
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: 90,duration:2500
                        })
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: -50,duration:2000})
                              setTimeout(() => {
                                // $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: 50,duration:2000
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: -10,duration:1500})
                              setTimeout(() => {
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: 10,duration:1500
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: 30,duration:1000})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: -30,duration:1000
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: 70,duration:500})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                // $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: -70,duration:500
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: 110,duration:1000})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: -110,duration:1000
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: 150,duration:1500})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: -150,duration:1500
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: 190,duration:2000})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: -190,duration:2000
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: 230,duration:2500})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: -230,duration:2500
                        })
                        break;
                    // default :
                  }
                }else if (90 < angle && angle <= 130) {
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".one_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: 270,duration:2000})
                              setTimeout(() => {
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: -270,duration:2000
                        })
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: -50,duration:2500})
                              setTimeout(() => {
                                // $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: 50,duration:2500
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: -10,duration:2000})
                              setTimeout(() => {
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: 10,duration:2000
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: 30,duration:1500})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: -30,duration:1500
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: 70,duration:1000})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: -70,duration:1000
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: 110,duration:500})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: -110,duration:500
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: 150,duration:1000})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: -150,duration:1000
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: 190,duration:1500})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: -190,duration:1500
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: 230,duration:2000})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: -230,duration:2000
                        })
                        break;
                    // default :
                  }
                }else if (130 < angle && angle <= 170) {
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".one_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: 270,duration:1500})
                              setTimeout(() => {
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: -270,duration:1500
                        })
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: 310,duration:2000})
                              setTimeout(() => {
                                // $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: -310,duration:2000
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: -10,duration:2500})
                              setTimeout(() => {
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: 10,duration:2500
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: 30,duration:2000})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: -30,duration:2000
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: 70,duration:1500})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                  $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                  $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                  setTimeout(() => {
                                    rotation()
                                  }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: -70,duration:1500
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: 110,duration:1000})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: -110,duration:1000
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: 150,duration:500})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: -150,duration:500
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: 190,duration:1000})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: -190,duration:1000
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: 230,duration:1500})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: -230,duration:1500
                        })
                        break;
                    // default :
                  }
                 }else if (-190 < angle && angle <= -150){
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".one_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-170,animateTo: -90,duration:1000})
                              setTimeout(() => {
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:170,animateTo: 90,duration:1000
                        })
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-170,animateTo: -50,duration:1500})
                              setTimeout(() => {
                                // $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:170,animateTo: 50,duration:1500
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-170,animateTo: -10,duration:2000})
                              setTimeout(() => {
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:170,animateTo: 10,duration:2000
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:170,animateTo: 30,duration:2500})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-170,animateTo: -30,duration:2500
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-170,animateTo: -290,duration:2000})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle: 170,animateTo: 290,duration:2000
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-170,animateTo: -250,duration:1500})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:170,animateTo: 250,duration:1500
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-170,animateTo: -210,duration:1000})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:170,animateTo: 210,duration:1000
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-170,animateTo: -170,duration:500})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:170,animateTo: 170,duration:500
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-170,animateTo: -130,duration:1000})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:170,animateTo: 130,duration:1000
                        })
                        break;
                    // default :
                  }
                 }else if (-150 < angle && angle <= -110){
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".one_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-130,animateTo: -90,duration:1000})
                              setTimeout(() => {
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:130,animateTo: 90,duration:1000
                        })
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-130,animateTo: -50,duration:1500})
                              setTimeout(() => {
                                // $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:130,animateTo: 50,duration:1500
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-130,animateTo: -10,duration:2000})
                              setTimeout(() => {
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:130,animateTo: 10,duration:2000
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-130,animateTo: 30,duration:2500})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:130,animateTo: -30,duration:2500
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle: -130,animateTo: -290,duration:2500})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle: 130,animateTo: 290,duration:2500
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-130,animateTo: -250,duration:2000})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:130,animateTo: 250,duration:2000
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-130,animateTo: -210,duration:1500})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:130,animateTo: 210,duration:1500
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-130,animateTo: -170,duration:1000})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:130,animateTo: 170,duration:1000
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-130,animateTo: -130,duration:500})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:130,animateTo: 130,duration:500
                        })
                        break;
                    // default :
                  }
                }else if (-110 < angle && angle <= -70){
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".one_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-90,animateTo: -90,duration:500})
                              setTimeout(() => {
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:90,animateTo: 90,duration:500
                        })
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-90,animateTo: -50,duration:1000})
                              setTimeout(() => {
                                // $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:90,animateTo: 50,duration:1000
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-90,animateTo: -10,duration:1500})
                              setTimeout(() => {
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:90,animateTo: 10,duration:1500
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-90,animateTo: 30,duration:2000})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:90,animateTo: -30,duration:2000
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle: -90,animateTo: 70,duration:2500})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle: 90,animateTo: -70,duration:2500
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-90,animateTo: -250,duration:2500})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:90,animateTo: 250,duration:2500
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-90,animateTo: -210,duration:2000})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:90,animateTo: 210,duration:2000
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-90,animateTo: -170,duration:1500})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:90,animateTo: 170,duration:1500
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-90,animateTo: -130,duration:1000})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:90,animateTo: 130,duration:1000
                        })
                        break;
                    // default :
                  }
                  // break;
                 }else if (-70 < angle && angle <= -30){
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".one_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-50,animateTo: -90,duration:1000})
                              setTimeout(() => {
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:50,animateTo: 90,duration:1000
                        })
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-50,animateTo: -50,duration:500})
                              setTimeout(() => {
                                // $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:50,animateTo: 50,duration:500
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-50,animateTo: -10,duration:1000})
                              setTimeout(() => {
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:50,animateTo: 10,duration:1000
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-50,animateTo: 30,duration:1500})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:50,animateTo: -30,duration:1500
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle: -50,animateTo: 70,duration:2000})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle: 50,animateTo: -70,duration:2000
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-50,animateTo: 110,duration:2500})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:50,animateTo: -110,duration:2500
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-50,animateTo: -210,duration:2500})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:50,animateTo: 210,duration:2500
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-50,animateTo: -170,duration:2000})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:50,animateTo: 170,duration:2000
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-50,animateTo: -130,duration:1500})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:50,animateTo: 130,duration:1500
                        })
                        break;
                    // default :
                  }
                  // break;
                  }else if (-30 < angle && angle <= 10){
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".one_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-10,animateTo: -90,duration:1500})
                              setTimeout(() => {
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:10,animateTo: 90,duration:1500
                        })
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-10,animateTo: -50,duration:1000})
                              setTimeout(() => {
                                // $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:10,animateTo: 50,duration:1000
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-10,animateTo: -10,duration:500})
                              setTimeout(() => {
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:10,animateTo: 10,duration:500
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-10,animateTo: 30,duration:1000})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:10,animateTo: -30,duration:1000
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle: -10,animateTo: 70,duration:1500})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle: 10,animateTo: -70,duration:1500
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-10,animateTo: 110,duration:2000})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:10,animateTo: -110,duration:2000
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-10,animateTo: 150,duration:2500})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:10,animateTo: -150,duration:2500
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-10,animateTo: -170,duration:2500})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:10,animateTo: 170,duration:2500
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-10,animateTo: -130,duration:2000})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:10,animateTo: 130,duration:2000
                        })
                        break;
                    // default :
                  }
                  // break;
                }
        })
  });
  // $(".field_yuan ul li")
  var rotation = function () {
    var element = $(".field_yuan");
    var str = window.getComputedStyle(element[0], null);
    var string = str.getPropertyValue("-webkit-transform") ||
         str.getPropertyValue("-moz-transform") ||
         str.getPropertyValue("-ms-transform") ||
         str.getPropertyValue("-o-transform") ||
         str.getPropertyValue("transform") ||
         "FAIL";
    var value = string.split('(')[1].split(')')[0].split(',');
    var e = value[0];
    var f = value[1];
    var g = value[2];
    var h = value[3];
    var number = Math.sqrt(e * e + f * f);
    var sing = f / number;
    var deg = Math.round(Math.atan2(f, e) * (180 / Math.PI));
    
    if(deg == 30) {
      $(".field_li").fadeOut();
      $(".five_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:70,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -70,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_five img").stop().animate({width:"65px",height:"65px"})
      $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(deg == 70){
   
      $(".field_li").fadeOut();
      $(".six_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:110,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -110,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_six img").stop().animate({width:"65px",height:"65px"})
      $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(deg == 110){
      $(".field_li").fadeOut();
      $(".seven_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:150,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -150,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_seven img").stop().animate({width:"65px",height:"65px"})
      $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(deg == 150){
      $(".field_li").fadeOut();
      $(".eight_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:190,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -190,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_eight img").stop().animate({width:"65px",height:"65px"})
      $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
      
        rotation()
      }, 4500);
    }else if(deg == -170){
      $(".field_li").fadeOut();
      $(".nine_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-130,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 130,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_nine img").stop().animate({width:"65px",height:"65px"})
      $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(deg == -130){
      $(".field_li").fadeOut();
      $(".one_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-90,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 90,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_one img").stop().animate({width:"65px",height:"65px"})
      $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(deg == -90){
      $(".field_li").fadeOut();
      $(".tow_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-50,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 50,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_tow img").stop().animate({width:"65px",height:"65px"})
      $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(deg == -50){
      $(".field_li").fadeOut();
      $(".therr_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-10,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 10,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_therr img").stop().animate({width:"65px",height:"65px"})
      $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(deg == -10){
      $(".field_li").fadeOut();
      $(".four_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:30,
        duration: 2500,
        
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -30,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_four img").stop().animate({width:"65px",height:"65px"})
      $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }
    // $('.field_yuan').rotate({
    //   angle: -390,
    //   animateTo:30,
    //   duration: 2500,
    // })
    // $(".field_yuan ul li").rotate({
    //   angle:-angle,animateTo: -70,duration:2500
    // })

   }
   rotation();

   $(".next_right").click(function() {
    //  console.log(1);
    var element = $(".field_yuan");
    var str = window.getComputedStyle(element[0], null);
    var string = str.getPropertyValue("-webkit-transform") ||
         str.getPropertyValue("-moz-transform") ||
         str.getPropertyValue("-ms-transform") ||
         str.getPropertyValue("-o-transform") ||
         str.getPropertyValue("transform") ||
         "FAIL";
    var value = string.split('(')[1].split(')')[0].split(',');
    var e = value[0];
    var f = value[1];
    var g = value[2];
    var h = value[3];
    var number = Math.sqrt(e * e + f * f);
    var sing = f / number;
    var deg = Math.round(Math.atan2(f, e) * (180 / Math.PI));
  
    if(10 < deg && deg <= 50) {
      $(".field_li").fadeOut();
      $(".five_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:70,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -70,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_five img").stop().animate({width:"65px",height:"65px"})
      $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(50 < deg && deg <= 90){
     
      $(".field_li").fadeOut();
      $(".six_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:110,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -110,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_six img").stop().animate({width:"65px",height:"65px"})
      $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(90 < deg && deg <= 130){
      $(".field_li").fadeOut();
      $(".seven_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:150,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -150,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_seven img").stop().animate({width:"65px",height:"65px"})
      $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(130 < deg && deg <= 170){
      $(".field_li").fadeOut();
      $(".eight_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:190,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -190,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_eight img").stop().animate({width:"65px",height:"65px"})
      $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
       
        rotation()
      }, 4500);
    }else if(-190 < deg && deg <= -150){
      $(".field_li").fadeOut();
      $(".nine_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-130,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 130,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_nine img").stop().animate({width:"65px",height:"65px"})
      $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-150 < deg && deg <= -110){
      $(".field_li").fadeOut();
      $(".one_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-90,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 90,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_one img").stop().animate({width:"65px",height:"65px"})
      $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-110 < deg && deg <= -70){
      $(".field_li").fadeOut();
      $(".tow_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-50,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 50,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_tow img").stop().animate({width:"65px",height:"65px"})
      $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-70 < deg && deg <= -30){
      $(".field_li").fadeOut();
      $(".therr_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-10,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 10,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_therr img").stop().animate({width:"65px",height:"65px"})
      $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-30 < deg && deg <= 10){
      $(".field_li").fadeOut();
      $(".four_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:30,
        duration: 2500,
        
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -30,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_four img").stop().animate({width:"65px",height:"65px"})
      $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})      
      setTimeout(() => {
        rotation()
      }, 4500);
    }
   })

   $(".next_left").click(function() {
    //  console.log(1);
    var element = $(".field_yuan");
    var str = window.getComputedStyle(element[0], null);
    var string = str.getPropertyValue("-webkit-transform") ||
         str.getPropertyValue("-moz-transform") ||
         str.getPropertyValue("-ms-transform") ||
         str.getPropertyValue("-o-transform") ||
         str.getPropertyValue("transform") ||
         "FAIL";
    var value = string.split('(')[1].split(')')[0].split(',');
    var e = value[0];
    var f = value[1];
    var g = value[2];
    var h = value[3];
    var number = Math.sqrt(e * e + f * f);
    var sing = f / number;
    var deg = Math.round(Math.atan2(f, e) * (180 / Math.PI));
    if(10 < deg && deg <= 50) {
      $(".field_li").fadeOut();
      $(".therr_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-10,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 10,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_therr img").stop().animate({width:"65px",height:"65px"})
      $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})      
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(50 < deg && deg <= 90){
      $(".field_li").fadeOut();
      $(".four_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:30,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -30,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_four img").stop().animate({width:"65px",height:"65px"})
      $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})     
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(90 < deg && deg <= 130){
      $(".field_li").fadeOut();
      $(".five_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:70,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -70,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_five img").stop().animate({width:"65px",height:"65px"})
      $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(130 < deg && deg <= 170){
      $(".field_li").fadeOut();
      $(".six_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:110,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -110,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_six img").stop().animate({width:"65px",height:"65px"})
      $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-190 < deg && deg <= -150){
      $(".field_li").fadeOut();
      $(".seven_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-210,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 210,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_seven img").stop().animate({width:"65px",height:"65px"})
      $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-150 < deg && deg <= -110){
      $(".field_li").fadeOut();
      $(".eight_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-170,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 170,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_eight img").stop().animate({width:"65px",height:"65px"})
      $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-110 < deg && deg <= -70){
      $(".field_li").fadeOut();
      $(".nine_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-130,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 130,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_nine img").stop().animate({width:"65px",height:"65px"})
      $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-70 < deg && deg <= -30){
      $(".field_li").fadeOut();
      $(".one_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-90,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 90,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_one img").stop().animate({width:"65px",height:"65px"})
      $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-30 < deg && deg <= 10){
      $(".field_li").fadeOut();
      $(".tow_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-50,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 50,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_tow img").stop().animate({width:"65px",height:"65px"})
      $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }
   })

   $(".field_btn").click(function() {
    if($(".video").css("display") === "none") {
      $(".video").fadeIn()
    }else {
      $(".video").fadeOut()
    }
   })

   $(".new_one").click(function() {
    clearInterval(time)
    $(".new_content_tow").fadeOut()
    $(".new_content_one").fadeIn()
    $(".new_tow").removeClass("new_checked")
    $(".new_one").addClass("new_checked")
    time = setInterval(function(){
      if($(".new_content_tow").css("display") === "none") {
        $(".new_content_one").fadeOut()
        $(".new_content_tow").fadeIn()
        $(".new_one").removeClass("new_checked")
        $(".new_tow").addClass("new_checked")
      }else {
        $(".new_content_tow").fadeOut()
        $(".new_content_one").fadeIn()
        $(".new_tow").removeClass("new_checked")
        $(".new_one").addClass("new_checked")
      }
    },2500);
  })

  $(".new_tow").click(function() {
    clearInterval(time)
    $(".new_content_one").fadeOut()
    $(".new_content_tow").fadeIn()
    $(".new_one").removeClass("new_checked")
    $(".new_tow").addClass("new_checked")
    time = setInterval(function(){
      if($(".new_content_tow").css("display") === "none") {
        $(".new_content_one").fadeOut()
        $(".new_content_tow").fadeIn()
        $(".new_one").removeClass("new_checked")
        $(".new_tow").addClass("new_checked")
      }else {
        $(".new_content_tow").fadeOut()
        $(".new_content_one").fadeIn()
        $(".new_tow").removeClass("new_checked")
        $(".new_one").addClass("new_checked")
      }
    },2500);
   })
  
  
  var time = setInterval(function(){
    if($(".new_content_tow").css("display") === "none") {
      $(".new_content_one").fadeOut()
      $(".new_content_tow").fadeIn()
      $(".new_one").removeClass("new_checked")
      $(".new_tow").addClass("new_checked")
    }else {
      $(".new_content_tow").fadeOut()
      $(".new_content_one").fadeIn()
      $(".new_tow").removeClass("new_checked")
      $(".new_one").addClass("new_checked")
    }
  },2500);

}

	 if(width>1200&&width<1600){
 	
		
  //中心点横坐标
  var dotLeft = ($(".field_yuan").width()-65)/2;
  //中心点纵坐标
  var dotTop = ($(".field_yuan").height()-65)/2;
  //起始角度
  var stard = 0;
  //半径
  var radius = 245;
  //每一个BOX对应的角度;
  var avd = 360/$(".field_yuan ul li").length;
  //每一个BOX对应的弧度;
  var ahd = avd*Math.PI/180;
  //设置圆的中心点的位置
  $(".field_yuan ul li").each(function(index, element){
          $(this).css({"left":Math.sin((ahd*index))*radius+dotLeft,"top":Math.cos((ahd*index))*radius+dotTop});
          $(this).click(function() {
            // console.log($(this).css("transform"))
        var el = $(".field_yuan");
        var st = window.getComputedStyle(el[0], null);
        var tr = st.getPropertyValue("-webkit-transform") ||
         st.getPropertyValue("-moz-transform") ||
         st.getPropertyValue("-ms-transform") ||
         st.getPropertyValue("-o-transform") ||
         st.getPropertyValue("transform") ||
         "FAIL";
        var values = tr.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var c = values[2];
        var d = values[3];
        var scale = Math.sqrt(a * a + b * b);
        var sin = b / scale;
        var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
           
            if (10 < angle && angle <= 50) {
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              $(".field_li").fadeOut();
                              $(".one_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:30,animateTo: -90,duration:2000})
                              setTimeout(() => {
                                $(".field_one img").stop().animate({width:"55px",height:"55px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: 90,duration:2000
                        })
                                          
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:30,animateTo: -50,duration:1500})
                              setTimeout(() => {
                                $(".field_tow img").stop().animate({width:"55px",height:"55px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: 50,duration:1500
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(this).rotate({angle:30,animateTo: -10,duration:1000})
                              setTimeout(() => {
                                $(".field_therr img").stop().animate({width:"55px",height:"55px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: 10,duration:1000
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:30,animateTo: 30,duration:500})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"55px",height:"55px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: -30,duration:500
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:30,animateTo: 70,duration:1000})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".field_five img").stop().animate({width:"55px",height:"55px"})
                                $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: -70,duration:1000
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:30,animateTo: 110,duration:1500})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"55px",height:"55px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: -110,duration:1500
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:30,animateTo: 150,duration:2000})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"55px",height:"55px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: -150,duration:2000
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:30,animateTo: 190,duration:2500})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"55px",height:"55px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: -190,duration:2500
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:30,animateTo: -130,duration:2000})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"55px",height:"55px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: 130,duration:2000
                        })
                        break;
                    // default :
                  }
                  // break;
              }else if (50 < angle && angle <= 90) {
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".noe_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: -90,duration:2500})
                              setTimeout(() => {
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".field_one img").stop().animate({width:"55px",height:"55px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: 90,duration:2500
                        })
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: -50,duration:2000})
                              setTimeout(() => {
                                // $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".field_tow img").stop().animate({width:"55px",height:"55px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: 50,duration:2000
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: -10,duration:1500})
                              setTimeout(() => {
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".field_therr img").stop().animate({width:"55px",height:"55px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: 10,duration:1500
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: 30,duration:1000})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"55px",height:"55px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: -30,duration:1000
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: 70,duration:500})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"55px",height:"55px"})
                                // $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                $(".field_five img").stop().animate({width:"55px",height:"55px"})
                                $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: -70,duration:500
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: 110,duration:1000})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"55px",height:"55px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: -110,duration:1000
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: 150,duration:1500})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"55px",height:"55px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: -150,duration:1500
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: 190,duration:2000})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"55px",height:"55px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: -190,duration:2000
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: 230,duration:2500})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"55px",height:"55px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: -230,duration:2500
                        })
                        break;
                    // default :
                  }
                }else if (90 < angle && angle <= 130) {
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".one_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: 270,duration:2000})
                              setTimeout(() => {
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".field_one img").stop().animate({width:"55px",height:"55px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: -270,duration:2000
                        })
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: -50,duration:2500})
                              setTimeout(() => {
                                // $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".field_tow img").stop().animate({width:"55px",height:"55px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: 50,duration:2500
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: -10,duration:2000})
                              setTimeout(() => {
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".field_therr img").stop().animate({width:"55px",height:"55px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: 10,duration:2000
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: 30,duration:1500})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"55px",height:"55px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: -30,duration:1500
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: 70,duration:1000})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".field_five img").stop().animate({width:"55px",height:"55px"})
                                $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: -70,duration:1000
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: 110,duration:500})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"55px",height:"55px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: -110,duration:500
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: 150,duration:1000})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"55px",height:"55px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: -150,duration:1000
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: 190,duration:1500})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"55px",height:"55px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: -190,duration:1500
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: 230,duration:2000})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"55px",height:"55px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: -230,duration:2000
                        })
                        break;
                    // default :
                  }
                }else if (130 < angle && angle <= 170) {
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".one_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: 270,duration:1500})
                              setTimeout(() => {
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".field_one img").stop().animate({width:"55px",height:"55px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: -270,duration:1500
                        })
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: 310,duration:2000})
                              setTimeout(() => {
                                // $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".field_tow img").stop().animate({width:"55px",height:"55px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: -310,duration:2000
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: -10,duration:2500})
                              setTimeout(() => {
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".field_therr img").stop().animate({width:"55px",height:"55px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: 10,duration:2500
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: 30,duration:2000})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"55px",height:"55px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: -30,duration:2000
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: 70,duration:1500})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                  $(".field_five img").stop().animate({width:"55px",height:"55px"})
                                  $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                  setTimeout(() => {
                                    rotation()
                                  }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: -70,duration:1500
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: 110,duration:1000})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"55px",height:"55px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: -110,duration:1000
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: 150,duration:500})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"55px",height:"55px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: -150,duration:500
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: 190,duration:1000})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"55px",height:"55px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: -190,duration:1000
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: 230,duration:1500})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"55px",height:"55px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: -230,duration:1500
                        })
                        break;
                    // default :
                  }
                 }else if (-190 < angle && angle <= -150){
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".one_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-170,animateTo: -90,duration:1000})
                              setTimeout(() => {
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".field_one img").stop().animate({width:"55px",height:"55px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:170,animateTo: 90,duration:1000
                        })
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-170,animateTo: -50,duration:1500})
                              setTimeout(() => {
                                // $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".field_tow img").stop().animate({width:"55px",height:"55px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:170,animateTo: 50,duration:1500
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-170,animateTo: -10,duration:2000})
                              setTimeout(() => {
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".field_therr img").stop().animate({width:"55px",height:"55px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:170,animateTo: 10,duration:2000
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:170,animateTo: 30,duration:2500})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"55px",height:"55px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-170,animateTo: -30,duration:2500
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-170,animateTo: -290,duration:2000})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".field_five img").stop().animate({width:"55px",height:"55px"})
                                $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle: 170,animateTo: 290,duration:2000
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-170,animateTo: -250,duration:1500})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"55px",height:"55px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:170,animateTo: 250,duration:1500
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-170,animateTo: -210,duration:1000})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"55px",height:"55px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:170,animateTo: 210,duration:1000
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-170,animateTo: -170,duration:500})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"55px",height:"55px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:170,animateTo: 170,duration:500
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-170,animateTo: -130,duration:1000})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"55px",height:"55px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:170,animateTo: 130,duration:1000
                        })
                        break;
                    // default :
                  }
                 }else if (-150 < angle && angle <= -110){
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".one_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-130,animateTo: -90,duration:1000})
                              setTimeout(() => {
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".field_one img").stop().animate({width:"55px",height:"55px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:130,animateTo: 90,duration:1000
                        })
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-130,animateTo: -50,duration:1500})
                              setTimeout(() => {
                                // $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".field_tow img").stop().animate({width:"55px",height:"55px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:130,animateTo: 50,duration:1500
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-130,animateTo: -10,duration:2000})
                              setTimeout(() => {
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".field_therr img").stop().animate({width:"55px",height:"55px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:130,animateTo: 10,duration:2000
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-130,animateTo: 30,duration:2500})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"55px",height:"55px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:130,animateTo: -30,duration:2500
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle: -130,animateTo: -290,duration:2500})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".field_five img").stop().animate({width:"55px",height:"55px"})
                                $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle: 130,animateTo: 290,duration:2500
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-130,animateTo: -250,duration:2000})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"55px",height:"55px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:130,animateTo: 250,duration:2000
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-130,animateTo: -210,duration:1500})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"55px",height:"55px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:130,animateTo: 210,duration:1500
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-130,animateTo: -170,duration:1000})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"55px",height:"55px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:130,animateTo: 170,duration:1000
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-130,animateTo: -130,duration:500})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"55px",height:"55px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:130,animateTo: 130,duration:500
                        })
                        break;
                    // default :
                  }
                }else if (-110 < angle && angle <= -70){
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".one_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-90,animateTo: -90,duration:500})
                              setTimeout(() => {
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".field_one img").stop().animate({width:"55px",height:"55px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:90,animateTo: 90,duration:500
                        })
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-90,animateTo: -50,duration:1000})
                              setTimeout(() => {
                                // $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".field_tow img").stop().animate({width:"55px",height:"55px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:90,animateTo: 50,duration:1000
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-90,animateTo: -10,duration:1500})
                              setTimeout(() => {
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".field_therr img").stop().animate({width:"55px",height:"55px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:90,animateTo: 10,duration:1500
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-90,animateTo: 30,duration:2000})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"55px",height:"55px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:90,animateTo: -30,duration:2000
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle: -90,animateTo: 70,duration:2500})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".field_five img").stop().animate({width:"55px",height:"55px"})
                                $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle: 90,animateTo: -70,duration:2500
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-90,animateTo: -250,duration:2500})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"55px",height:"55px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:90,animateTo: 250,duration:2500
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-90,animateTo: -210,duration:2000})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"55px",height:"55px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:90,animateTo: 210,duration:2000
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-90,animateTo: -170,duration:1500})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"55px",height:"55px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:90,animateTo: 170,duration:1500
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-90,animateTo: -130,duration:1000})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"55px",height:"55px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:90,animateTo: 130,duration:1000
                        })
                        break;
                    // default :
                  }
                  // break;
                 }else if (-70 < angle && angle <= -30){
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".one_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-50,animateTo: -90,duration:1000})
                              setTimeout(() => {
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".field_one img").stop().animate({width:"55px",height:"55px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:50,animateTo: 90,duration:1000
                        })
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-50,animateTo: -50,duration:500})
                              setTimeout(() => {
                                // $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".field_tow img").stop().animate({width:"55px",height:"55px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:50,animateTo: 50,duration:500
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-50,animateTo: -10,duration:1000})
                              setTimeout(() => {
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".field_therr img").stop().animate({width:"55px",height:"55px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:50,animateTo: 10,duration:1000
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-50,animateTo: 30,duration:1500})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"55px",height:"55px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:50,animateTo: -30,duration:1500
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle: -50,animateTo: 70,duration:2000})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".field_five img").stop().animate({width:"55px",height:"55px"})
                                $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle: 50,animateTo: -70,duration:2000
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-50,animateTo: 110,duration:2500})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"55px",height:"55px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:50,animateTo: -110,duration:2500
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-50,animateTo: -210,duration:2500})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"55px",height:"55px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:50,animateTo: 210,duration:2500
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-50,animateTo: -170,duration:2000})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"55px",height:"55px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:50,animateTo: 170,duration:2000
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-50,animateTo: -130,duration:1500})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"55px",height:"55px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:50,animateTo: 130,duration:1500
                        })
                        break;
                    // default :
                  }
                  // break;
                  }else if (-30 < angle && angle <= 10){
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".one_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-10,animateTo: -90,duration:1500})
                              setTimeout(() => {
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".field_one img").stop().animate({width:"55px",height:"55px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:10,animateTo: 90,duration:1500
                        })
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-10,animateTo: -50,duration:1000})
                              setTimeout(() => {
                                // $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".field_tow img").stop().animate({width:"55px",height:"55px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:10,animateTo: 50,duration:1000
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-10,animateTo: -10,duration:500})
                              setTimeout(() => {
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".field_therr img").stop().animate({width:"55px",height:"55px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:10,animateTo: 10,duration:500
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-10,animateTo: 30,duration:1000})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"55px",height:"55px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:10,animateTo: -30,duration:1000
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle: -10,animateTo: 70,duration:1500})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".field_five img").stop().animate({width:"55px",height:"55px"})
                                $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle: 10,animateTo: -70,duration:1500
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-10,animateTo: 110,duration:2000})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"55px",height:"55px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:10,animateTo: -110,duration:2000
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-10,animateTo: 150,duration:2500})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"55px",height:"55px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:10,animateTo: -150,duration:2500
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-10,animateTo: -170,duration:2500})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"55px",height:"55px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:10,animateTo: 170,duration:2500
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-10,animateTo: -130,duration:2000})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"55px",height:"55px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:10,animateTo: 130,duration:2000
                        })
                        break;
                    // default :
                  }
                  // break;
                }
        })
  });
  // $(".field_yuan ul li")
  var rotation = function () {
    var element = $(".field_yuan");
    var str = window.getComputedStyle(element[0], null);
    var string = str.getPropertyValue("-webkit-transform") ||
         str.getPropertyValue("-moz-transform") ||
         str.getPropertyValue("-ms-transform") ||
         str.getPropertyValue("-o-transform") ||
         str.getPropertyValue("transform") ||
         "FAIL";
    var value = string.split('(')[1].split(')')[0].split(',');
    var e = value[0];
    var f = value[1];
    var g = value[2];
    var h = value[3];
    var number = Math.sqrt(e * e + f * f);
    var sing = f / number;
    var deg = Math.round(Math.atan2(f, e) * (180 / Math.PI));
    
    if(deg == 30) {
      $(".field_li").fadeOut();
      $(".five_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:70,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -70,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_five img").stop().animate({width:"55px",height:"55px"})
      $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(deg == 70){
   
      $(".field_li").fadeOut();
      $(".six_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:110,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -110,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_six img").stop().animate({width:"55px",height:"55px"})
      $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(deg == 110){
      $(".field_li").fadeOut();
      $(".seven_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:150,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -150,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_seven img").stop().animate({width:"55px",height:"55px"})
      $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(deg == 150){
      $(".field_li").fadeOut();
      $(".eight_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:190,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -190,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_eight img").stop().animate({width:"55px",height:"55px"})
      $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
      
        rotation()
      }, 4500);
    }else if(deg == -170){
      $(".field_li").fadeOut();
      $(".nine_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-130,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 130,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_nine img").stop().animate({width:"55px",height:"55px"})
      $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(deg == -130){
      $(".field_li").fadeOut();
      $(".one_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-90,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 90,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_one img").stop().animate({width:"55px",height:"55px"})
      $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(deg == -90){
      $(".field_li").fadeOut();
      $(".tow_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-50,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 50,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_tow img").stop().animate({width:"55px",height:"55px"})
      $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(deg == -50){
      $(".field_li").fadeOut();
      $(".therr_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-10,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 10,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_therr img").stop().animate({width:"55px",height:"55px"})
      $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(deg == -10){
      $(".field_li").fadeOut();
      $(".four_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:30,
        duration: 2500,
        
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -30,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_four img").stop().animate({width:"55px",height:"55px"})
      $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }
    // $('.field_yuan').rotate({
    //   angle: -390,
    //   animateTo:30,
    //   duration: 2500,
    // })
    // $(".field_yuan ul li").rotate({
    //   angle:-angle,animateTo: -70,duration:2500
    // })

   }
   rotation();

   $(".next_right").click(function() {
    //  console.log(1);
    var element = $(".field_yuan");
    var str = window.getComputedStyle(element[0], null);
    var string = str.getPropertyValue("-webkit-transform") ||
         str.getPropertyValue("-moz-transform") ||
         str.getPropertyValue("-ms-transform") ||
         str.getPropertyValue("-o-transform") ||
         str.getPropertyValue("transform") ||
         "FAIL";
    var value = string.split('(')[1].split(')')[0].split(',');
    var e = value[0];
    var f = value[1];
    var g = value[2];
    var h = value[3];
    var number = Math.sqrt(e * e + f * f);
    var sing = f / number;
    var deg = Math.round(Math.atan2(f, e) * (180 / Math.PI));
  
    if(10 < deg && deg <= 50) {
      $(".field_li").fadeOut();
      $(".five_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:70,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -70,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_five img").stop().animate({width:"55px",height:"55px"})
      $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(50 < deg && deg <= 90){
     
      $(".field_li").fadeOut();
      $(".six_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:110,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -110,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_six img").stop().animate({width:"55px",height:"55px"})
      $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(90 < deg && deg <= 130){
      $(".field_li").fadeOut();
      $(".seven_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:150,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -150,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_seven img").stop().animate({width:"55px",height:"55px"})
      $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(130 < deg && deg <= 170){
      $(".field_li").fadeOut();
      $(".eight_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:190,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -190,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_eight img").stop().animate({width:"55px",height:"55px"})
      $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
       
        rotation()
      }, 4500);
    }else if(-190 < deg && deg <= -150){
      $(".field_li").fadeOut();
      $(".nine_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-130,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 130,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_nine img").stop().animate({width:"55px",height:"55px"})
      $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-150 < deg && deg <= -110){
      $(".field_li").fadeOut();
      $(".one_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-90,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 90,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_one img").stop().animate({width:"55px",height:"55px"})
      $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-110 < deg && deg <= -70){
      $(".field_li").fadeOut();
      $(".tow_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-50,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 50,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_tow img").stop().animate({width:"55px",height:"55px"})
      $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-70 < deg && deg <= -30){
      $(".field_li").fadeOut();
      $(".therr_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-10,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 10,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_therr img").stop().animate({width:"55px",height:"55px"})
      $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-30 < deg && deg <= 10){
      $(".field_li").fadeOut();
      $(".four_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:30,
        duration: 2500,
        
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -30,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_four img").stop().animate({width:"55px",height:"55px"})
      $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})      
      setTimeout(() => {
        rotation()
      }, 4500);
    }
   })

   $(".next_left").click(function() {
    //  console.log(1);
    var element = $(".field_yuan");
    var str = window.getComputedStyle(element[0], null);
    var string = str.getPropertyValue("-webkit-transform") ||
         str.getPropertyValue("-moz-transform") ||
         str.getPropertyValue("-ms-transform") ||
         str.getPropertyValue("-o-transform") ||
         str.getPropertyValue("transform") ||
         "FAIL";
    var value = string.split('(')[1].split(')')[0].split(',');
    var e = value[0];
    var f = value[1];
    var g = value[2];
    var h = value[3];
    var number = Math.sqrt(e * e + f * f);
    var sing = f / number;
    var deg = Math.round(Math.atan2(f, e) * (180 / Math.PI));
    if(10 < deg && deg <= 50) {
      $(".field_li").fadeOut();
      $(".therr_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-10,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 10,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_therr img").stop().animate({width:"55px",height:"55px"})
      $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})      
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(50 < deg && deg <= 90){
      $(".field_li").fadeOut();
      $(".four_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:30,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -30,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_four img").stop().animate({width:"55px",height:"55px"})
      $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})     
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(90 < deg && deg <= 130){
      $(".field_li").fadeOut();
      $(".five_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:70,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -70,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_five img").stop().animate({width:"55px",height:"55px"})
      $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(130 < deg && deg <= 170){
      $(".field_li").fadeOut();
      $(".six_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:110,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -110,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_six img").stop().animate({width:"55px",height:"55px"})
      $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-190 < deg && deg <= -150){
      $(".field_li").fadeOut();
      $(".seven_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-210,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 210,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_seven img").stop().animate({width:"55px",height:"55px"})
      $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-150 < deg && deg <= -110){
      $(".field_li").fadeOut();
      $(".eight_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-170,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 170,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_eight img").stop().animate({width:"55px",height:"55px"})
      $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-110 < deg && deg <= -70){
      $(".field_li").fadeOut();
      $(".nine_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-130,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 130,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_nine img").stop().animate({width:"55px",height:"55px"})
      $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-70 < deg && deg <= -30){
      $(".field_li").fadeOut();
      $(".one_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-90,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 90,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_one img").stop().animate({width:"55px",height:"55px"})
      $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-30 < deg && deg <= 10){
      $(".field_li").fadeOut();
      $(".tow_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-50,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 50,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_tow img").stop().animate({width:"55px",height:"55px"})
      $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }
   })

   $(".field_btn").click(function() {
    if($(".video").css("display") === "none") {
      $(".video").fadeIn()
    }else {
      $(".video").fadeOut()
    }
   })

   $(".new_one").click(function() {
    clearInterval(time)
    $(".new_content_tow").fadeOut()
    $(".new_content_one").fadeIn()
    $(".new_tow").removeClass("new_checked")
    $(".new_one").addClass("new_checked")
    time = setInterval(function(){
      if($(".new_content_tow").css("display") === "none") {
        $(".new_content_one").fadeOut()
        $(".new_content_tow").fadeIn()
        $(".new_one").removeClass("new_checked")
        $(".new_tow").addClass("new_checked")
      }else {
        $(".new_content_tow").fadeOut()
        $(".new_content_one").fadeIn()
        $(".new_tow").removeClass("new_checked")
        $(".new_one").addClass("new_checked")
      }
    },2500);
  })

  $(".new_tow").click(function() {
    clearInterval(time)
    $(".new_content_one").fadeOut()
    $(".new_content_tow").fadeIn()
    $(".new_one").removeClass("new_checked")
    $(".new_tow").addClass("new_checked")
    time = setInterval(function(){
      if($(".new_content_tow").css("display") === "none") {
        $(".new_content_one").fadeOut()
        $(".new_content_tow").fadeIn()
        $(".new_one").removeClass("new_checked")
        $(".new_tow").addClass("new_checked")
      }else {
        $(".new_content_tow").fadeOut()
        $(".new_content_one").fadeIn()
        $(".new_tow").removeClass("new_checked")
        $(".new_one").addClass("new_checked")
      }
    },2500);
   })
  
  
  var time = setInterval(function(){
    if($(".new_content_tow").css("display") === "none") {
      $(".new_content_one").fadeOut()
      $(".new_content_tow").fadeIn()
      $(".new_one").removeClass("new_checked")
      $(".new_tow").addClass("new_checked")
    }else {
      $(".new_content_tow").fadeOut()
      $(".new_content_one").fadeIn()
      $(".new_tow").removeClass("new_checked")
      $(".new_one").addClass("new_checked")
    }
  },2500);


			
		}
 



 
 })







window.onresize = function(){

	var width=$(window).width();
	
	if(width>=1600){
		

  //中心点横坐标
  var dotLeft = ($(".field_yuan").width()-150)/2;
  //中心点纵坐标
  var dotTop = ($(".field_yuan").height()-150)/2;
  //起始角度
  var stard = 0;
  //半径
  var radius = 320;
  //每一个BOX对应的角度;
  var avd = 360/$(".field_yuan ul li").length;
  //每一个BOX对应的弧度;
  var ahd = avd*Math.PI/180;
  //设置圆的中心点的位置
  $(".field_yuan ul li").each(function(index, element){
          $(this).css({"left":Math.sin((ahd*index))*radius+dotLeft,"top":Math.cos((ahd*index))*radius+dotTop});
          $(this).click(function() {
            // console.log($(this).css("transform"))
        var el = $(".field_yuan");
        var st = window.getComputedStyle(el[0], null);
        var tr = st.getPropertyValue("-webkit-transform") ||
         st.getPropertyValue("-moz-transform") ||
         st.getPropertyValue("-ms-transform") ||
         st.getPropertyValue("-o-transform") ||
         st.getPropertyValue("transform") ||
         "FAIL";
        var values = tr.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var c = values[2];
        var d = values[3];
        var scale = Math.sqrt(a * a + b * b);
        var sin = b / scale;
        var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
            console.log(angle)
            console.log(index)
            if (10 < angle && angle <= 50) {
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              $(".field_li").fadeOut();
                              $(".one_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:30,animateTo: -90,duration:2000})
                              setTimeout(() => {
                                $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: 90,duration:2000
                        })
                        console.log(1)                      
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:30,animateTo: -50,duration:1500})
                              setTimeout(() => {
                                $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: 50,duration:1500
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(this).rotate({angle:30,animateTo: -10,duration:1000})
                              setTimeout(() => {
                                $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: 10,duration:1000
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:30,animateTo: 30,duration:500})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: -30,duration:500
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:30,animateTo: 70,duration:1000})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: -70,duration:1000
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:30,animateTo: 110,duration:1500})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: -110,duration:1500
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:30,animateTo: 150,duration:2000})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: -150,duration:2000
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:30,animateTo: 190,duration:2500})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: -190,duration:2500
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:30,animateTo: -130,duration:2000})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: 130,duration:2000
                        })
                        break;
                    // default :
                  }
                  // break;
              }else if (50 < angle && angle <= 90) {
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".noe_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: -90,duration:2500})
                              setTimeout(() => {
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: 90,duration:2500
                        })
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: -50,duration:2000})
                              setTimeout(() => {
                                // $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: 50,duration:2000
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: -10,duration:1500})
                              setTimeout(() => {
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: 10,duration:1500
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: 30,duration:1000})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: -30,duration:1000
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: 70,duration:500})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                // $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: -70,duration:500
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: 110,duration:1000})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: -110,duration:1000
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: 150,duration:1500})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: -150,duration:1500
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: 190,duration:2000})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: -190,duration:2000
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: 230,duration:2500})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: -230,duration:2500
                        })
                        break;
                    // default :
                  }
                }else if (90 < angle && angle <= 130) {
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".one_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: 270,duration:2000})
                              setTimeout(() => {
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: -270,duration:2000
                        })
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: -50,duration:2500})
                              setTimeout(() => {
                                // $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: 50,duration:2500
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: -10,duration:2000})
                              setTimeout(() => {
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: 10,duration:2000
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: 30,duration:1500})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: -30,duration:1500
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: 70,duration:1000})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: -70,duration:1000
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: 110,duration:500})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: -110,duration:500
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: 150,duration:1000})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: -150,duration:1000
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: 190,duration:1500})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: -190,duration:1500
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: 230,duration:2000})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: -230,duration:2000
                        })
                        break;
                    // default :
                  }
                }else if (130 < angle && angle <= 170) {
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".one_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: 270,duration:1500})
                              setTimeout(() => {
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: -270,duration:1500
                        })
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: 310,duration:2000})
                              setTimeout(() => {
                                // $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: -310,duration:2000
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: -10,duration:2500})
                              setTimeout(() => {
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: 10,duration:2500
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: 30,duration:2000})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: -30,duration:2000
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: 70,duration:1500})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                  $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                  $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                  setTimeout(() => {
                                    rotation()
                                  }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: -70,duration:1500
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: 110,duration:1000})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: -110,duration:1000
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: 150,duration:500})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: -150,duration:500
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: 190,duration:1000})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: -190,duration:1000
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: 230,duration:1500})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: -230,duration:1500
                        })
                        break;
                    // default :
                  }
                 }else if (-190 < angle && angle <= -150){
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".one_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-170,animateTo: -90,duration:1000})
                              setTimeout(() => {
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:170,animateTo: 90,duration:1000
                        })
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-170,animateTo: -50,duration:1500})
                              setTimeout(() => {
                                // $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:170,animateTo: 50,duration:1500
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-170,animateTo: -10,duration:2000})
                              setTimeout(() => {
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:170,animateTo: 10,duration:2000
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:170,animateTo: 30,duration:2500})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-170,animateTo: -30,duration:2500
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-170,animateTo: -290,duration:2000})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle: 170,animateTo: 290,duration:2000
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-170,animateTo: -250,duration:1500})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:170,animateTo: 250,duration:1500
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-170,animateTo: -210,duration:1000})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:170,animateTo: 210,duration:1000
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-170,animateTo: -170,duration:500})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:170,animateTo: 170,duration:500
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-170,animateTo: -130,duration:1000})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:170,animateTo: 130,duration:1000
                        })
                        break;
                    // default :
                  }
                 }else if (-150 < angle && angle <= -110){
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".one_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-130,animateTo: -90,duration:1000})
                              setTimeout(() => {
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:130,animateTo: 90,duration:1000
                        })
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-130,animateTo: -50,duration:1500})
                              setTimeout(() => {
                                // $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:130,animateTo: 50,duration:1500
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-130,animateTo: -10,duration:2000})
                              setTimeout(() => {
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:130,animateTo: 10,duration:2000
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-130,animateTo: 30,duration:2500})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:130,animateTo: -30,duration:2500
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle: -130,animateTo: -290,duration:2500})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle: 130,animateTo: 290,duration:2500
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-130,animateTo: -250,duration:2000})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:130,animateTo: 250,duration:2000
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-130,animateTo: -210,duration:1500})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:130,animateTo: 210,duration:1500
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-130,animateTo: -170,duration:1000})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:130,animateTo: 170,duration:1000
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-130,animateTo: -130,duration:500})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:130,animateTo: 130,duration:500
                        })
                        break;
                    // default :
                  }
                }else if (-110 < angle && angle <= -70){
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".one_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-90,animateTo: -90,duration:500})
                              setTimeout(() => {
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:90,animateTo: 90,duration:500
                        })
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-90,animateTo: -50,duration:1000})
                              setTimeout(() => {
                                // $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:90,animateTo: 50,duration:1000
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-90,animateTo: -10,duration:1500})
                              setTimeout(() => {
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:90,animateTo: 10,duration:1500
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-90,animateTo: 30,duration:2000})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:90,animateTo: -30,duration:2000
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle: -90,animateTo: 70,duration:2500})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle: 90,animateTo: -70,duration:2500
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-90,animateTo: -250,duration:2500})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:90,animateTo: 250,duration:2500
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-90,animateTo: -210,duration:2000})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:90,animateTo: 210,duration:2000
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-90,animateTo: -170,duration:1500})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:90,animateTo: 170,duration:1500
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-90,animateTo: -130,duration:1000})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:90,animateTo: 130,duration:1000
                        })
                        break;
                    // default :
                  }
                  // break;
                 }else if (-70 < angle && angle <= -30){
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".one_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-50,animateTo: -90,duration:1000})
                              setTimeout(() => {
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:50,animateTo: 90,duration:1000
                        })
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-50,animateTo: -50,duration:500})
                              setTimeout(() => {
                                // $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:50,animateTo: 50,duration:500
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-50,animateTo: -10,duration:1000})
                              setTimeout(() => {
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:50,animateTo: 10,duration:1000
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-50,animateTo: 30,duration:1500})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:50,animateTo: -30,duration:1500
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle: -50,animateTo: 70,duration:2000})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle: 50,animateTo: -70,duration:2000
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-50,animateTo: 110,duration:2500})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:50,animateTo: -110,duration:2500
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-50,animateTo: -210,duration:2500})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:50,animateTo: 210,duration:2500
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-50,animateTo: -170,duration:2000})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:50,animateTo: 170,duration:2000
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-50,animateTo: -130,duration:1500})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:50,animateTo: 130,duration:1500
                        })
                        break;
                    // default :
                  }
                  // break;
                  }else if (-30 < angle && angle <= 10){
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".one_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-10,animateTo: -90,duration:1500})
                              setTimeout(() => {
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:10,animateTo: 90,duration:1500
                        })
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-10,animateTo: -50,duration:1000})
                              setTimeout(() => {
                                // $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:10,animateTo: 50,duration:1000
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-10,animateTo: -10,duration:500})
                              setTimeout(() => {
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:10,animateTo: 10,duration:500
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-10,animateTo: 30,duration:1000})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:10,animateTo: -30,duration:1000
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle: -10,animateTo: 70,duration:1500})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle: 10,animateTo: -70,duration:1500
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-10,animateTo: 110,duration:2000})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:10,animateTo: -110,duration:2000
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-10,animateTo: 150,duration:2500})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:10,animateTo: -150,duration:2500
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-10,animateTo: -170,duration:2500})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:10,animateTo: 170,duration:2500
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-10,animateTo: -130,duration:2000})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:10,animateTo: 130,duration:2000
                        })
                        break;
                    // default :
                  }
                  // break;
                }
        })
  });
  // $(".field_yuan ul li")
  var rotation = function () {
    var element = $(".field_yuan");
    var str = window.getComputedStyle(element[0], null);
    var string = str.getPropertyValue("-webkit-transform") ||
         str.getPropertyValue("-moz-transform") ||
         str.getPropertyValue("-ms-transform") ||
         str.getPropertyValue("-o-transform") ||
         str.getPropertyValue("transform") ||
         "FAIL";
    var value = string.split('(')[1].split(')')[0].split(',');
    var e = value[0];
    var f = value[1];
    var g = value[2];
    var h = value[3];
    var number = Math.sqrt(e * e + f * f);
    var sing = f / number;
    var deg = Math.round(Math.atan2(f, e) * (180 / Math.PI));
   
    if(deg == 30) {
      $(".field_li").fadeOut();
      $(".five_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:70,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -70,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_five img").stop().animate({width:"65px",height:"65px"})
      $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(deg == 70){
      
      $(".field_li").fadeOut();
      $(".six_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:110,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -110,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_six img").stop().animate({width:"65px",height:"65px"})
      $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(deg == 110){
      $(".field_li").fadeOut();
      $(".seven_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:150,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -150,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_seven img").stop().animate({width:"65px",height:"65px"})
      $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(deg == 150){
      $(".field_li").fadeOut();
      $(".eight_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:190,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -190,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_eight img").stop().animate({width:"65px",height:"65px"})
      $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
       
        rotation()
      }, 4500);
    }else if(deg == -170){
      $(".field_li").fadeOut();
      $(".nine_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-130,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 130,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_nine img").stop().animate({width:"65px",height:"65px"})
      $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(deg == -130){
      $(".field_li").fadeOut();
      $(".one_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-90,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 90,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_one img").stop().animate({width:"65px",height:"65px"})
      $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(deg == -90){
      $(".field_li").fadeOut();
      $(".tow_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-50,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 50,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_tow img").stop().animate({width:"65px",height:"65px"})
      $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(deg == -50){
      $(".field_li").fadeOut();
      $(".therr_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-10,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 10,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_therr img").stop().animate({width:"65px",height:"65px"})
      $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(deg == -10){
      $(".field_li").fadeOut();
      $(".four_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:30,
        duration: 2500,
        
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -30,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_four img").stop().animate({width:"65px",height:"65px"})
      $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }
    // $('.field_yuan').rotate({
    //   angle: -390,
    //   animateTo:30,
    //   duration: 2500,
    // })
    // $(".field_yuan ul li").rotate({
    //   angle:-angle,animateTo: -70,duration:2500
    // })

   }
   rotation();

   $(".next_right").click(function() {
    //  console.log(1);
    var element = $(".field_yuan");
    var str = window.getComputedStyle(element[0], null);
    var string = str.getPropertyValue("-webkit-transform") ||
         str.getPropertyValue("-moz-transform") ||
         str.getPropertyValue("-ms-transform") ||
         str.getPropertyValue("-o-transform") ||
         str.getPropertyValue("transform") ||
         "FAIL";
    var value = string.split('(')[1].split(')')[0].split(',');
    var e = value[0];
    var f = value[1];
    var g = value[2];
    var h = value[3];
    var number = Math.sqrt(e * e + f * f);
    var sing = f / number;
    var deg = Math.round(Math.atan2(f, e) * (180 / Math.PI));
    console.log(deg)
    if(10 < deg && deg <= 50) {
      $(".field_li").fadeOut();
      $(".five_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:70,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -70,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_five img").stop().animate({width:"65px",height:"65px"})
      $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(50 < deg && deg <= 90){
      console.log(2)
      $(".field_li").fadeOut();
      $(".six_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:110,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -110,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_six img").stop().animate({width:"65px",height:"65px"})
      $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(90 < deg && deg <= 130){
      $(".field_li").fadeOut();
      $(".seven_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:150,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -150,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_seven img").stop().animate({width:"65px",height:"65px"})
      $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(130 < deg && deg <= 170){
      $(".field_li").fadeOut();
      $(".eight_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:190,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -190,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_eight img").stop().animate({width:"65px",height:"65px"})
      $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        console.log(123)
        rotation()
      }, 4500);
    }else if(-190 < deg && deg <= -150){
      $(".field_li").fadeOut();
      $(".nine_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-130,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 130,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_nine img").stop().animate({width:"65px",height:"65px"})
      $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-150 < deg && deg <= -110){
      $(".field_li").fadeOut();
      $(".one_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-90,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 90,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_one img").stop().animate({width:"65px",height:"65px"})
      $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-110 < deg && deg <= -70){
      $(".field_li").fadeOut();
      $(".tow_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-50,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 50,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_tow img").stop().animate({width:"65px",height:"65px"})
      $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-70 < deg && deg <= -30){
      $(".field_li").fadeOut();
      $(".therr_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-10,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 10,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_therr img").stop().animate({width:"65px",height:"65px"})
      $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-30 < deg && deg <= 10){
      $(".field_li").fadeOut();
      $(".four_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:30,
        duration: 2500,
        
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -30,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_four img").stop().animate({width:"65px",height:"65px"})
      $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})      
      setTimeout(() => {
        rotation()
      }, 4500);
    }
   })

   $(".next_left").click(function() {
    //  console.log(1);
    var element = $(".field_yuan");
    var str = window.getComputedStyle(element[0], null);
    var string = str.getPropertyValue("-webkit-transform") ||
         str.getPropertyValue("-moz-transform") ||
         str.getPropertyValue("-ms-transform") ||
         str.getPropertyValue("-o-transform") ||
         str.getPropertyValue("transform") ||
         "FAIL";
    var value = string.split('(')[1].split(')')[0].split(',');
    var e = value[0];
    var f = value[1];
    var g = value[2];
    var h = value[3];
    var number = Math.sqrt(e * e + f * f);
    var sing = f / number;
    var deg = Math.round(Math.atan2(f, e) * (180 / Math.PI));
    if(10 < deg && deg <= 50) {
      $(".field_li").fadeOut();
      $(".therr_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-10,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 10,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_therr img").stop().animate({width:"65px",height:"65px"})
      $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})      
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(50 < deg && deg <= 90){
      $(".field_li").fadeOut();
      $(".four_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:30,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -30,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_four img").stop().animate({width:"65px",height:"65px"})
      $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})     
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(90 < deg && deg <= 130){
      $(".field_li").fadeOut();
      $(".five_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:70,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -70,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_five img").stop().animate({width:"65px",height:"65px"})
      $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(130 < deg && deg <= 170){
      $(".field_li").fadeOut();
      $(".six_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:110,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -110,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_six img").stop().animate({width:"65px",height:"65px"})
      $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-190 < deg && deg <= -150){
      $(".field_li").fadeOut();
      $(".seven_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-210,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 210,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_seven img").stop().animate({width:"65px",height:"65px"})
      $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-150 < deg && deg <= -110){
      $(".field_li").fadeOut();
      $(".eight_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-170,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 170,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_eight img").stop().animate({width:"65px",height:"65px"})
      $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-110 < deg && deg <= -70){
      $(".field_li").fadeOut();
      $(".nine_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-130,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 130,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_nine img").stop().animate({width:"65px",height:"65px"})
      $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-70 < deg && deg <= -30){
      $(".field_li").fadeOut();
      $(".one_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-90,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 90,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_one img").stop().animate({width:"65px",height:"65px"})
      $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-30 < deg && deg <= 10){
      $(".field_li").fadeOut();
      $(".tow_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-50,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 50,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"90px",height:"90px",backgroundColor:"#BCBCC7"})
      $(".field_tow img").stop().animate({width:"65px",height:"65px"})
      $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }
   })

   $(".field_btn").click(function() {
    if($(".video").css("display") === "none") {
      $(".video").fadeIn()
    }else {
      $(".video").fadeOut()
    }
   })

   $(".new_one").click(function() {
    clearInterval(time)
    $(".new_content_tow").fadeOut()
    $(".new_content_one").fadeIn()
    $(".new_tow").removeClass("new_checked")
    $(".new_one").addClass("new_checked")
    time = setInterval(function(){
      if($(".new_content_tow").css("display") === "none") {
        $(".new_content_one").fadeOut()
        $(".new_content_tow").fadeIn()
        $(".new_one").removeClass("new_checked")
        $(".new_tow").addClass("new_checked")
      }else {
        $(".new_content_tow").fadeOut()
        $(".new_content_one").fadeIn()
        $(".new_tow").removeClass("new_checked")
        $(".new_one").addClass("new_checked")
      }
    },2500);
  })

  $(".new_tow").click(function() {
    clearInterval(time)
    $(".new_content_one").fadeOut()
    $(".new_content_tow").fadeIn()
    $(".new_one").removeClass("new_checked")
    $(".new_tow").addClass("new_checked")
    time = setInterval(function(){
      if($(".new_content_tow").css("display") === "none") {
        $(".new_content_one").fadeOut()
        $(".new_content_tow").fadeIn()
        $(".new_one").removeClass("new_checked")
        $(".new_tow").addClass("new_checked")
      }else {
        $(".new_content_tow").fadeOut()
        $(".new_content_one").fadeIn()
        $(".new_tow").removeClass("new_checked")
        $(".new_one").addClass("new_checked")
      }
    },2500);
   })
  
  
  var time = setInterval(function(){
    if($(".new_content_tow").css("display") === "none") {
      $(".new_content_one").fadeOut()
      $(".new_content_tow").fadeIn()
      $(".new_one").removeClass("new_checked")
      $(".new_tow").addClass("new_checked")
    }else {
      $(".new_content_tow").fadeOut()
      $(".new_content_one").fadeIn()
      $(".new_tow").removeClass("new_checked")
      $(".new_one").addClass("new_checked")
    }
  },2500);

}


	 if(width>1200&&width<1600){
 	
		
  //中心点横坐标
  var dotLeft = ($(".field_yuan").width()-65)/2;
  //中心点纵坐标
  var dotTop = ($(".field_yuan").height()-65)/2;
  //起始角度
  var stard = 0;
  //半径
  var radius = 245;
  //每一个BOX对应的角度;
  var avd = 360/$(".field_yuan ul li").length;
  //每一个BOX对应的弧度;
  var ahd = avd*Math.PI/180;
  //设置圆的中心点的位置
  $(".field_yuan ul li").each(function(index, element){
          $(this).css({"left":Math.sin((ahd*index))*radius+dotLeft,"top":Math.cos((ahd*index))*radius+dotTop});
          $(this).click(function() {
            // console.log($(this).css("transform"))
        var el = $(".field_yuan");
        var st = window.getComputedStyle(el[0], null);
        var tr = st.getPropertyValue("-webkit-transform") ||
         st.getPropertyValue("-moz-transform") ||
         st.getPropertyValue("-ms-transform") ||
         st.getPropertyValue("-o-transform") ||
         st.getPropertyValue("transform") ||
         "FAIL";
        var values = tr.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var c = values[2];
        var d = values[3];
        var scale = Math.sqrt(a * a + b * b);
        var sin = b / scale;
        var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
           
            if (10 < angle && angle <= 50) {
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              $(".field_li").fadeOut();
                              $(".one_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:30,animateTo: -90,duration:2000})
                              setTimeout(() => {
                                $(".field_one img").stop().animate({width:"55px",height:"55px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: 90,duration:2000
                        })
                                          
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:30,animateTo: -50,duration:1500})
                              setTimeout(() => {
                                $(".field_tow img").stop().animate({width:"55px",height:"55px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: 50,duration:1500
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(this).rotate({angle:30,animateTo: -10,duration:1000})
                              setTimeout(() => {
                                $(".field_therr img").stop().animate({width:"55px",height:"55px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: 10,duration:1000
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:30,animateTo: 30,duration:500})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"55px",height:"55px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: -30,duration:500
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:30,animateTo: 70,duration:1000})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".field_five img").stop().animate({width:"55px",height:"55px"})
                                $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: -70,duration:1000
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:30,animateTo: 110,duration:1500})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"55px",height:"55px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: -110,duration:1500
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:30,animateTo: 150,duration:2000})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"55px",height:"55px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: -150,duration:2000
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:30,animateTo: 190,duration:2500})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"55px",height:"55px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: -190,duration:2500
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:30,animateTo: -130,duration:2000})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"55px",height:"55px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-30,animateTo: 130,duration:2000
                        })
                        break;
                    // default :
                  }
                  // break;
              }else if (50 < angle && angle <= 90) {
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".noe_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: -90,duration:2500})
                              setTimeout(() => {
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".field_one img").stop().animate({width:"55px",height:"55px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: 90,duration:2500
                        })
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: -50,duration:2000})
                              setTimeout(() => {
                                // $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".field_tow img").stop().animate({width:"55px",height:"55px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: 50,duration:2000
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: -10,duration:1500})
                              setTimeout(() => {
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".field_therr img").stop().animate({width:"55px",height:"55px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: 10,duration:1500
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: 30,duration:1000})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"55px",height:"55px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: -30,duration:1000
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: 70,duration:500})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"55px",height:"55px"})
                                // $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                $(".field_five img").stop().animate({width:"55px",height:"55px"})
                                $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: -70,duration:500
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: 110,duration:1000})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"55px",height:"55px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: -110,duration:1000
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: 150,duration:1500})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"55px",height:"55px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: -150,duration:1500
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: 190,duration:2000})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"55px",height:"55px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: -190,duration:2000
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:70,animateTo: 230,duration:2500})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"55px",height:"55px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-70,animateTo: -230,duration:2500
                        })
                        break;
                    // default :
                  }
                }else if (90 < angle && angle <= 130) {
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".one_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: 270,duration:2000})
                              setTimeout(() => {
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".field_one img").stop().animate({width:"55px",height:"55px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: -270,duration:2000
                        })
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: -50,duration:2500})
                              setTimeout(() => {
                                // $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".field_tow img").stop().animate({width:"55px",height:"55px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: 50,duration:2500
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: -10,duration:2000})
                              setTimeout(() => {
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".field_therr img").stop().animate({width:"55px",height:"55px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: 10,duration:2000
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: 30,duration:1500})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"55px",height:"55px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: -30,duration:1500
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: 70,duration:1000})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".field_five img").stop().animate({width:"55px",height:"55px"})
                                $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: -70,duration:1000
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: 110,duration:500})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"55px",height:"55px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: -110,duration:500
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: 150,duration:1000})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"55px",height:"55px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: -150,duration:1000
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: 190,duration:1500})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"55px",height:"55px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: -190,duration:1500
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:110,animateTo: 230,duration:2000})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"55px",height:"55px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-110,animateTo: -230,duration:2000
                        })
                        break;
                    // default :
                  }
                }else if (130 < angle && angle <= 170) {
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".one_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: 270,duration:1500})
                              setTimeout(() => {
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".field_one img").stop().animate({width:"55px",height:"55px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: -270,duration:1500
                        })
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: 310,duration:2000})
                              setTimeout(() => {
                                // $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".field_tow img").stop().animate({width:"55px",height:"55px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: -310,duration:2000
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: -10,duration:2500})
                              setTimeout(() => {
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".field_therr img").stop().animate({width:"55px",height:"55px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: 10,duration:2500
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: 30,duration:2000})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"55px",height:"55px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: -30,duration:2000
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: 70,duration:1500})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                  $(".field_five img").stop().animate({width:"55px",height:"55px"})
                                  $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                  setTimeout(() => {
                                    rotation()
                                  }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: -70,duration:1500
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: 110,duration:1000})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"55px",height:"55px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: -110,duration:1000
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: 150,duration:500})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"55px",height:"55px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: -150,duration:500
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: 190,duration:1000})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"55px",height:"55px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: -190,duration:1000
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:150,animateTo: 230,duration:1500})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"55px",height:"55px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-150,animateTo: -230,duration:1500
                        })
                        break;
                    // default :
                  }
                 }else if (-190 < angle && angle <= -150){
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".one_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-170,animateTo: -90,duration:1000})
                              setTimeout(() => {
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".field_one img").stop().animate({width:"55px",height:"55px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:170,animateTo: 90,duration:1000
                        })
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-170,animateTo: -50,duration:1500})
                              setTimeout(() => {
                                // $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".field_tow img").stop().animate({width:"55px",height:"55px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:170,animateTo: 50,duration:1500
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-170,animateTo: -10,duration:2000})
                              setTimeout(() => {
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".field_therr img").stop().animate({width:"55px",height:"55px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:170,animateTo: 10,duration:2000
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:170,animateTo: 30,duration:2500})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"55px",height:"55px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:-170,animateTo: -30,duration:2500
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-170,animateTo: -290,duration:2000})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".field_five img").stop().animate({width:"55px",height:"55px"})
                                $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle: 170,animateTo: 290,duration:2000
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-170,animateTo: -250,duration:1500})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"55px",height:"55px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:170,animateTo: 250,duration:1500
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-170,animateTo: -210,duration:1000})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"55px",height:"55px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:170,animateTo: 210,duration:1000
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-170,animateTo: -170,duration:500})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"55px",height:"55px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:170,animateTo: 170,duration:500
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-170,animateTo: -130,duration:1000})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"55px",height:"55px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:170,animateTo: 130,duration:1000
                        })
                        break;
                    // default :
                  }
                 }else if (-150 < angle && angle <= -110){
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".one_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-130,animateTo: -90,duration:1000})
                              setTimeout(() => {
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".field_one img").stop().animate({width:"55px",height:"55px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:130,animateTo: 90,duration:1000
                        })
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-130,animateTo: -50,duration:1500})
                              setTimeout(() => {
                                // $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".field_tow img").stop().animate({width:"55px",height:"55px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:130,animateTo: 50,duration:1500
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-130,animateTo: -10,duration:2000})
                              setTimeout(() => {
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".field_therr img").stop().animate({width:"55px",height:"55px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:130,animateTo: 10,duration:2000
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-130,animateTo: 30,duration:2500})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"55px",height:"55px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:130,animateTo: -30,duration:2500
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle: -130,animateTo: -290,duration:2500})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".field_five img").stop().animate({width:"55px",height:"55px"})
                                $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle: 130,animateTo: 290,duration:2500
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-130,animateTo: -250,duration:2000})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"55px",height:"55px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:130,animateTo: 250,duration:2000
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-130,animateTo: -210,duration:1500})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"55px",height:"55px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:130,animateTo: 210,duration:1500
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-130,animateTo: -170,duration:1000})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"55px",height:"55px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:130,animateTo: 170,duration:1000
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-130,animateTo: -130,duration:500})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"55px",height:"55px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:130,animateTo: 130,duration:500
                        })
                        break;
                    // default :
                  }
                }else if (-110 < angle && angle <= -70){
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".one_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-90,animateTo: -90,duration:500})
                              setTimeout(() => {
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".field_one img").stop().animate({width:"55px",height:"55px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:90,animateTo: 90,duration:500
                        })
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-90,animateTo: -50,duration:1000})
                              setTimeout(() => {
                                // $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".field_tow img").stop().animate({width:"55px",height:"55px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:90,animateTo: 50,duration:1000
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-90,animateTo: -10,duration:1500})
                              setTimeout(() => {
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".field_therr img").stop().animate({width:"55px",height:"55px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:90,animateTo: 10,duration:1500
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-90,animateTo: 30,duration:2000})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"55px",height:"55px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:90,animateTo: -30,duration:2000
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle: -90,animateTo: 70,duration:2500})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".field_five img").stop().animate({width:"55px",height:"55px"})
                                $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle: 90,animateTo: -70,duration:2500
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-90,animateTo: -250,duration:2500})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"55px",height:"55px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:90,animateTo: 250,duration:2500
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-90,animateTo: -210,duration:2000})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"55px",height:"55px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:90,animateTo: 210,duration:2000
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-90,animateTo: -170,duration:1500})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"55px",height:"55px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:90,animateTo: 170,duration:1500
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-90,animateTo: -130,duration:1000})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"55px",height:"55px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:90,animateTo: 130,duration:1000
                        })
                        break;
                    // default :
                  }
                  // break;
                 }else if (-70 < angle && angle <= -30){
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".one_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-50,animateTo: -90,duration:1000})
                              setTimeout(() => {
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".field_one img").stop().animate({width:"55px",height:"55px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:50,animateTo: 90,duration:1000
                        })
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-50,animateTo: -50,duration:500})
                              setTimeout(() => {
                                // $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".field_tow img").stop().animate({width:"55px",height:"55px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:50,animateTo: 50,duration:500
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-50,animateTo: -10,duration:1000})
                              setTimeout(() => {
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".field_therr img").stop().animate({width:"55px",height:"55px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:50,animateTo: 10,duration:1000
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-50,animateTo: 30,duration:1500})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"55px",height:"55px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:50,animateTo: -30,duration:1500
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle: -50,animateTo: 70,duration:2000})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".field_five img").stop().animate({width:"55px",height:"55px"})
                                $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle: 50,animateTo: -70,duration:2000
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-50,animateTo: 110,duration:2500})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"55px",height:"55px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:50,animateTo: -110,duration:2500
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-50,animateTo: -210,duration:2500})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"55px",height:"55px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:50,animateTo: 210,duration:2500
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-50,animateTo: -170,duration:2000})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"55px",height:"55px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:50,animateTo: 170,duration:2000
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-50,animateTo: -130,duration:1500})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"55px",height:"55px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:50,animateTo: 130,duration:1500
                        })
                        break;
                    // default :
                  }
                  // break;
                  }else if (-30 < angle && angle <= 10){
                  switch (index){
                    case 0:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".one_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-10,animateTo: -90,duration:1500})
                              setTimeout(() => {
                                // $(".field_one img").stop().animate({width:"65px",height:"65px"})
                                $(".field_one img").stop().animate({width:"55px",height:"55px"})
                                $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:10,animateTo: 90,duration:1500
                        })
                        break;
                    case 1:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".tow_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-10,animateTo: -50,duration:1000})
                              setTimeout(() => {
                                // $(".field_tow img").stop().animate({width:"65px",height:"65px"})
                                $(".field_tow img").stop().animate({width:"55px",height:"55px"})
                                $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:10,animateTo: 50,duration:1000
                        })
                        break;
                    case 2:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".therr_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-10,animateTo: -10,duration:500})
                              setTimeout(() => {
                                // $(".field_therr img").stop().animate({width:"65px",height:"65px"})
                                $(".field_therr img").stop().animate({width:"55px",height:"55px"})
                                $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:10,animateTo: 10,duration:500
                        })
                        break;
                    case 3:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".four_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-10,animateTo: 30,duration:1000})
                              setTimeout(() => {
                                // $(".field_four img").stop().animate({width:"65px",height:"65px"})
                                $(".field_four img").stop().animate({width:"55px",height:"55px"})
                                $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 2700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:10,animateTo: -30,duration:1000
                        })
                        break;
                    case 4:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".five_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle: -10,animateTo: 70,duration:1500})
                              setTimeout(() => {
                                // $(".field_five img").stop().animate({width:"65px",height:"65px"})
                                $(".field_five img").stop().animate({width:"55px",height:"55px"})
                                $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle: 10,animateTo: -70,duration:1500
                        })
                        break;
                    case 5:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".six_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-10,animateTo: 110,duration:2000})
                              setTimeout(() => {
                                // $(".field_six img").stop().animate({width:"65px",height:"65px"})
                                $(".field_six img").stop().animate({width:"55px",height:"55px"})
                                $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:10,animateTo: -110,duration:2000
                        })
                        break;
                    case 6:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".seven_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-10,animateTo: 150,duration:2500})
                              setTimeout(() => {
                                // $(".field_seven img").stop().animate({width:"65px",height:"65px"})
                                $(".field_seven img").stop().animate({width:"55px",height:"55px"})
                                $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:10,animateTo: -150,duration:2500
                        })
                        break;
                    case 7:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".eight_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-10,animateTo: -170,duration:2500})
                              setTimeout(() => {
                                // $(".field_eight img").stop().animate({width:"65px",height:"65px"})
                                $(".field_eight img").stop().animate({width:"55px",height:"55px"})
                                $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 4200);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:10,animateTo: 170,duration:2500
                        })
                        break;
                    case 8:
                        $(".field_yuan").rotate({
                          bind:{
                            click: function() {
                              // $(".field_yuan img").stop().animate({width:"90px",height:"90px"})
                              $(".field_li").fadeOut();
                              $(".nine_txt").fadeIn();
                              $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
                              $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
                              $(this).rotate({angle:-10,animateTo: -130,duration:2000})
                              setTimeout(() => {
                                // $(".field_nine img").stop().animate({width:"65px",height:"65px"})
                                $(".field_nine img").stop().animate({width:"55px",height:"55px"})
                                $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
                                setTimeout(() => {
                                  rotation()
                                }, 3700);
                              }, 300);
                            }
                          }
                        });
                        $(".field_yuan ul li").rotate({
                          angle:10,animateTo: 130,duration:2000
                        })
                        break;
                    // default :
                  }
                  // break;
                }
        })
  });
  // $(".field_yuan ul li")
  var rotation = function () {
    var element = $(".field_yuan");
    var str = window.getComputedStyle(element[0], null);
    var string = str.getPropertyValue("-webkit-transform") ||
         str.getPropertyValue("-moz-transform") ||
         str.getPropertyValue("-ms-transform") ||
         str.getPropertyValue("-o-transform") ||
         str.getPropertyValue("transform") ||
         "FAIL";
    var value = string.split('(')[1].split(')')[0].split(',');
    var e = value[0];
    var f = value[1];
    var g = value[2];
    var h = value[3];
    var number = Math.sqrt(e * e + f * f);
    var sing = f / number;
    var deg = Math.round(Math.atan2(f, e) * (180 / Math.PI));
    
    if(deg == 30) {
      $(".field_li").fadeOut();
      $(".five_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:70,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -70,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_five img").stop().animate({width:"55px",height:"55px"})
      $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(deg == 70){
   
      $(".field_li").fadeOut();
      $(".six_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:110,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -110,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_six img").stop().animate({width:"55px",height:"55px"})
      $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(deg == 110){
      $(".field_li").fadeOut();
      $(".seven_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:150,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -150,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_seven img").stop().animate({width:"55px",height:"55px"})
      $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(deg == 150){
      $(".field_li").fadeOut();
      $(".eight_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:190,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -190,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_eight img").stop().animate({width:"55px",height:"55px"})
      $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
      
        rotation()
      }, 4500);
    }else if(deg == -170){
      $(".field_li").fadeOut();
      $(".nine_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-130,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 130,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_nine img").stop().animate({width:"55px",height:"55px"})
      $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(deg == -130){
      $(".field_li").fadeOut();
      $(".one_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-90,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 90,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_one img").stop().animate({width:"55px",height:"55px"})
      $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(deg == -90){
      $(".field_li").fadeOut();
      $(".tow_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-50,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 50,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_tow img").stop().animate({width:"55px",height:"55px"})
      $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(deg == -50){
      $(".field_li").fadeOut();
      $(".therr_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-10,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 10,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_therr img").stop().animate({width:"55px",height:"55px"})
      $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(deg == -10){
      $(".field_li").fadeOut();
      $(".four_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:30,
        duration: 2500,
        
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -30,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_four img").stop().animate({width:"55px",height:"55px"})
      $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }
    // $('.field_yuan').rotate({
    //   angle: -390,
    //   animateTo:30,
    //   duration: 2500,
    // })
    // $(".field_yuan ul li").rotate({
    //   angle:-angle,animateTo: -70,duration:2500
    // })

   }
   rotation();

   $(".next_right").click(function() {
    //  console.log(1);
    var element = $(".field_yuan");
    var str = window.getComputedStyle(element[0], null);
    var string = str.getPropertyValue("-webkit-transform") ||
         str.getPropertyValue("-moz-transform") ||
         str.getPropertyValue("-ms-transform") ||
         str.getPropertyValue("-o-transform") ||
         str.getPropertyValue("transform") ||
         "FAIL";
    var value = string.split('(')[1].split(')')[0].split(',');
    var e = value[0];
    var f = value[1];
    var g = value[2];
    var h = value[3];
    var number = Math.sqrt(e * e + f * f);
    var sing = f / number;
    var deg = Math.round(Math.atan2(f, e) * (180 / Math.PI));
  
    if(10 < deg && deg <= 50) {
      $(".field_li").fadeOut();
      $(".five_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:70,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -70,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_five img").stop().animate({width:"55px",height:"55px"})
      $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(50 < deg && deg <= 90){
     
      $(".field_li").fadeOut();
      $(".six_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:110,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -110,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_six img").stop().animate({width:"55px",height:"55px"})
      $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(90 < deg && deg <= 130){
      $(".field_li").fadeOut();
      $(".seven_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:150,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -150,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_seven img").stop().animate({width:"55px",height:"55px"})
      $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(130 < deg && deg <= 170){
      $(".field_li").fadeOut();
      $(".eight_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:190,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -190,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_eight img").stop().animate({width:"55px",height:"55px"})
      $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
       
        rotation()
      }, 4500);
    }else if(-190 < deg && deg <= -150){
      $(".field_li").fadeOut();
      $(".nine_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-130,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 130,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_nine img").stop().animate({width:"55px",height:"55px"})
      $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-150 < deg && deg <= -110){
      $(".field_li").fadeOut();
      $(".one_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-90,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 90,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_one img").stop().animate({width:"55px",height:"55px"})
      $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-110 < deg && deg <= -70){
      $(".field_li").fadeOut();
      $(".tow_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-50,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 50,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_tow img").stop().animate({width:"55px",height:"55px"})
      $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-70 < deg && deg <= -30){
      $(".field_li").fadeOut();
      $(".therr_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-10,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 10,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_therr img").stop().animate({width:"55px",height:"55px"})
      $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-30 < deg && deg <= 10){
      $(".field_li").fadeOut();
      $(".four_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:30,
        duration: 2500,
        
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -30,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_four img").stop().animate({width:"55px",height:"55px"})
      $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})      
      setTimeout(() => {
        rotation()
      }, 4500);
    }
   })

   $(".next_left").click(function() {
    //  console.log(1);
    var element = $(".field_yuan");
    var str = window.getComputedStyle(element[0], null);
    var string = str.getPropertyValue("-webkit-transform") ||
         str.getPropertyValue("-moz-transform") ||
         str.getPropertyValue("-ms-transform") ||
         str.getPropertyValue("-o-transform") ||
         str.getPropertyValue("transform") ||
         "FAIL";
    var value = string.split('(')[1].split(')')[0].split(',');
    var e = value[0];
    var f = value[1];
    var g = value[2];
    var h = value[3];
    var number = Math.sqrt(e * e + f * f);
    var sing = f / number;
    var deg = Math.round(Math.atan2(f, e) * (180 / Math.PI));
    if(10 < deg && deg <= 50) {
      $(".field_li").fadeOut();
      $(".therr_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-10,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 10,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_therr img").stop().animate({width:"55px",height:"55px"})
      $(".therr").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})      
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(50 < deg && deg <= 90){
      $(".field_li").fadeOut();
      $(".four_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:30,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -30,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_four img").stop().animate({width:"55px",height:"55px"})
      $(".four").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})     
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(90 < deg && deg <= 130){
      $(".field_li").fadeOut();
      $(".five_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:70,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -70,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_five img").stop().animate({width:"55px",height:"55px"})
      $(".five").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(130 < deg && deg <= 170){
      $(".field_li").fadeOut();
      $(".six_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:110,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: -110,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_six img").stop().animate({width:"55px",height:"55px"})
      $(".six").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-190 < deg && deg <= -150){
      $(".field_li").fadeOut();
      $(".seven_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-210,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 210,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_seven img").stop().animate({width:"55px",height:"55px"})
      $(".seven").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-150 < deg && deg <= -110){
      $(".field_li").fadeOut();
      $(".eight_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-170,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 170,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_eight img").stop().animate({width:"55px",height:"55px"})
      $(".eight").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-110 < deg && deg <= -70){
      $(".field_li").fadeOut();
      $(".nine_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-130,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 130,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_nine img").stop().animate({width:"55px",height:"55px"})
      $(".nine").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-70 < deg && deg <= -30){
      $(".field_li").fadeOut();
      $(".one_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-90,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 90,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_one img").stop().animate({width:"55px",height:"55px"})
      $(".one").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }else if(-30 < deg && deg <= 10){
      $(".field_li").fadeOut();
      $(".tow_txt").fadeIn();
      $('.field_yuan').rotate({
        angle: deg,
        animateTo:-50,
        duration: 2500,
      })
      $(".field_yuan ul li").rotate({
        angle:-deg,animateTo: 50,duration:2500
      })
      $(".field_yuan img").stop().animate({width:"55px",height:"55px"})
      $(".field_box").stop().animate({width:"55px",height:"55px",backgroundColor:"#BCBCC7"})
      $(".field_tow img").stop().animate({width:"55px",height:"55px"})
      $(".tow").stop().animate({width:"110px",height:"110px",backgroundColor: "#102D59"})
      setTimeout(() => {
        rotation()
      }, 4500);
    }
   })

   $(".field_btn").click(function() {
    if($(".video").css("display") === "none") {
      $(".video").fadeIn()
    }else {
      $(".video").fadeOut()
    }
   })

   $(".new_one").click(function() {
    clearInterval(time)
    $(".new_content_tow").fadeOut()
    $(".new_content_one").fadeIn()
    $(".new_tow").removeClass("new_checked")
    $(".new_one").addClass("new_checked")
    time = setInterval(function(){
      if($(".new_content_tow").css("display") === "none") {
        $(".new_content_one").fadeOut()
        $(".new_content_tow").fadeIn()
        $(".new_one").removeClass("new_checked")
        $(".new_tow").addClass("new_checked")
      }else {
        $(".new_content_tow").fadeOut()
        $(".new_content_one").fadeIn()
        $(".new_tow").removeClass("new_checked")
        $(".new_one").addClass("new_checked")
      }
    },2500);
  })

  $(".new_tow").click(function() {
    clearInterval(time)
    $(".new_content_one").fadeOut()
    $(".new_content_tow").fadeIn()
    $(".new_one").removeClass("new_checked")
    $(".new_tow").addClass("new_checked")
    time = setInterval(function(){
      if($(".new_content_tow").css("display") === "none") {
        $(".new_content_one").fadeOut()
        $(".new_content_tow").fadeIn()
        $(".new_one").removeClass("new_checked")
        $(".new_tow").addClass("new_checked")
      }else {
        $(".new_content_tow").fadeOut()
        $(".new_content_one").fadeIn()
        $(".new_tow").removeClass("new_checked")
        $(".new_one").addClass("new_checked")
      }
    },2500);
   })
  
  
  var time = setInterval(function(){
    if($(".new_content_tow").css("display") === "none") {
      $(".new_content_one").fadeOut()
      $(".new_content_tow").fadeIn()
      $(".new_one").removeClass("new_checked")
      $(".new_tow").addClass("new_checked")
    }else {
      $(".new_content_tow").fadeOut()
      $(".new_content_one").fadeIn()
      $(".new_tow").removeClass("new_checked")
      $(".new_one").addClass("new_checked")
    }
  },2500);


			
		}
 




}




