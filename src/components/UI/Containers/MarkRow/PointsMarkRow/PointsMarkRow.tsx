import React, {useCallback, useMemo, useState} from 'react';
import {IMarkRow} from "../MarkRow";
import css from './PointsMarkRow.module.scss';
import {MarkColors} from "./MarkColors";

const PointsMarkRow = (props: IMarkRow) => {
    const [distance, setDistance] = useState<number>(props.distance ?? 0);

    const points = useMemo(() => {
        const oneIs: number = 100 / (distance - props.start!);

        return props.points!.map((point, index) => {
            // Если идет перебор - он добавляется к последнему блоку (Danger)
            const endBonus = index === (props.points?.length! - 1) ? distance - props.distance! : 0;
            const width = oneIs * (point.finish - point.start + endBonus);

            return {
                width: width + '%',
                color: point.color,
                text: point.text
            }
        })
    }, [props.points, props.distance, props.start, distance]);

    const valueStatus = useMemo<{ left: string, color: MarkColors }>(() => {
        const value = +props.value!;
        const sectionWidth = 100 / (distance - props.start!);
        const left = sectionWidth * (value - props.start!);

        const colorPoint = props.points!.filter((point) => {
            if (value >= point.start && value <= point.finish) {
                return true;
            }
        })[0];

        const color = colorPoint ? colorPoint.color : MarkColors.DANGER;


        // Если значение больше чем последней поинт, то дистанция становится значением
        if (!colorPoint && props.points![props.points!.length - 1].finish < props.value!) {
            setDistance(+props.value!)
        } else
        // Если значение если текущая дистанция не равна установленной дистанции - она устанавливается по дефолту
        // Для возвращения дефолтного максимального значения
        if (colorPoint && distance !== props.distance) {
            setDistance(props.distance!)
        }

        return { left: left + '%', color };
    }, [points])

    const getColorClass = useCallback((status: MarkColors) => {
        switch (status) {
            case MarkColors.GOOD:
                return css.good;

            case MarkColors.WARNING:
                return css.warning;

            case MarkColors.DANGER:
                return css.danger;

            default:
                return css.good;
        }
    }, [])

    return (
        <div className={css.container}>
            <div className={css.info}>
                <div className={css.title}>{ props.title }</div>
                <div className={css.value}>{ props.value }</div>
            </div>
            <div className={css.points}>
                <div
                    className={[
                        css.value,
                        getColorClass(valueStatus.color)
                    ].join(' ')}
                    style={{left: valueStatus.left}}
                >{ props.value }</div>
                <div className={css.points}>
                    {
                        points.map((point, index) => {
                            return <div
                                key={index}
                                style={{ width: point.width }}
                                className={[
                                    css.point,
                                    getColorClass(point.color)
                                ].join(' ')}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default PointsMarkRow;