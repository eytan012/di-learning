import React, {useState, useEffect} from "react";
import '../App.css'

const MemeGenerator = () => {
    const [topText, setTopText] = useState('')
    const [bottomText, setBottomText] = useState('')
    const [randomImg, setRandomImg] = useState('http://i.imgflip.com/1bij.jpg')
    const [allMemeImgs, setAllMemeImgs] = useState([])



    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => handleAllMeme(data.data.memes))
            .catch(e => console.log(e))
    }, [])



    const handleAllMeme = (arr) =>{
    setAllMemeImgs(arr)
    }

  const handleTopText = (e)=>{
      setTopText(e.target.value)
  }
    const handleBottomText = (e)=>{
        setBottomText(e.target.value)
    }

    const getRandomMeme = (e)=>{
        e.preventDefault()
        const randomNum = Math.floor(Math.random() * 99) + 1;
        setRandomImg(allMemeImgs[randomNum].url)
    }

    return (
        <div>
            <form className={'meme-form'}>
                <input type="text" onChange={handleTopText}/>
                <input type="text"  onChange={handleBottomText}/>
                <button onClick={getRandomMeme}>Gen</button>
            </form>
            <div className={'meme'}>
                <h2 className={'top'}>{topText}</h2>
                <img src={randomImg} alt=""/>
                <h2 className={'bottom'}>{bottomText}</h2>
            </div>
        </div>
    )
}

export default MemeGenerator;