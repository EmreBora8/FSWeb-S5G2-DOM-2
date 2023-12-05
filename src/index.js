import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function (e) {
	alert("Bana tıkladın!");
});

// Kodlar buraya gelecek!

document.querySelector(".btn").addEventListener("click", () => {
	console.log("Gel");
});

document.querySelectorAll("img").forEach((element) => {
	element.addEventListener("mouseover", function (e) {
		e.target.style.filter = "grayscale(1)";
	});
	element.addEventListener("mouseout", function (e) {
		e.target.style.filter = null;
	});
	element.addEventListener("dblclick", (e) => {
		e.target.style.transform = "scale(5,0.5)";
	});
	element.addEventListener("click", (e) => {
		e.target.style.transform = null;
	});
});

window.addEventListener("load", (e) => {
	setTimeout(() => {
		console.log("setto calisiyor");
		document.querySelector("body").style.backgroundColor = "red";
	}, 2000);
	console.log("kod calisiyor");
});

const theInput = document.createElement("input");
theInput.setAttribute("type", "password");

theInput.addEventListener("focus", (e) => {
	e.target.value = "text";
	e.target.style.border = "5px, solid, blue";
});
document.querySelector(".content-section").append(theInput);

theInput.addEventListener("keyup", (e) => {
	e.target.value = e.target.value.toUpperCase();
});
theInput.addEventListener("keydown", (e) => {
	if (e.key == "3") {
		document.querySelector("body").style.backgroundColor = "blue";
	}
});
