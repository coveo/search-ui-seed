import {
  Component,
  ComponentOptions,
  IComponentBindings,
  $$,
  QueryEvents,
  IBuildingQueryEventArgs,
  Initialization
} from 'coveo-search-ui';

export interface IHelloWorldOptions {
  dummyOptionText: string;
  dummyOptionQuery: string;
}

export class HelloWorld extends Component {
  static ID = 'HelloWorld';

  static options: IHelloWorldOptions = {
    dummyOptionText: ComponentOptions.buildStringOption({
      defaultValue: 'Hello world'
    }),
    dummyOptionQuery: ComponentOptions.buildStringOption({
      defaultValue: '@uri'
    })
  };

  constructor(public element: HTMLElement, public options: IHelloWorldOptions, public bindings: IComponentBindings) {
    super(element, HelloWorld.ID, bindings);
    this.options = ComponentOptions.initComponentOptions(element, HelloWorld, options);

    $$(this.element).text(this.options.dummyOptionText);

    this.bind.onRootElement(QueryEvents.buildingQuery, (args: IBuildingQueryEventArgs) => this.handleBuildingQuery(args));
  }

  private handleBuildingQuery(args: IBuildingQueryEventArgs) {
    args.queryBuilder.advancedExpression.add(this.options.dummyOptionQuery);
  }
}

Initialization.registerAutoCreateComponent(HelloWorld);
