require('normalize.css/normalize.css');
require('styles/App.less');

import React from 'react';

// let yeomanImage = require('../images/yeoman.png');
let imageDatas = require('../data/imageDatas.json');

(function genImageURL(imageDatasArr) {
	for (var i = 0; i < imageDatasArr.length; i++) {
		var singleImgData = imageDatasArr[i];
		singleImgData.imageURL = require('../images/' + singleImgData.fileName);
	}
})(imageDatas);


class AppComponent extends React.Component {
	render() {
		return (
			<section className="stage">
				<section className="img-sec"></section>
				<section className="controller-nav"></section>
			</section>
		);
	}
}

AppComponent.defaultProps = {};

export default AppComponent;