// This file is used as an entry point to register all components that can be lazy loaded.

// Replace webpack's public path by one computed by the framework
import { PublicPathUtils } from 'coveo-search-ui';
__webpack_public_path__ = PublicPathUtils.getDynamicPublicPath();

/*
 * If want to include a component in the package without lazy loading, you can export it like the following example:
 *
 * export { HelloWorld } from './ui/HelloWorld';
 */

import { lazyHelloWorld } from './ui/LazyHelloWorld';
lazyHelloWorld();
