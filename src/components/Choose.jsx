import React, { useState } from "react";
import Ingredient from "./Ingredient";
import Options from "./Options";
import loading from "../../public/loading.gif";
import GenerationResuIt from "./GenerationResuIt";
const Choose = () => {
  const [textFromOptionsComponent, setTextFromOptionsComponent] = useState();

  const apikey = import.meta.env.VITE_API_KEY;
  const apiurl = import.meta.env.VITE_API_URL;

  const collectChooses = () => {
    let text =
      "сенегрируй мне блюдо с этими ингредиентами:" +
      gtpPromptText.toString() +
      textFromOptionsComponent;
    return text;
  };
  const [urlOfImage, setUrlOfImage] = useState("");
  const [generatedText, setGeneretedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const ingredientsData = [
    { name: "Meat", imageSrc: "/images/foods/meat.png" },
    { name: "Chicken", imageSrc: "/images/foods/chicken.png" },
    { name: "egg", imageSrc: "/images/foods/egg.png" },
    { name: "fish", imageSrc: "/images/foods/fish.png" },
    { name: "mushroom", imageSrc: "/images/foods/mushroom.png" },
    { name: "tomato", imageSrc: "/images/foods/tomato.png" },
    { name: "cucumber", imageSrc: "/images/foods/cucumber.png" },
    { name: "milk", imageSrc: "/images/foods/milk.png" },
    { name: "rice", imageSrc: "/images/foods/rice.png" },
    { name: "cheese", imageSrc: "/images/foods/cheese.png" },
    { name: "lemon", imageSrc: "/images/foods/lemon.png" },
    { name: "butter", imageSrc: "/images/foods/butter.png" },
  ];

  const [gtpPromptText, setGtpPromptText] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  const handleIngredientClick = (ingredient) => {
    setGtpPromptText([...gtpPromptText, ingredient.name]);
  };
  const generateText = async () => {
    setIsLoading(true);
    console.log("generating text...");
    let prompt = "сенегрируй мне блюдо с этими ингредиентами: суп и мясо";

    try {
      const response = await fetch(apiurl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apikey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
          max_tokens: 350,
        }),
      });
      const data = await response.json();
      console.log("data", data);
      const text = data.choices[0].text;

      setGeneretedText(text);

      await generateImage(collectChooses());
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const generateImage = async (promptTextForImage) => {
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apikey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: promptTextForImage,
        n: 1,
        size: "512x512",
      }),
    };

    try {
      const response = await fetch(
        "https://api.openai.com/v1/images/generations",
        options
      );
      const data = await response.json();
      console.log("data of generatedImage is below: ", data);
      // console.log(data);
      setUrlOfImage(data.data[0].url);

      console.log("urlOfImage " + urlOfImage);
      setImageUrl(urlOfImage);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      alert('sorry,generation failed')

    }

    // try{
    //   generateImage()
    // }catch(error){
    //   console.error(error);
    // }
  };

  return (
    <div className="flex justify-center flex-wrap">
      <div className="flex max-w-[1000px] justify-center flex-wrap mr-5 ml-5">
        {ingredientsData.map((ingredient, index) => (
          <Ingredient
            key={index}
            imageSrc={ingredient.imageSrc}
            // isSelected={selectedIngredients.includes(ingredient)}
            onClick={() => handleIngredientClick(ingredient)}
          />
        ))}
      </div>

      <div>
        <h3>Selected Ingredients:</h3>
        <ul>
          {gtpPromptText.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      {/* <img src={urlOfImage} alt="image" width={400} /> */}
      <button
        onClick={() => generateText()}
        className="px-4 h-[50px] m-4 rounded-2xl bg-indigo-400"
        disabled={isLoading}
      >
        {isLoading ? (
          <img
            src={loading}
            width={50}
            height={50}
            className=""
            alt="Loading"
          />
        ) : (
          "Generate Dish"
        )}
      </button>
      <p>textFromOptionsComponent: {textFromOptionsComponent}</p>
      {/* <p>text: {generatedText}</p> */}
      <Options setTextFromOptionsComponent={setTextFromOptionsComponent} />

      <GenerationResuIt urlOfImage={urlOfImage} generatedText={generatedText} />
    </div>
  );
};

export default Choose;
