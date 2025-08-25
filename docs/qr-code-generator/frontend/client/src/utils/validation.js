// This file contains utility functions for validating user input.

export const validateURL = (url) => {
    const urlPattern = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/[^\s]*)?$/i;
    return urlPattern.test(url);
};

export const validateQRCodeOptions = (options) => {
    if (!options) return true; // No options provided, valid by default

    const { pixelsPerModule, quietZoneSize, darkColor, lightColor } = options;

    if (pixelsPerModule && (pixelsPerModule < 1 || pixelsPerModule > 100)) {
        return false;
    }

    if (quietZoneSize && (quietZoneSize < 0 || quietZoneSize > 10)) {
        return false;
    }

    if (darkColor && !/^#[0-9A-F]{6}$/i.test(darkColor)) {
        return false;
    }

    if (lightColor && !/^#[0-9A-F]{6}$/i.test(lightColor)) {
        return false;
    }

    return true;
};