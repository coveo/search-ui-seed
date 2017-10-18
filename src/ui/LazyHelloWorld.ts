import {
  IComponentDefinition,
  LazyInitialization
} from 'coveo-search-ui';

export function lazyHelloWorld(): void {
  // Registers a new lazy component with the name "HelloWorld"
  LazyInitialization.registerLazyComponent('HelloWorld', () => {
      return new Promise((resolve, reject) => {
          // Used by webpack to create a "split point" when including the "HelloWorld" component.
          require.ensure(['./HelloWorld'], () => {
              // Load the component synchronously.
              const module: any = require<IComponentDefinition>('./HelloWorld.ts');
              // Return the component's class.
              resolve(module['HelloWorld']);
          }, LazyInitialization.buildErrorCallback('HelloWorld', resolve), 'HelloWorld');
      });
  });
}
