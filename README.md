# never-catch

* No boilerplate
* Type support
* Auto type infer

```typescript
const divideTenBy = (a: number) => {
    if (a === 0) {
        return err('divide by zero');
    } else {
        return ok(10 / a);
    }
};

const result = divideTenBy(5);
if (result.ok) {
    console.log(result.value);// OK
} else {
    console.log(result.error);// Ok
    console.log(result.value);// TS2339: Property 'value' does not exist on type 'Err '.
}
```

Email: mnafisiasl@gmail.com  