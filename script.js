        let i = 1;
        function startTimer() {
            let counter = document.getElementById("counter");
            if (i > 100) {
                window.clearInterval(setTime);
                i = 1;
                //  console.log('stop')
            } else {
                counter.innerHTML = i;
                i++;
            }
        }
        document.addEventListener("DOMContentLoaded", digitalWatch(), true)
        function digitalWatch() {
            let counterWatch = document.getElementById("digitWatch");
            const data = new Date();
            counterWatch.innerHTML = data.toLocaleTimeString();
            setInterval("digitalWatch()", 1000);
        }
        document.addEventListener("DOMContentLoaded", midNight(), true)
        function midNight() {
            let counterHour = document.getElementById("hour");
            let counterMin = document.getElementById("min");
            let counterSec = document.getElementById("sec");
            const dataNight = new Date();
            let h = dataNight.getHours();
            let m = dataNight.getMinutes();
            let s = dataNight.getSeconds();
            counterHour.innerHTML = (23-h);
            counterMin.innerHTML = (59-m);
            counterSec.innerHTML = (60-s);
            setInterval("midNight()", 1000);
        }
