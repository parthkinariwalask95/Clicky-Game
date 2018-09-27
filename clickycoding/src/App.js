import React from "react";
import Navbar from "./components/navbar/navbar";
import Jumbotron from "./components/jumbotron/jumbotron";
import ImgCard from "./components/img/img"
import img from "./img.json";

class App extends React.Component{ 

    state={
        img,
        score:0,
        highestscore:0,
        arrayimg:[]
    };
    shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    clicked = id =>{
        if(this.state.score === 9){

        }
        let array  =  this.state.arrayimg;
        if(array.includes(id)){
            this.setState({score :0});
            this.setState({arrayimg : []});
            console.log("Game OVer!!");
        }
        else{
        // let temp=0;
        array.push(id);
        const newScore =this.state.score + 1;
        this.shuffleArray(this.state.img);
        this.setState({score: newScore});
            
        if(newScore >= this.state.highestscore){
            
            this.setState({highestscore:newScore});
            }

        console.log(array);
    }
}

    render() {
        return (
           <div>
            <Navbar score={this.state.score} highestscore={this.state.highestscore}/>
            <Jumbotron />
            {this.state.img.map(img => (
              <ImgCard
              clicked={this.clicked}
                id={img.id}
                key={img.id}
                image={img.image}
              />
            ))}
            </div>
    );
      }
}
export default App;