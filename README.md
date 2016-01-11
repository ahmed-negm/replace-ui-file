# replace-ui-file
Sample plug-in skeleton to extend hivepod functionality to replace any UI file

### Installation
```sh
npm install replace-ui-file
```

### How to use?
```sh
pluginManager.register([
    {
        name: 'replace-ui-file', 
        options:
        {
            '/i18n/literals.en-US.json': '/i18n/literals.es-ES.json' //Replace the English translation with the Spanish translation
        }
    }
]);	
```