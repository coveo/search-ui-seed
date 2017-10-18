type RequireEnsureCallback = (require?: <T>(path: string) => {[key: string]: T}) => void;
type RequireErrorCallback = (error?: Error) => void;

declare var require: {
  <T>(path: string): {[key: string]: T};
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure(paths: string[], callback: RequireEnsureCallback, errorCallback: RequireErrorCallback, chunkName?: string): void;
};

declare var __webpack_public_path__: string;