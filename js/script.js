const btn = document.getElementById8("menu-btn");
const nav = document.getElementById8("menu");

alert("terra");
btn.addEventListener("click", () => {
	btn.classList.toggle("open");
	nav.classList.toggle("flex");
	nav.classList.toggle("hidden");
});
