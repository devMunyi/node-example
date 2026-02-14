module.exports = {
  apps: [
    {
      name: "express-app",
      script: "./dist/index.js",
      instances: "max",
      exec_mode: "cluster",
      watch: false,
      max_memory_restart: "500M",
      // Remove these lines - let PM2 use default log location
      // error_file: "./logs/err.log",
      // out_file: "./logs/out.log",
      // log_file: "./logs/combined.log",
      time: true,
      merge_logs: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: "10s",
      env: {
        NODE_ENV: "development",
        PORT: 8000
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 8000
      }
    },
  ],
};