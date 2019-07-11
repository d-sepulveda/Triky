import React,{Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state={
      turn:'X',
      position: ['','','','','','','','',''],
      numbersmoves:0,
      gameEnd:false,
    }
    this.gameSet=this.gameSet.bind(this)
    this.restart=this.restart.bind(this)
  }

  gameSet(val,Class){
    let cases=false;
    let winner=null
    const position=this.state.position
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    if(this.state.position[val]==='' && winner==null && this.state.gameEnd==false){
      this.state.position[val]=this.state.turn
      document.querySelector("div."+Class+" "+"p").innerHTML=this.state.position[val]
      
      
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (position[a] && position[a] === position[b] && position[a] === position[c]) {
          return(
            winner=this.state.turn,
            this.state.gameEnd=true,
            document.querySelector("div.contain-text p").innerHTML="El ganador es "+winner
          )     
        }
      }
      this.setState({
        numbersmoves:this.state.numbersmoves+1,
        turn:this.state.turn==='X'?'O':'X'       
      }) 
    if(winner==null && this.state.numbersmoves>7){
    winner="Empate"
    document.querySelector("div.contain-text p").innerHTML="El resultado es "+winner
    }
   }
  }
  
  restart(){
    for(let i=0;i<9;i++){
      document.querySelectorAll("div.square p")[i].innerHTML=''
      document.querySelector("div.contain-text p").innerHTML='Jugando Tricky'
      }
      this.setState({
      turn:'X',
      position: ['','','','','','','','',''],
      numbersmoves:0,
      gameEnd:false,
    })
  }

  render(){
  return(
    <div className="App">
      <div className="head">
        <h1>TRICKY</h1>
      </div>
      <div className="body">
        <div className="contain-square">
          <div className="square s1" onClick={()=>{this.gameSet(0,'s1')}}><p></p></div>
          <div className="square s2" onClick={()=>{this.gameSet(1,'s2')}}><p></p></div>
          <div className="square s3" onClick={()=>{this.gameSet(2,'s3')}}><p></p></div>
          <div className="square s4" onClick={()=>{this.gameSet(3,'s4')}}><p></p></div>
          <div className="square s5" onClick={()=>{this.gameSet(4,'s5')}}><p></p></div>
          <div className="square s6" onClick={()=>{this.gameSet(5,'s6')}}><p></p></div>
          <div className="square s7" onClick={()=>{this.gameSet(6,'s7')}}><p></p></div>
          <div className="square s8" onClick={()=>{this.gameSet(7,'s8')}}><p></p></div>
          <div className="square s9" onClick={()=>{this.gameSet(8,'s9')}}><p></p></div>
        </div>
      </div>
      <div className="footer">
        <div className="contain-text">
        <p>Jugando Tricky</p>
        </div>
        <div className="contain-button">
          <button className="button" onClick={this.restart}>Reiniciar</button>
        </div>
      </div>
    </div>
  )}
}

export default App;
