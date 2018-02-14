var bootstrap;

function main()
{
    var svg = $("svg")[0];
	canvas = document.createElement("canvas");
	canvas.height = svg.height.baseVal.value;
	canvas.width = svg.width.baseVal.value;
	xml = (new XMLSerializer()).serializeToString(svg);
	canvg(canvas, xml, {scaleWidth: canvas.width, scaleHeight: canvas.height, ignoreDimensions: true});
	var png = canvas.toDataURL("image/png");
	var image = new Image();
	image.src = png;
	document.body.appendChild(image);
}

$(main);
