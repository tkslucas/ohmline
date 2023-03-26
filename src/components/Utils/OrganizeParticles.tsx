import { G } from "../DefaultOptions";
import Vec3 from "vec3";
import { ICanvasRect } from "pixi.js";
import { ParticleContainer } from "@pixi/react";
import math, { exp } from "mathjs";

interface Particle {
    m: number;
    cm: { x: number; y: number };
}

function force21(p1: Particle, p2: Particle) {
    const x1 = Vec3({ x: p1.cm.x, y: p1.cm.y, z: 0 });
    const x2 = Vec3({ x: p2.cm.x, y: p2.cm.y, z: 0 });
    const r21 = x2.subtract(x1);
    const rhat = r21.normalize();
    const F = rhat.scale((-G * p1.m * p2.m) / rhat.norm() ** 2);
    return F;
}

function update(
    elements: Array<Particle>,
    bounds: ICanvasRect
): Array<{ x: number; y: number }> {
    let result = elements.map((element) => element.cm);

    for (const [ind1, element1] of elements.entries()) {
        for (const [ind2, element2] of elements.entries()) {
            if (element1 !== element2) {
                const f21 = force21(element2, element1);

                const x1 = result[ind1].x;
                const y1 = result[ind1].y;
                const x2 = result[ind2].x;
                const y2 = result[ind2].y;
                console.log(bounds.x);
                const fx = G / x2 - G / (1920 - x2);
                const fy = G / y2 - G / (1080 - y2);

                const new_cm2 = {
                    x: 100 * fx + f21.x + x2,

                    y: 100 * fy + f21.y + y2,
                };
                result[ind2] = new_cm2;
            }
        }
    }
    return result;
}

export default update;

//(x2 - x1) * math.exp(-math.abs(x2 - x1)**2 - 1),
//(x2 - x1) * math.exp(-math.abs(x2 - x1)**2 - 1),
