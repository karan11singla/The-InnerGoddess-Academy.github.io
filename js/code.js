var e = [],
    n = [],
    a = [],
    c = [],
    o = [],
    i,
    e_total = 0,
    a_total = 0,
    c_total = 0,
    o_total = 0,
    n_total = 0,
    check = 0,
    name =0,
    email = 0,
    count;
var data = {e:0,a:0,c:0,n:0,o:0,name:0,email:0,O:"",C:"",E:"",A:"",N:""};
function setMessage(e,a,c,n,o){
    data.O = (o>=4) ? "Ideation" : (o>=2.6 && o<4) ? "Strategic" : "Individualization";
    data.A = (a>=4) ? "Empathy" : (a>=2.6 && a<4) ? "Connectedness" : "Competitive";
    data.C = (c>=4) ? "Focus" : (c>=2.6 && c<4) ? "Consistency" : "Adaptability";
    data.N = (n>=4) ? "Intuitive" : (n>=2.6 && n<4) ? "Deliberative" : "Self-Assured";
    data.E = (e>=4) ? "Significance" : (e>=2.6 && e<4) ? "Communicative" : "Analytical";
}
function processPhase(pag){
    var current=pag,next=pag+1;
    if (current === 0){
        $("#phase0").addClass('animate-out');
        setTimeout(function(){
            $("#phase0").removeClass().addClass('forms');
            $("#phase1").removeClass().addClass('is-showing').addClass('animate-in');
        },600);
        setTimeout(function(){
            $('#phase1').removeClass('animate-in');

        },1200)
    }
    else if(current>0&&current<11){
        $("#phase"+current).addClass('animate-out');
        setTimeout(function(){
            $("#phase" + current).removeClass().addClass('forms');
            $("#phase" + next).removeClass().addClass('is-showing').addClass('animate-in');
            $("#class" + current).removeClass('active').addClass('done');
            $('#class' + next).addClass('active');
        },600);
        setTimeout(function(){
            $('#phase' + next).removeClass('animate-in');

        },1200)
    }
    else{
        for(i=1;i<12;i++){
            var aname  = "a"+i, cname  = "c"+i, ename = "e" + i,nname = "n" + i, oname = "o" +i;
            //noinspection JSUnresolvedFunction
            a[i] = $('input[name = "'+ aname +'"]:checked').val();
            e[i] = $('input[name = "'+ ename +'"]:checked').val();
            c[i] = $('input[name = "'+ cname +'"]:checked').val();
            n[i] = $('input[name = "'+ nname +'"]:checked').val();
            o[i] = $('input[name = "'+ oname +'"]:checked').val();
        }
        e_total=0;
        a_total=0;
        n_total=0;
        o_total=0;
        c_total=0;
        name = $('input[name="name"]').val();
        email = $('input[name="email"]').val();
        for (count = 1; count < 11; count++) {
            if (count % 2 === 0) {
                e_total = e_total - parseInt(e[count]);
                a_total = a_total + parseInt(a[count]);
                c_total = c_total - parseInt(c[count]);
                n_total = n_total + parseInt(n[count]);
                o_total = o_total - parseInt(o[count]);
            } else {
                e_total = e_total + parseInt(e[count]);
                a_total = a_total - parseInt(a[count]);
                c_total = c_total + parseInt(c[count]);
                n_total = n_total - parseInt(n[count]);
                o_total = o_total + parseInt(o[count]);
            }
        }
        if(isNaN(e_total)||isNaN(a_total)||isNaN(c_total)||isNaN(n_total)||isNaN(o_total)||name.length==0||email.length==0){
            check = 1;

        }
        else {
            check = 0;
        }

        if(check === 1) {
            alert("You havent filled out all the entries");
        }
        else{
            $("#phase11").addClass('animate-out');
            setTimeout(function(){
                $("#phase11").removeClass().addClass('forms');
                $("#phase12").removeClass().addClass('is-showing').addClass('animate-in');
                $("#class11").removeClass('active').addClass('done');
                $('#class12').addClass('active');
            },600);
            setTimeout(function(){
                $('#phase12').removeClass('animate-in');
            },1200);


            data.e = scale(e_total);
            data.a = scale(a_total);
            data.c = scale(c_total);
            data.n = scale(n_total);
            data.o = scale(o_total);
            data.name = name;
            data.email = email;
            setMessage(data.e,data.a,data.c,data.n,data.o);
            charted(scale(e_total),scale(a_total),scale(c_total),scale(n_total),scale(o_total));
        }
    }
}
function backprocessPhase(pag) {
    var previous = pag,current = pag+1;
    $("#phase" + current).addClass('animate-in-reverse');
    setTimeout(function(){
        $("#phase" + current).removeClass().addClass('forms');
        $("#phase" + previous).removeClass().addClass('is-showing').addClass('animate-out-reverse');
        $('#class' + current).removeClass('active');
        $('#class' + previous ).removeClass('done').addClass('active');
    },600);
    setTimeout(function(){
        $('#phase' + previous).removeClass('animate-out-reverse');
    },1200)
}



function charted(e, a, c, n, o) {
    var c1=c,a1=a,e1=e,n1=n,o1=o;

    var ctx = document.getElementById("myChart").getContext('2d');
    var myRadarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Openness','Conscientiousness','Extraversion', 'Agreeableness',  'Natural Reaction', ],
            "datasets":[ {
                "data": [parseFloat(o1),parseFloat(c1),parseFloat(e1),parseFloat(a1),parseFloat(n1)],
                "fill": true,
                "backgroundColor": "rgba(24, 242, 178,0.2)",
                "borderColor": "rgb(24, 242, 178)",
                "pointBackgroundColor": "#18F2B2",
                "pointBorderColor": "#fff",
                "pointHoverBackgroundColor": "#fff",
                "pointHoverBorderColor": "#18F2B2"
            }]
        },
        options: {
            maintainAspectRatio: false,
            scale: {
                ticks: {
                    max: 5,
                    min:1,
                    stepSize: 1.67
                },
                pointLabels :{
                    fontStyle: "bold",
                    fontColor:'#292321',
                    fontFamily:"'Muli,'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
                }
            },
            tooltips: {
                mode: 'index'
            },
            legend: {
                    display:false
            }
        }
    });
}
function scale(value){
    var scaled_value = parseFloat(value-(-20))/parseFloat(40);
    return 1+(scaled_value * 4)
}
$("#gforms").submit(function(o) {
        $.ajax({
            type: "POST",
            url: "https://script.google.com/macros/s/AKfycby371Y8kTlQ-OQTAcFcnLIbHhg6uJr3WK4ihUdvleNl4mM8pPY/exec",
            dataType: "JSON",
            data: JSON.stringify(data),
            success: function(o) {
                alert("Thank you for your submission.Your strength themes should be sent to your mail.");

            }
        }), o.preventDefault()
    })
