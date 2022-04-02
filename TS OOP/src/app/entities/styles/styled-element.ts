
import { HouseElementStyle } from "./house-element-style";

export class StyledElement {
    private readonly _style: HouseElementStyle;
    constructor(style: HouseElementStyle) {
        this._style = style;
    }
    public get style(): HouseElementStyle {
        return this._style;
    }    
}