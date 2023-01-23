import { MutableRefObject } from "react";

export interface IBlocks {
    [key: string]: MutableRefObject<null | HTMLElement>;
}