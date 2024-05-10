import TechStack from "../models/TechStack";

const languages = [
    new TechStack("Javascript", 5, "js.png"),
    new TechStack("Typescript", 5, "typescript.png"),
    new TechStack("C#", 4, "c-sharp.png"),
    new TechStack("Java", 1, "java.png"),
    new TechStack("Dart", 3, "dart.png"),
    new TechStack("Python", 2, "python.png"),
    new TechStack("Golang", 2, "golang.png", "img_contain")
];

const environments = [
    new TechStack("Node.js", 5, "node.webp"),
];

const frameworks = [
    new TechStack("Express.js", 5, "express.png"),
    new TechStack("Flutter", 3, "flutter.png"),
    new TechStack("Stencil.js", 4, "stencil.png"),
    new TechStack("React.js", 4, "react.png"),
    new TechStack("Entity Framework", 3, "efcore.png"),
    new TechStack("Next.js", 3, "nextjs.png"),
    new TechStack("NestJs", 3, "nestjs.png"),
    new TechStack("Karate Framework", 5, "karate.png"),
    new TechStack("Selenium", 2, "selenium.png"),
    new TechStack("Svelte", 4, "svelte.png"),
    new TechStack("ASP.NET Core", 4, "netcore.png"),
    new TechStack("Vue.js", 3, "vuejs.png"),
    new TechStack("Material Icon", 5, "mui.png", "img_contain")
];

const databases = [
    new TechStack("MongoDB", 4, "mongodb.png"),
    new TechStack("SQL Server", 5, "sql-server.png"),
    new TechStack("MySQL", 3, "mysql.png"),
    new TechStack("PostgreSQL", 3, "postgre.png"),
    new TechStack("Druid", 4, "druid.png"),
    new TechStack("redis", 5, "redis.png")
];

const others = [
    new TechStack("Docker", 4, "docker.png"),
    new TechStack("Apache Kafka", 3, "kafka.png"),
    new TechStack("Rabbit MQ", 3, "rabbitmq.png"),
    new TechStack("Selenium Grid", 3, "selenium_grid.png"),
    new TechStack("Superset", 4, "superset.png"),
    new TechStack("Github", 5, "github.png")
];

export default {
    languages,
    environments,
    frameworks,
    databases,
    others
};