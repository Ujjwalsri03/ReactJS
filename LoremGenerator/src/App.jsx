import React, { useState } from 'react';
import LoremText from './Components/LoremText/RandomTxt';
import './App.css'

function App() {
  const [paragraphs, setParagraphs] = useState(1);
  const [loremText, setLoremText] = useState([]);

  const loremData =[
    "Brownie gummi bears croissant pudding macaroon cupcake jelly bear claw. Toffee cotton candy donut soufflé gummies lemon drops brownie. Apple pie candy cupcake tart tiramisu chocolate cake lollipop. Macaroon chocolate dragée marshmallow croissant pie. Tootsie roll cotton candy muffin tiramisu soufflé marzipan donut. Lemon drops croissant cake chocolate bar gummi bears brownie apple pie. Macaroon pie jelly beans marshmallow cupcake dragée cookie candy. Brownie tart soufflé chocolate cake cupcake jelly."
    ,
    "Cotton candy sweet roll marzipan tart cookie jelly beans. Chocolate cake carrot cake tootsie roll bear claw pudding gummies danish. Muffin toffee cupcake cookie macaroon jelly soufflé. Chocolate bar brownie bear claw lemon drops cotton candy candy."
    ,
    
    "Candy brownie gummi bears pie dragée tiramisu. Cookie pie cake jelly beans muffin marshmallow soufflé brownie tart. Lemon drops pudding jelly beans chocolate bar macaroon. Croissant cotton candy cupcake gummies muffin gummi bears pie.Gummies marshmallow bear claw chocolate bar muffin lemon drops brownie tiramisu. Oat cake cupcake jelly donut candy soufflé dragée. Macaroon tart cotton candy cupcake gummi bears chocolate bar marshmallow. Sweet roll cookie muffin apple pie soufflé."
    ,
    "Apple pie dragée tiramisu chocolate croissant jelly beans brownie. Carrot cake marzipan lollipop soufflé candy lemon drops pie. Sweet roll tootsie roll pudding cake marshmallow brownie chocolate bar. Oat cake cupcake cookie cotton candy jelly beans muffin.Tootsie roll cotton candy muffin tiramisu soufflé marzipan donut. Lemon drops croissant cake chocolate bar gummi bears brownie apple pie. Macaroon pie jelly beans marshmallow cupcake dragée cookie candy. Brownie tart soufflé chocolate cake cupcake jelly." ,

    "Tart cupcake lemon drops tootsie roll cotton candy cookie. Croissant macaroon jelly beans carrot cake soufflé brownie donut. Muffin apple pie jelly tiramisu pudding cake sweet roll. Chocolate cake brownie marshmallow marzipan danish gummies candy.Gummies marshmallow bear claw chocolate bar muffin lemon drops brownie tiramisu. Oat cake cupcake jelly donut candy soufflé dragée. Macaroon tart cotton candy cupcake gummi bears chocolate bar marshmallow. Sweet roll cookie muffin apple pie soufflé.",
    "Carrot cake marzipan pudding lollipop cupcake macaroon muffin jelly beans. Donut brownie soufflé pie tootsie roll marshmallow jelly sweet roll. Chocolate bar gummi bears tiramisu candy lemon drops oat cake tart. Cupcake cotton candy croissant pudding chocolate cake."
    ,
     "Gummies marshmallow bear claw chocolate bar muffin lemon drops brownie tiramisu. Oat cake cupcake jelly donut candy soufflé dragée. Macaroon tart cotton candy cupcake gummi bears chocolate bar marshmallow. Sweet roll cookie muffin apple pie soufflé.Apple pie jelly beans soufflé brownie chocolate bar donut. Lemon drops cake pudding macaroon gummi bears candy tiramisu cookie. Brownie marshmallow tart jelly tootsie roll sweet roll gummies chocolate cake. Carrot cake soufflé croissant lemon drops pie."
    ,
     "Brownie tiramisu lemon drops cupcake jelly beans pie muffin tart. Cotton candy pudding marshmallow candy cupcake carrot cake cookie. Soufflé chocolate cake marzipan jelly sweet roll donut. Bear claw gummies dragée chocolate bar cake toffee croissant.Tootsie roll cotton candy muffin tiramisu soufflé marzipan donut. Lemon drops croissant cake chocolate bar gummi bears brownie apple pie. Macaroon pie jelly beans marshmallow cupcake dragée cookie candy. Brownie tart soufflé chocolate cake cupcake jelly."
    ,
    "Apple pie jelly beans soufflé brownie chocolate bar donut. Lemon drops cake pudding macaroon gummi bears candy tiramisu cookie. Brownie marshmallow tart jelly tootsie roll sweet roll gummies chocolate cake. Carrot cake soufflé croissant lemon drops pie."
    ,
   "Tootsie roll cotton candy muffin tiramisu soufflé marzipan donut. Lemon drops croissant cake chocolate bar gummi bears brownie apple pie. Macaroon pie jelly beans marshmallow cupcake dragée cookie candy. Brownie tart soufflé chocolate cake cupcake jelly."
    
  ]
  

  const generateLorem = () => {
    
    if(paragraphs < 10){ 
      const generatedText = [];
      for (let i = 0; i < paragraphs; i++) {
        generatedText.push(loremData[i % loremData.length]); // Loop through text
      }
      setLoremText(generatedText);
    } else{
      alert("Ayyyyo ! you are generating too much paragraph in one go, kindly generate 10 paragraph or less in one go. 😀")
    }
  };

  const handleInputChange = (e) => {
    setParagraphs(Number(e.target.value));
  };

  return (
    <div className="App">
      <h1>Lorem Ipsum Generator</h1>
      <form>
        <label For="paragraphs">Number of paragraphs:</label>
        <input
          type="number"
          value={paragraphs}
          min="0"
          onChange={handleInputChange}
        />
        <button type="button" onClick={generateLorem}>
          Generate
        </button>
      </form>
      <LoremText text={loremText} />
    </div>
  );
}

export default App;
