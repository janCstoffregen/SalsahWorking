// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `..angular-cli.json`.

export const environment = {
    type: 'developer',
    production: false,
    media: 'http://130.60.24.65:1024/knora',
    api: 'http://130.60.24.65:3333/v1'
};
