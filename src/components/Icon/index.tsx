import {NextComponentType, NextPageContext} from 'next';
import Icons from "@images/sprite.svg";
export const Icon:NextComponentType<NextPageContext,
    any,
    {name: string, color: string, size: string }> = ({name, color, size}) => {
    return (
        <svg style={{position: 'absolute'}} width={size} viewBox="0 0 1000 500" fill={color}>
            <use href={Icons + `#${name}`} />
        </svg>
    )
}
