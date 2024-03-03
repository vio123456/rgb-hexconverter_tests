import { describe, it } from 'mocha';
import { expect } from 'chai';
import { rgb_to_hex } from '../src/converter.js';
import { hex_to_rgb } from '../src/converter.js';

describe("RGB-to-HEX Converter", () => {
    it("is a function", () => {
        expect(rgb_to_hex).to.be.an('function');
    });

    it("should return a string", () => {
        expect(rgb_to_hex(0, 0, 0)).to.be.a('string');
    });

    it("first character is hashtag", () => {
        expect(rgb_to_hex(0, 0, 0)[0]).to.equal("#");
    });

    it("should convert RED value correctly", () => {
        expect(rgb_to_hex(0, 0, 0).substring(0, 3)).to.equal("#00");
        expect(rgb_to_hex(255, 0, 0).substring(0, 3)).to.equal("#ff");
        expect(rgb_to_hex(136, 0, 0).substring(0, 3)).to.not.equal("#00");
    });

    it("should convert GREEN value correctly", () => {
        expect(rgb_to_hex(0, 0, 0).substring(3, 5)).to.equal("00");
        expect(rgb_to_hex(0, 255, 0).substring(3, 5)).to.equal("ff");
        expect(rgb_to_hex(0, 136, 0).substring(3, 5)).to.equal("88");
        expect(rgb_to_hex(0, 136, 0).substring(3, 5)).to.not.equal("00");
    });

    it("should convert BLUE value correctly", () => {
        expect(rgb_to_hex(0, 0, 0).substring(5, 7)).to.equal("00");
        expect(rgb_to_hex(0, 0, 255).substring(5, 7)).to.equal("ff");
        expect(rgb_to_hex(0, 0, 136).substring(5, 7)).to.equal("88");
        expect(rgb_to_hex(0, 0, 136).substring(5, 7)).to.not.equal("00");
    });

    it("should convert RGB to HEX correctly", () => {
        expect(rgb_to_hex(0, 0, 0)).to.equal("#000000");
        expect(rgb_to_hex(255, 255, 255)).to.equal("#ffffff");
        expect(rgb_to_hex(255, 136, 0)).to.equal("#ff8800");
        expect(rgb_to_hex(255, 136, 0)).to.not.equal("#00ff00");
        // expect(rgb_to_hex(1000000,136,0)).to.not.equal("#00ff00");
    });
});
describe("HEX-to-RGB Converter", () => {
    it("is a function", () => {
        expect(hex_to_rgb).to.be.a('function');
    });

    it("should return an object", () => {
        expect(hex_to_rgb("#000000")).to.be.an('object');
    });

    it("should correctly convert HEX to RGB", () => {
        expect(hex_to_rgb("#000000")).to.deep.equal({ r: 0, g: 0, b: 0 });
        expect(hex_to_rgb("#ffffff")).to.deep.equal({ r: 255, g: 255, b: 255 });
        expect(hex_to_rgb("#ff8800")).to.deep.equal({ r: 255, g: 136, b: 0 });
    });

});