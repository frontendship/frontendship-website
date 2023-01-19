## Pagination

### Props

| Name          | Type       | Default | Description                                                |
| ------------- | ---------- | ------- | ---------------------------------------------------------- |
| `current`     | `number`   | `-`     | The current page number.                                   |
| `total`       | `number`   | `-`     | The total number of pages.                                 |
| `limit`       | `number`   | `10`    | The limit number of pages.                                 |
| `onPageClick` | `function` | `-`     | Callback function that is called when the page is changed. |

### Usage

## Example One

```tsx
import { Pagination } from '@/components/Pagination/Pagination';

const MyBestComponent = () => {
  const onPageChange = (page: number) => {
    console.log(page);
  };
  return (
    <div>
      <Pagination
        current={1}
        total={10}
        limit={10}
        onPageClick={page => onPageChange(page)}
      />
    </div>
  );
};

export default MyBestComponent;
```

## Example Two

```tsx
import { Pagination } from '@/components/Pagination/Pagination';

const MyBestComponent = () => {
  const onPageChange = (page: number) => {
    console.log(page);
  };
  return (
    <div>
      <Pagination
        current={2}
        total={10}
        limit={41}
        onPageClick={page => onPageChange(page)}
      />
    </div>
  );
};

export default MyBestComponent;
```
