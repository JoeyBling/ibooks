---
description: SpringBoot集成Druid不支持多条SQL
---

# SpringBoot集成Druid不支持多条SQL

在`DataSource`初始化Bean 添加 
 ```
List<Filter> proxyFilters = new ArrayList<Filter>();
WallFilter statFilter = new WallFilter();
WallConfig config = new WallConfig();
config.setMultiStatementAllow(true); // 批量操作
statFilter.setConfig(config);
proxyFilters.add(statFilter);
druidDataSource.setProxyFilters(proxyFilters);
```

贴上自己的`Config`

```
package com.wstro.config;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.alibaba.druid.filter.Filter;
import com.alibaba.druid.pool.DruidDataSource;
import com.alibaba.druid.support.http.StatViewServlet;
import com.alibaba.druid.support.http.WebStatFilter;
import com.alibaba.druid.wall.WallConfig;
import com.alibaba.druid.wall.WallFilter;

/**
 * Druid数据源配置
 * 
 * @author Joey
 * @Email 2434387555@qq.com
 *
 */
@Configuration
@EnableTransactionManagement // 启注解事务管理
public class DataSourceConfig {
	private Logger logger = LoggerFactory.getLogger(DataSourceConfig.class);

	@Value("${spring.datasource.url}")
	private String dbUrl;

	@Value("${spring.datasource.username}")
	private String username;

	@Value("${spring.datasource.password}")
	private String password;

	@Value("${spring.datasource.driverClassName}")
	private String driverClassName;

	@Value("${spring.datasource.initialSize}")
	private int initialSize;

	@Value("${spring.datasource.minIdle}")
	private int minIdle;

	@Value("${spring.datasource.maxActive}")
	private int maxActive;

	@Value("${spring.datasource.maxWait}")
	private int maxWait;

	@Value("${spring.datasource.timeBetweenEvictionRunsMillis}")
	private int timeBetweenEvictionRunsMillis;

	@Value("${spring.datasource.minEvictableIdleTimeMillis}")
	private int minEvictableIdleTimeMillis;

	@Value("${spring.datasource.validationQuery}")
	private String validationQuery;

	@Value("${spring.datasource.testWhileIdle}")
	private boolean testWhileIdle;

	@Value("${spring.datasource.testOnBorrow}")
	private boolean testOnBorrow;

	@Value("${spring.datasource.testOnReturn}")
	private boolean testOnReturn;

	@Value("${spring.datasource.poolPreparedStatements}")
	private boolean poolPreparedStatements;

	@Value("${spring.datasource.maxPoolPreparedStatementPerConnectionSize}")
	private int maxPoolPreparedStatementPerConnectionSize;

	@Value("${spring.datasource.filters}")
	private String filters;

	@Value("${spring.datasource.connectionProperties}")
	private String connectionProperties;

	/**
	 * 注册DruidServlet
	 * 
	 * @return ServletRegistrationBean
	 */
	@Bean
	public ServletRegistrationBean druidServletRegistrationBean() {
		ServletRegistrationBean servletRegistrationBean = new ServletRegistrationBean();
		servletRegistrationBean.setServlet(new StatViewServlet());
		servletRegistrationBean.addUrlMappings("/druid/*");
		// 白名单：
		servletRegistrationBean.addInitParameter("allow", "127.0.0.1");
		// IP黑名单 (存在共同时，deny优先于allow) : 如果满足deny的话提示:Sorry, you are not
		// permitted to view this page.
		// 登录查看信息的账号密码.
		servletRegistrationBean.addInitParameter("loginUsername", "joey");
		servletRegistrationBean.addInitParameter("loginPassword", "jay");
		// 是否能够重置数据.
		servletRegistrationBean.addInitParameter("resetEnable", "false");
		return servletRegistrationBean;
	}

	/**
	 * 注册DruidFilter拦截
	 * 
	 * @return FilterRegistrationBean
	 */
	@Bean
	public FilterRegistrationBean druidFilterRegistrationBean() {
		FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean();
		filterRegistrationBean.setFilter(new WebStatFilter());
		Map<String, String> initParams = new HashMap<String, String>();
		// 设置忽略请求
		initParams.put("exclusions", "*.js,*.gif,*.jpg,*.bmp,*.png,*.css,*.ico,/druid/*");
		filterRegistrationBean.setInitParameters(initParams);
		filterRegistrationBean.addUrlPatterns("/*");
		return filterRegistrationBean;
	}

	/**
	 * 配置DataSource
	 * 
	 * @return DataSource
	 * @throws SQLException
	 */
	@Bean(initMethod = "init", destroyMethod = "close")
	@Primary
	public DataSource dataSource() throws SQLException {
		DruidDataSource druidDataSource = new DruidDataSource();
		druidDataSource.setUrl(dbUrl);
		druidDataSource.setUsername(username);
		druidDataSource.setPassword(password);
		druidDataSource.setDriverClassName(driverClassName);
		// configuration
		druidDataSource.setInitialSize(initialSize);
		druidDataSource.setMinIdle(minIdle);
		druidDataSource.setMaxActive(maxActive);
		druidDataSource.setMaxWait(maxWait);
		druidDataSource.setTimeBetweenEvictionRunsMillis(timeBetweenEvictionRunsMillis);
		druidDataSource.setMinEvictableIdleTimeMillis(minEvictableIdleTimeMillis);
		druidDataSource.setValidationQuery(validationQuery);
		druidDataSource.setTestWhileIdle(testWhileIdle);
		druidDataSource.setTestOnBorrow(testOnBorrow);
		druidDataSource.setTestOnReturn(testOnReturn);
		druidDataSource.setPoolPreparedStatements(poolPreparedStatements);
		druidDataSource.setMaxPoolPreparedStatementPerConnectionSize(maxPoolPreparedStatementPerConnectionSize);
		try {
			List<Filter> proxyFilters = new ArrayList<Filter>();
			WallFilter statFilter = new WallFilter();
			WallConfig config = new WallConfig();
			config.setMultiStatementAllow(true); // 批量操作
			statFilter.setConfig(config);
			proxyFilters.add(statFilter);
			druidDataSource.setProxyFilters(proxyFilters);
			druidDataSource.setFilters(filters);
		} catch (SQLException e) {
			logger.error("druid configuration initialization filter", e);
		}
		druidDataSource.setConnectionProperties(connectionProperties);
		return druidDataSource;
	}
}
```

