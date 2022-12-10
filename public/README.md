# Welcome to the 2nd part of the Tensorflow.js workshop!

Follow these steps:

1. Clone this repo
2. Go into the folder
3. Run ```npm install```
4. Run ```npm test```
5. Follow the instructions on the presentation

## Update the code imported from the Teachable Machine

1. Open index.html and locate the comment where you should paste the Teachable Machine code, then let's edit that same code you just pasted
2. Remove the following lines:
  ```
  <div>Teachable Machine Image Model</div>
  <button type="button" onclick="init()">Start</button>
  <div id="webcam-container"></div>
  <div id="label-container"></div>/div>
  ```
3. Under the line that contains the URL imported, copy the following code:

    ```
    let robotContainter = document.getElementById("robot-container");
    let robotFace = document.createElement("img");
    let robotTalk = document.createElement("p");
    robotTalk.innerText = "I don't understand humans...*sigh*"
    robotFace.src = "/images/waiting.png";
    robotContainter.appendChild(robotFace);
    robotContainter.appendChild(robotTalk);
    ```
4. Then, on the same file, replace the content of the function predict() with the following code:

      
        // predict can take in an image, video or canvas html element
        const prediction = await model.predict(webcam.canvas);
        for (let i = 0; i < maxPredictions; i++) {
            const classPrediction =
                prediction[i].className + ": " + prediction[i].probability.toFixed(2);
            labelContainer.childNodes[i].innerHTML = classPrediction;
            if ((prediction[i].className === 'happy') && (prediction[i].probability.toFixed(2) >= 0.90)) {
                robotFace.src = "/images/happy.png";
                robotTalk.innerText = "I love to see you so happy!"
            } else if ((prediction[i].className === 'angry') && (prediction[i].probability.toFixed(2) >= 0.90)) {
                robotFace.src = "/images/angry.png";
                robotTalk.innerText = "Destroy! Destroy! Destroy!"
            }
            robotContainter.appendChild(robotFace);
            robotContainter.appendChild(robotTalk);
        }
      
