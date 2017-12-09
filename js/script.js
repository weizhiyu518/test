var g_Interval = 1;
var g_PersonCount = 500;//参加抽奖人数
var g_Timer;
var running = false;
var staffs=[
{"id":1,"name":"张三"},
{"id":2,"name":"李四"},
{"id":3,"name":"赵五"},
{"id":4,"name":"王六"},
{"id":5,"name":"小红"},
{"id":6,"name":"小蓝"},
{"id":7,"name":"摩拜"},
{"id":8,"name":"滴滴"}
]
function beginRndNum(trigger){
	if(running){
		running = false;
		clearTimeout(g_Timer);		
		$(trigger).val("开始");
		$('#ResultNum').css('color','red');
	}
	else{
		running = true;
		$('#ResultNum').css('color','black');
		$(trigger).val("停止");
		beginTimer();
	}
}

function updateRndNum(){
	var num = Math.floor(Math.random()*8+1);
	var name=staffs[num].name;
	var info=num
	$('#ResultNum').html(num+'('+name+')');
}

function beginTimer(){
	g_Timer = setTimeout(beat, g_Interval);
}

function beat() {
	g_Timer = setTimeout(beat, g_Interval);
	updateRndNum();
}