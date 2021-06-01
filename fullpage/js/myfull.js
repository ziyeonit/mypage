$(function(){
  $('#myfull').fullpage({
    autoScrolling:true,
    scrollHorizontally:true,
    sectionsColor:['#ccc', '#fff', 'red', 'orange'],
    navigation:true,
    navigationPosition: 'right',
    navigationTooltips:['나의소개', '포폴', '기타내용', '오렌지'],
    showActiveTooltip:true,
  });
});
