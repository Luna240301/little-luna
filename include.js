export async function include(selector, file) {
  const element = document.querySelector(selector);
  if (element) element.innerHTML = await (await fetch(file)).text();
}