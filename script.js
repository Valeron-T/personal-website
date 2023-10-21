/* Please ❤ this if you like it! */


const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');

function handleIndicator(el) {
	items.forEach(item => {
		item.classList.remove('is-active');
		item.removeAttribute('style');
	});

	indicator.style.width = `${el.offsetWidth}px`;
	indicator.style.left = `${el.offsetLeft}px`;
	indicator.style.backgroundColor = el.getAttribute('active-color');

	el.classList.add('is-active');
	el.style.color = el.getAttribute('active-color');
}


items.forEach((item, index) => {
	item.addEventListener('click', (e) => { handleIndicator(e.target) });
	item.classList.contains('is-active') && handleIndicator(item);
});

setTimeout(() => {
	const element = document.querySelector('.animate-fade-in');
	element.classList.remove('opacity-0');
}, 100);


(function ($) {
	"use strict";

	//Parallax            

	function scrollBanner() {
		$(document).on('scroll', function () {
			var scrollPos = $(this).scrollTop();
			$('.parallax-fade-top').css({
				'top': (scrollPos / 2) + 'px',
				'opacity': 1 - (scrollPos / 700)
			});
			$('.parallax-00').css({
				'top': (scrollPos / -3.5) + 'px'
			});
			$('.parallax-01').css({
				'top': (scrollPos / -2.8) + 'px'
			});
			$('.parallax-top-shadow').css({
				'top': (scrollPos / -2) + 'px'
			});
		});
	}
	scrollBanner();

	//Page cursors

	document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
		t.style.left = n.clientX + "px",
			t.style.top = n.clientY + "px",
			e.style.left = n.clientX + "px",
			e.style.top = n.clientY + "px",
			i.style.left = n.clientX + "px",
			i.style.top = n.clientY + "px"
	});
	var t = document.getElementById("cursor"),
		e = document.getElementById("cursor2"),
		i = document.getElementById("cursor3");
	function n(t) {
		e.classList.add("hover"), i.classList.add("hover")
	}
	function s(t) {
		e.classList.remove("hover"), i.classList.remove("hover")
	}
	s();
	for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
		o(r[a])
	}
	function o(t) {
		t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
	}


	//Scroll back to top

	$(document).ready(function () {
		var offset = 300;
		var duration = 400;
		jQuery(window).on('scroll', function () {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.scroll-to-top').addClass('active-arrow');
			} else {
				jQuery('.scroll-to-top').removeClass('active-arrow');
			}
		});
		jQuery('.scroll-to-top').on('click', function (event) {
			event.preventDefault();
			jQuery('html, body').animate({ scrollTop: 0 }, duration);
			return false;
		})


		/* Hero Case study images */

		$('.case-study-name:nth-child(1)').on('mouseenter', function () {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(1)').addClass("show");
			$('.case-study-name:nth-child(1)').addClass('active');
		})
		$('.case-study-name:nth-child(2)').on('mouseenter', function () {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(2)').addClass("show");
			$('.case-study-name:nth-child(2)').addClass('active');
		})
		$('.case-study-name:nth-child(3)').on('mouseenter', function () {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(3)').addClass("show");
			$('.case-study-name:nth-child(3)').addClass('active');
		})
		$('.case-study-name:nth-child(4)').on('mouseenter', function () {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(4)').addClass("show");
			$('.case-study-name:nth-child(4)').addClass('active');
		})
		$('.case-study-name:nth-child(1)').trigger('mouseenter')

	});

})(jQuery);

var i = 0;
var txt = "Hi, I'm Valeron";

function typeWriter() {
	if (i < txt.length) {
		document.getElementsByClassName('js-typewrite')[0].innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, 65);
	}
}

setTimeout(typeWriter, 1000);

function updateSideTitle(text) {
	document.getElementById('side-title').innerText = text;
}


var skills = [
	{
		"header": "INTERESTS",
		"captions": [
			"Automation",
			"Web",
			"Mobile",
			"Cloud",
			"AI"
		],
		"values": [
			0.80,
			0.85,
			0.65,
			0.90,
			0.75
		]
	},
	{
		"header": "LANGUAGES",
		"captions": [
			"Javascript",
			"HTML",
			"Python",
			"Flutter",
			"Bash"
		],
		"values": [
			0.80,
			0.90,
			0.90,
			0.70,
			0.60
		]
	},
	{
		"header": "MISC",
		"captions": [
			"IaC (Terraform)",
			"Git",
			"Azure",
			"Virtualisation",
			"Linux"
		],
		"values": [
			0.45,
			0.80,
			0.75,
			0.70,
			0.85
		]
	}
];

var pentagonIndex = 0;
var valueIndex = 0;
var width = 0;
var height = 0;
var radOffset = Math.PI / 2
var sides = 5; // Number of sides in the polygon
var theta = 2 * Math.PI / sides; // radians per section

function getXY(i, radius) {
	return {
		"x": Math.cos(radOffset + theta * i) * radius * width + width / 2,
		"y": Math.sin(radOffset + theta * i) * radius * height + height / 2
	};
}

var hue = [];
var hueOffset = 25;

for (var s in skills) {
	$(".skill-content").append('<div class="pentagon" id="interests"><div class="header"></div><canvas class="pentCanvas"/></div>');
	hue[s] = (hueOffset + s * 255 / skills.length) % 255;
}

$(".pentagon").each(function (index) {
	width = $(this).width();
	height = $(this).height();
	var ctx = $(this).find('canvas')[0].getContext('2d');
	ctx.canvas.width = width;
	ctx.canvas.height = height;
	ctx.font = "15px Monospace";
	ctx.textAlign = "center";

	/*** LABEL ***/
	color = "hsl(" + hue[pentagonIndex] + ", 100%, 50%)";
	ctx.fillStyle = color;
	ctx.fillText(skills[pentagonIndex].header, width / 2, 15);

	ctx.font = "13px Monospace";

	/*** PENTAGON BACKGROUND ***/
	for (var i = 0; i < sides; i++) {
		// For each side, draw two segments: the side, and the radius
		ctx.beginPath();
		xy = getXY(i, 0.3);
		colorJitter = 25 + theta * i * 2;
		color = "hsl(" + hue[pentagonIndex] + ",100%," + colorJitter + "%)";
		ctx.fillStyle = color;
		ctx.strokeStyle = color;
		ctx.moveTo(0.5 * width, 0.5 * height); //center
		ctx.lineTo(xy.x, xy.y);
		xy = getXY(i + 1, 0.3);
		ctx.lineTo(xy.x, xy.y);
		xy = getXY(i, 0.37);
		console.log();
		ctx.fillText(skills[pentagonIndex].captions[valueIndex], xy.x, xy.y + 5);
		valueIndex++;
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
	}

	valueIndex = 0;
	ctx.beginPath();
	ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
	ctx.strokeStyle = "rgba(0, 0, 0, 0.3)";
	ctx.lineWidth = 5;
	var value = skills[pentagonIndex].values[valueIndex];
	xy = getXY(i, value * 0.3);
	ctx.moveTo(xy.x, xy.y);
	/*** SKILL GRAPH ***/
	for (var i = 0; i < sides; i++) {
		xy = getXY(i, value * 0.3);
		ctx.lineTo(xy.x, xy.y);
		valueIndex++;
		value = skills[pentagonIndex].values[valueIndex];
	}
	ctx.closePath();
	ctx.stroke();
	ctx.fill();
	valueIndex = 0;
	pentagonIndex++;
});
