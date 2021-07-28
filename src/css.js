const string = ` /*让我们来画一只皮卡丘吧*/
.skin * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .skin *::before,
  .skin *::after {
    box-sizing: border-box;
  }
  .skin a {
    color: inherit;
    text-decoration: none;
  }
  .skin input,button {
    font-family: inherit;
  }
  .skin ol,ul {
    list-style: none;
  }
  .skin table {
    border-collapse: collapse;
    border-spacing: 0;
  }
.skin{
background-color: rgba(255, 219, 0);
    min-height:50vh ; 
    position: relative;
}
.nose{
    border: 10px solid black;
    border-color: black transparent transparent transparent;
    width: 0px;
    position: relative;
    left: 50%;
    top: 200px;
    margin-left: -10px;
    /* 层叠上下文 加高位置 */
    z-index: 10;
}
@keyframes wave{
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(5deg);
    }

    66%{
        transform: rotate(-5deg);
    }

    100%{
        transform: rotate(0deg);
    }
}
.nose:hover{
    transform-origin: 50% 100%;
    animation: wave 270ms infinite linear;
}

.yuan{
    position: absolute;
    width: 20px;
    height: 6px;
    background-color: black;
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0 0;
}

.eye{
    border:1px solid black;
    border-radius: 50%;
    height: 64px;
    width: 64px;
    position: absolute;
    left: 50%;
    top: 155px;
    margin-left: -32px;
    background: rgba(46, 45, 45);
}
.eye::before{
    content: '';
    display: block;
    border: 2px solid rgba(255,255,255);
    border-radius: 50%;
    width: 24px;
    height: 24px;
    position: relative;
    left: 12px;
    top:4px;
    background: white;
    
}
.eye.left{
    transform: translateX(-100px);
}
.eye.right{
    transform: translateX(100px);

}

.mouth{
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 230px;
    margin-left: -50px;
    margin-left: -100px;
}

.mouth .up{
    position: relative;
    top: -16px;
    z-index: 1;
}
.mouth .up .lip{
    border:4px solid black;
    height: 30px;
    width: 100px;
    background: rgba(255, 219, 0);
    border-top-color: transparent;
    border-right-color: transparent ;
    position: relative;
    position: absolute;
    left: 50%;
    margin-left: -50px;
}


.mouth .up .lip.left{
    border-radius: 0 0 0 50px;
    transform: rotate(-15deg) translateX(-53px);
   
}
.mouth .up .lip.right{
    border-radius: 0 0 50px 0;
    transform: rotate(15deg) translateX(53px);

}

.mouth .up .lip::before{
        content: '';
        display: block;
        bottom:0;
        background: rgba(255, 219, 0);
        position:absolute;

}

.mouth .up .lip.left::before{
    width: 7px;
    height: 30px;
    right: -6px;
}


.mouth .up .lip.right::before{
    width: 7px;
    height: 30px;
    left: -6px;
}

.mouth .down{
    /* border: 1px solid red; */
    height: 185px;
    position: absolute;
    top: 7px;
    width: 100%;
    overflow: hidden;
}

.mouth .down .yuan1{
    border: 5px solid black;
    width: 150px;
    height: 1000px;
    background: rgba(168, 16, 7);
    position: absolute;
    left:50%;
    margin-left: -75px;
    bottom: 0;
    border-radius: 75px/300px ;
    overflow: hidden;
}

.mouth .down .yuan2{
    background: rgba(255, 91, 93);
    width: 180px;
    height: 300px;
    position: absolute;
    left: 50%;
    margin-left: -90px;
    bottom: -153px;
    border-radius: 90px;
}

.face{
    border:4px solid black;
    position: absolute;
    width: 88px;
    height: 88px;
    top: 250px;
    left: 50%;
    margin-left: -44px;
    z-index: 3;
}

.face.left{
    transform: translateX(-170px);
    
    border-radius: 50%;
    background: rgba(254, 24, 0);
}

.face.right{
    transform: translateX(170px);
    border-radius: 50%;
    background: rgba(254, 24, 0);
} 
`
export default string;