##### `properties`

```
#JDBC
# \u6570\u636E\u5E93\u8BBF\u95EE\u914D\u7F6E
# \u4E3B\u6570\u636E\u6E90\uFF0C\u9ED8\u8BA4\u7684
spring.datasource.type=com.alibaba.druid.pool.DruidDataSource
spring.datasource.driverClassName=com.mysql.jdbc.Driver
spring.datasource.url=jdbc:mysql://192.168.1.88:3306/wstro?allowMultiQueries=true&useUnicode=true&characterEncoding=UTF-8
spring.datasource.username=root
spring.datasource.password=root

# \u4E0B\u9762\u4E3A\u8FDE\u63A5\u6C60\u7684\u8865\u5145\u8BBE\u7F6E\uFF0C\u5E94\u7528\u5230\u4E0A\u9762\u6240\u6709\u6570\u636E\u6E90\u4E2D
# \u521D\u59CB\u5316\u5927\u5C0F\uFF0C\u6700\u5C0F\uFF0C\u6700\u5927
spring.datasource.initialSize=5
spring.datasource.minIdle=5
spring.datasource.maxActive=20

# \u914D\u7F6E\u83B7\u53D6\u8FDE\u63A5\u7B49\u5F85\u8D85\u65F6\u7684\u65F6\u95F4
spring.datasource.maxWait=60000

# \u914D\u7F6E\u95F4\u9694\u591A\u4E45\u624D\u8FDB\u884C\u4E00\u6B21\u68C0\u6D4B\uFF0C\u68C0\u6D4B\u9700\u8981\u5173\u95ED\u7684\u7A7A\u95F2\u8FDE\u63A5\uFF0C\u5355\u4F4D\u662F\u6BEB\u79D2
spring.datasource.timeBetweenEvictionRunsMillis=60000

# \u914D\u7F6E\u4E00\u4E2A\u8FDE\u63A5\u5728\u6C60\u4E2D\u6700\u5C0F\u751F\u5B58\u7684\u65F6\u95F4\uFF0C\u5355\u4F4D\u662F\u6BEB\u79D2
spring.datasource.minEvictableIdleTimeMillis=300000
spring.datasource.validationQuery=SELECT 1 FROM DUAL
spring.datasource.testWhileIdle=true
spring.datasource.testOnBorrow=false
spring.datasource.testOnReturn=false

# \u6253\u5F00PSCache\uFF0C\u5E76\u4E14\u6307\u5B9A\u6BCF\u4E2A\u8FDE\u63A5\u4E0APSCache\u7684\u5927\u5C0F
spring.datasource.poolPreparedStatements=true
spring.datasource.maxPoolPreparedStatementPerConnectionSize=20

# \u914D\u7F6E\u76D1\u63A7\u7EDF\u8BA1\u62E6\u622A\u7684filters\uFF0C\u53BB\u6389\u540E\u76D1\u63A7\u754C\u9762sql\u65E0\u6CD5\u7EDF\u8BA1\uFF0C'wall'\u7528\u4E8E\u9632\u706B\u5899
spring.datasource.filters=stat,wall,log4j

# \u901A\u8FC7connectProperties\u5C5E\u6027\u6765\u6253\u5F00mergeSql\u529F\u80FD\uFF1B\u6162SQL\u8BB0\u5F55
spring.datasource.connectionProperties=druid.stat.mergeSql=true;druid.stat.slowSqlMillis=5000;druid.stat.logSlowSql=true;

# \u5408\u5E76\u591A\u4E2ADruidDataSource\u7684\u76D1\u63A7\u6570\u636E
#spring.datasource.useGlobalDataSourceStat=true
```