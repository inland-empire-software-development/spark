const bar = document.getElementById('js-progressbar');
UIkit.upload('.js-upload', {
  // url: '/echo/json/',
  'url': '',
  'data-type': 'json',
  'name': 'json',
  'multiple': false,
  'params': {
    'json': '{"name":"John","age":30,"car":null}',
    'html': '<p>this is html</p>',
  },
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
  "completeAll": function(HttpRequest, ...args) {
    console.log('completeAll', args);
    setTimeout(function() {
      bar.setAttribute('hidden', 'hidden');
    }, 1000);
    alert('Upload Completed');
    console.log('Upload Completed');
    console.log('Response', HttpRequest.response);
  },
});
