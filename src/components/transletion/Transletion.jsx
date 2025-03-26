import React, { useEffect, useState } from "react";

async function translateText(text) {
  const apiKey = "YOUR_AZURE_TRANSLATOR_KEY"; // Replace with your Azure key
  const endpoint = "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=mr";

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ Text: text }]),
    });

    const data = await response.json();
    return data[0]?.translations[0]?.text || text; // Return translated text or original if failed
  } catch (error) {
    console.error("Translation error:", error);
    return text;
  }
}

function TranslateWebsite() {
  const [translated, setTranslated] = useState(false);

  useEffect(() => {
    const translatePage = async () => {
      if (translated) return;

      const elements = document.body.querySelectorAll("*"); // Get all elements
      for (let element of elements) {
        if (element.childNodes.length === 1 && element.childNodes[0].nodeType === Node.TEXT_NODE) {
          const originalText = element.innerText.trim();
          if (originalText) {
            const translatedText = await translateText(originalText);
            element.innerText = translatedText;
          }
        }
      }
      setTranslated(true);
    };

    translatePage();
  }, [translated]);

  return <button onClick={() => setTranslated(false)}>Translate Website</button>;
}

export default TranslateWebsite;
