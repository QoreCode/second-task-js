import { DBConnection } from "./db-connection";

export class DBConnectionProvider {

    private readonly _host: string;
    private readonly _user: string;
    private readonly _pass: string;
    private readonly _dbName: string;

    private readonly _connection: DBConnection;

    private static _instance?: DBConnectionProvider;

    private constructor() {
        // TODO: get this from env
        this._host = 'localhost';
        this._user = 'root';
        this._pass = '1111';
        this._dbName = 'prod';

        // TODO: make connection pool
        this._connection = new DBConnection(this._host, this._user, this._pass, this._dbName);
    }

    public static get instance(): DBConnectionProvider {
        if (!this._instance) {
            this._instance = new DBConnectionProvider;
        }
        return this._instance;
    }

    public static getConnection(): DBConnection {
        return this.instance._connection;
    }
}