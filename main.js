function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(700, 400);
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('MobileNet', modelload);
}

function modelload() {
    console.log('Modelload !');
}

function draw() {
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotresults);
}

function gotresults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
        document.getElementById("object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}