$(function() {

	var kickstarterWeb = {

		init : function () {
			this.sendToApi();
		},

		sendToApi : function() {
			var that = this;
            const tableBody = document.querySelector(".kickstarter-table");

            $('.spinner-border').show();
			return $.ajax({
				url: 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/kickstarterc27b67e.json',
				method:"GET",
                dataType: "json",
				contentType: "application/json; charset=utf-8",
				cache: false,
				processData: false, 
				success:function(data)
				{
                    var json = data;
                    $(json).each(function (index, item) {
                        var sno = json[index]["s.no"];
                        var fund = json[index]["percentage.funded"];
                        var pledgeamt = json[index]["amt.pledged"];
                        $('tbody.kickstarter-body').append(
                        '<tr><td>'
                        + sno
                        + '</td><td>'
                        + fund
                        + '</td><td>'
                        + pledgeamt
                        + '</td></tr>')
                    });  
				},
                complete: function(){
                    $('.spinner-border').hide();
                }            
			});
		}

	}

	kickstarterWeb.init();
});