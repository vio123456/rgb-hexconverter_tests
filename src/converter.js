/**
* @param {string} comp
* @returns {string}
 */
export const pad = (comp) => {
    let padded = comp.length === 1 ? `0${comp}` : comp;
    return padded;
};




/**
 * 
 * @param {number} r 
 * @param {number} g 
 * @param {number} b 
 * @returns {string}
 */


export const rgb_to_hex = (r, g, b) => {
    const red = r.toString(16).padStart(2, "0");
    const green = g.toString(16).padStart(2, "0");
    const blue = b.toString(16).padStart(2, "0");
    return `#${red}${green}${blue}`;
}
/**
 * @param {string} hex The HEX color string.
 * @returns {Object} An object with the red, green, and blue components.
 */
export function hex_to_rgb(hex) {
    // Strip off the leading # if it's there
    hex = hex.replace(/^#/, '');
    
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return { r, g, b };
}