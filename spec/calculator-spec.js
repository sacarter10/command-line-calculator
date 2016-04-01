describe('calculator', function() {
	const parser = require("../arithmetic-parser.js");

  describe('parse()', function() {
    it('should add 2 numbers together', function() {
    	expect(parser.parse("1 + 5")).toEqual(6);
      expect(parser.parse("-8 + 15")).toEqual(7);
    });

    it('should subtract 2 numbers', function() {
    	expect(parser.parse("1 - 5")).toEqual(-4);
      expect(parser.parse("900 - 3")).toEqual(897);
    });

    it('should multiply 2 numbers together', function() {
    	expect(parser.parse("9 * 9")).toEqual(81);
      expect(parser.parse("2 * -1")).toEqual(-2);
    });

    it('should divide 2 numbers', function() {
    	expect(parser.parse("88 / 8")).toEqual(11);
      expect(parser.parse("-8 / 2")).toEqual(-4);
    });

    it('should evaluate parenthesis first', function () {
    	expect(parser.parse("2 * (6 + 3)")).toEqual(18);
    })

    it('should multiply or divide before addition or subtraction', function () {
    	expect(parser.parse("4 + 2 * 3")).toEqual(10);
    	expect(parser.parse("4 - 2 * 3")).toEqual(-2);
    	expect(parser.parse("4 + 6 / 3")).toEqual(6);
    	expect(parser.parse("4 - 6 / 3")).toEqual(2);
    })

    it('should multiply or divide in the order they appear', function () {
    	expect(parser.parse("15 / 3 * 4")).toEqual(20);
    	expect(parser.parse("15 * 3 / 4")).toEqual(11.25);
    })

    it('should evaluate if statements with true or false as the condition', function () {
    	expect(parser.parse("if true { 6 }")).toEqual(6);
    	expect(parser.parse("if false { 6 }")).toEqual(null);
    })

    it('should evaluate if statements with a comparison as the condition', function () {
    	expect(parser.parse("if (5 < 6) { 2 + 2 }")).toEqual(4);
    	expect(parser.parse("if (9 > 2) { 4 }")).toEqual(4);
    	expect(parser.parse("if (3 == 3) { 4 }")).toEqual(4);

    	expect(parser.parse("if (5 > 6) { 2 + 2 }")).toEqual(null);
    	expect(parser.parse("if (9 < 2) { 4 }")).toEqual(null);
    	expect(parser.parse("if (3 == 9) { 4 }")).toEqual(null);
    })
  });
});