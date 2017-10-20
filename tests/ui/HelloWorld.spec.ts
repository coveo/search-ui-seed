import { HelloWorld, IHelloWorldOptions } from '../../src/ui/HelloWorld';
import { Mock, Fake, Simulate } from 'coveo-search-ui-tests';
import { $$, InitializationEvents, QueryEvents, IBuildingQueryEventArgs } from 'coveo-search-ui';

describe('HelloWorld', () => {
    let helloWorld: Mock.IBasicComponentSetup<HelloWorld>;

    beforeEach(() => {
        helloWorld = Mock.basicComponentSetup<HelloWorld>(HelloWorld);
    });

    afterEach(() => {
        helloWorld = null;
    });

    it('should change the text of the element', () => {
        expect(helloWorld.cmp.element.innerText).toBe('Hello world');
    });

    it('should add a dummy advanced expression when executing a new query', () => {
        const result = Simulate.query(helloWorld.env);

        expect(result.queryBuilder.advancedExpression.build()).toBe('@uri');
    });

    describe('when configuring the dummyOptionQuery option', () => {
        const someQuery = '@syssource==mysource';
        beforeEach(() => {
            helloWorld = Mock.optionsComponentSetup<HelloWorld, IHelloWorldOptions>(HelloWorld, {
                dummyOptionQuery: someQuery,
                dummyOptionText: 'Hello world'
            });
        });

        it('should add the value in the advanced expression when executing a new query', () => {
            const result = Simulate.query(helloWorld.env);

            expect(result.queryBuilder.advancedExpression.build()).toBe(someQuery);
        });
    });

    describe('when configuring the dummyOptionText option', () => {
        const someText = 'Heeyyy world';
        beforeEach(() => {
            helloWorld = Mock.optionsComponentSetup<HelloWorld, IHelloWorldOptions>(HelloWorld, {
                dummyOptionQuery: '@uri',
                dummyOptionText: someText
            });
        });

        it('should add the value in the advanced expression when executing a new query', () => {
            expect(helloWorld.cmp.element.innerText).toBe(someText);
        });
    });
});
