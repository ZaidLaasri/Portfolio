document.addEventListener("DOMContentLoaded", function(event) {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }

    // INJECTION CSS
    var css = document.createElement("style");
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
});

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.querySelector('.wrap').innerHTML = this.txt;

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};


function opentab(e){
    if(e=='skills'){
        debugger;
        console.log(document.getElementById('skills'));
        document.getElementById("skills").style.display="block";
        document.getElementById('education').style.display="none";
        document.getElementById('experience').style.display="none";

        document.getElementById('skillsNav').style.color="pink";
        document.getElementById('skillsNav').style.textDecoration="underline";


        document.getElementById('educationNav').style.color="white";
        document.getElementById('educationNav').style.textDecoration="none";

        document.getElementById('experienceNav').style.color="white";
        document.getElementById('experienceNav').style.textDecoration="none";
    }else if(e=="education"){
        document.getElementById('skills').style.display="none";
        document.getElementById('education').style.display="block";
        document.getElementById('experience').style.display="none";

        document.getElementById('skillsNav').style.color="white";
        document.getElementById('skillsNav').style.textDecoration="none";


        document.getElementById('educationNav').style.color="pink";
        document.getElementById('educationNav').style.textDecoration="underline";

        document.getElementById('experienceNav').style.color="white";
        document.getElementById('experienceNav').style.textDecoration="none";
    }else{
       
        document.getElementById('skills').style.display="none";
        document.getElementById('education').style.display="none";
        document.getElementById('experience').style.display="block";

        document.getElementById('skillsNav').style.color="white";
        document.getElementById('skillsNav').style.textDecoration="none";


        document.getElementById('educationNav').style.color="white";
        document.getElementById('educationNav').style.textDecoration="none";

        document.getElementById('experienceNav').style.color="pink";
        document.getElementById('experienceNav').style.textDecoration="underline";

    }
}