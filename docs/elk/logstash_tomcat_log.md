---
description: logstash-收集tomcat-log
---

# logstash-收集tomcat-log
```
input {
	file {
		path => "/usr/Elastic/test_tomcat_logs/localhost_access_log*.txt"
		start_position => "beginning"  #从文件开始处读取
		type => "tomcat_access_log"
		#sincedb_path => "/dev/null"
	}
}

filter {
	if [type] == "tomcat_access_log" {
		grok {
			match => { "message" => "%{COMMONAPACHELOG}" }
		}

		kv {
			source => "request"
			field_split => "&?"
			value_split => "="
		}

		urldecode {
			all_fields => true
		}
	}

	#定义时间戳的格式
	date {
		match => [ "timestamp", "yyyy-MM-dd-HH:mm:ss" ]
		locale => "cn"
	}
}

output {
	if [type] == "tomcat_access_log" {
		elasticsearch {
			action => "index" #es要执行的动作
			hosts => ["192.168.1.114:9201","192.168.1.114:9202"]
			#事件要被写进的索引，可是动态的用%{foo}语句
			index => "logstash-tomcat_access_logs-%{+YYYY.MM.dd}"
			#protocol => "http" #这个打开会报错
			#index => "system-message-%{+YYYY.MM.dd}"
			#一个默认的es mapping 模板将启用（除非设置为false 用自己的template）
			#manage_template => true
			#有效的filepath   设置自己的template文件路径，不设置就用已有的
			#template => "/data1/cloud/logstash-5.5.1/filebeat-template.json"
			#template_name => "my_index" #在es内部模板的名字
			#template_overwrite => true
			#document_type => "log"
			user => ""
			password => ""
		}
	}

	stdout {
		codec => rubydebug
	}
}
```