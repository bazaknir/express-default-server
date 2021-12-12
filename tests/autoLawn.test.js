// const autoLawn = require("../services/autoLawn.service");
import AutoLawn from '../services/autoLawn.service';

describe("AutoLawn", () => {
    const autoLawn = new AutoLawn();

    // ********************************************* rotate ***************************************************//

    test('Should rotate be a function', () => {
        expect(typeof autoLawn.rotate).toBe("function");
    });

    test('Should rotate from N to W', () => {
        const status = autoLawn.rotate("L", "N");
        expect(status).toBe("W");
    })

    test('Should rotate from N to E', () => {
        const status = autoLawn.rotate("R", "N");
        expect(status).toBe("E");
    })

    test('Should rotate from S to W', () => {
        const status = autoLawn.rotate("R", "S");
        expect(status).toBe("W");
    })

});

