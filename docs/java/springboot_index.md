---
description: SpringBoot设置默认首页
---

# SpringBoot设置默认首页

```java
@Configuration
public class DefaultView extends WebMvcConfigurerAdapter{

	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		super.addViewControllers(registry);
		//主页
		registry.addViewController("/").setViewName("forward:/index");
	} 

}
```
