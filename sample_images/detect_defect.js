var cv = require('./opencv');

var COLOR = [0, 255, 0]; //default red
var thickness = 2; // default 1
var cascadeFile = './defect_classifier.xml'

var inputFiles = [
	'./1.jpg', './2.jpg', './3.jpg',
	'./4.jpg', './5.jpg', './6.jpg' 
];

inputFiles.forEach(function(fileName) {

cv.readImage(fileName, function(err, im) {

	im.detectObject(cascadeFile, {neighbors: 2, scale: 2}, function(err, objects) {
		console.log(objects);
		for(var k = 0; k < objects.length; k++) {

			object = objects[k];
			im.rectangle([object.x, object.y], [object.x + object.width, object.y + object.height], COLOR, 2);
		}

		im.save(fileName.replace(/\.jpg/, 'processed.jpg'));

	});

});
});
