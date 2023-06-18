var k=1;
var t1=-1,t2=-2,t3=-3,t4=-4,t5=-5,t6=-6,t7=-7,t8=-8,t9=-9;
var par=document.getElementById("whowon");
var Xpoints=0,Opoints=0;
var pointerO = document.getElementById("pointerO"),pointerX=document.getElementById("pointerX");
var r=0;
var ln=document.getElementById("line");
var dgln= document.getElementById("diagln");
var lnhr1=document.getElementById("lnhr1");
var lnhr2=document.getElementById("lnhr2");
var lnhr3=document.getElementById("lnhr3");
var thsbtn = document.getElementById("mydiv");
var dr=0;
function restartscr(){  
   r=1;
   if(r==1){var par=document.getElementById("whowon");
   Xpoints=0;Opoints=0;
  var pointerO = document.getElementById("pointerO"),pointerX=document.getElementById("pointerX");
  var r=0;
  pointerO.innerHTML="O - 0";pointerX.innerHTML="X - 0";
}
  }     
                             

//par.innerHTML="won";

function switchout(){dr++;
var a=document.getElementById("swithchbutton");
if(k==1){a.style.backgroundImage="url('X.png')";t1=k;k=0;a.disabled=true;}
else {k=1;a.style.backgroundImage="url('O.png')";t1=0;a.disabled=true;}
//horizontal win
if(t1==t2 && t2==t3){
    if(t1==1){par.innerHTML="X won";Xpoints++;var wx = Xpoints;pointerX.innerHTML="X - "+ wx;lnhr1.style.transition="width 1s";lnhr1.style.width="340px";a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
    else {par.innerHTML="O won";Opoints++;var w=Opoints;pointerO.innerHTML="O - "+ w;lnhr1.style.transition="width 1s";lnhr1.style.width="340px";a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
}

//vertical win
if(t1==t4 && t4==t7){
    if(t1==1){par.innerHTML="X won";Xpoints++;var wx = Xpoints;pointerX.innerHTML="X - "+ wx;thsbtn.classList.toggle("theanim");a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
    else {par.innerHTML="O won";Opoints++;var w=Opoints;pointerO.innerHTML="O - "+ w;thsbtn.classList.toggle("theanim");a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
}

//diagonal win 1
if(t1==t5 && t5==t9){
    if(t1==1){par.innerHTML="X won";Xpoints++;var wx = Xpoints;pointerX.innerHTML="X - "+ wx;dgln.style.transition="width 1s";dgln.style.width="500px";a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
    else {par.innerHTML="O won";Opoints++;var w=Opoints;pointerO.innerHTML="O - "+ w;dgln.style.transition="width 1s";dgln.style.width="500px";a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
}
}
function switchout1(){
    var b=document.getElementById("swithchbutton1");
    if(k==1){b.style.backgroundImage="url('X.png')";t2=k;k=0;b.disabled=true;}
    else {k=1;b.style.backgroundImage="url('O.png')";t2=0;b.disabled=true;}dr++;
//horizontal win
if(t1==t2 && t2==t3){
    if(t1==1){par.innerHTML="X won";Xpoints++;var wx = Xpoints;pointerX.innerHTML="X - "+ wx;a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
    else {par.innerHTML="O won";Opoints++;var w=Opoints;pointerO.innerHTML="O - "+ w;a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
}

//vertical win
if(t2==t5 && t5==t8){
    if(t2==1){par.innerHTML="X won";Xpoints++;var wx = Xpoints;pointerX.innerHTML="X - "+ wx;thsbtn.classList.toggle("theanim1");a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
    else {par.innerHTML="O won";Opoints++;var w=Opoints;pointerO.innerHTML="O - "+ w;thsbtn.classList.toggle("theanim1");a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
}
if(dr==9 && par.innerHTML!="X won" && par.innerHTML!="O won")par.innerHTML="Draw";
}

    function switchout2(){dr++;
        var c=document.getElementById("swithchbutton2");
        if(k==1){c.style.backgroundImage="url('X.png')";t3=k;k=0;c.disabled=true;}
        else {k=1;c.style.backgroundImage="url('O.png')";t3=0;c.disabled=true;}
        //horizontal win
        if(t1==t2 && t2==t3){
            if(t1==1){par.innerHTML="X won";Xpoints++;var wx = Xpoints;pointerX.innerHTML="X - "+ wx;lnhr1.style.transition="width 1s";lnhr1.style.width="340px";a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
        }
            else {par.innerHTML="O won";Opoints++;var w=Opoints;pointerO.innerHTML="O - "+ w;lnhr1.style.transition="width 1s";lnhr1.style.width="340px";a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
        }
        }

//vertical win
if(t3==t6 && t6==t9){
    if(t3==1){par.innerHTML="X won";Xpoints++;var wx = Xpoints;pointerX.innerHTML="X - "+ wx;thsbtn.classList.toggle("theanim2");a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
    else {par.innerHTML="O won";Opoints++;var w=Opoints;pointerO.innerHTML="O - "+ w;thsbtn.classList.toggle("theanim2");a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
}
//diagonal win 1------------------------------------------------------------------
if(t7==t5 && t5==t3 && t3==t7){
    if(t7==1){par.innerHTML="X won";Xpoints++;var wx = Xpoints;pointerX.innerHTML="X - "+ wx;ln.style.transition="width 1s";ln.style.width="480px";a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
    else {par.innerHTML="O won";Opoints++;var w=Opoints;pointerO.innerHTML="O - "+ w;ln.style.transition="width 1s";ln.style.width="480px";a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
}
if(dr==9 && par.innerHTML!="X won" && par.innerHTML!="O won")par.innerHTML="Draw";

    }

        function switchout3(){dr++;
            var d=document.getElementById("swithchbutton3");
            if(k==1){d.style.backgroundImage="url('X.png')";t4=k;k=0;d.disabled=true;}
            else {k=1;d.style.backgroundImage="url('O.png')";t4=0;d.disabled=true;}
        //horizontal win
if(t4==t5 && t5==t6){
    if(t4==1){par.innerHTML="X won";Xpoints++;var wx = Xpoints;pointerX.innerHTML="X - "+ wx;lnhr2.style.transition="width 1s";lnhr2.style.width="340px";a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
    else {par.innerHTML="O won";Opoints++;var w=Opoints;pointerO.innerHTML="O - "+ w;lnhr2.style.transition="width 1s";lnhr2.style.width="340px";a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
}
//vertical win
if(t1==t4 && t4==t7){
    if(t1==1){par.innerHTML="X won";Xpoints++;var wx = Xpoints;pointerX.innerHTML="X - "+ wx;thsbtn.classList.toggle("theanim");a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
    else {par.innerHTML="O won";Opoints++;var w=Opoints;pointerO.innerHTML="O - "+ w;thsbtn.classList.toggle("theanim");a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
}
if(dr==9 && par.innerHTML!="X won" && par.innerHTML!="O won")par.innerHTML="Draw";

        }
            function switchout4(){dr++;
                var e=document.getElementById("swithchbutton4");
                if(k==1){e.style.backgroundImage="url('X.png')";t5=k;k=0;e.disabled=true;}
                else {k=1;e.style.backgroundImage="url('O.png')";t5=0;e.disabled=true;}
                //horizontal win

if(t4==t5 && t5==t6){
    if(t4==1){par.innerHTML="X won";Xpoints++;var wx = Xpoints;pointerX.innerHTML="X - "+ wx;a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
    else {par.innerHTML="O won";Opoints++;var w=Opoints;pointerO.innerHTML="O - "+ w;a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
}
//vertical win
if(t2==t5 && t5==t8){
    if(t2==1){par.innerHTML="X won";Xpoints++;var wx = Xpoints;pointerX.innerHTML="X - "+ wx;thsbtn.classList.toggle("theanim1");a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
    else {par.innerHTML="O won";Opoints++;var w=Opoints;pointerO.innerHTML="O - "+ w;thsbtn.classList.toggle("theanim1");a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
}

//diagonal win 1 ---- -- -- - ---------------------------------------
if(t1==t5 && t5==t9){
    if(t1==1){par.innerHTML="X won";Xpoints++;var wx = Xpoints;pointerX.innerHTML="X - "+ wx;dgln.style.transition="width 1s";dgln.style.width="500px";a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
    else {par.innerHTML="O won";Opoints++;var w=Opoints;pointerO.innerHTML="O - "+ w;dgln.style.transition="width 1s";dgln.style.width="500px";a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
}
if(t7==t5 && t5==t3){
    if(t7==1){par.innerHTML="X won";Xpoints++;var wx = Xpoints;pointerX.innerHTML="X - "+ wx;a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
    else {par.innerHTML="O won";Opoints++;var w=Opoints;pointerO.innerHTML="O - "+ w;a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
}if(dr==9 && par.innerHTML!="X won" && par.innerHTML!="O won")par.innerHTML="Draw";

            }
                function switchout5(){dr++;
                    var f=document.getElementById("swithchbutton5");
                    if(k==1){f.style.backgroundImage="url('X.png')";t6=k;k=0;f.disabled=true;}
                    else {k=1;f.style.backgroundImage="url('O.png')";t6=0;f.disabled=true;}
                //horizontal win
if(t4==t5 && t5==t6){
    if(t4==1){par.innerHTML="X won";Xpoints++;var wx = Xpoints;pointerX.innerHTML="X - "+ wx;lnhr2.style.transition="width 1s";lnhr2.style.width="340px";a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
    else {par.innerHTML="O won";Opoints++;var w=Opoints;pointerO.innerHTML="O - "+ w;lnhr2.style.transition="width 1s";lnhr2.style.width="340px";a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
}
//vertical win
if(t3==t6 && t6==t9){
    if(t3==1){par.innerHTML="X won";Xpoints++;var wx = Xpoints;pointerX.innerHTML="X - "+ wx;thsbtn.classList.toggle("theanim2");a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
    else {par.innerHTML="O won";Opoints++;var w=Opoints;pointerO.innerHTML="O - "+ w;thsbtn.classList.toggle("theanim2");a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
}if(dr==9 && par.innerHTML!="X won" && par.innerHTML!="O won")par.innerHTML="Draw";

    
                }
                    function switchout6(){dr++;
                        var g=document.getElementById("swithchbutton6");
                        if(k==1){g.style.backgroundImage="url('X.png')";t7=k;k=0;g.disabled=true;}
                        else {k=1;g.style.backgroundImage="url('O.png')";t7=0;g.disabled=true;}
                    //horizontal win
if(t7==t8 && t8==t9){
    if(t7==1){par.innerHTML="X won";Xpoints++;var wx = Xpoints;pointerX.innerHTML="X - "+ wx;lnhr3.style.transition="width 1s";lnhr3.style.width="340px";a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
    else {par.innerHTML="O won";Opoints++;var w=Opoints;pointerO.innerHTML="O - "+ w;lnhr3.style.transition="width 1s";lnhr3.style.width="340px";a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
}
//vertical win
if(t1==t4 && t4==t7){
    if(t1==1){par.innerHTML="X won";Xpoints++;var wx = Xpoints;pointerX.innerHTML="X - "+ wx;thsbtn.classList.toggle("theanim");a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
    else {par.innerHTML="O won";Opoints++;var w=Opoints;pointerO.innerHTML="O - "+ w;thsbtn.classList.toggle("theanim");a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
}
//diagonal win 1
if(t7==t5 && t5==t3){
    if(t7==t5 && t5==t3 && t3==t7){
        if(t7==1){par.innerHTML="X won";Xpoints++;var wx = Xpoints;pointerX.innerHTML="X - "+ wx;ln.style.transition="width 1s";ln.style.width="480px";a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
    }
        else {par.innerHTML="O won";Opoints++;var w=Opoints;pointerO.innerHTML="O - "+ w;ln.style.transition="width 1s";ln.style.width="480px";a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
    }
    }
}    if(dr==9 && par.innerHTML!="X won" && par.innerHTML!="O won")par.innerHTML="Draw";

                    }
                        function switchout7(){dr++;
                            var h=document.getElementById("swithchbutton7");
                            if(k==1){h.style.backgroundImage="url('X.png')";t8=k;k=0;h.disabled=true;}
                            else {k=1;h.style.backgroundImage="url('O.png')";t8=0;h.disabled=true;}
                        //horizontal win
if(t7==t8 && t8==t9){
    if(t7==1){par.innerHTML="X won";Xpoints++;var wx = Xpoints;pointerX.innerHTML="X - "+ wx;a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
    else {par.innerHTML="O won";Opoints++;var w=Opoints;pointerO.innerHTML="O - "+ w;a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
}
//vertical win
if(t2==t5 && t5==t8){
    if(t2==1){par.innerHTML="X won";Xpoints++;var wx = Xpoints;pointerX.innerHTML="X - "+ wx;thsbtn.classList.toggle("theanim1");a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
    else {par.innerHTML="O won";Opoints++;var w=Opoints;pointerO.innerHTML="O - "+ w;thsbtn.classList.toggle("theanim1");a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
}
if(dr==9 && par.innerHTML!="X won" && par.innerHTML!="O won")par.innerHTML="Draw";

                        }
                            function switchout8(){dr++;
                                var i=document.getElementById("swithchbutton8");
                                if(k==1){i.style.backgroundImage="url('X.png')";t9=k;k=0;i.disabled=true;}
                                else {k=1;i.style.backgroundImage="url('O.png')";t9=0;i.disabled=true;}
                                //horizontal win
if(t7==t8 && t8==t9){
    if(t7==1){par.innerHTML="X won";Xpoints++;var wx = Xpoints;pointerX.innerHTML="X - "+ wx;lnhr3.style.transition="width 1s";lnhr3.style.width="340px";a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
    else {par.innerHTML="O won";Opoints++;var w=Opoints;pointerO.innerHTML="O - "+ w;lnhr3.style.transition="width 1s";lnhr3.style.width="340px";a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
}
//vertical win
if(t3==t6 && t6==t9){
    if(t3==1){par.innerHTML="X won";Xpoints++;var wx = Xpoints;pointerX.innerHTML="X - "+ wx;thsbtn.classList.toggle("theanim2");a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
    else {par.innerHTML="O won";Opoints++;var w=Opoints;pointerO.innerHTML="O - "+ w;thsbtn.classList.toggle("theanim2");a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
}
//diagonal win 1
if(t1==t5 && t5==t9){
    if(t1==1){par.innerHTML="X won";Xpoints++;var wx = Xpoints;pointerX.innerHTML="X - "+ wx;dgln.style.transition="width 1s";dgln.style.width="500px";a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
    else {par.innerHTML="O won";Opoints++;var w=Opoints;pointerO.innerHTML="O - "+ w;dgln.style.transition="width 1s";dgln.style.width="500px";a.disabled=true;b.disabled=true;c.disabled=true;d.disabled=true;e.disabled=true;f.disabled=true;g.disabled=true;h.disabled=true;i.disabled=true;
}
}if(dr==9 && par.innerHTML!="X won" && par.innerHTML!="O won")par.innerHTML="Draw";


                            }
                                var a=document.getElementById("swithchbutton");
                                var b=document.getElementById("swithchbutton1");
                                var c=document.getElementById("swithchbutton2");
                                var d=document.getElementById("swithchbutton3");
                                var e=document.getElementById("swithchbutton4");
                                var f=document.getElementById("swithchbutton5");
                                var g=document.getElementById("swithchbutton6");
                                var h=document.getElementById("swithchbutton7");
                                var i=document.getElementById("swithchbutton8");

          
  
    
    function resetXO(){
        console.log(t1,t2,t3,t4,t5,t6,t7,t8,t9);
        a.disabled=false;
        b.disabled=false;
        c.disabled=false;
        d.disabled=false;
        e.disabled=false;
        f.disabled=false;
        g.disabled=false;
        h.disabled=false;
        i.disabled=false;
        a.style.backgroundImage="none";
        b.style.backgroundImage="none";
        c.style.backgroundImage="none";
        d.style.backgroundImage="none";
        e.style.backgroundImage="none";
        f.style.backgroundImage="none";
        g.style.backgroundImage="none";
        h.style.backgroundImage="none";
        i.style.backgroundImage="none";
        par.innerHTML="";
        k=1;
        t1=-1,t2=-2,t3=-3,t4=-4,t5=-5,t6=-6,t7=-7,t8=-8,t9=-9;
        ln.style.transition="none";
        ln.style.width="0px";
        dgln.style.transition="none";
        dgln.style.width="0px";
        lnhr1.style.transition="none";lnhr1.style.width="0px";
        lnhr2.style.transition="none";lnhr2.style.width="0px";
        lnhr3.style.transition="none";lnhr3.style.width="0px";
        var y1=document.getElementById("strch");
        y1.classList.toggle("animateY");
        var y2=document.getElementById("strch1");
        y2.classList.toggle("animateY");
        var x1=document.getElementById("strch2");
        x1.classList.toggle("animateX");
        var x2=document.getElementById("strch3");
        x2.classList.toggle("animateX");
        thsbtn.classList.remove("theanim");
        thsbtn.classList.remove("theanim1");
        thsbtn.classList.remove("theanim2");
        console.log(dr);
        dr=0;
    }
    var button = document.getElementById("myButton");
    var div = document.getElementById("strch");
    
    button.addEventListener("click", function(){
      div.classList.toggle("animate");
    });
   /* function stretch(){
    var str=document.getElementById("strch");
    str.style.transform= "scaleY(0)";
    var str1=document.getElementById("strch1");
    str1.style.transform= "scaleY(0)";
    var str2=document.getElementById("strch2");
    str2.style.transform= "scaleX(0)";
    var str3=document.getElementById("strch3");
    str3.style.transform= "scaleX(0)";

}*/

function X(){
    var sh=document.getElementById("show")
    sh.style.display="block";
    var Xone=document.getElementById("Rectangle2");
    Xone.classList.toggle("Xcapsule1");
    var Xtwo=document.getElementById("Rectangle3");
    Xtwo.classList.toggle("Xcapsule");
  }