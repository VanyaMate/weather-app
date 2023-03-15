import React, {useCallback, useMemo} from 'react';
import {IMarkRow} from "../MarkRow";
import css from './PointsMarkRow.module.scss';
import {MarkColors} from "./MarkColors";

const PointsMarkRow = (props: IMarkRow) => {
    const points = useMemo(() => {
        const oneIs: number = 100 / (props.distance! - props.start!);

        return props.points!.map((point) => {
            return {
                width: oneIs * (point.finish - point.start) + '%',
                color: point.color,
                text: point.text
            }
        })
    }, [props.points, props.distance, props.start]);

    const valueStatus = useMemo<{ left: string, color: MarkColors }>(() => {
        const value = +props.value!;
        const sectionWidth = 100 / (props.distance! - props.start!);
        const left = sectionWidth * (value - props.start!);

        const color = props.points!.filter((point) => {
            if (value >= point.start && value <= point.finish) {
                return true;
            }
        })[0].color;

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