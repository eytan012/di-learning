import React from "react";
import superheros from '../MemoriesGamedb/superheros.json'
import HeroCard from "./HeroCard";
import '../App.css'
import MemorieGameNav from "./MemorieGameNav";

class MemoriesGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heros: [],
            score: 0,
            topScore: 0
        }
    }

    componentDidMount() {
        this.setState({heros: superheros.superheroes})
    }

    handleClick = (id) => {
        let {heros, score, topScore} = this.state;
        const hero = heros.find(item => {
            return item.id === id
        })
        if (hero.clicked === true) {

            if (score > topScore) {
                this.setState({
                    topScore: score
                })
            }
            this.setState({
                score: 0,
                heros:this.reset([...heros])
            })

        } else {
            hero.clicked = true;
            this.setState({
                score: ++score,
                heros: this.shuffle([...heros])
            })
        }
    }

    shuffle = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
        return arr
    }

    reset = (arr) => {
    for (let i = arr.length-1; i>0; i--){
        arr[i].clicked = false
    }

        return arr
    }

    render() {
        const {heros, score, topScore} = this.state
        return (
            <>
                <MemorieGameNav score={score} topScore={topScore}/>
                <div className='herosList'>
                    {
                        heros.map((item, i) => {
                            return <HeroCard handleClick={this.handleClick} hero={item} key={i}/>
                        })
                    }
                </div>

            </>
        )
    }

}

export default MemoriesGame