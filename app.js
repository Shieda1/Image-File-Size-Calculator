// https://www.omnicalculator.com/other/image-file-size

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const filesizeRadio = document.getElementById('filesizeRadio');
const imagewidthinpixelsRadio = document.getElementById('imagewidthinpixelsRadio');
const imageheightinpixelsRadio = document.getElementById('imageheightinpixelsRadio');

let filesize;
let imagewidthinpixels = v1;
let imageheightinpixels = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

filesizeRadio.addEventListener('click', function() {
  variable1.textContent = 'Image width in pixels';
  variable2.textContent = 'Image height in pixels';
  imagewidthinpixels = v1;
  imageheightinpixels = v2;
  result.textContent = '';
});

imagewidthinpixelsRadio.addEventListener('click', function() {
  variable1.textContent = 'File size';
  variable2.textContent = 'Image height in pixels';
  filesize = v1;
  imageheightinpixels = v2;
  result.textContent = '';
});

imageheightinpixelsRadio.addEventListener('click', function() {
  variable1.textContent = 'File size';
  variable2.textContent = 'Image width in pixels';
  filesize = v1;
  imagewidthinpixels = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(filesizeRadio.checked)
    result.textContent = `File size = ${computefilesize().toFixed(2)}`;

  else if(imagewidthinpixelsRadio.checked)
    result.textContent = `Image width in pixels = ${computeimagewidthinpixels().toFixed(2)}`;

  else if(imageheightinpixelsRadio.checked)
    result.textContent = `Image height in pixels = ${computeimageheightinpixels().toFixed(2)}`;
})

// calculation

function computefilesize() {
  return Number(imagewidthinpixels.value) * Number(imageheightinpixels.value) * 0.000003;
}

function computeimagewidthinpixels() {
  return (Number(filesize.value) / 0.000003) / Number(imageheightinpixels.value);
}

function computeimageheightinpixels() {
  return (Number(filesize.value) / 0.000003) / Number(imagewidthinpixels.value);
}