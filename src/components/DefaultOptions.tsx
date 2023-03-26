import { LineStyle } from "pixi.js";

export const stage_options = {
    width: 1920,
    height: 1080,
    options: {
        resolution: window.devicePixelRatio || 1,
        autoDensity: true,
        backgroundColor: 0x6495ed,
        antialias: true,
    },
};

const new_linestyle_options = () => {
    const linestyle_options = new LineStyle();
    linestyle_options.color = 0;
    linestyle_options.width = 6;
    linestyle_options.alpha = 1;
    linestyle_options.visible = true;
    return linestyle_options;
};

export const linestyle_options = new_linestyle_options();

export const color_options = 0;
