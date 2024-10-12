import { Sequelize } from "sequelize";

declare module "../config/database" {
  const sequelize: Sequelize;
  export default sequelize;
}
