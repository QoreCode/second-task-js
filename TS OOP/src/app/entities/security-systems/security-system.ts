import { SecuritySystemStatus } from "./security-system-status";

export abstract class SecuritySystem {
  protected status: SecuritySystemStatus = SecuritySystemStatus.Ok;
  private _isEnabled: boolean = false;

  protected abstract enableInt(): void;
  protected abstract disableInt(): void;

  protected abstract performDiagnosticsInt(): void;
  protected abstract pushStatusNotification(): void;

  public enable(): void {
    this.enableInt();
    this._isEnabled = true;
  }

  public disable(): void {
    this.disableInt();
    this._isEnabled = false;
  }

  public performDiagnostics(): void {
    this.performDiagnosticsInt();
    this.pushStatusNotification();
  }
}


