export class DBConnection {
  private readonly _host: string;
  private readonly _user: string;
  private readonly _pass: string;
  private readonly _dbName: string;

  public constructor(host: string, user: string, pass: string, dbName: string) {
    this._host = host;
    this._user = user;
    this._pass = pass;
    this._dbName = dbName;

    this.openConnection();
  }

  public async execute(someData: any): Promise<any> {
    // тут создается кастомной транзакции или что-либо угодно
  };

  public async save(someEntity: any): Promise<any> {
    // тут создается транзакция или что-либо угодно для сохранения сущности
  };

  public closeConnection() {
    // тут закрывается connection к источнику данных для выполнения запроса
  }

  private openConnection() {
    // тут открывается connection к источнику данных для выполнения запроса
  }
}
