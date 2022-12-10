# Welcome to the Tensorflow.js workshop!

Follow these steps:
1. Clone this repo
2. Let's use Github Codespaces!
3. Click on the "Code" green button and select the "Codespaces" tab
4. Create a codespace on the main branch
5. When the codespace is up and the terminal are available: 
6. Run ```npm install```
7. Run ```npm test```
8. Click on "Open in Browser" green button
9. Go to teachablemachine.withgoogle.com
10. Click "Get Started"
11. Select "Image Project" and then "Standard image model"
12. Create 4 classes with the following names: angry - happy - sad - surprised - waiting
13. Train each of the classes showing their respective emotion. To do this, click the button "Webcam"
14. Now that you have your training dataset, click on "Train Model"
15. Then you can preview your model!
16. Click "Export Model"
17. Select "Tensorflow.js"
18. Click "Upload my model"
19. Now, copy the code snippet and let's continue 🚀

## Update the code imported from the Teachable Machine

1. Open index.html and locate this comment:
 ```<!-- Add your Teachable Machine model here --> ```

2. Replace the comment with the Teachable Machine code snippet, then let's edit that same code you just pasted

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
            } else if ((prediction[i].className === 'sad') && (prediction[i].probability.toFixed(2) >= 0.90)) {
                robotFace.src = "/images/sad.png";
                robotTalk.innerText = "Why so sad??"
            } else if ((prediction[i].className === 'surprised') && (prediction[i].probability.toFixed(2) >= 0.90)) {
                robotFace.src = "/images/angry.png";
                robotTalk.innerText = "OMG!!!!!!"
            }
            
            robotContainter.appendChild(robotFace);
            robotContainter.appendChild(robotTalk);
        }
      
