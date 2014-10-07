var worker = this;
onmessage = function (event) {

    var start = new Date();
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/search/repositories?q=' + event.data);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {

            var end = new Date();
            worker.postMessage(end-start);
        }
    };
    xhr.send();



};
