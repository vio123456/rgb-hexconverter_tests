import express from 'express';
import { after, before, describe, it } from 'mocha';
import { expect } from 'chai';
import fetch from 'node-fetch'; // make sure to import fetch if it's not globally available
import routes from '../src/routes.js';

const API_URL = 'http://localhost:3000/api/v1';
const app = express();

let server;

describe('Integration test', () => {
    before((done) => {
        app.use('/api/v1', routes);
        server = app.listen(3000, () => {
            console.log('Server is running at ' + API_URL);
            done(); // Ensure to call done to signal async completion
        });
    });

    it('should return a status code of 200 for the base route', async () => {
        const response = await fetch(API_URL + '/');
        expect(response.status).to.equal(200);
        const text = await response.text();
        expect(text).to.equal('Welcome'); // assuming the welcome route returns "Welcome"
    });

    it('should convert RGB to HEX', async () => {
        const response = await fetch(`${API_URL}/rgb-to-hex?red=255&green=136&blue=0`);
        expect(response.status).to.equal(200);
        const text = await response.text();
        expect(text).to.equal('#ff8800'); // assuming the rgb-to-hex route returns the correct HEX
    });
    it('should convert HEX to RGB', async () => {
        const hex = 'ff8800'; // Ensure this is a valid HEX value
        const response = await fetch(`${API_URL}/hex-to-rgb?hex=${hex}`);
        expect(response.status).to.equal(200);
        const json = await response.json();
        // Update the expected result based on your `hex_to_rgb` function's output
        expect(json).to.deep.equal({ r: 255, g: 136, b: 0 });
    });

    after((done) => {
        server.close(done);
    });


});
