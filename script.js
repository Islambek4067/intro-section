const pFeature = document.querySelector('.p-feature');
const pCompany = document.querySelector('.p-company');
const features = document.querySelector('.features');
const company = document.querySelector('.company');
const exit = document.querySelector('.exit')
const companyEl = document.querySelector('.company-mb-el')
const companyMb = document.querySelector('.p-company-mb')
const featureMb = document.querySelector('.p-feature-mb')
const featuresEl = document.querySelector('.features-mb-el')

const menuMb = document.querySelector('.menu-mb')
const mbBox = document.querySelector('.mb-box')
pFeature.addEventListener('click', ()=>{
  features.classList.toggle('show')
})
pCompany.addEventListener('click', ()=>{
  company.classList.toggle('show')
})

menuMb.addEventListener('click', ()=>{
  mbBox.classList.toggle('show')

})
exit.addEventListener('click', ()=>{
  mbBox.classList.remove('show')
})

companyMb.addEventListener('click', ()=>{
  companyEl.classList.toggle('show')
})

featureMb.addEventListener('click', ()=>{
  featuresEl.classList.toggle('show')
})


