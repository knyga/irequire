iRequire
========================
Extention of require.js with irequire function to include dependencies based on function's argument names.


Example
-----------
Imagine that we have config:

```javascript
    require.config({
        baseUrl: './tests/src',
        aliases: {
            'x': 'numbers'
        }
    });
```

Or just:
```javascript
    require.config({
        baseUrl: './tests/src',
        paths: {
            'x': 'numbers'
        }
    });
```

Now we can call x as argument and get needed dependency.

```javascript
idefine(function(x) {
    
})''
```

Also, you can use local alises.
```javascript
idefine({
    'y': 'numbers'
},function(y) {
    
})''
```

License
-------

iRequire is licensed under the MIT license.

Oleksandr Knyga <oleksandrknyga@gmail.com>
