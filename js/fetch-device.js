import shared_url from "./set-share-url";

const fetchDevice = () => {
  const iFrame_input = document.querySelector('#url');
  const form = document.querySelector('form');
  const embed = document.querySelector('.device-iframe');
  const device_parent = document.querySelector('.device-item');
  const hasParams = new URLSearchParams(window.location.search);



  const add_iframe = (event, paramUrl) => {
    let $value = ''

    if(event) {
      if(event.type === "submit") {
        event.preventDefault();
      }
    }
    
    if(paramUrl) {
      console.log(paramUrl)
      $value = paramUrl.split('/')[4];
    } else {
      $value = iFrame_input.value.split('/')[4];
    }

    let element = document.createElement('iframe');
    element.setAttribute('src', `https://xd.adobe.com/embed/${$value}`)
    element.style.width = 100 +'%'
    element.style.height = 100 +'%'
    
    document.querySelector('.device-item').appendChild(element)

  }

  if(hasParams.get('url')) {
    let paramUrl = hasParams.get('url')
    add_iframe('', paramUrl);
    shared_url.value = 'http://localhost:1234/view.html?url='+paramUrl
  }


  if(hasParams.get('url') && hasParams.get('device')) {
    shared_url.value = 'http://localhost:1234/view.html?url='+hasParams.get('url')+'&device='+hasParams.get('device')
    console.log('working')
  }




  const changeDevice = event => {
    device_parent.className = '';
    device_parent.classList.add('device-item');
    device_parent.classList.add(event.currentTarget.value);
    document.querySelector('iframe').remove();
  }

  form.addEventListener('submit', event => add_iframe(event));

  document.querySelector('#device').addEventListener('change', event =>  changeDevice(event))
}

export default fetchDevice;