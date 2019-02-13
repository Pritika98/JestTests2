describe('first set', () => {
    beforeAll(() => {
        
    })

    beforeEach(() => {

    })

    describe('nested set', () => {
        test('Nested Test method 1', () => {
            expect(true).toBe(true);
        });
    
        test('Nested Test method 2', () => {
            expect(true).toBe(false);
        });
    });

    test.skip('Test method 1', () => {
        expect(true).toBe(false);
    });

    test.skip('Test method 2', () => {
        console.log("booh")
        expect(true).toBe(false);
    });

    test('Test method 3', () => {
        expect(true).toBe(true);
    });

    test('Test method 4', () => {
        expect(true).toBe(false);
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

describe('second set', () => {
    beforeAll(() => {
        
    })

    beforeEach(() => {
        //do something
    })

    test('Test method 1', () => {
        expect(true).toBe(true);
    });

    test('Test method 2', () => {
        expect(true).toBe(false);
    });

    afterEach(() => {
        //do something
    })

    afterAll(() => {
        expect(true).toBe(false);
    })
})