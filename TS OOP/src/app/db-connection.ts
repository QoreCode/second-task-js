class DBConnection {
  private readonly host: string;
  private readonly user: string;
  private readonly pass: string;
  private readonly dbName: string;

  public constructor(host: string, user: string, pass: string, dbName: string) {
    this.host = host;
    this.user = user;
    this.pass = pass;
    this.dbName = dbName;

    this.openConnection();
  }

  public async execute(someData: any): Promise<any> {
    // тут создается кастомной транзакции или что-либо угодно
  };

  public async save(someEntity: any): Promise<any> {
    // тут создается транзакция или что-либо угодно для сохранения сущности
  };

  public closeConnection(): void{
    // тут закрывается connection к источнику данных для выполнения запроса
  }

  private openConnection(): void{
    // тут открывается connection к источнику данных для выполнения запроса
  }
}

export default new DBConnection('localhost', 'root', '1111', 'prod'); 
