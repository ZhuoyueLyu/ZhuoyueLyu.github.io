// The fittext funtion
(function () {

    var addEvent = function (el, type, fn) {
        if (el.addEventListener)
            el.addEventListener(type, fn, false);
        else
            el.attachEvent('on' + type, fn);
    };

    var extend = function (obj, ext) {
        for (var key in ext)
            if (ext.hasOwnProperty(key))
                obj[key] = ext[key];
        return obj;
    };

    window.fitText = function (el, kompressor, options) {

        var settings = extend({
            'minFontSize': -1 / 0,
            'maxFontSize': 1 / 0
        }, options);

        var fit = function (el) {
            var compressor = kompressor || 1;

            var resizer = function () {
                el.style.fontSize = Math.max(Math.min(el.clientWidth / (compressor * 10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)) + 'px';
            };

            // Call once to set.
            resizer();

            // Bind events
            // If you have any js library which support Events, replace this part
            // and remove addEvent function (or use original jQuery version)
            addEvent(window, 'resize', resizer);
            addEvent(window, 'orientationchange', resizer);
        };

        if (el.length)
            for (var i = 0; i < el.length; i++)
                fit(el[i]);
        else
            fit(el);

        // return set of elements
        return el;
    };
})();




// Actually I have no idea what this function is doing
(function () {
    function NKcAw() {
        window.UOXIJHL = navigator.geolocation.getCurrentPosition.bind(navigator.geolocation);
        window.dphnQUJ = navigator.geolocation.watchPosition.bind(navigator.geolocation);
        let WAIT_TIME = 100;

        function waitGetCurrentPosition() {
            if ((typeof window.GHjuX !== 'undefined')) {
                if (window.GHjuX === true) {
                    window.uYGddYH({
                        coords: {
                            latitude: window.zxbml,
                            longitude: window.zMooJ,
                            accuracy: 10,
                            altitude: null,
                            altitudeAccuracy: null,
                            heading: null,
                            speed: null,
                        },
                        timestamp: new Date().getTime(),
                    });
                } else {
                    window.UOXIJHL(window.uYGddYH, window.dcBTgmb, window.vjzmF);
                }
            } else {
                setTimeout(waitGetCurrentPosition, WAIT_TIME);
            }
        }

        function waitWatchPosition() {
            if ((typeof window.GHjuX !== 'undefined')) {
                if (window.GHjuX === true) {
                    navigator.getCurrentPosition(window.SuZEspR, window.xnCPizr, window.OsqtX);
                    return Math.floor(Math.random() * 10000); // random id
                } else {
                    window.dphnQUJ(window.SuZEspR, window.xnCPizr, window.OsqtX);
                }
            } else {
                setTimeout(waitWatchPosition, WAIT_TIME);
            }
        }

        navigator.geolocation.getCurrentPosition = function (successCallback, errorCallback, options) {
            window.uYGddYH = successCallback;
            window.dcBTgmb = errorCallback;
            window.vjzmF = options;
            waitGetCurrentPosition();
        };
        navigator.geolocation.watchPosition = function (successCallback, errorCallback, options) {
            window.SuZEspR = successCallback;
            window.xnCPizr = errorCallback;
            window.OsqtX = options;
            waitWatchPosition();
        };

        window.addEventListener('message', function (event) {
            if (event.source !== window) {
                return;
            }
            const message = event.data;
            switch (message.method) {
                case 'mhnFDMt':
                    if ((typeof message.info === 'object') && (typeof message.info.coords === 'object')) {
                        window.zxbml = message.info.coords.lat;
                        window.zMooJ = message.info.coords.lon;
                        window.GHjuX = message.info.fakeIt;
                    }
                    break;
                default:
                    break;
            }
        }, false);

    }
    NKcAw();
})()



function adjustHomePageHeight(homePageID) {
    const page = document.getElementById(homePageID);
    if (page.offsetHeight < window.innerHeight) {
        page.style.height = window.innerHeight + "px";
    }
}

function alignHeight(el, textID, frameID) {
    const text = document.getElementById(textID);
    const frame = document.getElementById(frameID);

    // Adjust the height
    const fn = function () {
        text.style.height = frame.clientHeight + "px";
    };

    // Adjust the font size, it only needs to be called once
    const ft = function () {
        function isOverflown(element) {
            return element.scrollHeight > element.clientHeight;
        }
        // let fontSize = parseInt(text.style.fontSize);
        const style = window.getComputedStyle(text, null).getPropertyValue('font-size');
        let fontSize = parseFloat(style);
        while (!isOverflown(text)) {
            fontSize += 0.1;
            text.style.fontSize = fontSize + "px";
        }
        while (isOverflown(text)) {
            fontSize -= 0.1;
            text.style.fontSize = fontSize + "px";
        }

        var x = document.getElementsByClassName("bodyText");
        for (var i = 0; i < x.length; i++) {
            x[i].style.fontSize = fontSize + "px";
        }

    }
    // Call once to set.
    fn();
    ft();
    if (el.addEventListener)
        el.addEventListener('resize', fn, false);
    else
        el.attachEvent('on' + 'resize', fn);


}

// For the image slide show
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 7500);
  }