const { app, BrowserWindow } = require('electron');

app.on('ready', () => {

	const window = new BrowserWindow({
		width: 320,
		height: 320,
		transparent: true,
		frame: false,
		resizable: false,
      	maximizable: false,
      	fullscreenable: false,
	});

	window.loadFile('index.html');

});
