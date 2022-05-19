import type { IHouse } from './interfaces';

export class DBConnection {
  private readonly host: string;
  private readonly user: string;
  private readonly pass: string;
  private readonly dbName: string;
  private static dbInstance: DBConnection | null;

  private constructor(host: string, user: string, pass: string, dbName: string) {
    this.host = host;
    this.user = user;
    this.pass = pass;
    this.dbName = dbName;

    DBConnection.openConnection();
  }

  public static getDBInstance(host: string, user: string, pass: string, dbName: string): DBConnection {
    if (!this.dbInstance) {
      this.dbInstance = new DBConnection(host, user, pass, dbName);
    }
    return this.dbInstance;
  }

  public async execute(someData: any): Promise<void> {
    // тут создается кастомной транзакции или что-либо угодно
  }

  public async save(someEntity: IHouse): Promise<void> {
    // тут создается транзакция или что-либо угодно для сохранения сущности
  }

  public closeConnection(): void {
    // тут закрывается connection к источнику данных для выполнения запроса
  }

  private static openConnection(): void {
    // тут открывается connection к источнику данных для выполнения запроса
  }
}
