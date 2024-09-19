module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS", [
      "eBYdMoKiMBvLRLroyaWarQ==,LPEEE6mQ+hTAvrk+FJE65Q==",
      "+SyIxxmHI126UJAi0ljv2w==,5yvMA7FBnH2f7xETLo9YfA==",
    ]),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
