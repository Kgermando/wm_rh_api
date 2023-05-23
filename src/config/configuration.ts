export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      db: process.env.DB_DATABASE,
      // In order to ensure we can connect to the DigitalOcean managed// database, we need to ensure that we include the generated Root// CA for the database.ca: process.env.DB_CA_CERT,
    },
  }
);