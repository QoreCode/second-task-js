import { HouseElementStyle } from '../styles/house-element-style';
import { StyledElement } from '../styles/styled-element'

export abstract class HouseOpening extends StyledElement {

    private _isOpen: boolean = false;
    private _size: number;

    constructor(style: HouseElementStyle, readonly size: number) {
        super(style);
        this._size = size;
    }

    public get isOpen(): boolean {        
        return this._isOpen;
    }

    public open(): void {
        this._isOpen = true;
    }

    public close(): void {
        this._isOpen = false;
    }
}