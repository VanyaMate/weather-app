import React from 'react';
import {IDefaultComponent} from "../../../defaultComponent.interface";
import DefaultMarkRow from "./DefaultMarkRow/DefaultMarkRow";
import PointsMarkRow from "./PointsMarkRow/PointsMarkRow";
import {MarkColors} from "./PointsMarkRow/MarkColors";

export interface IMarkRowPoint {
    start: number,
    finish: number,
    color: MarkColors,
    text?: string
}

export interface IMarkRow extends IDefaultComponent {
    title: string,
    value: string | number | undefined,
    points?: IMarkRowPoint[],
    distance?: number,
    start?: number,
}

const MarkRow = (props: IMarkRow) => {
    return (
        props.points && props.value
            ? <PointsMarkRow {...props}/>
            : <DefaultMarkRow {...props}/>
    );
};

export default MarkRow;