export const DateDisplay = () => {
    const today = new Date().toLocaleDateString();
    return <span>{today}</span>;
};
