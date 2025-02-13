import chalk from 'chalk';

export const errorMiddleware = (err, req, res, next) => {
  console.debug(chalk.bold(chalk.redBright(`${err.name} ${req.path}`)));
  console.debug(err.message, err.stack);
  res.status(500).json({ error: 'Server Error' });
};
