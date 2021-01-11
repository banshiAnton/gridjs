import { OneDArray, TColumn } from './types';
import Base from './base';
import { UserConfig } from './config';
import Tabular from './tabular';
import { RefObject } from 'preact';
declare class Header extends Base {
    private _columns;
    constructor();
    get columns(): OneDArray<TColumn>;
    set columns(columns: OneDArray<TColumn>);
    /**
     * Tries to automatically adjust the width of columns based on:
     *    - Header cell content
     *    - Cell content of the first row
     *    - Cell content of the last row
     *
     * @param container
     * @param tempRef
     * @param data
     * @param autoWidth
     */
    adjustWidth(container: Element, tempRef: RefObject<HTMLDivElement>, data: Tabular, autoWidth?: boolean): this;
    private setSort;
    private setFixedHeader;
    private setID;
    static fromUserConfig(userConfig: UserConfig): Header | null;
    static fromHTMLTable(element: HTMLElement): Header;
}
export default Header;
