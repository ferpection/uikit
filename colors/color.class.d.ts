export declare class Color {
    static fromHex(hexColor: string): Color;
    private red;
    private green;
    private blue;
    private alfa;
    readonly [Symbol.toStringTag]: string;
    constructor(r: number, g: number, b: number, a?: number);
    toHex(): string;
    toRGB(): string;
    toRGBA(alfa?: number): string;
    shade(rate?: number): Color;
    toString(): string;
}
