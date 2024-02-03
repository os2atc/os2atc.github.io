const nav = document.getElementById('nav');
const menuItemReference = document.getElementById('menu-item-reference');
const menuItemReferenceData = document.getElementById(
  'menu-item-reference-data'
);

const menuItemResource = document.getElementById('menu-item-resource');
const menuItemResourceeData = document.getElementById(
  'menu-item-resource-data'
);

document.addEventListener('click', () => {
  menuItemReferenceData.classList.add('hidden');
  menuItemResourceeData.classList.add('hidden');
});

nav.addEventListener('click', (event) => {
  event.stopPropagation();
});

menuItemReference.addEventListener('click', () => {
  if (!menuItemResourceeData.classList.contains('hidden')) {
    menuItemResourceeData.classList.toggle('hidden');
  }
  menuItemReferenceData.classList.toggle('hidden');
});

menuItemResource.addEventListener('click', () => {
  if (!menuItemReferenceData.classList.contains('hidden')) {
    menuItemReferenceData.classList.toggle('hidden');
  }
  menuItemResourceeData.classList.toggle('hidden');
});

const mobileMenuIcon = document.getElementById('mobile-menu-icon');
const mobileMenuCloseIcon = document.getElementById('mobile-menu-close-icon');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
mobileMenuCloseIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
