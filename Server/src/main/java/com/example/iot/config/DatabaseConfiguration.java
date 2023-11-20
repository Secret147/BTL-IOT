//package com.example.webbanquanao.config;
//
//
//import com.zaxxer.hikari.HikariConfig;
//import com.zaxxer.hikari.HikariDataSource;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.context.annotation.PropertySource;
//import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
//import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
//import org.springframework.jdbc.datasource.DriverManagerDataSource;
//import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
//import org.springframework.transaction.annotation.EnableTransactionManagement;
//
//import javax.sql.DataSource;
//import java.util.Properties;
//
//@Configuration
//
//@EnableTransactionManagement
//public class DatabaseConfiguration {
//
//    @Value("${spring.datasource.username}")
//    private String username;
//
//    @Value("$spring.datasource.password")
//    private String password;
//
//    @Value("${spring.datasource.ClassName}")
//    private String driverClassName;
//
//    @Value("${spring.datasource.url}")
//    private String url;
//
////    @Value("${spring.datasource.type}")
////    private String type;
////
////    @Value("${spring.datasource.hiKari.poolName}")
////    private String poolName;
////
////    @Value("${spring.datasource.hikari.auto-commit}")
////    private Boolean autoCommit;
////
////    @Value("${spring.datasource.hikari.data-source-properties.cachePrepStmts}")
////    private String cachePrepStmts;
////
////    @Value("${spring.datasource.hikari.data-source-properties.prepStmtCacheSize}")
////    private String prepStmtCacheSize;
////
////    @Value("${spring.datasource.hikari.data-source-properties.prepStmtCacheSqlLimit}")
////    private String prepStmtCacheSqlLimit;
////
////    @Value("${spring.datasource.hikari.data-source-properties.userServerPrepStmts}")
////    private String userServerPrepStmts;
////
//    @Bean
//    public DataSource getDataSource(){
//        HikariConfig config = new HikariConfig();
//
//        config.setDataSourceClassName(driverClassName);
//        config.setJdbcUrl(url);
//        config.setUsername(username);
//        config.setPassword(password);
//
//
//        return new HikariDataSource(config);
//    }
////
////    @Bean
////    public NamedParameterJdbcTemplate namedParameterJdbcTemplate(){
////        return new NamedParameterJdbcTemplate(getDataSource());
////    }
//}
package com.example.iot.config;

