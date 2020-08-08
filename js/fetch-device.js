const fetchDevice = () => {
  let iFrame_input = document.querySelector('#url');
  let form = document.querySelector('form');
  const embed = document.querySelector('.device-iframe');
  const device_parent = document.querySelector('.device-item');
  let hasParams = new URLSearchParams(window.location.search);

  console.log(hasParams.get('url'))

  if(hasParams.get('url')) {
    let $value = hasParams.get('url').split('/')[4];
    let element = document.createElement('iframe');
    element.setAttribute('src', `https://xd.adobe.com/embed/${$value}`)
    element.style.width = 376 +'px'
    element.style.height = 100 +'%'
    
    document.querySelector('#url').value = hasParams.get('url')
    document.querySelector('.device-item').appendChild(element)
  }

  const add_iframe = event => {
    event.preventDefault();
    let $value = iFrame_input.value.split('/')[4];
    let element = document.createElement('iframe');
    element.setAttribute('src', `https://xd.adobe.com/embed/${$value}`)
    element.style.width = 100 +'%'
    element.style.height = 100 +'%'
    
    console.log(element)
    document.querySelector('.device-item').appendChild(element)

  }

  const changeDevice = event => {
    device_parent.className = '';
    device_parent.classList.add('device-item');
    device_parent.classList.add(event.currentTarget.value);
    console.log(	event.currentTarget.value)
  }

  form.addEventListener('submit', event => add_iframe(event));

  document.querySelector('#device').addEventListener('change', event =>  changeDevice(event))
}

export default fetchDevice;