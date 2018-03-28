/* By Eduardo Velez
 * @_SinMemoria
 */

$(document).ready(function(){
	var pos = 1;
	$('.btn').bind('click', function(){
		$('.wrap').removeClass('p'+ pos);
			if(pos !=1){
				pos = 1;
			}else{
				if($(this).attr('id') == 'us'){
					pos--;
				}else{
					pos++;
				}
			}
		$('.wrap').addClass('p'+pos).css('margin-left', (pos * -100 )+'%');
    $(this).removeClass('hovered');
	});
  $('.btn').hover( function(){
		$(this).addClass('hovered');
	},
	function(){});
});