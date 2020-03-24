const bar = document.getElementById('js-progressbar');
UIkit.upload('.js-upload', {
  // url: '/echo/json/',
  'url': '/api/course/add',
  'data-type': 'json',
  'name': 'test',
  'multiple': false,
  "beforeSend": function(...args) {
    console.log('beforeSend', args);
  },
  "beforeAll": function(...args) {
    console.log('beforeAll', args);
  },
  "load": function(...args) {
    console.log('load', args);
  },
  "error": function(...args) {
    console.log('error', args);
  },
  "complete": function(...args) {
    console.log('complete', args);
  },
  "loadStart": function(e, ...args) {
    console.log('loadStart', args);
    bar.removeAttribute('hidden');
    bar.max = e.total;
    bar.value = e.loaded;
  },
  "progress": function(e, ...args) {
    console.log('progress', args);
    bar.max = e.total;
    bar.value = e.loaded;
  },
  "loadEnd": function(e, ...args) {
    console.log('loadEnd', args);
    bar.max = e.total;
    bar.value = e.loaded;
  },
  "completeAll": function(...args) {
    console.log('completeAll', args);
    setTimeout(function() {
      bar.setAttribute('hidden', 'hidden');
    }, 1000);
    // alert('Upload Completed');
    console.log('Upload Completed');
  },
});
