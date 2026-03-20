// 1、资产类型和存放地点  是一个数据查询开窗
// 资产类型的名称是fab01，存放地点的名称是faf02

document.write('<script type="text/javascript" src="../../CustomJsLib/EFGPShareMethod.js?v=1.0.0"></script>');//引入开窗JS
var cwdg="TOPGP_Database";  //设定连接名称

function formOpen(){
  var tDataStr = document.getElementById("Grid10").value;
  if(tDataStr !== ''){
  var tData = eval(tDataStr);
  Grid10Obj.reload(tData);
  }
document.getElementById("fab01_btn").onclick = function(){
  var cp = document.getElementById("cp").value;
  var FileName = "SingleOpenWin";
  var sql="select fab01,fab02 from "+cp+".fab_file"; //SQL读取语句
   var SQLClaused = new Array(sql); //绑定语句
   var SQLLabel = new Array("类型编号","类型名称");//開窗的Grid Label
   var QBELabel = new Array("项目编号","项目名称");//模糊查詢的Label
	var QBEField = new Array("fab01","fab02");//模糊查詢,須和DB Table欄位名稱相同
   var ReturnId = new Array("","fab01_txt"); //反写栏位
   singleOpenWin(FileName, cwdg , SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 800, 600); //创建开窗   
};
document.getElementById("faf02_btn").onclick = function(){ //给按钮绑定点击事件
    var cp =  document.getElementById("cp").value; //公司别

    var FileName = "SingleOpenWin"; //设置开窗类型
    var sql="select faf02 from "+cp+".faf_file"; //SQL读取语句
   var SQLClaused = new Array(sql); //绑定语句
   var SQLLabel = new Array("存放地点");//開窗的Grid Label
   var QBELabel = new Array("存放地点");//模糊查詢的Label
	var QBEField = new Array("faf02");//模糊查詢,須和DB Table欄位名稱相同
   var ReturnId = new Array("faf02_txt"); //反写栏位
   
  singleOpenWin(FileName, cwdg , SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 800, 600); //创建开窗   
  };
  return true;
}

