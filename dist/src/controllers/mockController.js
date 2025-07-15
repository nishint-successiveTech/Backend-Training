"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSeedData = exports.getMockList = void 0;
const mockData_1 = require("../mockData");
const getMockList = (req, res) => {
    res.json(mockData_1.mockArr);
};
exports.getMockList = getMockList;
const getSeedData = (req, res) => {
    res.json({
        data: mockData_1.mockArr,
    });
};
exports.getSeedData = getSeedData;
//# sourceMappingURL=mockController.js.map