import { Router } from 'express';
import { rgb_to_hex } from './converter.js';
import { hex_to_rgb } from './converter.js';
const routes = Router();

routes.get("/", (req, res) => res.status(200).send("Welcome"));

routes.get("/rgb-to-hex", (req, res) => {
    const RED = parseInt(req.query.red);
    const GREEN = parseInt(req.query.green);
    const BLUE = parseInt(req.query.blue);
    const HEX = rgb_to_hex(RED, GREEN, BLUE);
    res.status(200).send(HEX);
});

routes.get("/hex-to-rgb", (req, res) => {
    const { r, g, b } = hex_to_rgb(req.query.hex);
    res.status(200).json({ r, g, b });
    
    
});

export default routes;
