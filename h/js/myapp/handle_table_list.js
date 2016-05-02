<script id="table-template" type="text/x-handlebars-template">
  {{#each student}}
	<tr class="gradeA">
		<td>{{name}}</td>
		<td>{{name}}</td>
		<td>{{name}}</td>
		<td class="center">{{name}}</td>
		<td class="center">{{name}}</td>
		<td class="center">{{name}}</td>
	</tr>
  {{/each}}
</script>
<!--进行数据处理、html构造-->
<script type="text/javascript">
  $(document).ready(function() {
	//模拟的json对象
	var data = {
				"student": [
					{
						"name": "张三",
						"sex": "0",
						"age": 18
					},
					{
						"name": "李四",
						"sex": "0",
						"age": 22
					},
					{
						"name": "妞妞",
						"sex": "1",
						"age": 18
					}
				]
			};
	
	//注册一个Handlebars模版，通过id找到某一个模版，获取模版的html框架
	//$("#table-template").html()是jquery的语法，不懂的童鞋请恶补。。。
	var myTemplate = Handlebars.compile($("#table-template").html());
	
	//将json对象用刚刚注册的Handlebars模版封装，得到最终的html，插入到基础table中。
  $('#tableList').html(myTemplate(data));
});
</script>