import React from 'react';
import { SvgXml } from 'react-native-svg';
// @ts-ignore
import SearchIcon from './icons/search.svg';
// @ts-ignore
import FilterIcon from './icons/filter.svg';

interface Props {
    name: string;
    width: number;
    height: number;
    fill?: string;
    stroke?: string;
}

function mapIconNameToSvgFile(name: string) {
    switch (name) {
        case 'search':
            return SearchIcon;
        case 'filter':
            return FilterIcon;
        default:
            return SearchIcon;
    }
}

const Icon: React.FC<Props> = ({ name, width, height, fill = "transparent", stroke = "black" }) => {
    const svgXml = mapIconNameToSvgFile(name);

    return <SvgXml xml={svgXml} width={width} height={height} fill={fill} stroke={stroke} />;
};

export default Icon;
