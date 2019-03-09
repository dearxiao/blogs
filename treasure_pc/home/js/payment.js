$(function(){
	if($('#branch').html()==null||$('#branch').html()==''){
		$('.bankcard').html("<span style='color:red;font-size: 16px;'>请先绑定一张银行卡</span>")
	}
	
	$('#mem_wdA').click(function(){
		$('#txje_err1').hide()
		if($('#提现金额i').val().length==0){
			$('#txje_err1').show();
			return;
		}
		if(bankId == ''){
			tool.popup_err_msg("您还未绑定银行卡");
			return;
		}
		//按钮不可点击
		$(this).attr('disabled',true).css({'background':'#ccc'})
        $.ajax({
            type:"post",
            url:"/user/withdraw",
            data:{
                amount:$('#提现金额i').val(),//提现金额
                bankId: bankId,
            },
            dataType:'json',
            success:function(data){
                //按钮可以点击
                $('#mem_wdA').attr('disabled',false).css({'background':'#d42b2e'})
                if(data.code != '0'){
                    tool.popup_err_msg(data.msg);
                }else{
                    tool.popup_err_msg("已提交提现申请到后台，请等待审核");
                    setTimeout(function(){
                        window.location.href='/ucenter/index';
                    },1000);

                }
            }
        });
	});
	//关闭弹窗可以点击按钮
	$('.js-close-popup').click(function(){
		$('#mem_wdA').attr('disabled',false).css({'background':'#d42b2e'});
	})
	
	$("#allw_btn").on("click",function(){
		$("#提现金额i").val($("#账户余额").text())
	})

});
