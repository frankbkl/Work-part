// 1、ICJ06  是一个字符串输入框，想要实现的功能是不能超过40个字符串的长度，如果超过40个字符串就弹窗，
// 而且输入框变成红色，如果没有超过40个，就去掉颜色，正常输入
function ICJ06_onchange(){
var gICJ06 =  document.getElementById("ICJ06"); //输入框
  console.log(gICJ06.value.length);
  if(gICJ06.value.length > 40){
    gICJ06.style.backgroundColor = "red"; //超过40个字，输入框变成红色，弹窗
    gICJ06.value=gICJ06.value.slice(0,40);
    alert("字数不能超过40个字");
    
  }
  else{
    gICJ06.style.backgroundColor = "";
    }
  }

// 2.运营——料号新建申请表——RB2(是否需要更新测试板)按钮通过选择不同的选项。出现不同的2个输入框和隐藏输入框
// 是 更新后测试板编号
// 否 当前测试板编号
// NA 为空    
function RadioButton14_onchange(){
  var checked = document.querySelector('input[name="RadioButton14"]:checked');
  var col = document.getElementById("col_ICJ06");
  if(checked && checked.value === "A"){
    col.style.display = "block";
  }else{
    col.style.display = "none";
  }
}

// 3、将IT资产信息添加到Grid11中，点击添加按钮，验证IT资产名称、单价、使用人是否为空
// 如果为空，弹窗提示用户输入，如果不为空，就把所有的信息都添加到Grid11中
function Grid11_add_onclick(){
  if (document.getElementById('TextBox4').value== '')
    {
      alert('请输入IT资产名称');
      return falese;
    }
  else if(document.getElementById('TextBox5').value=='')
  {
    alert('请输入IT资产单价');
    return falese;
  }
  else if(document.getElementById('DialogInputLabel254').value=='')
    {
      alert('请选择使用人');
      return false;
    }
  if(true){
    Grid11Obj.addRow();
    Grid11Obj.clearBinding();
    return true;
  }else{
    return false;
  }
}
