import useBasename from 'history/lib/useBasename';

export default function withExampleBasename(history) {
    return useBasename(() => history)({
        basename: `${window.location.origin}/`,
    });
}
