import { Style } from './Style';
import { StyledElement } from './StyledElement'

export abstract class HouseOpening implements StyledElement {

    private _isOpen = false;

    constructor(readonly style: Style, readonly size: number) {
    }

    public isOpen(): boolean {        
        return this._isOpen;
    }

    public open(): void {
        this._isOpen = true;
    }

    public close(): void {
        this._isOpen = false;
    }
}