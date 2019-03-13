# Class 02 Image Classification - MobileNet

## Lecture
* A Learned Function
* Classification
* MobileNet
    * model
    * dataset
    * function
        * input 
        * output
* Call Back Function


## Coding Session
* Load and Display Image
    * loadImage("filepath/imagename.format")
    * image(img,x,y,w,h)
* Image Classifier
    * load model: ml5.imageClassifier("model name",callback_function)
    * mobilenet
    * call predict function: classifier.predict()
        * input: image, (optional)num of labels, callback_function
        * output: resutls (array, check with console.log)
            * class names
            * probabilities
* Load and Display Video
    * access to webcam: createCapture(VIDEO)
    * video as image: image(video,0,0)
* Video Classifier
    * reference to image classifier
* Application
    * create visual effect and wrap up