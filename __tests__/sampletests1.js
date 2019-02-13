describe('first set', () => {
    beforeAll(() => {
        
    })

    beforeEach(() => {
        console.log("before");
    })

    test('Test method 1', () => {
        console.log("bleh");
        expect(true).toBe(true);
    });

    test('Test method 2', () => {
        console.log("bleh");
        expect(false).toBe(false);
    });

    test('Test method 3', () => {
        console.log("bleh");
        expect(true).toBe(false);
    });

    test('Test method 4', () => {
        expect(false).toBe(false);
    });

    test('Test method 5', () => {
        expect(true).toBe(false);
    });

    afterEach(() => {
        //do something
    })

    afterAll(() => {
        //do something
    })
})
