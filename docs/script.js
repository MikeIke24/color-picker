new Clipboard('.copy-text');

let colors = [
  ['#C97B84', '#A85751', '#7D2E68', '#251351', '#040926'],
  ['#006BA6', '#0496FF', '#FFBC42', '#D81159', '#8F2D56'],
  ['#F5FDC6', '#F5C396', '#D0B17A', '#A89F68', '#41521F'],
  ['#C6D4FF', '#7A82AB', '#307473', '#12664F', '#2DC2BD'],
  ['#FFBA49', '#EF5D60', '#20A39E', '#2686C1', '#FC7A57'],
  ['#FFB997', '#f67e7d', '#843B62', '#0B032D', '#74546A'],
  ['#BFB5AF', '#ECE2D0', '#D5B9B2', '#A26769', '#582C4D'],
  ['#B7D3F2', '#AFAFDC', '#8A84E2', '#84AFE6', '#79BEEE'],
  ['#A80874', '#B7FDFE', '#5EF38C', '#2B9720', '#343A1A'],
  ['#44355B', '#31263E', '#221E22', '#ECA72C', '#EE5622'],
  ['#133C55', '#386FA4', '#59A5D8', '#84D2F6', '#91E5F6'],
  ['#51A3A3', '#75485E', '#CB904D', '#DFCC74', '#C3E991'],
  ['#1C3144', '#596F62', '#7EA16B', '#C3D898', '#70161E'],
  ['#23F0C7', '#EF767A', '#7D7ABC', '#6457A6', '#FFE347'],
  ['#E09F7D', '#EF5D60', '#EC4067', '#A01A7D', '#311847'],
  ['#233D4D', '#FE7F2D', '#FCCA46', '#A1C181', '#619B8A']
];

let colorHtml = '';
for (let i = 0; i < colors.length; i++) {
  colorHtml += `<div id="cc${i}"class="color-container">`;
  for (let j = 0; j < colors[i].length; j++) {
    colorHtml += `<div class="color" style="background-color:${colors[i][j]};"></div>`;
  }
  let copyText = `'${colors[i].join("','")}'`;
  colorHtml += `</div>`;
  colorHtml += `<div id="${i}" class="copy-text" data-clipboard-text="${copyText}">${copyText}</div>`;
}

$('.container').append(colorHtml);

$('.copy-text').on("click", function () {
  var id = $(this).attr('id');
  copiedAnimation(id);
})

function copiedAnimation(id) {
  $(`#cc${id}`).append(`<div id="c${id}" class="copied-alert">Copied!</div>`);
  setTimeout(function () {
    $(`#c${id}`).css('opacity', '1');
  }, 1);
  setTimeout(function () {
    $(`#c${id}`).css('opacity', '0');
  }, 2000);
  setTimeout(function () {
    $(`#c${id}`).remove();
  }, 2501);
}