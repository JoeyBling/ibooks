---
description: common.js
---

# common.js


### 相关的正则表达式

```javascript
function LEMONUtils() {}

LEMONUtils.testFn = {
  isPassword : function(s) {
      return /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,20}$/.test(s);
  },
  //邮箱验证
  isEmail : function(s) {
      var isEmailText = /^(?=\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$).{0,30}$/;
      return isEmailText.test(s);
  },
  //校验手机号码
  isMobile : function(s) {
      var re=/^1[3-8]\d{9}$/;
      return re.test(s);
  },
  //校验邮政编码
  isZipCode : function(s) {
      var re = /^[1-9][0-9]{5}$/;
      return re.test(s);
  },
  //数字
  isNumber:function(s) {
      var re = /^[0-9]*$/;
      return re.test(s);
  },
  isQQ:function(s) {
      var re = /^[1-9]*$/;
      return re.test(s);
  },
  isNickname:function(s){
      var re =/^[\u4E00-\u9FA5]{2,5}$/;
      return re.test(s);
  },
  //是否为金额
  isMoney: function(s) {
      var re = /^\d*(\.\d{1,2})?$|^\d*\.(\d{1,2})?$/;
      return re.test(s);
  },
  // 全中文
  isChinese: function(value) {
      return /^[\u4e00-\u9fa5]+$/.test(value);
  },
  // 全数字
  isNum: function(value) {
      return /^[0-9]+$/.test(value);
  },
  // 全英文
  isEnglish: function(value) {
      return /^[a-zA-Z]+$/.test(value);
  },
  // 英文、数字
  isPwd: function(value) {
      return /^[a-zA-Z0-9]+$/.test(value);
  },
  // 英文、数字、汉字
  isUname: function(value) {
      return /^[a-zA-Z0-9\u4E00-\u9FA5]+$/.test(value);
  },
  // 是否为RMB
  isMoney: function(data, isPositive) {
      return isPositive ? /^\d+(\.\d{1,2})?$/.test(data) && parseFloat(data) > 0 : /^(-)?\d+(\.\d{1,2})?$/.test(data);
  },
  // 身份证
  isIdCard: function(idCard) {
      //15位和18位身份证号码的正则表达式
      var regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;

      //如果通过该验证，说明身份证格式正确，但准确性还需计算
      if (regIdCard.test(idCard)) {
          if (idCard.length == 18) {
              var idCardWi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); //将前17位加权因子保存在数组里
              var idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2); //这是除以11后，可能产生的11位余数、验证码，也保存成数组
              var idCardWiSum = 0; //用来保存前17位各自乖以加权因子后的总和
              for (var i = 0; i < 17; i++) {
                  idCardWiSum += idCard.substring(i, i + 1) * idCardWi[i];
              }

              var idCardMod = idCardWiSum % 11; //计算出校验码所在数组的位置
              var idCardLast = idCard.substring(17); //得到最后一位身份证号码

              //如果等于2，则说明校验码是10，身份证号码最后一位应该是X
              if (idCardMod == 2) {
                  if (idCardLast == 'X' || idCardLast == 'x') {
                      return true;
                  } else {

                      return false;
                  }
              } else {
                  //用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
                  if (idCardLast == idCardY[idCardMod]) {
                      return true;
                  } else {
                      return false;
                  }
              }
          }
      } else {
          return false;
      }
      return true;
  },
  //验证银行卡号
  isBankCard: function(bankCard) {

      var strBin = "10,18,30,35,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,62,65,68,69,84,87,88,94,95,98,99";

      var lastNum = bankCard.substr(bankCard.length - 1, 1); //取出最后一位（与luhm进行比较）
      var first15Num = bankCard.substr(0, bankCard.length - 1); //前15或18位
      var newArr = new Array();
      for (var i = first15Num.length - 1; i > -1; i--) { //前15或18位倒序存进数组
          newArr.push(first15Num.substr(i, 1));
      }
      var arrJiShu = new Array(); //奇数位*2的积 <9
      var arrJiShu2 = new Array(); //奇数位*2的积 >9
      var arrOuShu = new Array(); //偶数位数组
      for (var j = 0; j < newArr.length; j++) {
          if ((j + 1) % 2 == 1) { //奇数位
              if (parseInt(newArr[j]) * 2 < 9)
                  arrJiShu.push(parseInt(newArr[j]) * 2);
              else
                  arrJiShu2.push(parseInt(newArr[j]) * 2);
          } else //偶数位
              arrOuShu.push(newArr[j]);
      }
      var jishu_child1 = new Array(); //奇数位*2 >9 的分割之后的数组个位数
      var jishu_child2 = new Array(); //奇数位*2 >9 的分割之后的数组十位数
      for (var h = 0; h < arrJiShu2.length; h++) {
          jishu_child1.push(parseInt(arrJiShu2[h]) % 10);
          jishu_child2.push(parseInt(arrJiShu2[h]) / 10);
      }
      var sumJiShu = 0; //奇数位*2 < 9 的数组之和
      var sumOuShu = 0; //偶数位数组之和
      var sumJiShuChild1 = 0; //奇数位*2 >9 的分割之后的数组个位数之和
      var sumJiShuChild2 = 0; //奇数位*2 >9 的分割之后的数组十位数之和
      var sumTotal = 0;
      for (var m = 0; m < arrJiShu.length; m++) {
          sumJiShu = sumJiShu + parseInt(arrJiShu[m]);
      }
      for (var n = 0; n < arrOuShu.length; n++) {
          sumOuShu = sumOuShu + parseInt(arrOuShu[n]);
      }
      for (var p = 0; p < jishu_child1.length; p++) {
          sumJiShuChild1 = sumJiShuChild1 + parseInt(jishu_child1[p]);
          sumJiShuChild2 = sumJiShuChild2 + parseInt(jishu_child2[p]);
      }
      //计算总和
      sumTotal = parseInt(sumJiShu) + parseInt(sumOuShu) + parseInt(sumJiShuChild1) + parseInt(sumJiShuChild2);
      //计算Luhm值
      var k = parseInt(sumTotal) % 10 == 0 ? 10 : parseInt(sumTotal) % 10;
      var luhm = 10 - k;

      if (strBin.indexOf(bankCard.substring(0, 2)) == -1) {
          return false;
      }
      if (!(lastNum == luhm)) {
          return false;
      }
      return true;
  },
  // 邮件
  isEmail: function(value) {
      return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
  }

}

// 注：调用 LEMONUtils.testFn.isIdCard(value)
```


### 获取url中参数值

```javascript
function LEMONUtils() {}
LEMONUtils.getQueryString = function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = decodeURIComponent(top.location.search).substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return "";
}

// 注：运用 var _type = LemonUtils.getQueryString('type');
```