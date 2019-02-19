$(document).ready(function () {

    function _all_rows() {
        $.ajax({
            type:"POST",
            url:"addstuff.php",
            data:{action:"getall"},
            success: function (data) {
                $("#content").html(data)
            }
        });
    }

    $("#addbutton").click(function (e) {
        e.preventDefault();

        var fname = $('[name="firstname"]');
        var sname = $('[name="secondname"]');
        var stat = $('[name="statnum"]');
        var adate = $('[name="datearrival"]');
        var ldate = $('[name="dateleave"]');

        var bskladom;
        var check = $("input#boxskladom");

        if(check.is(":checked")) {
            bskladom = 1;
        } else {
            bskladom = 0;
        }

        check = $("input#boxftype");
        var typef;

        if(check.is(":checked")) {
            typef = 1;
        } else {
            typef = 0;
        }

        check = $("input#boxstype");
        var types;

        if(check.is(":checked")) {
            types = 1;
        } else {
            types = 0;
        }

        check = $("input#boxttype");

        var typet;

        if(check.is(":checked")) {
            typet = 1;
        } else {
            typet = 0;
        }

        $.ajax({
            type: "POST",
            url: "addstuff.php",
            data: {fname: fname.val(),
                    sname: sname.val(),
                    stat: stat.val(),
                    adate: adate.val(),
                    ldate: ldate.val(),
                    bskladom: bskladom,
                    boxftype: typef,
                    boxstype: types,
                    boxttype: typet,
                    action: "actionadd"},
            success: function (data) {
                $("#content").html(data);
            }
        });
    });

    _all_rows();
});