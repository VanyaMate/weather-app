import React from 'react';
import DefaultContainer from "../DefaultContainer/DefaultContainer";
import SmallTitle from "../../Titles/SmallTitle/SmallTitle";
import Vertical from "../Vertical/Vertical";
import MarkRow from "../MarkRow/MarkRow";
import css from './ContainerWithTitle.module.scss';
import {IDefaultComponent} from "../../../defaultComponent.interface";

export interface IContainerWithTitleItem<T> {
    b: string,
    a: T | undefined
}

export interface IContainerWithTitle<T> extends IDefaultComponent {
    title: string,
    rows: IContainerWithTitleItem<T>[]
}

const ContainerWithTitle = (props: IContainerWithTitle<string | number>) => {
    return (
        <DefaultContainer>
            <SmallTitle>{ props.title }</SmallTitle>
            <Vertical medium>
                {props.rows.map((item) => <MarkRow key={item.b} before={item.b} after={item.a ?? '-'}/>)}
            </Vertical>
        </DefaultContainer>
    );
};

export default ContainerWithTitle;