import { h } from 'preact';
import Cell from '../../cell';
import { BaseComponent, BaseProps } from '../base';
import { TColumn } from '../../types';
import Row from '../../row';
export interface TDProps extends BaseProps {
    cell: Cell;
    row?: Row;
    column?: TColumn;
    colSpan?: number;
    className?: string;
    role?: string;
}
export declare class TD extends BaseComponent<TDProps, {}> {
    private content;
    private handleClick;
    private getCustomAttributes;
    render(): h.JSX.Element;
}
