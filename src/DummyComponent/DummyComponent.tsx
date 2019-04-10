import * as React from 'react';

interface DummyComponentInterface {
    id: string;
}

export default (props: DummyComponentInterface) => <div>This is a dummy component #{props.id}</div>